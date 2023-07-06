import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { Component, Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { map, Observable } from 'rxjs';
import { DialogModule } from 'primeng/dialog';
import { DialogLocalizacaoComponent } from 'src/app/component/template/layout/header/dialog-localizacao/dialog-localizacao.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { OrdenarComponent } from './ordenar-modal/ordenar.component';
import { FromPagamentoComponent } from './from-pagamento/from-pagamento.component';
import { DialogDistanciaComponent } from './dialog-distancia/dialog-distancia.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  displayPosition!: boolean;
  position!: string;
  @Input() drawer!: MatDrawer;
  @Input() drawerCarrinho!: MatDrawer;
  value = '';
  carrinhoBoolean = false;

  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result: BreakpointState) => result.matches));

  constructor(
    private breakpointObserver: BreakpointObserver,
    private dialog: MatDialog
  ) {}

  public openDialog() {
    this.dialog.open(DialogLocalizacaoComponent, {
      data: 'Adicione ou escolha um endereço',
      width: '43.106rem',
      height: '32.07294rem',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
    });
  }
    //Dialog Material
    public openDialogOrdenar() {
      this.dialog.open(OrdenarComponent, {
        width: '43.106rem',
        height: '32.07294rem',
        enterAnimationDuration: '500ms',
        exitAnimationDuration: '500ms',
      });
    }
    public openDialogfromPagamento() {
      this.dialog.open(FromPagamentoComponent, {
        width: '43.106rem',
        height: '32.07294rem',
        enterAnimationDuration: '500ms',
        exitAnimationDuration: '500ms',
      });
    }
    public openDialogDistancia() {
      this.dialog.open(DialogDistanciaComponent, {
        width: '43.106rem',
        height: '32.07294rem',
        enterAnimationDuration: '500ms',
        exitAnimationDuration: '500ms',
      });
    }
}
