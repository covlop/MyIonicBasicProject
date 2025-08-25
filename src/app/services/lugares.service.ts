import { getDatabase, ref, set, onValue,remove, Database } from 'firebase/database';
import {Injectable} from "@angular/core";
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';


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
    private db: Database;
    private lugaresSubject = new BehaviorSubject<Lugar[]>([]);
    lugares$= this.lugaresSubject.asObservable();
    
    constructor(){
        const app = initializeApp(environment.firebase);
        this.db=getDatabase(app);
        this.cargarLugares();
        console.log("DB information" + this.db);
    }

    private cargarLugares(): void {
        console.log("entering to cargarLugares function.");
        const lugaresRef= ref(this.db, 'lugares');
        console.log("lugaresRef" + lugaresRef);
        onValue(lugaresRef, (snapshot)=>{
            const data = snapshot.val();
        console.log("valor en data"+ data);
            const lugares: Lugar[] = [];
            if(data){
                Object.keys(data).forEach((key)=>{
                    lugares.push({
                        id:key,
                        nombre: data[key].nombre,
                        direccion: data[key].direccion,
                        categoria: data[key].categoria,
                        descripcion: data[key].descripcion
                    });
                });
            }
        console.log("lugare contiene"+ lugares)
        this.lugaresSubject.next(lugares);
        });
    }

    public addLugar(lugar: Lugar): Promise<void>{
        const lugarRef = ref(this.db,`lugares/${lugar.id}`);
        return set(lugarRef, lugar)
    }

    public updateLugar(id: string, lugar: Partial<Lugar>): Promise<void>{
        const lugarRef = ref(this.db, `lugares/${id}`);
        return set(lugarRef, {...lugar, id});
    }
    public deleteLugar(id:string): Promise<void>{
        const lugarRef= ref(this.db,`lugares/${id}`);
        return remove(lugarRef);
    }
}