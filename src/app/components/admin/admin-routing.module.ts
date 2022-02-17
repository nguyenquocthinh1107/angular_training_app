import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UserComponent } from './user/user.component';
import { CategoryComponent } from './category/category.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { ProductComponent } from './product/product.component';
const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'user',
        component: UserComponent,
      },
      {
        path: 'category',
        component: CategoryComponent,
      },
      {
        path: 'product',
        component: ProductComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
