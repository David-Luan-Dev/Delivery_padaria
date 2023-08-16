import { Component, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
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
  public openDialogTelaCinco() {
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(DialogLocalizacaoComponent, {
      data: 'Adicione ou escolha um endereço',
      width: '320px',
      height: '438px',
      position: {
        // bottom:  '155px'
       top: '25px'
      },
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
    });
  }
}
