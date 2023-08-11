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
  emailForm!: FormGroup; //Declaração do formulário
  isInputFocused: boolean = false; //Estado do foco do campo de entrada

  constructor(private formBilder: FormBuilder,
    private setEmailValue: DadosCompartilhadosService,
    private router: Router
    ) {
      //Configuração do formulário usando o FormBilder
      this.emailForm = this.formBilder.group ({
        emailFormControl: ['',[ Validators.required, Validators.email]]
      })
    }
    //Getter para aessar o controle de formulário de e-mail
    get emailFormControl(): FormControl {
    return this.emailForm.get('emailFormControl') as FormControl
  } 
  //Método quando o formulário é submetido
  submitForm() {
    this.router.navigate(['/codigo-email']);  //Navegar para rota do '/código-email'
    const emailValido = this.emailForm.get('emailFormControl')?.value; //Obter o valor do campo de e-mail
    this.setEmailValue.setEmailValue(emailValido) //Definir o valor do e-mail no serviço compartilhado
    
    //verificar se o e-mail é válido
    if(emailValido) {
      console.log("Email enviado com sucesso ",  this.emailFormControl.value)
    }else {
      console.log('Endereço de e-mail inválido.');
    }
  }
  
   // Método para atualizar o estado do foco do campo de entrada
   updateFocusState(isFocused: boolean) {
    this.isInputFocused = isFocused;
  }

}
