import { Component } from '@angular/core';

interface dadosFormulario {
  nome: string;
  email: string;
  telefone: string;
}

@Component({
  selector: 'app-padarias',
  templateUrl: './padarias.component.html',
  styleUrls: ['./padarias.component.scss'],
})
export default class PadariasComponent {

  dadosFormulario = {
    nome: '',
    email: '',
    telefone: ''
  };

  constructor() {}

  onSubmit() {
    console.log('Dados do formulário enviados: ', this.dadosFormulario);
  }
}
