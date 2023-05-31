import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-codigo-verificador-email',
  templateUrl: './codigo-verificador-email.component.html',
  styleUrls: ['./codigo-verificador-email.component.Scss'],
})
export class CodigoVerificadorEmailComponent implements OnInit {
  CodigoVerificador = this.fb.group({
    codigo: this.fb.array([
      '',
      '',
      '',
      '',
      '',
      [Validators.required, Validators.minLength(1)],
    ]),
  });
  numero = this.CodigoVerificador.get('codigo') as FormArray;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  codigoVerificadorEmail() {
    console.log();
  }
}
