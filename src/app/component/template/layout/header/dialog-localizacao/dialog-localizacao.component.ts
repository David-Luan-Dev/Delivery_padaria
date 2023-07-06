import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-localizacao',
  templateUrl: './dialog-localizacao.component.html',
  styleUrls: ['./dialog-localizacao.component.scss'],
})
export class DialogLocalizacaoComponent implements OnInit {
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
