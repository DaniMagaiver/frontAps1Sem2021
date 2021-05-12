import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  selector: 'app-nav-bar',
})
export class NavBarComponent {
  @Output() contatoOuConversa = new EventEmitter();
  formularioCliente: FormGroup;
  icons = {
    search: faSearch,
  };

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.criarFormulario();
  }

  criarFormulario(): void {
    this.formularioCliente = this.formBuilder.group({
      nome: '',
    });
    this.formularioCliente.valueChanges.subscribe((res) => {
      this.enviarContatoOuconversa(res.nome);
    });
  }

  enviarContatoOuconversa(valorDigitado: string): void {
    this.contatoOuConversa.emit(valorDigitado);
  }
}
