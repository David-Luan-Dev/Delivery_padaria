import { Component, ViewChildren, ElementRef, AfterViewInit, QueryList, OnInit, ViewChild } from '@angular/core';

import { AbstractControl, FormArray, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-codigo-verificador-celular',
  templateUrl: './codigo-verificador-celular.component.html',
  styleUrls: ['./codigo-verificador-celular.component.scss']
})
export class CodigoVerificadorCelularComponent implements OnInit{

  CodigoVerificador = this.fb.group({
    codigo: this.fb.array(['','','','','', [Validators.required, Validators.minLength(1)]])
  })
  numero = this.CodigoVerificador.get('codigo') as FormArray

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {

  }

  codigoVerificadorWatsApp() {
  }

}
