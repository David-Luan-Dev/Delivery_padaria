import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-codigo-verificador-celular',
  templateUrl: './codigo-verificador-celular.component.html',
  styleUrls: ['./codigo-verificador-celular.component.scss'],
})
export class CodigoVerificadorCelularComponent implements OnInit {
  CodigoVerificador!: FormGroup;

  constructor(private fb: FormBuilder) {}

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
}
