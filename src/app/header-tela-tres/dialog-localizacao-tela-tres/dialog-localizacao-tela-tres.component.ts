import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog-localizacao-tela-tres',
  templateUrl: './dialog-localizacao-tela-tres.component.html',
  styleUrls: ['./dialog-localizacao-tela-tres.component.scss']
})
export class DialogLocalizacaoTelaTresComponent {
  mostrarBotaoFlutuante: boolean = false;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.mostrarBotaoFlutuante = true;
    });
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      const botaoFlutante = document.querySelector('.btn-flutuante')
      if(botaoFlutante) {
        botaoFlutante.classList.remove('inicial')
      }
    }, 10)
  }
}
