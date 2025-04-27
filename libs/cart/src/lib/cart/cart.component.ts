import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartFacade } from '../store/cart.facade';

@Component({
  selector: 'lib-cart',
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  private readonly facade = inject(CartFacade);
  cart$ = this.facade.cart$;

  ngOnInit(): void {
    this.facade.loadCart();
  }
}
