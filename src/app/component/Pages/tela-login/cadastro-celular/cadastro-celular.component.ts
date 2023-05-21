import { Component, OnInit } from '@angular/core';
import { CodigoVerificadorCelularComponent } from './codigo-verificador-celular/codigo-verificador-celular.component';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-cadastro-celular',
  templateUrl: './cadastro-celular.component.html',
  styleUrls: ['./cadastro-celular.component.scss']
})
export class CadastroCelularComponent {

  constructor(public formBuilder: FormBuilder, private dialog: MatDialog) {}


  ngOnInit(): void {}


  public codigoVerificadorDialog() {
    this.dialog.open(CodigoVerificadorCelularComponent, {
      width: '450px',
      height: '380px',
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms',
    });
  }
}

