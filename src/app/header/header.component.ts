import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { DialogLocalizacaoComponent } from './dialog-localizacao/dialog-localizacao.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{


  constructor(public dialog: MatDialog){}

ngOnInit(): void {

}

    public openDialog() {
      this.dialog.open(DialogLocalizacaoComponent, {
        data: 'Adicione ou escolha um endereço',
        width: '43.106rem',
        height: '32.07294rem',
        enterAnimationDuration: '300ms',
        exitAnimationDuration: '300ms'
      });
    }
}
