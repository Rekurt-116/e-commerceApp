import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Cart } from "../interface/cart.interface";

@Injectable({providedIn: 'root'})
export class CartService {
    private http: HttpClient = inject(HttpClient);

    getCart() {
        return this.http.get<Cart[]>('https://fakestoreapi.com/carts')
    }
}