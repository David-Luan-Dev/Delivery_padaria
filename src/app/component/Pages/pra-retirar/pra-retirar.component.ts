import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pra-retirar',
  templateUrl: './pra-retirar.component.html',
  styleUrls: ['./pra-retirar.component.scss'],
})
export class PraRetirarComponent implements OnInit {

  inputs: string[] = ['', '', '', '', '', '', ''];

  currentInput: HTMLInputElement | null = null;

  ngOnInit() {}
  onKeyup(event: KeyboardEvent) {
    const inputValue = (event.target as HTMLInputElement).value;

    if (inputValue.length === 1 && this.currentInput) {
      const currentIndex = this.inputs.findIndex(input => input === inputValue);
      if (currentIndex < this.inputs.length - 1) {
        const nextInput = this.currentInput.nextElementSibling as HTMLInputElement;
        nextInput.focus();
        nextInput.value = inputValue;
      }
    }
  }
}
