import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../interface/product';
import { Shop } from '../models/shop.model';
import { ConfirmComponent } from '../confirm/confirm.component';

@Component({
  selector: 'app-stateful',
  templateUrl: './stateful.component.html',
  styleUrls: ['./stateful.component.css']
})
export class StatefulComponent implements OnInit {

  @ViewChild(ConfirmComponent, {static: false})
  confirmChild: ConfirmComponent;
  
  shopModel: Shop = new Shop();
  boughtItems: Array<Product>;
  totalMatricula: number;  

  constructor() {
    this.boughtItems = [];
    this.totalMatricula = 0;
  }

  ngOnInit(): void {
  }

  clickItem(_curso) {
    this.boughtItems.push(_curso);
    this.totalMatricula += _curso.price;
  }

  cursoMatriculado(_event: Product) {
    this.clickItem(_event);
    this.confirmChild.isDisabled = false;
  }

}
