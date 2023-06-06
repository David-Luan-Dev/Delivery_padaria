import { Component, OnInit } from '@angular/core';
import { CodigoVerificadorCelularComponent } from './codigo-verificador-celular/codigo-verificador-celular.component';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cadastro-celular',
  templateUrl: './cadastro-celular.component.html',
  styleUrls: ['./cadastro-celular.component.scss']
})
export class CadastroCelularComponent implements OnInit{
  codigo1: string = "";
  frase: string = "Informe o número do seu celular para continuar";

  constructor(
    public formBuilder: FormBuilder,
     private dialog: MatDialog
     ) {}

  ngOnInit(): void {

  }

  codigo(){
    console.log(this.codigo1);
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

