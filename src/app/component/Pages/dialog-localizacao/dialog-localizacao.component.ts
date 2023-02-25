import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dialog-localizacao',
  templateUrl: './dialog-localizacao.component.html',
  styleUrls: ['./dialog-localizacao.component.css']
})
export class DialogLocalizacaoComponent {
  value1!: string;
  @Input()
  position!: string;

  @Input()
  displayPosition!: boolean;
}
