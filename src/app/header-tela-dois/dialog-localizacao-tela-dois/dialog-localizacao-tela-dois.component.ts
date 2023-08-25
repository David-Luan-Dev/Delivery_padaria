import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog-localizacao-tela-dois',
  templateUrl: './dialog-localizacao-tela-dois.component.html',
  styleUrls: ['./dialog-localizacao-tela-dois.component.scss']
})
export class DialogLocalizacaoTelaDoisComponent {
  mostrarBotaoFlutuante: boolean = false;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.mostrarBotaoFlutuante = true;
    });
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      const botaoFlutante = document.querySelector('.btn-flutuante')
      if (botaoFlutante) {
        botaoFlutante.classList.remove('inicial')
      }
    }, 300)
  }
}
