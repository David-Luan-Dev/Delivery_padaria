import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DadosCompartilhadosService } from 'src/app/services/dados-compartilhados.service';

@Component({
  selector: 'app-informe-codigo-email',
  templateUrl: './informe-codigo-email.component.html',
  styleUrls: ['./informe-codigo-email.component.scss']
})
export class InformeCodigoEmailComponent {

  codigoForm!: FormGroup;
  @ViewChildren('input0, input1, input2, input3, input4, input5')
  inputs!: QueryList<ElementRef>;

  codigoIncorreto: boolean = false;

  constructor(
    private formBilder: FormBuilder,
    public setEmailValue: DadosCompartilhadosService
  ) {
    this.codigoForm = this.formBilder.group({
      0: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      1: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      2: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      3: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      4: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      5: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
    })

    Object.values(this.codigoForm.controls).forEach(control => {
      control.markAsTouched();
    });
  }

  hasError(controlName: string, errorName: string) {
    const control = this.codigoForm.get(controlName);
    return control ? control.hasError(errorName) : false;
  }

  get getEmailValue() {
    return this.setEmailValue.getEmailValue();
  }

  ngAfterViewInit(): void {
    this.inputs.changes.subscribe(() => {
      this.configurarOunvintesEntrada();
    });
    this.configurarOunvintesEntrada();
  }

  configurarOunvintesEntrada(): void {
    this.inputs.forEach((input, index) => {
      input.nativeElement.addEventListener('input',
        () => this.moveFocus(index, input))
    })
  }

  moveFocus(index: number, input: ElementRef): void {
    const maxLength = 1;
    const currentLength = this.inputs.toArray()
    [index].nativeElement.value.length;

    if (currentLength === maxLength) {
      const nextIndex = index + 1;
      if (nextIndex < this.inputs.length) {
        this.inputs.toArray()
        [nextIndex].nativeElement.focus();
      } else {
        this.validateCode();
      }
    }

    this.printCode(input);
  }

  printCode(input: ElementRef): void {
    let code = '';
    this.inputs.forEach(input => {
      code += input.nativeElement.value;
    });
    console.log('Código digitado: ', code)
  }

  //validação do código e mostrar a div erro ou sucesso
  validateCode(): void {
    const enteredCode = this.getCodeFromInputs();
    const expectedCode = 'joao@silva.gmail.com';  //vai entrar alteração aqui

    this.codigoIncorreto = enteredCode !== expectedCode;
  }

  getCodeFromInputs(): string {
    let code = '';
    this.inputs.forEach(input => {
      code += input.nativeElement.value;
    });
    return code;
  }

  onSubmit() {

  }
}
