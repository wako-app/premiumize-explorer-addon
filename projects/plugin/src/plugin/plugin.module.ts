import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';
import { PluginService } from './services/plugin.service';

import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { PluginBaseModule, WakoProviders } from '@wako-app/mobile-sdk';
import { ExplorerService } from './services/explorer.service';
import { SettingsService } from './services/settings.service';
import { SettingsModalComponent } from './settings-modal/settings-modal.component';
import { SettingsComponent } from './settings/settings.component';

const components = [SettingsComponent, SettingsModalComponent];

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule.forRoot(), TranslateModule.forRoot()],
  declarations: [...components],
  providers: [PluginService, ...WakoProviders, SettingsService, ExplorerService], // Add your services here. Do not use provideIn: 'root' in your services
})
export class PluginModule extends PluginBaseModule {
  static override pluginService = PluginService;
  static override settingsComponent = SettingsComponent;
}
