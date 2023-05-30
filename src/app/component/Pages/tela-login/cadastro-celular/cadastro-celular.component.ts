import { Component, OnInit } from '@angular/core';
import { CodigoVerificadorCelularComponent } from './codigo-verificador-celular/codigo-verificador-celular.component';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

  interface Numero {
    codigo: string;
  }

@Component({
  selector: 'app-cadastro-celular',
  templateUrl: './cadastro-celular.component.html',
  styleUrls: ['./cadastro-celular.component.scss']
})
export class CadastroCelularComponent implements OnInit{

  codigo1: Numero = {
    codigo: ""
  };

  constructor(public formBuilder: FormBuilder, private dialog: MatDialog) {}

  ngOnInit(): void {}

  codigo(){
    console.log();
  }

  public codigoVerificadorDialog() {
    this.dialog.open(CodigoVerificadorCelularComponent, {
      width: '450px',
      height: '380px',
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms',
    });
  }
}

