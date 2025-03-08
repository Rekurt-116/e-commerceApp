import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { productActions } from './store/product.action';
import { selectProducts, selectProductsByCategory } from './store/product.selector';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'lib-product',
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  standalone: true
})
export class ProductComponent implements OnInit {

  private readonly store = inject(Store)

  @Input()
  categoryName = '';

  @Input()
  animation: any

  products$ = this.categoryName ? this.store.select(selectProductsByCategory(this.categoryName)) : this.store.select(selectProducts)


  ngOnInit() : void {
    this.store.dispatch( productActions.loadProduct())
  }
}