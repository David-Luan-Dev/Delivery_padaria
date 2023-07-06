import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServicoCompartilhadoService } from 'src/app/servico-compartilhado.service';

@Component({
  selector: 'app-codigo-verificador-email',
  templateUrl: './codigo-verificador-email.component.html',
  styleUrls: ['./codigo-verificador-email.component.Scss'],
})
export class CodigoVerificadorEmailComponent implements OnInit {
  CodigoVerificador!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private sp: ServicoCompartilhadoService
    ) {}

  ngOnInit(): void {
  this.CodigoVerificador = this.fb.group({
      codigo1: ['',[Validators.required, Validators.minLength(1)]],
      codigo2: ['',[Validators.required, Validators.minLength(1)]],
      codigo3: ['',[Validators.required, Validators.minLength(1)]],
      codigo4: ['',[Validators.required, Validators.minLength(1)]],
      codigo5: ['',[Validators.required, Validators.minLength(1)]],
      codigo6: ['',[Validators.required, Validators.minLength(1)]],
  });
  }
  mudarFoco(
    elementoAtual: HTMLInputElement,
    proximoElemento: HTMLInputElement) {
    if(proximoElemento){
      proximoElemento.focus();
    }
  }
}
