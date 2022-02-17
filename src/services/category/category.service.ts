import { Injectable } from "@angular/core";
import { Category } from "src/app/components/admin/category/category.component";
import { Observable } from "rxjs";
import { CategoryApi } from "src/api/category/category.api";

@Injectable({
    providedIn: 'root',
  })
export class CategoryService {
    constructor(private _categoryApi: CategoryApi) {}

    public actionGetAllCategory(): Observable<Category[]> {
        return this._categoryApi.getAllCategory()
    }
    public actionGetCategoryById(id: number): Observable<Category> {
        return this._categoryApi.getCategoryById(id)
    }
    public actionAddCategory(category: Category): Observable<void> {
        return this._categoryApi.addCategory(category)
    }
    public actionEditCategory(id: number, category: Category): Observable<void> {
        return this._categoryApi.editCategory(id, category)
    }
    public actionDeleteCategory(id: number): Observable<void> {
        return this._categoryApi.deleteCategory(id)
    }
}