import { createActionGroup, emptyProps, props } from '@ngrx/store'
import { Cart } from '../interface/cart.interface';

export const cartActions = createActionGroup({
    source: 'Cart',
    events: {
      loadCart: emptyProps(),
      cartSuccess: props<{ cart: Cart[] }>(),
      cartFailure: props<{ error: string }>(),
    },
  });