import { Injectable } from '@angular/core';
import { UserData } from './user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserManagementService {
  baseUrl: string = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  public getAllUser(): Observable<UserData[]> {
    return this.httpClient
      .get<UserData[]>(`${this.baseUrl}/user`) // get data
      .pipe(map((res) => res));
  }
}
