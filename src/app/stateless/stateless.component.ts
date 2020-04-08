import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ChangeDetection } from '@angular/cli/lib/config/schema';
import { Product } from '../interface/product';

@Component({
  selector: 'app-stateless',
  templateUrl: './stateless.component.html',
  styleUrls: ['./stateless.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatelessComponent implements OnInit {

  @Input() product: Product;
  @Output() cursoMatriculado: EventEmitter<Product> = new EventEmitter();
  public matricula: string;
  private disable: boolean;

  constructor() { }

  ngOnInit(): void {
    this.matricula = 'Matricularse';
  }

  matricularse() {
    this.disable = true;
    this.matricula = '¡Curso matriculado!';
    this.cursoMatriculado.emit(this.product);
  }

  isDisabled() {
    return this.disable;
  }

}
