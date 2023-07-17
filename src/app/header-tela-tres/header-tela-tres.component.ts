import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
//import { DialogLocalizacaoComponent } from '../header/dialog-localizacao/dialog-localizacao.component';
import { DialogLocalizacaoTelaTresComponent } from './dialog-localizacao-tela-tres/dialog-localizacao-tela-tres.component';
@Component({
  selector: 'app-header-tela-tres',
  templateUrl: './header-tela-tres.component.html',
  styleUrls: ['./header-tela-tres.component.scss']
})
export class HeaderTelaTresComponent {
  isTelaLogin: boolean = false;

  constructor(public dialog: MatDialog) { }
  // <!--representa as telas de 1200px pra cima-->
  public openDialogTelaTres() {
    this.dialog.open(DialogLocalizacaoTelaTresComponent, {
      data: 'Adicione ou escolha um endereço',
      width: '43.106rem',
      height: '32.07294rem',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
    });
  }
}
