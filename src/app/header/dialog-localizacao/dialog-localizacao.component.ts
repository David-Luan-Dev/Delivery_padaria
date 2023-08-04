import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';



@Component({
  selector: 'app-dialog-localizacao',
  templateUrl: './dialog-localizacao.component.html',
  styleUrls: ['./dialog-localizacao.component.scss'],

})
export class DialogLocalizacaoComponent implements OnInit {
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
}
