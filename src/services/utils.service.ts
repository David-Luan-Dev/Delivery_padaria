import { Injectable } from '@angular/core';
import { filter, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UtilsService {
  public abrirCesta = new Subject<boolean>()
  public abrirCesta$ = this.abrirCesta.asObservable()

  constructor() { }

  public get() {
    return this.abrirCesta$.pipe(
      filter(result => result)
    )
  }
}
