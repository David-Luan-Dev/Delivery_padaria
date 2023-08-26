import {
  ChangeDetectorRef,
  Component,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
//import { DialogLocalizacaoComponent } from '../header/dialog-localizacao/dialog-localizacao.component';
import { DialogLocalizacaoComponent } from '../header/dialog-localizacao/dialog-localizacao.component';
import { CestaComunicacaoServiceService } from '../services/cesta-comunicacao-service.service';
@Component({
  selector: 'app-header-tela-um',
  templateUrl: './header-tela-um.component.html',
  styleUrls: ['./header-tela-um.component.scss'],
})
export class HeaderTelaUmComponent {
  @ViewChild('meuForm') formElement!: ElementRef;
  setFocusForm() {
    console.log('focado');
    this.formElement.nativeElement.focus();
  }

  isTelaLogin: boolean = false;
  numero: number = 7;
  searchTerm = '';
  showSuggestions = false;
  suggestions = ['Pão', 'Açucar', 'Queijo'];

  filteredSuggestions: string[] = [];
  isInputFocused = false;

  constructor(
    public dialog: MatDialog,
    public cd: ChangeDetectorRef,
    private cestaComunicacaoService: CestaComunicacaoServiceService
  ) {}
  // <!--representa as telas de 1200px pra cima-->
  public openDialogTelaUm() {
    this.cd.detectChanges();
    this.dialog.open(DialogLocalizacaoComponent, {
      data: 'Adicione ou escolha um endereço',
      width: '511px',
      height: '330px',
      position: {
        top: '38px',
      },
      enterAnimationDuration: '10ms',
      exitAnimationDuration: '300ms',
    });
    this.cd.detectChanges();
  }

  // public openCarrinhoTelaUm() {
  //   this.cd.detectChanges();
  //   this.dialog.open(CarrinhoPedidosComponent,);
  //   this.cd.detectChanges();

  // }
  onInput() {
    this.filteredSuggestions = this.suggestions.filter((suggestions) =>
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
  abrirGaveta() {
    console.log('teste');
    this.cestaComunicacaoService.alternarGaveta(true);
  }
}
