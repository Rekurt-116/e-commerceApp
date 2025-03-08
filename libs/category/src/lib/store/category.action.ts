import { createAction } from '@ngrx/store';

export const getCategoryActions = createAction('[Category]  Get Categories');
export const CategoryActionsSuccess = createAction(
  '[Category] Get Categories Success',
  (categories: string[]) => ({ categories })
);
export const CategoryActionsFailure = createAction(
  '[Category] Get Categories Failure',
  (error: string) => ({ error })
);
