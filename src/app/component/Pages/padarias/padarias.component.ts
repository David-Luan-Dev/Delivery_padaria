import { DialogModule } from 'primeng/dialog';
import { Component } from '@angular/core';


@Component({
  selector: 'app-padarias',
  templateUrl: './padarias.component.html',
  styleUrls: ['./padarias.component.scss'],
})
export default class PadariasComponent {
  displayBasic: boolean = false;

  showDialog() {
    this.displayBasic = true;
  }

}
