import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {MatSnackBar, MatSnackBarRef, MatSnackBarModule} from  '@angular/material/snack-bar' ;
import { PaginaPrincipalComponent } from '../../../pagina-principal/pagina-principal.component';

@Component({
  selector: 'app-codigo-verificador-celular',
  templateUrl: './codigo-verificador-celular.component.html',
  styleUrls: ['./codigo-verificador-celular.component.scss'],
})
export class CodigoVerificadorCelularComponent implements OnInit {
  CodigoVerificador!: FormGroup;
  durationInSeconds = 5 ; //em processamento
  snackBar  = '';//em processamento


  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar
    ) { }

  //inputs com validação 
  ngOnInit(): void {
    this.CodigoVerificador = this.fb.group({
      codigo1: ['', [Validators.required, Validators.minLength(1)]],
      codigo2: ['', [Validators.required, Validators.minLength(1)]],
      codigo3: ['', [Validators.required, Validators.minLength(1)]],
      codigo4: ['', [Validators.required, Validators.minLength(1)]],
      codigo5: ['', [Validators.required, Validators.minLength(1)]],
      codigo6: ['', [Validators.required, Validators.minLength(1)]],
    });
  }
  
  //Método para mudar o foco dos inputs
  mudarFoco(
    elementoAtual: HTMLInputElement,
    proximoElemento: HTMLInputElement
   ) {
    if (proximoElemento) {
      proximoElemento.focus();
    }
  }

  public openSnackBar() {
    const snackBar = this._snackBar.open('Login efetuato com sucesso!', 'Fechar', {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
    })
    snackBar.afterDismissed().subscribe(_ => {
      console.log('DISMISSED')
    })
    snackBar.onAction().subscribe(_ => {
      console.log('Action After')
    })
  }
}
