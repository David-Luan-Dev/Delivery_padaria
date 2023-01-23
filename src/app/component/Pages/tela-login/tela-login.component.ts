import { loginModel } from 'src/models/loginModel';
import { Router, RouterModule } from '@angular/router';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

import { Component, OnInit, NgModule } from '@angular/core';
import { FloatLabelType } from '@angular/material/form-field';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.scss'],
})
export class TelaLoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(){}

  hide = true;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto' as FloatLabelType);
  email = new FormControl('', [Validators.required, Validators.email]);
  senha = new FormControl('', [Validators.required]);

  getErrorMessage() {
    if (this.email.hasError('required') && this.senha.hasError('required')) {
      return '';
    }

    return this.email.hasError('email') ? 'Digite um email válido' : '';
    this.senha.hasError('senha') ? '' : ';';
  }
  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }
  ngOnInit(): void {}

  submit(){
    console.log("Enviado com sucesso!")
  }
}
