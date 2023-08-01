import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadosCompartilhadosService {
  private celularValueSubject = new BehaviorSubject<string>('');

  celularValue$ = this.celularValueSubject.asObservable();

  setCelularValue(value: string): void {
    this.celularValueSubject.next(value);
  }
}
