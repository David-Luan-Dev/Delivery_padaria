
import { Component} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-informe-celular',
  templateUrl: './informe-celular.component.html',
  styleUrls: ['./informe-celular.component.scss']
})
export class InformeCelularComponent {
  celularForm: FormGroup;
  isInputFocused: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.celularForm = this.formBuilder.group({
      celularFormControl: ['',
      [Validators.required,
      Validators.pattern(/^\d{11}$/)]]
    });
  }

  get celularFormControl(): FormControl {
    return this.celularForm.get('celularFormControl') as FormControl;
  }

  onInputFocus() {
    this.isInputFocused = true;
  }

}
