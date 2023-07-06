import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicoCompartilhadoService {
  private codigoGerado: string = '';


  getCodigoGerado(): string {
    return this.codigoGerado;
  }
  setCodigoGerado(codigo: string): void {
    this.codigoGerado = codigo;
  }

}
