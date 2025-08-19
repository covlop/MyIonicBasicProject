import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-lugar',
  standalone: true,
   imports: [
    CommonModule,     // 👈 Necesario para directivas como *ngIf, *ngFor
    IonicModule       // 👈 Importa todos los componentes de Ionic
  ],
  templateUrl: './lugar.page.html',
  styleUrls: ['./lugar.page.scss']})
export class LugarPage {
  placeName: string | null = null;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.placeName = params['name'] || 'Lugar desconocido';
    });
  }

}
