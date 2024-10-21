import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getProducts(offset: number, limit: number) {
    return this.http.get(`https://dummyjson.com/products?limit=${limit}&skip=${offset}`);
  }
}
