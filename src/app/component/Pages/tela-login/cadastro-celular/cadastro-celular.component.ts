import { Component, OnInit } from '@angular/core';
import { CodigoVerificadorCelularComponent } from './codigo-verificador-celular/codigo-verificador-celular.component';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ServicoCompartilhadoService } from 'src/app/servico-compartilhado.service';


@Component({
  selector: 'app-cadastro-celular',
  templateUrl: './cadastro-celular.component.html',
  styleUrls: ['./cadastro-celular.component.scss']
})
export class CadastroCelularComponent implements OnInit{
  numeroCelularForm = this.formBuilder.group({
    numero: ['', [Validators.required]],
  });


  constructor(
    public formBuilder: FormBuilder,
    private dialog: MatDialog,
    private cs: ServicoCompartilhadoService
    ) {}

  ngOnInit(): void {}

  enviarCodigo(): void {
    if (this.numeroCelularForm.valid) {
      const numeroCelular = this.numeroCelularForm.get('numero')?.value;

      // Gerar código aleatório
      const codigoAleatorio = Math.floor(100000 + Math.random() * 900000).toString();

      // Armazenar o código no serviço
      this.cs.setCodigoGerado(codigoAleatorio);

      // Enviar o código para o número de telefone via WhatsApp (implementação necessária)

      console.log(`Código gerado: ${codigoAleatorio}`);
      console.log(`Enviando código para o número: ${numeroCelular}`);
    }
  }

  public codigoVerificadorDialog() {
    this.dialog.open(CodigoVerificadorCelularComponent, {
      width: '450px',
      height: '380px',
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms',
    });
  }
}

