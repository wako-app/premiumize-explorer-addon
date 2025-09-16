import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-settings-modal',
    templateUrl: './settings-modal.component.html',
    styleUrls: ['./settings-modal.component.scss'],
    standalone: false
})
export class SettingsModalComponent implements OnInit {
  constructor(public modalCtrl: ModalController) {}

  ngOnInit() {}
}
