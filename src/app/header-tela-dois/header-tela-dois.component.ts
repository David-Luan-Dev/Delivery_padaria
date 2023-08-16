import { ChangeDetectorRef, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogLocalizacaoComponent } from '../header/dialog-localizacao/dialog-localizacao.component';
//import { DialogLocalizacaoComponent } from '../header/dialog-localizacao/dialog-localizacao.component';
@Component({
  selector: 'app-header-tela-dois',
  templateUrl: './header-tela-dois.component.html',
  styleUrls: ['./header-tela-dois.component.scss']
})
export class HeaderTelaDoisComponent {
  isTelaLogin: boolean = false;
  nomeMenu: string = 'Início'
  numero: number = 7;

  constructor(public dialog: MatDialog, public cd: ChangeDetectorRef) { }
  // <!--representa as telas de 1200px pra cima-->
  public openDialogTelaDois() {
    this.cd.detectChanges();
    this.dialog.open(DialogLocalizacaoComponent, {
      data: 'Adicione ou escolha um endereço',
      width: '500px',
      height: '350px',
      position: {
        top: '15px'
      },
      enterAnimationDuration: '10ms',
      exitAnimationDuration: '300ms',
    });
    this.cd.detectChanges();
  }
}
