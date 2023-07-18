import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
//import { DialogLocalizacaoComponent } from '../header/dialog-localizacao/dialog-localizacao.component';
import { DialogLocalizacaoComponent } from '../header/dialog-localizacao/dialog-localizacao.component';
@Component({
  selector: 'app-header-tela-quatro',
  templateUrl: './header-tela-quatro.component.html',
  styleUrls: ['./header-tela-quatro.component.scss'],
})
export class HeaderTelaQuatroComponent {
  isTelaLogin: boolean = false;

  constructor(public dialog: MatDialog) { }
  // <!--representa as telas de 1200px pra cima-->
  public openDialogTelaQuatro() {
    this.dialog.open(DialogLocalizacaoComponent, {
      data: 'Adicione ou escolha um endereço',
      width: '30.0625rem',
      height: '48.0625rem',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
    });
  }
}
