import { Injectable } from '@angular/core';
import { Category } from './category.component';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  baseUrl: string = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  public getAllCategory(): Observable<Category[]> {
    return this.httpClient
      .get<Category[]>(`${this.baseUrl}/category`) // get data  
      .pipe(map((res) => res));
  }
  public getCategoryById(id: number): Observable<Category> {
    return this.httpClient
      .get<Category>(`${this.baseUrl}/category/`+id) // get data by id
      .pipe(map((res) => res));
  }
  public addCategory(category: Category): Observable<void> {
    return this.httpClient.post<void>(`${this.baseUrl}/category`, category);
  }
  public deleteCategory(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/category/` + id);
  }
  public editCategory(id: number, category: Category): Observable<void> {
    return this.httpClient.patch<void>(`${this.baseUrl}/category/` + id, category);
  }
}
