import { Component, OnInit, AfterViewInit } from '@angular/core';



@Component({
  selector: 'app-dialog-localizacao',
  templateUrl: './dialog-localizacao.component.html',
  styleUrls: ['./dialog-localizacao.component.scss'],

})
export class DialogLocalizacaoComponent implements OnInit{
  mostrarBotaoFlutuante: boolean = false;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.mostrarBotaoFlutuante = true;
    }, 500);
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      const botaoFlutante = document.querySelector('.btn-flutuante')
      if(botaoFlutante) {
        botaoFlutante.classList.remove('inicial')
      }
    }, 100)
  }
}
