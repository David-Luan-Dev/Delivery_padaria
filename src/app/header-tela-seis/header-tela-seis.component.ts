import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogLocalizacaoComponent } from '../header/dialog-localizacao/dialog-localizacao.component';

@Component({
  selector: 'app-header-tela-seis',
  templateUrl: './header-tela-seis.component.html',
  styleUrls: ['./header-tela-seis.component.scss']
})
export class HeaderTelaSeisComponent {
  isTelaLogin: boolean = false;

  constructor(public dialog: MatDialog) { }
  // <!--representa as telas de 1200px pra cima-->
  public openDialog() {
    this.dialog.open(DialogLocalizacaoComponent, {
      data: 'Adicione ou escolha um endereço',
      width: '43.106rem',
      height: '32.07294rem',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
    });
  }
}
