import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import {Router} from '@angular/router';
import {LugaresService} from '../services/lugares.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  imports: [CommonModule, IonicModule]
})
export class InicioPage implements OnInit {

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

  ngOnInit(){
     this.lugaresService.lugares$.subscribe(data=>{
      console.log('Lugares recibidos:', data);
      this.lugares = data;});
  }


}
