import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { UserComponent } from './user/user.component';  
import { MaterialModule } from 'src/material.module';
import { CategoryComponent } from './category/category.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';



@NgModule({
    declarations: [
        AdminComponent,
        UserComponent,
        CategoryComponent,
        AddCategoryComponent,
    ],
    imports: [
        MaterialModule,
        CommonModule,
        AdminRoutingModule,
    ],
    providers: [],
    bootstrap: []
})
export class AdminModule { }