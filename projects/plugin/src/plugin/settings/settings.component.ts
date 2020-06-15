import { Component, NgZone, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { BrowserService, WakoToastService } from '@wako-app/mobile-sdk';
import { Settings, SettingsService } from '../services/settings.service';
import { PremiumizeAccountInfoForm } from '../services/premiumize/forms/account/premiumize-account-info.form';

@Component({
  selector: 'wk-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  settings: Settings = null;

  isLoading = false;

  isAuth = false;

  constructor(
    private settingsService: SettingsService,
    private alertController: AlertController,
    private translateService: TranslateService,
    private toastService: WakoToastService,
    private ngZone: NgZone
  ) {}

  async ngOnInit() {
    this.settings = await this.settingsService.get();

    this.isAuth = !!this.settings.apiKey;
  }

  async logout() {
    const settings = await this.settingsService.get();
    settings.apiKey = null;
    await this.settingsService.set(settings);

    this.ngOnInit();
  }

  async login() {
    const alert = await this.alertController.create({
      header: 'API-Key / PIN',
      inputs: [
        {
          name: 'apikey',
          type: 'text',
          placeholder: 'API-Key / PIN',
          value: ''
        }
      ],
      buttons: [
        {
          text: this.translateService.instant('settings.cancelButton'),
          role: 'cancel',
          cssClass: 'secondary'
        },
        {
          text: 'Ok',
          handler: (data) => {
            this.ngZone.run(async () => {
              this.isLoading = true;
              try {
                const res = await PremiumizeAccountInfoForm.submit(data.apikey).toPromise();
                if (res.status === 'error') {
                  this.toastService.simpleMessage('settings.invalidApiKey');
                  return;
                }

                this.settings.apiKey = data.apikey;

                await this.setSettings();

                this.isAuth = !!this.settings.apiKey;
              } catch (e) {
                this.toastService.simpleMessage(e.toString());
              } finally {
                this.isLoading = false;
              }
            });
          }
        }
      ]
    });

    alert.present();
  }

  openPremiumize() {
    BrowserService.open('https://www.premiumize.me/ref/922027689');
  }

  async setSettings() {
    return await this.settingsService.set(this.settings);
  }
}
