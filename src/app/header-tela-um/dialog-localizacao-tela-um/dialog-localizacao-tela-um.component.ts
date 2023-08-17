import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog-localizacao-tela-um',
  templateUrl: './dialog-localizacao-tela-um.component.html',
  styleUrls: ['./dialog-localizacao-tela-um.component.scss']
})
export class DialogLocalizacaoTelaUmComponent {
  //mostrarBotaoFlutuante: boolean = false;

  constructor() {}

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.mostrarBotaoFlutuante = true;
    // });
  }
  // ngAfterViewInit(): void {
  //   setTimeout(() => {
  //     const botaoFlutante = document.querySelector('.btn-flutuante')
  //     if(botaoFlutante) {
  //       botaoFlutante.classList.remove('inicial')
  //     }
  //   }, 100)
  // }
}
