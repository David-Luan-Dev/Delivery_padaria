import { DialogModule } from 'primeng/dialog';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-padarias',
  templateUrl: './padarias.component.html',
  styleUrls: ['./padarias.component.scss'],
})
export default class PadariasComponent {
  displayPosition!: boolean;
  position!: string;

  constructor() { }

  showPositionDialog(position: string) {
    this.position = position;
    this.displayPosition = true;
  }

}
