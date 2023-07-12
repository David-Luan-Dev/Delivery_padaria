import { Component, ElementRef, OnInit, ViewChild, HostListener } from '@angular/core';
import {MatMenuModule, MatMenuTrigger} from '@angular/material/menu';
import {
  MatDialog,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import { DialogLocalizacaoComponent } from './dialog-localizacao/dialog-localizacao.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isTelaLogin: boolean = false;
  // @ViewChild('menuContainer', { static: true }) menuContainer!: ElementRef;
  // @ViewChild(MatMenuTrigger) menuTrigger!: MatMenuTrigger;

  private closeTimeoutId: number | undefined; //testando

  constructor(public dialog: MatDialog) {

  }

  ngOnInit(): void {

  }


  public openDialog() {
    this.dialog.open(DialogLocalizacaoComponent, {
      data: 'Adicione ou escolha um endereço',
      width: '43.106rem',
      height: '32.07294rem',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
    });
  }



  // openMenu(): void {
  //   clearTimeout(this.closeTimeoutId);
  //   this.menuTrigger.openMenu();
  //   const icon = this.menuContainer.nativeElement.querySelector('.icon-seta-invertida-tela-dois');
  //   if (icon) {
  //     icon.classList.add('up');
  //   }
  // }

  // closeMenuWithDelay(): void {
  //   this.closeTimeoutId = window.setTimeout(() => {
  //     this.menuTrigger.closeMenu();
  //     const icon = this.menuContainer.nativeElement.querySelector('.icon-seta-invertida-tela-dois');
  //     if (icon) {
  //       icon.classList.remove('up');
  //     }
  //   }, 3000); // Ajuste o valor conforme necessário (em milissegundos)
  // }

  // @HostListener('mouseenter')
  // onMouseEnter(): void {
  //   this.openMenu();
  // }

  // @HostListener('mouseleave')
  // onMouseLeave(): void {
  //   this.closeMenuWithDelay();
  // }
}

