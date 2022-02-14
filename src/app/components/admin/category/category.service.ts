import { Injectable } from '@angular/core';
import { Category } from './category';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
}
