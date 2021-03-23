import { Component } from '@angular/core';
import {ActionSheetController, LoadingController} from '@ionic/angular';
import {SingletonServiceService} from '../singleton-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private actionSheet: ActionSheetController, private loadingController: LoadingController) {}
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 1000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheet.create({
      header: 'Action Sheet',
      mode: 'ios',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('You CLicked Me');
          }
        },
        {
          text: 'Random Everything',
          icon: 'play',
          handler: () => {
            console.log('Main mode selected'), this.presentLoading();
          }
        },
        {
          text: 'Random Character',
          icon: 'play',
          handler: () => {
            console.log('Character mode selected'), this.presentLoading();
          }
        },
        {
          text: 'Random Weapons',
          icon: 'play',
          handler: () => {
            console.log('Weapons mode selected'), this.presentLoading();
          }
        },
        {
          text: 'Random Challenges',
          icon: 'play',
          handler: () => {
            console.log('Challenges mode selected'), this.presentLoading();
          }
        }
      ]
    });
    await actionSheet.present();
  }



}
