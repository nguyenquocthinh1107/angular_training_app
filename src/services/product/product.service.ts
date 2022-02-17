import { Injectable } from "@angular/core";
import { Product } from "src/app/components/admin/product/product.component";
import { Observable } from "rxjs";
import { ProductApi } from "src/api/product/product.api";

@Injectable({
    providedIn: 'root',
})
export class ProductService {

    constructor(private _productApi: ProductApi) {}

    public actionGetAllProduct(): Observable<Product[]> {
        return this._productApi.getAllProduct()
    }
    public actionGetProductById(id: number): Observable<Product> {
        return this._productApi.getProductById(id)
    }
    public actionAddProduct(product: Product): Observable<void> {
        return this._productApi.addProduct(product)
    }
}