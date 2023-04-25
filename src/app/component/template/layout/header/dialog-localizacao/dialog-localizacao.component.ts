import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-localizacao',
  templateUrl: './dialog-localizacao.component.html',
  styleUrls: ['./dialog-localizacao.component.scss']
})
export class DialogLocalizacaoComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: string,
  private dialogRef: MatDialogRef <DialogLocalizacaoComponent>) {}

  ngOnInit(): void {

  }


}
