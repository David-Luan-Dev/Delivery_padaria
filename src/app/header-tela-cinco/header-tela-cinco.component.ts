import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogLocalizacaoTelaCincoComponent } from './dialog-localizacao/dialog-localizacao-tela-cinco.component';

@Component({
  selector: 'app-header-tela-cinco',
  templateUrl: './header-tela-cinco.component.html',
  styleUrls: ['./header-tela-cinco.component.scss']
})
export class HeaderTelaCincoComponent {
  isTelaLogin: boolean = false;

  constructor(public dialog: MatDialog) { }
  // <!--representa as telas de 1200px pra cima-->
  public openDialogTelaCinco() {
    this.dialog.open(DialogLocalizacaoTelaCincoComponent, {
      data: 'Adicione ou escolha um endereço',
      width: '28rem',
      height: '35.5rem',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
    });
  }
}
