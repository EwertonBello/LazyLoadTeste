import { Component } from '@angular/core';
import { NavController, IonicPage, ModalController } from 'ionic-angular';

@IonicPage()//liga ao home.module
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }
  abrirModal(){
      const modal = this.modalCtrl.create('ModalPage');
      modal.present();
  
  }

}
