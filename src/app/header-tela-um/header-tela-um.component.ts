import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
//import { DialogLocalizacaoComponent } from '../header/dialog-localizacao/dialog-localizacao.component';
import { DialogLocalizacaoTelaUmComponent } from './dialog-localizacao-tela-um/dialog-localizacao-tela-um.component';
@Component({
  selector: 'app-header-tela-um',
  templateUrl: './header-tela-um.component.html',
  styleUrls: ['./header-tela-um.component.scss']
})
export class HeaderTelaUmComponent {
  isTelaLogin: boolean = false;

  constructor(public dialog: MatDialog) { }
  // <!--representa as telas de 1200px pra cima-->
  public openDialogTelaUm() {
    this.dialog.open(DialogLocalizacaoTelaUmComponent, {
      data: 'Adicione ou escolha um endereço',
      width: '43.106rem',
      height: '32.07294rem',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
    });
  }

}
