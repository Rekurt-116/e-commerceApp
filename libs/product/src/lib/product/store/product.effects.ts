import { inject,  } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of } from "rxjs";
import { ProductsApiService } from "../services/products-api.service";
import { Product, productActions } from "./product.action";

export const loadProducts = createEffect(
  (actions$ = inject(Actions), productApiService = inject(ProductsApiService)) => {
    return actions$.pipe(
      ofType(productActions.loadProduct),
      exhaustMap(() =>
        productApiService.getProducts().pipe(
          map((products: Product[]) => productActions.productSuccess({ products })),
          catchError((error: { message: string }) =>
            of(productActions.productFailure({ error: error.message }))
          )
        )
      )
    );
  },
  { functional: true }
);

export const loadProductsByCategory = createEffect(
    (actions$ = inject(Actions), productApiService = inject(ProductsApiService)) => {
      return actions$.pipe(
        ofType(productActions.loadProductByCategory),
        exhaustMap(() =>
          productApiService.getProductByCategory('jewelery').pipe(
            map((products: Product[]) => productActions.productSuccess({ products })),
            catchError((error: { message: string }) =>
              of(productActions.productFailure({ error: error.message }))
            )
          )
        )
      );
    },
    { functional: true }
  );
  
  // export const displayErrorAlert = createEffect(
  //   () => {
  //     return inject(Actions).pipe(
  //       ofType(productActions.productFailure),
  //       tap(({ errorMsg }) => alert(errorMsg))
  //     );
  //   },
  //   { functional: true, dispatch: false }
  // );