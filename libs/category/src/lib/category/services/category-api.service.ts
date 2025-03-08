import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CategoryApiService {

  private readonly apiService =  inject(HttpClient)
  
  getCategories() {
      return this.apiService.get<string[]>('https://fakestoreapi.com/products/categories')
    }
}
