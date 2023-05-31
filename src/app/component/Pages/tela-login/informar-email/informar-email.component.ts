import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CodigoVerificadorEmailComponent } from './codigo-verificador-email/codigo-verificador-email.component';


interface NumeroEmail {
  codigo: string;
}

@Component({
  selector: 'app-informar-email',
  templateUrl: './informar-email.component.html',
  styleUrls: ['./informar-email.component.scss']
})
export class InformarEmailComponent implements OnInit{



  codigo1: NumeroEmail = {
    codigo: ""
  };

  constructor(public formBuilder: FormBuilder, private dialog: MatDialog) {}

  ngOnInit(): void {}

  EnviarCodigoEmail() {
    console.log(this.codigo1.codigo)
  }

  public openCodigoEmail() {
    this.dialog.open(CodigoVerificadorEmailComponent, {
      width: '450px',
      height: '380px',
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms',
    });
  }
  limparCampo() {
    this.codigo1.codigo = '';
  }

}
