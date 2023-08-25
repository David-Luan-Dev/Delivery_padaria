import { Component, OnInit, HostListener } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  width: number = 0;
  innerWidth: number = 0;

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.innerWidth = window.innerWidth;
  }

  constructor() { }

  ngOnInit(): void {
    this.getScreenSize();
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

