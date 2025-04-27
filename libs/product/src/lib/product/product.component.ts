import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { productActions } from './store/product.action';
import { selectProducts } from './store/product.selector';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'lib-product',
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  standalone: true,
})
export class ProductComponent {
  private readonly store = inject(Store);

  @Input() set categoryName(name: string) {
    if (name) {
      this.store.dispatch(
        productActions.loadProductByCategory({ category: name })
      );
    } else {
      this.store.dispatch(productActions.loadProduct());
    }
  }

  @Input()
  animation: any;

  products$ = this.store.select(selectProducts);
}
