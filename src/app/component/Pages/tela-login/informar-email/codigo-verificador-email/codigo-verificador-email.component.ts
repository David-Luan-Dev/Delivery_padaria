import { Component, OnInit, } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PaginaPrincipalComponent } from '../../../pagina-principal/pagina-principal.component';
import { end } from '@popperjs/core';

@Component({
  selector: 'app-codigo-verificador-email',
  templateUrl: './codigo-verificador-email.component.html',
  styleUrls: ['./codigo-verificador-email.component.Scss'],
})
export class CodigoVerificadorEmailComponent implements OnInit {
  CodigoVerificador!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar) {}

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

  mudarFoco(
    elementoAtual: HTMLInputElement,
    proximoElemento: HTMLInputElement
  ) {
    if (proximoElemento) {
      proximoElemento.focus();
    }
  }

  enviarCodigo() {}

  public openFromComp(){
    const snackBar = this.snackBar.open('Login realizado com sucesso', 'Fechar',{
      duration: 3000, 
      verticalPosition: 'top',
      horizontalPosition: 'end'
    })
    snackBar.afterDismissed().subscribe(_ => {
      console.log('dismissed');
    })
    snackBar.onAction().subscribe(_ => {
      console.log('After Action ');
    })
  }

}
