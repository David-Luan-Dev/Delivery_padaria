import { Component, ViewChildren, ElementRef, AfterViewInit, QueryList } from '@angular/core';

import { AbstractControl, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { FormBuilder } from '@angular/forms';

export class CustomErrorStateMatcher implements ErrorStateMatcher{
  codigo: string = '';
  digitos: string[] = [];

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
  codigo: string = '';
  digitos: string[] = [];
  form: FormGroup;

  // @ViewChildren('input1', { read: ElementRef }) inputRefs!: QueryList<ElementRef>;

  // ngAfterViewInit(): void {
  //   this.inputRefs.changes.subscribe(() => {
  //     this.inputRefs.toArray().forEach((inputRef, index) => {
  //       inputRef.nativeElement.addEventListener('input', (event: Event) => {
  //         const input = event.target as HTMLInputElement;
  //         this.onInput(inputRef, index + 1);
  //       });
  //     });
  //   });
  // }
  // onInput(input: HTMLInputElement, index: number): void {
  //   const value = input.value;
  //   this.digitos[index - 1] = value;

  //   if (value.length > 0) {
  //     if (index < this.inputRefs.length) {
  //       const nextInput = this.inputRefs.toArray()[index].nativeElement as HTMLInputElement;
  //       nextInput.focus();
  //     } else {
  //       this.codigo = this.digitos.join('');
  //     }
  //   } else {
  //     if (index > 1) {
  //       const prevInput = this.inputRefs.toArray()[index - 2].nativeElement as HTMLInputElement;
  //       prevInput.focus();
  //     }
  //   }
  // }


  customErrorStateMatcher = new CustomErrorStateMatcher();
  constructor(private fb: FormBuilder, ) {
    this.form = this.fb.group({
      numero: new FormControl('', [Validators.required])
    });
  }
}
