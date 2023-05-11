import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

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
export class InformarEmailComponent {
  public value = '';
  emailFormControl = new FormControl ('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();
}
