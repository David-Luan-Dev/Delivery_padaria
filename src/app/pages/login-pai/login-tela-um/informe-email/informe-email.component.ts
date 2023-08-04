import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DadosCompartilhadosService } from 'src/app/services/dados-compartilhados.service';

@Component({
  selector: 'app-informe-email',
  templateUrl: './informe-email.component.html',
  styleUrls: ['./informe-email.component.scss']
})
export class InformeEmailComponent {
  emailForm!: FormGroup;
  isInputFocused: boolean = false;

  constructor(private formBilder: FormBuilder,
    private setEmailValue: DadosCompartilhadosService,
    private router: Router
    ) {
      this.emailForm = this.formBilder.group ({
        emailFormControl: ['',[ Validators.required, Validators.email]]
      })
    }
    get emailFormControl(): FormControl {
    return this.emailForm.get('emailFormControl') as FormControl
  } 

  submitForm() {
    this.router.navigate(['/codigo-email']);
    const emailValido = this.emailForm.get('emailFormControl')?.value;
    this.setEmailValue.setCelularValue(emailValido)
    
    if(emailValido) {
      console.log("Email enviado com sucesso ",  this.emailFormControl.value)
    }else {
      console.log('Endereço de e-mail inválido.');
    }
  }
  
  onInputFocus() {
    this.isInputFocused = true;
  }

}
