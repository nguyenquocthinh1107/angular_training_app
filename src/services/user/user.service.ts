import { Injectable } from '@angular/core';
import { User } from '../../app/components/admin/user/user.component';
import { Observable } from 'rxjs';
import { UserApi } from 'src/api/user/user.api';

@Injectable({
  providedIn: 'root',
})
export class UserManagementService {

  constructor(private _userApi : UserApi) {}

  public actionGetAllUser(): Observable<User[]> {
    return this._userApi.getAllUser()
  }
}
