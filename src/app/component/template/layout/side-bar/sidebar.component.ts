import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';

import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result: BreakpointState) => result.matches));
  value = ``
  quantasRequisicoes = 0

  constructor(private breakpointObserver: BreakpointObserver) {
    // const QuantidadeDeUsuarioUsandoSimultaneos = 100
    // console.time('process');
    // for (let index = 0; index < QuantidadeDeUsuarioUsandoSimultaneos; index++) {

    //   this.functionLaco()
    // }
    // console.log("Quantas repeticoes para 20 usuarios simultaneamente, usando um vetor tamanho 50, O(n²)", this.quantasRequisicoes);
    // console.timeEnd('process');
  }
  // public functionLaco() {
  //   for (let i = 0; i < 800; i++) {
  //     for (let j = 0; j < 800; j++) {
  //       this.quantasRequisicoes++
  //     }
  //   }
  // }
}
