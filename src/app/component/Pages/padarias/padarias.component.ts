import { Component } from '@angular/core';

interface DadosFormulario {
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

  dadosFormulario: DadosFormulario = {
    nome: '',
    email: '',
    telefone: ''
  };

  constructor() {}

  onSubmit() {
    console.log('Dados do formulário enviados: ', this.dadosFormulario);
  }
}
