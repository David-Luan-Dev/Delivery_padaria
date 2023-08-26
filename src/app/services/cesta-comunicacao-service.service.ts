import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CestaComunicacaoServiceService {

  private gavetaAbertaSubject = new BehaviorSubject<boolean>(false);  
  constructor() { }

  gavetaAberta$ = this.gavetaAbertaSubject.asObservable();   
  alternarGaveta(aberta: boolean) {    
    this.gavetaAbertaSubject.next(aberta); 
    }
}
