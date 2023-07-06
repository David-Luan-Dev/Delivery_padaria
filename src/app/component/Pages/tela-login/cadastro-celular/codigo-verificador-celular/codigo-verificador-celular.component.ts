import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,   } from '@angular/forms';
import { ServicoCompartilhadoService } from 'src/app/servico-compartilhado.service';


@Component({
  selector: 'app-codigo-verificador-celular',
  templateUrl: './codigo-verificador-celular.component.html',
  styleUrls: ['./codigo-verificador-celular.component.scss']
})
export class CodigoVerificadorCelularComponent implements OnInit{
  CodigoVerificador!: FormGroup;
  codigoGerado: string = '';

  constructor(
    private fb: FormBuilder,
    private cs: ServicoCompartilhadoService
    ){}

  ngOnInit(): void {
    this.CodigoVerificador = this.fb.group({
      codigo1: ['', [Validators.required, Validators.minLength(1)]],
      codigo2: ['', [Validators.required, Validators.minLength(1)]],
      codigo3: ['', [Validators.required, Validators.minLength(1)]],
      codigo4: ['', [Validators.required, Validators.minLength(1)]],
      codigo5: ['', [Validators.required, Validators.minLength(1)]],
      codigo6: ['', [Validators.required, Validators.minLength(1)]],
  });
  this.codigoGerado = this.cs.getCodigoGerado();
  }

  mudarFoco(
    elementoAtual: HTMLInputElement,
     proximoElemento: HTMLInputElement) {
      if(proximoElemento) {
        proximoElemento.focus()
      }
  }

}
