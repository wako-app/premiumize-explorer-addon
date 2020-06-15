import { Injectable } from '@angular/core';
import { WakoSettingsService } from '@wako-app/mobile-sdk';

export class Settings {
  apiKey: string;
}

@Injectable()
export class SettingsService {
  private readonly storageCategory = 'plugin.premiumize_explorer_settings';

  settings$ = WakoSettingsService.onChangeByCategory<Settings>(this.storageCategory);

  constructor() {}

  async get() {
    let settings: Settings = await WakoSettingsService.getByCategory<Settings>(this.storageCategory);

    const defaultSettings = new Settings();
    if (!settings) {
      settings = defaultSettings;
    }

    Object.keys(defaultSettings).forEach((key) => {
      if (settings[key] === undefined) {
        settings[key] = defaultSettings[key];
      }
    });

    return settings;
  }

  async set(settings: Settings) {
    return await WakoSettingsService.setByCategory(this.storageCategory, settings);
  }
}
