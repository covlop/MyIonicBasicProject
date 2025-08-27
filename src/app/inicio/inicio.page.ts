import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import {Router} from '@angular/router';
import {LugaresService} from '../services/lugares.service';
import {IonList} from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  imports: [CommonModule, IonicModule]
})

export class InicioPage implements OnInit {
@ViewChild(IonList) listaRef!: IonList;
  
  lugares: any = [];
  constructor(public router: Router,private lugaresService: LugaresService) {
 }

    navegarLugar(placeName:string){
    this.router.navigate(['/lugar'], {queryParams: {name: placeName}});
  }
   
    irAVistaDeDetalle(){
      alert('Esta funcionando ir a vista de detalle no arguments')
      this.router.navigate(['/lugar'], {queryParams: {lugar: {}}});
    }

    irAVistaDeDetalleExistente(lugar:any){
            alert('Esta funcionando ir a vista de detalle con arguments')
      this.router.navigate(['/lugar'], {queryParams: {lugar: JSON.stringify(lugar)}});
    }

    borrarLugar(index:number){
      if(confirm('Seguro que desea borrar este lugar?')){
        const lugar = this.lugares[index];
        const id = lugar.id;
        console.log("Elemento para borrar", lugar);
        this.lugaresService.deleteLugar(id)
        .then(()=>{
        this.lugares.splice(index,1);
        this.listaRef.closeSlidingItems();
        })
        .catch(error => {console.error('Error al borrar en FireBase:', error);
        });
      }
      
    }

  ngOnInit(){
     this.lugaresService.lugares$.subscribe(data=>{
      console.log('Lugares recibidos:', data);
      this.lugares = data;});
  }


}
