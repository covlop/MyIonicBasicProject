import {Injectable} from '@angular/core';
import { Auth, FacebookAuthProvider , signInWithRedirect, UserCredential } from '@angular/fire/auth';
import {inject} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { getRedirectResult,  } from 'firebase/auth';


@Injectable({providedIn: 'root'})
export class AuthService{
    private auth: Auth = inject(Auth);

    constructor() {
    }

    async loginWithFacebookRedirect(): Promise<void>{
        const provider = new FacebookAuthProvider();
            return signInWithRedirect(this.auth ,provider); 
    }

    async handleRedirectResult(): Promise<UserCredential['user'] | null>{
        try{
            const result: UserCredential | null = await getRedirectResult(this.auth);
            if(result && result.user){
                console.log('Usuario autenticado via Facebook:', result.user);
                return result.user;
            } else {
                console.log('No hay resultado de redireccion');
                return null;
            }
        }catch (error){
            console.error('Error al manejar el redirect', error);
            throw error;    
        }
    }

    logout(){
        return this.auth.signOut();
    }
}