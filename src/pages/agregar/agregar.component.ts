import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';

import {ListaItem} from '../../app/clases/lista-item';
import {ListaDeseosService} from '../../app/services/lista-deseos.service';

import {Lista} from '../../app/clases/listas';

@Component({
  selector: 'agregar',
  templateUrl: 'agregar.component.html',
})
export class AgregarComponent implements OnInit {

nombreItem:string = " ";
nombreLista:string = " ";

items:ListaItem[] = [];


  constructor(public alertCtrl: AlertController,
              public NavCtrl: NavController,
              public _listaDeseos:ListaDeseosService) {  }

  ngOnInit() {}



  agregar(){

    if (this.nombreItem.length==0) {
        return;
    }

      let item = new ListaItem();

      item.nombre= this.nombreItem;
      this.items.push(item);
      this.nombreItem="";
  }


borrar(id){
return this.items.splice(id,1);
}

guardarlista(){
  if (this.nombreLista.length==0) {

  let alert = this.alertCtrl.create({
    title: 'New Friend!',
    subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
    buttons: ['OK']
  });
  alert.present();
  return;
  }

  let lista = new Lista(this.nombreLista);
  lista.items= this.items;
  // this._listaDeseos.listas.push(lista);
  this._listaDeseos.agregarLista(lista);

  this.NavCtrl.pop();

}



}
