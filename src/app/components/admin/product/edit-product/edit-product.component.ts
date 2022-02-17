import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from 'src/services/product/product.service';
import { Product } from '../product.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  editProduct: FormGroup = new FormGroup({
    category_name: new FormControl(''),
    detail: new FormControl(''),
    date: new FormControl(''),
  });
  constructor(
    private productService: ProductService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
  }

  ngOnInit(): void {
    // this.productService.actionGetAllProduct(this.data).subscribe((res) => {
    //   this.editProduct.setValue({
    //     category_name: res.product_name,
    //     detail: res.detail,
    //     date: res.date,
    //   });
    // });
  }

  handleSubmitEditCategory(form: FormGroup) {
    // const dataEdit = form.value;
    // console.log('DATA update:', dataEdit);
    // this.productService.editCategory(this.data, dataEdit).subscribe((res) => {
    //   alert("Edit success")
    //   console.log(res);
    //   // this.dialog.afterAllClosed(
        
    //   // )
    // });
  }

}
