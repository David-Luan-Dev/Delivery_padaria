import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dialog-localizacao-tela-cinco',
  templateUrl: './dialog-localizacao-tela-cinco.component.html',
  styleUrls: ['./dialog-localizacao-tela-cinco.component.scss'],

})
export class DialogLocalizacaoTelaCincoComponent implements OnInit {
  mostrarBotaoFlutuante: boolean = false;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.mostrarBotaoFlutuante = true;
    }, 500);
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
