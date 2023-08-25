import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog-localizacao-tela-seis',
  templateUrl: './dialog-localizacao-tela-seis.component.html',
  styleUrls: ['./dialog-localizacao-tela-seis.component.scss']
})
export class DialogLocalizacaoTelaSeisComponent {
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
