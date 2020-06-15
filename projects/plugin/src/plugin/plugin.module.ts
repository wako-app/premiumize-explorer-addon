import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { PluginService } from './services/plugin.service';

import { PluginBaseModule, WakoProviders } from '@wako-app/mobile-sdk';
import { SettingsComponent } from './settings/settings.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { SettingsService } from './services/settings.service';
import { ExplorerService } from './services/explorer.service';
import { SettingsModalComponent } from './settings-modal/settings-modal.component';

const components = [SettingsComponent, SettingsModalComponent];

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule.forRoot(), TranslateModule.forRoot()],
  declarations: [...components],
  providers: [PluginService, ...WakoProviders, SettingsService, ExplorerService] // Add your services here. Do not use provideIn: 'root' in your services
})
export class PluginModule extends PluginBaseModule {
  static pluginService = PluginService;
  static settingsComponent = SettingsComponent;
}
