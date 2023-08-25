import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadosCompartilhadosService {
  
  private celularValueSubject = new BehaviorSubject<string>('');
  private emailValueSubject = new BehaviorSubject<string>('');

  celularValue$ = this.celularValueSubject.asObservable();
  celularValue!: string;
  
  
  emailvalue$ = this.emailValueSubject.asObservable();
  emailValue!: string;


  setCelularValue(value: string): void {
    this.celularValueSubject.next(value);
  }

  getCelularValue() {
    this.celularValue$.subscribe(value => {
      this.celularValue = value;
    });

    return this.celularValue;
  }

  setEmailValue(value: string): void {
    this.emailValueSubject.next(value);
  }

  getEmailValue() {
    this.emailvalue$.subscribe(value => {
      this.emailValue = value;
    });
    return this.emailValue;
  }
}
