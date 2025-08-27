import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import{FormsModule} from '@angular/forms';
import {LugaresService} from '../services/lugares.service';

@Component({
  selector: 'app-lugar',
  standalone: true,
   imports: [
    CommonModule,     // 👈 Necesario para directivas como *ngIf, *ngFor
    IonicModule,
    FormsModule      // 👈 Importa todos los componentes de Ionic
  ],
  templateUrl: './lugar.page.html',
  styleUrls: ['./lugar.page.scss']})
export class LugarPage {
  lugar: any = {};
  nombre: string | null = null;
  direccion: string | null = null;
  constructor(private activatedRoute: ActivatedRoute, private location:Location, private router: Router,
    private lugaresService: LugaresService) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
     if(params['lugar']){
      try{
        this.lugar= JSON.parse(params['lugar']);
      } catch (e) {
        this.lugar = {
          nombre: 'Nombre no asignado',
          direccion: 'Lugar no asignado',
          categoria: 'Categoria no asignada',
          descripcion: 'Descripcion no asignada'
        };
      }
     } else {
        this.lugar = { 
          nombre:'Nombre no asignado',
          direccion: 'Lugar no asignado',
          categoria: 'Categoria no asignada',
          descripcion: 'Descripcion asignada'}
     }
    });
  }

  navigateBack(){
    this.location.back()
  }

   navigateSubplace(){
     this.router.navigate(['/subplace']);
  }

  guardarLugar(){
    if(!this.lugar.id){
      this.lugar.id=Date.now();
    }
    console.log(this.lugar);
    this.lugaresService.addLugar(this.lugar);
    alert('Guardado con exito.');
    this.location.back()
  }
}
