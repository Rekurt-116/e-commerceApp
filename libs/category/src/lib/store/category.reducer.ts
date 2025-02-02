import { createReducer, on } from "@ngrx/store";
import { 
    getCategoryActions,
    CategoryActionsSuccess,
    CategoryActionsFailure 
} from "./category.action";

export interface CategoryState {
    categories: string[];
    currentCategory: string;
    error: string;
}

export const initialState: CategoryState = {
    categories: [],
    currentCategory: '',
    error: '',
}

export const categoryReducer = createReducer(
    initialState,
       on(CategoryActionsSuccess, (state, action) => {
        return {
            ...state,
            categories: action.categories,
            error: '',
        };
        }),
        on(CategoryActionsFailure, (state, action) => {
            return {
                ...state,
                categories: [],
                error: action.error
            }
        }),
)