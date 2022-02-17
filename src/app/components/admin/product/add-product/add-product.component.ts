import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/services/product/product.service';
import { Product } from '../product.component';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  addProduct: FormGroup;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.addProduct = new FormGroup({
      category_name: new FormControl(''),
      detail: new FormControl(''),
      date: new FormControl(''),
    });
  }
  handleSubmitAddCategory(form: FormGroup) {
    const data = form.value;
    this.productService.actionAddProduct(data).subscribe((res) => {
      alert("Add new category success")
      console.log(res);
    });
  }

}
