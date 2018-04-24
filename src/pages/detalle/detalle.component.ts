import { Component, OnInit } from '@angular/core';

import {NavController, NavParams,AlertController} from 'ionic-angular';

import {ListaItem} from '../../app/clases/lista-item';
import {Lista} from '../../app/clases/listas';

import {ListaDeseosService} from '../../app/services/lista-deseos.service';


@Component({
  selector: 'detalle',
  templateUrl: 'detalle.component.html',

})
export class DetalleComponent implements OnInit {

idx:number;
lista:Lista;


  constructor(
    public navCtrl:NavController,
    public NavParams:NavParams,
    public _listaDeseos:ListaDeseosService,
    public alertCtrl: AlertController

  ) {

this.idx = this.NavParams.get('idx');
this.lista = this.NavParams.get('lista');



console.log(this.lista);
   }


actualizar(item:ListaItem){

  item.completado= !item.completado;

  let todosMarcados= true;

  for (let item of this.lista.items){

    if (!item.completado) {
      todosMarcados=false;
      break;

    }

  }

  this.lista.completado= todosMarcados;

  this._listaDeseos.actualizardata();


}

borrarItem() {
    let confirm = this.alertCtrl.create({
      title: 'borrar lista?',
      message: 'seguro que quieres borrar esta lista?',
      buttons: [ 'cancelar',

        {
          text: 'eliminar',
          handler: () => {
            this._listaDeseos.borrarLista(this.idx)
          }
        }
      ]
    });
    confirm.present();
      this.navCtrl.pop();
  }





  ngOnInit() {}
}
