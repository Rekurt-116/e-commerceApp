import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CartService } from "../services/cart.service";
import { cartActions } from "./cart.action";
import { catchError, exhaustMap, map, of } from "rxjs";
import { Cart } from "../interface/cart.interface";

export const loadCart = createEffect(
  (actions$ = inject(Actions), productApiService = inject(CartService)) => {
    return actions$.pipe(
      ofType(cartActions.loadCart),
      exhaustMap(() =>
        productApiService.getCart().pipe(
          map((cart: Cart[]) => cartActions.cartSuccess({ cart })),
          catchError((error: { message: string }) =>
            of(cartActions.cartFailure({ error: error.message }))
          )
        )
      )
    );
  },
  { functional: true }
);