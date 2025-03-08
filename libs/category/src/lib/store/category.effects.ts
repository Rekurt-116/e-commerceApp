import { inject, Injectable } from '@angular/core';
import { CategoryApiService } from '../category/services/category-api.service';
import { createEffect, ofType } from '@ngrx/effects';
import { Actions } from '@ngrx/effects';
import { catchError, EMPTY, exhaustMap, map } from 'rxjs';
import { 
    getCategoryActions,
    CategoryActionsSuccess,
    CategoryActionsFailure 
} from "./category.action";

@Injectable()
export class CategoryEffects {
  private actions$ = inject(Actions);
  private ApiService = inject(CategoryApiService);

  loadCategories$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getCategoryActions),
      exhaustMap(() =>
        this.ApiService.getCategories().pipe(
          map((categories) => ( CategoryActionsSuccess(categories) )),
          catchError(() => EMPTY)
        )
      )
    );
  });
}
