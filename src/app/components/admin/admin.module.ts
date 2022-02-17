import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { UserComponent } from './user/user.component';  
import { MaterialModule } from 'src/material.module';
import { CategoryComponent } from './category/category.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteCategoryComponent } from './category/delete-category/delete-category.component';
import { EditCategoryComponent } from './category/edit-category/edit-category.component';
import { ProductComponent } from './product/product.component';
import { NotifierModule } from 'angular-notifier';
import { AddProductComponent } from './product/add-product/add-product.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { DeleteProductComponent } from './product/delete-product/delete-product.component';



@NgModule({
    declarations: [
        AdminComponent,
        UserComponent,
        CategoryComponent,
        AddCategoryComponent,
        DeleteCategoryComponent,
        EditCategoryComponent,
        ProductComponent,
        AddProductComponent,
        EditProductComponent,
        DeleteProductComponent,
    ],
    imports: [
        MaterialModule,
        CommonModule,
        AdminRoutingModule,
        ReactiveFormsModule,
        NotifierModule
    ],
    providers: [],
    bootstrap: []
})
export class AdminModule { }