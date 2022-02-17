import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/components/admin/user/user.component';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserApi {
  baseUrl: string = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  public getAllUser(): Observable<User[]> {
    return this.httpClient
      .get<User[]>(`${this.baseUrl}/user`) // get data
      .pipe(map((res) => res));
  }
  
}
