import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Product } from "../store/product.action";

@Injectable({providedIn: 'root'})
export class ProductsApiService {
    private http =  inject(HttpClient)

    getProducts() {
        return this.http.get<Product[]>('https://fakestoreapi.com/products');
    }

    getProductByCategory(category: string) {
        return this.http.get<Product[]>(`https://fakestoreapi.com/products/category/${category}`);
    }
}