import { Injectable } from '@angular/core';
import { UserManagementService } from 'src/services/user/user.service';

export class UserApi {
    constructor(private userManagementService: UserManagementService) {
    }
    
}