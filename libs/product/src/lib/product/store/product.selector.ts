import { createFeature, createFeatureSelector, createSelector } from '@ngrx/store';
import { productReduser, ProductState } from './product.reducer';

const productFeatureKey = 'product';

export const selectProductState = createFeatureSelector<ProductState>(productFeatureKey)
export const selectProducts = createSelector(
    selectProductState,
    (state) => state.products
);
export const selectProductsByCategory = (category: string) =>
    createSelector(
        selectProductState,
        (state) => state.products.filter((product) => product.category === category)
    );
export const selectError = createSelector(
    selectProductState,
    (state) => state.error
);
export const productFeature = createFeature({
    name: productFeatureKey,
    reducer: productReduser
});