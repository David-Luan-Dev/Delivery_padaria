import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog-localizacao-tela-quatro',
  templateUrl: './dialog-localizacao-tela-quatro.component.html',
  styleUrls: ['./dialog-localizacao-tela-quatro.component.scss']
})
export class DialogLocalizacaoTelaQuatroComponent {
  mostrarBotaoFlutuante: boolean = false;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.mostrarBotaoFlutuante = true;
    }, 100);
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      const botaoFlutante = document.querySelector('.btn-flutuante')
      if (botaoFlutante) {
        botaoFlutante.classList.remove('inicial')
      }
    }, 100)
  }
}
