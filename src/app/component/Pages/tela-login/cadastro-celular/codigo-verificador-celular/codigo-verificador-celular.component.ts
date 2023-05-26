import { Component, ViewChildren, ElementRef, AfterViewInit, QueryList, OnInit } from '@angular/core';

import { AbstractControl, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { FormBuilder } from '@angular/forms';

interface Codigo {
  numero1: string;
  numero2: string;
  numero3: string;
  numero4: string;
  numero5: string;
  numero6: string;
}

@Component({
  selector: 'app-codigo-verificador-celular',
  templateUrl: './codigo-verificador-celular.component.html',
  styleUrls: ['./codigo-verificador-celular.component.scss']
})
export class CodigoVerificadorCelularComponent {

  form!: FormGroup;

  codigo: Codigo = {
    numero1: '', numero2:'', numero3: '',
    numero4: '', numero5: '', numero6: ''
  };

  codigoVerificadorWatsApp() {
    console.log(this.codigo)
  }
}
