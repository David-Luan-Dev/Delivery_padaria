import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { Component, Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { map, Observable } from 'rxjs';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() drawer!: MatDrawer;
  @Input() drawerCarrinho!: MatDrawer;
  value = '';
  carrinhoBoolean = false;
  displayPosition!: boolean;
  position!: string;
  

  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result: BreakpointState) => result.matches));

  constructor(private breakpointObserver: BreakpointObserver) {}
  showPositionDialog(position: string) {
    this.position = position;
    this.displayPosition = true;
}

}
