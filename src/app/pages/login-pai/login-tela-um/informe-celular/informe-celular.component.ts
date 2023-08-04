
import { Component, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DadosCompartilhadosService } from 'src/app/services/dados-compartilhados.service';


@Component({
  selector: 'app-informe-celular',
  templateUrl: './informe-celular.component.html',
  styleUrls: ['./informe-celular.component.scss']
})
export class InformeCelularComponent {
  celularForm: FormGroup;
  isInputFocused: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    public setCelularValue: DadosCompartilhadosService,
    public router: Router,
  ) {
    this.celularForm = this.formBuilder.group({
      celularFormControl: ['',
        [Validators.required,
        Validators.pattern(/^\d{11}$/)]]
    });
  }

  get celularFormControl(): FormControl {
    return this.celularForm.get('celularFormControl') as FormControl;
  }

  EnviarCelular() {
    this.router.navigate(['/codigo-celular']);
    const numeroCelularValidado = this.celularForm.get('celularFormControl')?.value;
    this.setCelularValue.setCelularValue(numeroCelularValidado);
    console.log("Codigo enviado com sucesso para: " + this.celularFormControl.value);
  }

  onInputFocus() {
    this.isInputFocused = true;
  }

}
