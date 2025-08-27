import {Injectable, inject} from "@angular/core";
import { BehaviorSubject } from 'rxjs';
import { Database, getDatabase, ref, set, remove, onValue, provideDatabase } from '@angular/fire/database';



export interface Lugar {
    id: string;
    nombre: string;
    direccion: string;
    categoria: string;
    descripcion: string;
}

@Injectable({
    providedIn: 'root'
})
export class LugaresService {
    private db: Database = inject(Database);
    private lugaresSubject = new BehaviorSubject<Lugar[]>([]);
    lugares$= this.lugaresSubject.asObservable();
    
    constructor(){
        this.cargarLugares();
    }

    private cargarLugares(): void {
      console.log("entering to cargarLugares function.");
      const lugaresRef = ref(this.db, 'lugares');
      onValue(lugaresRef, (snapshot) => {
      const data = snapshot.val();
      const lugares: Lugar[] = [];

      if (data) {
        Object.keys(data).forEach((key) => {
          lugares.push({
            id: key,
            nombre: data[key].nombre,
            direccion: data[key].direccion,
            categoria: data[key].categoria,
            descripcion: data[key].descripcion
          });
        });
      }

      this.lugaresSubject.next(lugares);
    });
       
    }

    public addLugar(lugar: Lugar): Promise<void>{
        const lugarRef = ref(this.db, `lugares/${lugar.id}`) ;
        return set(lugarRef,lugar);
    }

    public updateLugar(id: string, lugar: Partial<Lugar>): Promise<void>{
        const lugarRef = ref(this.db, `lugares/${id}`);
        return  set(lugarRef, {... lugar,id});
       
    }
    public deleteLugar(id:string): Promise<void>{
        const lugarRef = ref(this.db, `lugares/${id}` );
        return remove(lugarRef);
    }

}