import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SettingsPage } from './settings.page';
import { AddonSettingsComponent } from './addon-settings/addon-settings.component';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: '',
                component: SettingsPage
            },
            { path: 'addon-settings', component: AddonSettingsComponent }
        ]),
        SettingsPage, AddonSettingsComponent
    ]
})
export class SettingsPageModule {}
