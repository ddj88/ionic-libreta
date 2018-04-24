import { Injectable } from '@angular/core';
import {Lista} from '../clases/listas';

@Injectable()
export class ListaDeseosService {

listas: Lista[]= []

  constructor() {

//   let lista1= new Lista('compra super');
//
//     let lista2= new Lista('compra juegos');
//
//
//
//
// this.listas.push(lista1,lista2);

this.cargarData();

      console.log('servicio funciona');

   }





   actualizardata(){

      localStorage.setItem("data",JSON.stringify(this.listas));

   }

    cargarData(){
        if (localStorage.getItem("data")) {
              this.listas =JSON.parse(localStorage.getItem("data"));
        }

    }

    agregarLista(lista:Lista){

        this.listas.push(lista);
        this.actualizardata();
    }



    borrarLista(idx:number){

        this.listas.splice(idx,1);
        this.actualizardata();
    }
}
