import { Component } from '@angular/core';

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
  value1!: string;
  value2!: string;
  value3!: string;
  val5!: string;
  constructor() {}
  onSubmit() {
    console.log('Dados do formulário enviados: ', this.dadosFormulario);
  }
}
