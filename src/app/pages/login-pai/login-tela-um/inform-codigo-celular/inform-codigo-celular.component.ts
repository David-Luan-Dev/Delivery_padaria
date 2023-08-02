import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DadosCompartilhadosService } from 'src/app/services/dados-compartilhados.service';

@Component({
  selector: 'app-inform-codigo-celular',
  templateUrl: './inform-codigo-celular.component.html',
  styleUrls: ['./inform-codigo-celular.component.scss']
})
export class InformCodigoCelularComponent implements AfterViewInit {
  codigoForm!: FormGroup;
  @ViewChildren('input0, input1, input2, input3, input4, input5')
  inputs!: QueryList<ElementRef>;

  constructor(
    private formBilder: FormBuilder,
    public setCelularValue: DadosCompartilhadosService
  ) {
    this.codigoForm = this.formBilder.group({
      0: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      1: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      2: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      3: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      4: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      5: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
    })

    // Object.values(this.codigoForm.controls).forEach(control => {
    //   control.markAsTouched();
    // });
  }

  hasError(controlName: string, errorName: string) {
    const control = this.codigoForm.get(controlName);
    return control ? control.hasError(errorName) : false;
  }

  get getCelularValue() {
    return this.setCelularValue.getCelularValue();
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
}
