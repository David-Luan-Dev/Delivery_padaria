import { ChangeDetectorRef, Component, ViewChild, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogLocalizacaoComponent } from '../header/dialog-localizacao/dialog-localizacao.component';
//import { DialogLocalizacaoComponent } from '../header/dialog-localizacao/dialog-localizacao.component';
@Component({
  selector: 'app-header-tela-dois',
  templateUrl: './header-tela-dois.component.html',
  styleUrls: ['./header-tela-dois.component.scss']
})
export class HeaderTelaDoisComponent {
  @ViewChild('meuForm') formElement!: ElementRef;
  setFocusForm() {
    console.log('focado')
    this.formElement.nativeElement.focus();
  };

  isTelaLogin: boolean = false;
  nomeMenu: string = 'Início'
  numero: number = 7;
  searchTerm = "";
  showSuggestions = false;
  suggestions = ["Pão", "Açucar", "Queijo"];

  filteredSuggestions: string[] = [];
  isInputFocused = false;

  constructor(public dialog: MatDialog, public cd: ChangeDetectorRef) { }
  // <!--representa as telas de 1200px pra cima-->
  public openDialogTelaDois() {
    this.cd.detectChanges();
    this.dialog.open(DialogLocalizacaoComponent, {
      data: 'Adicione ou escolha um endereço',
      width: '500px',
      height: '350px',
      position: {
        //top: '15px'
      },
      enterAnimationDuration: '10ms',
      exitAnimationDuration: '300ms',
    });
    this.cd.detectChanges();
  }

  onInput() {
    this.filteredSuggestions = this.suggestions.filter(
      suggestions =>
        suggestions.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    this.showSuggestions = true;
  }
  onBlur() {
    setTimeout(() => {
      this.showSuggestions = false;
    }, 200);

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

  handleClick() {
    this.toggleFilter();
    this.setFocusForm();
    this.onInput();
  }
}
