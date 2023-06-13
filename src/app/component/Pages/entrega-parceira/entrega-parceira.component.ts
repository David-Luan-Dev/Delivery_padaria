import { Component } from '@angular/core';

interface DadosFormulario {
  nome: string;
  email: string;
  telefone: string;
}
@Component({
  selector: 'app-entrega-parceira',
  templateUrl: './entrega-parceira.component.html',
  styleUrls: ['./entrega-parceira.component.scss']
})
export class EntregaParceiraComponent {
  dadosFormulario: DadosFormulario = {
    nome: '',
    email: '',
    telefone: '',
  };

  constructor() {}

  onSubmit() {
    console.log('Dados do formulário enviados: ', this.dadosFormulario);
  }

}
