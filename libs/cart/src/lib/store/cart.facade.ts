import { inject, Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { cartActions } from "./cart.action";
import { selectCart } from "./cart.selector";

@Injectable({ providedIn: 'root' })
export class CartFacade {
private readonly store: Store = inject(Store);
cart$ = this.store.select(selectCart);


loadCart() {
    this.store.dispatch(cartActions.loadCart());
}
}