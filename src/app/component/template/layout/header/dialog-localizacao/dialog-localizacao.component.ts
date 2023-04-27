import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-localizacao',
  templateUrl: './dialog-localizacao.component.html',
  styleUrls: ['./dialog-localizacao.component.scss']
})
export class DialogLocalizacaoComponent implements OnInit {
  public value= '';
  constructor(
    public matDialogRef: MatDialogRef<DialogLocalizacaoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
  ) { }

  ngOnInit(): void {

  }
  public closeDialog() {
    this.matDialogRef.close();
  }


}
