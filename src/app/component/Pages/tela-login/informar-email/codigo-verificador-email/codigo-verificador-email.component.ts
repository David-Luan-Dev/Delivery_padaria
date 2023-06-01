import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-codigo-verificador-email',
  templateUrl: './codigo-verificador-email.component.html',
  styleUrls: ['./codigo-verificador-email.component.Scss'],
})
export class CodigoVerificadorEmailComponent implements OnInit {
  CodigoVerificador!: FormGroup;
  numero!: FormArray;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.CodigoVerificador = this.fb.group({
      codigo: this.fb.array([
        ['', [Validators.required, Validators.maxLength(1)]],
        ['', [Validators.required, Validators.maxLength(1)]],
        ['', [Validators.required, Validators.maxLength(1)]],
        ['', [Validators.required, Validators.maxLength(1)]],
        ['', [Validators.required, Validators.maxLength(1)]],
        ['', [Validators.required, Validators.maxLength(1)]],
      ]),
    });
    this.numero = this.CodigoVerificador.get('codigo') as FormArray;
  }
}
