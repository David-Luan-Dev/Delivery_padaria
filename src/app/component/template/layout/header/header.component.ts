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
      width: '400px',
      height: '400px',
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms'

    });
  }
}
