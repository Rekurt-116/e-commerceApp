import { Route } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { loadProducts, loadProductsByCategory, productFeature } from '@rekurt-workspace/product';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { loadCart, cartFeature } from '@rekurt-workspace/cart';
export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'product',
    pathMatch: 'full',
  },
  {
      path: 'product',
      loadComponent: () =>
        import('@rekurt-workspace/product').then((m) => m.ProductComponent),
      providers: [ 
        provideState(productFeature),
        provideEffects({ loadProducts, loadProductsByCategory })
      ],
  },
  {
    path: 'product/:categoryName',
    loadComponent: () =>
      import('@rekurt-workspace/product').then((m) => m.ProductComponent),
    data: {
      animation: 'CategoryPage',
    },
    providers: [ 
      provideState(productFeature),
      provideEffects({ loadProducts, loadProductsByCategory })
    ],
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('@rekurt-workspace/cart').then((m) => m.CartComponent),
    providers: [
      provideState(cartFeature),
      provideEffects({ loadCart })
    ]
  }
];
