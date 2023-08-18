import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.scss']
})
export class PesquisaComponent {
  @ViewChild('meuForm')formElement!: ElementRef;
  setFocusForm() {
    console.log('focado')
    this.formElement.nativeElement.focus();
  };

  searchTerm = "";
  showSuggestions = false;
  suggestions = ["Pão","Açucar", "Queijo"];

  filteredSuggestions: string[] = [];
  isInputFocused = false;

  onInput() {
    this.filteredSuggestions = this.suggestions.filter(
      suggestions => 
      suggestions.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    this.showSuggestions = true;
  }
  onBlur () {
    setTimeout(() => {
      this.showSuggestions = false;
    },200);

    if (!this.searchTerm) {
      this.isInputFocused = false;
    }
  }
  
  selectSuggestions(suggestions: string) {
    this.searchTerm = suggestions;
    this.showSuggestions = false;
  }

toggleFilter() {
  this.isInputFocused = !this.isInputFocused;
}

handleClick () {
  this.toggleFilter();
  this.setFocusForm();
  this.onInput();
}
}
