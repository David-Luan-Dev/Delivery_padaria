import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
//import { DialogLocalizacaoComponent } from '../header/dialog-localizacao/dialog-localizacao.component';
import { DialogLocalizacaoComponent } from '../header/dialog-localizacao/dialog-localizacao.component';
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
    this.dialog.open(DialogLocalizacaoComponent, {
      data: 'Adicione ou escolha um endereço',
      width: '480px',
      height: '370.167px',
      position: {
        top: '20px'
      },
      enterAnimationDuration: '10ms',
      exitAnimationDuration: '300ms',
    });
  }
}
