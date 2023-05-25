import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { CodigoVerificadorEmailComponent } from './codigo-verificador-email/codigo-verificador-email.component';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && ( control.dirty || control.touched || isSubmitted))
  }
}

@Component({
  selector: 'app-informar-email',
  templateUrl: './informar-email.component.html',
  styleUrls: ['./informar-email.component.scss']
})
export class InformarEmailComponent implements OnInit{
  public email = '';
  emailFormControl = new FormControl ('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();

  constructor(public formBuilder: FormBuilder, private dialog: MatDialog) {}


  ngOnInit(): void {}

  EnviarCodigoEmail() {
    console.log(this.emailFormControl)
  }

  public openCodigoEmail() {
    this.dialog.open(CodigoVerificadorEmailComponent, {
      width: '450px',
      height: '380px',
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms',
    });
  }

}
