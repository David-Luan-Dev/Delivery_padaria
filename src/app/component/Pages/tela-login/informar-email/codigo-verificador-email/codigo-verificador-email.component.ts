import { Component, OnInit } from '@angular/core';
import { Renderer2, ElementRef } from '@angular/core';

interface Codigo {
  numero1: string;
  numero2: string;
  numero3: string;
  numero4: string;
  numero5: string;
  numero6: string;
}

@Component({
  selector: 'app-codigo-verificador-email',
  templateUrl: './codigo-verificador-email.component.html',
  styleUrls: ['./codigo-verificador-email.component.Scss']
})
export class CodigoVerificadorEmailComponent implements OnInit{
  campo1!: string;
  campo2!: string;
  campo3!: string;
  campo4!: string;
  campo5!: string;
  campo6!: string;

  isDisabled: boolean = false;

constructor(private renderer: Renderer2){}

codigo: Codigo = {
  numero1: '', numero2:'', numero3: '',
  numero4: '', numero5: '', numero6: ''
};

ngOnInit(): void {}

mudarFocoProximoCampo(event: any, campoAtual: ElementRef){
  const maxLength = campoAtual.nativeElement.getAttribute('maxLength');
  const currentLength = campoAtual.nativeElement.value.length;

  if(currentLength >= maxLength) {
    const nextField = campoAtual.nativeElement.nextElementSibling;
    if(nextField){
      this.renderer.selectRootElement(nextField).focus();
    }
  }
}

codigoVerificadorEmail() {
  console.log(this.codigo)
}

}
