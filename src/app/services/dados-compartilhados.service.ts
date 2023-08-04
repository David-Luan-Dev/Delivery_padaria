import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadosCompartilhadosService {
  private celularValueSubject = new BehaviorSubject<string>('');

  celularValue$ = this.celularValueSubject.asObservable();
  celularValue!: string

  setCelularValue(value: string): void {
    this.celularValueSubject.next(value);
  }

  getCelularValue() {
    this.celularValue$.subscribe(value => {
      this.celularValue = value;
    });

    return this.celularValue;
  }
}
