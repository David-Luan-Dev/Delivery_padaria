import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-distancia',
  templateUrl: './dialog-distancia.component.html',
  styleUrls: ['./dialog-distancia.component.scss'],
})
export class DialogDistanciaComponent implements OnInit {
  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'km';
    }
    return `${value}`;
  }
  constructor() {}

  ngOnInit(): void {}
}
