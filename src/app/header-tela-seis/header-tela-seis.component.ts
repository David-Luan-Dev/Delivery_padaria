import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
//import { DialogLocalizacaoComponent } from '../header/dialog-localizacao/dialog-localizacao.component';
import { DialogLocalizacaoTelaSeisComponent } from './dialog-localizacao-tela-seis/dialog-localizacao-tela-seis.component';
@Component({
  selector: 'app-header-tela-seis',
  templateUrl: './header-tela-seis.component.html',
  styleUrls: ['./header-tela-seis.component.scss']
})
export class HeaderTelaSeisComponent {
  isTelaLogin: boolean = false;

  constructor(public dialog: MatDialog) { }
  // <!--representa as telas de 1200px pra cima-->
  public openDialogTelaSeis() {
    this.dialog.open(DialogLocalizacaoTelaSeisComponent, {
      data: 'Adicione ou escolha um endereço',
      width: '20rem',
      height: '35.5rem',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
    });
  }
}
