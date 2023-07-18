import { Component, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogLocalizacaoComponent } from '../header/dialog-localizacao/dialog-localizacao.component';

@Component({
  selector: 'app-header-tela-cinco',
  templateUrl: './header-tela-cinco.component.html',
  styleUrls: ['./header-tela-cinco.component.scss']
})
export class HeaderTelaCincoComponent {
  isTelaLogin: boolean = false;
  @Output() teste!: string

  constructor(public dialog: MatDialog) { }
  // <!--representa as telas de 1200px pra cima-->
  public openDialogTelaCinco() {
    this.dialog.open(DialogLocalizacaoComponent, {
      data: 'Adicione ou escolha um endereço',
      width: '28rem',
      height: '35.5rem',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
    });
  }
}
