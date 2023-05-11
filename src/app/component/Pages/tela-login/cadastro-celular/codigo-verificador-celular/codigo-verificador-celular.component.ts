import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { FormBuilder } from '@angular/forms';

export class CustomErrorStateMatcher implements ErrorStateMatcher{
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null): boolean {
      console.log(control, form);
      return true;
  }
}
@Component({
  selector: 'app-codigo-verificador-celular',
  templateUrl: './codigo-verificador-celular.component.html',
  styleUrls: ['./codigo-verificador-celular.component.scss']
})
export class CodigoVerificadorCelularComponent {
  form: FormGroup;
  customErrorStateMatcher = new CustomErrorStateMatcher();
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      numero: new FormControl('', [Validators.required])
    });
  }
}
