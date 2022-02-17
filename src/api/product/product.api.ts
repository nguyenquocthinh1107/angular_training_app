import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/components/admin/product/product.component';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductApi {
  baseUrl: string = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  public getAllProduct(): Observable<Product[]> {
    return this.httpClient
      .get<Product[]>(`${this.baseUrl}/product`) // get data
      .pipe(map((res) => res));
  }
  public getProductById(id: number): Observable<Product> {
    return this.httpClient
      .get<Product>(`${this.baseUrl}/product/` + id) // get data by id
      .pipe(map((res) => res));
  }
  public addProduct(product: Product): Observable<void> {
    return this.httpClient.post<void>(`${this.baseUrl}/product`, product);
  }
}
