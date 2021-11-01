import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-feature-reserva-churrasqueira',
  templateUrl: './feature-reserva-churrasqueira.page.html',
  styleUrls: ['./feature-reserva-churrasqueira.page.scss'],
})
export class FeatureReservaChurrasqueiraPage implements OnInit {
  date: string;
  type: 'string';
  constructor(public alertController: AlertController, private router: Router) {}

  ngOnInit() {
  }

  onChange($event) {
    console.log($event);
  }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    })
    await alert.present();
  }

  reservar(){
    this.router.navigate(['features']);
  }
  
}
