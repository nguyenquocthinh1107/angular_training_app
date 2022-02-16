import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CategoryService } from '../category.service';
import { Category } from '../category.component';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss'],
})
export class EditCategoryComponent implements OnInit {
  editCategory: FormGroup = new FormGroup({
    category_name: new FormControl(''),
    detail: new FormControl(''),
    price: new FormControl(''),
    date: new FormControl(''),
  });
  private notifier: NotifierService;
  constructor(
    private categoryService: CategoryService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    notifierService: NotifierService,
    private dialog : MatDialog
  ) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    this.categoryService.getCategoryById(this.data).subscribe((res) => {
      this.editCategory.setValue({
        category_name: res.category_name,
        detail: res.detail,
        price: res.price,
        date: res.date,
      });
    });
  }
  public showNotification(type: string, message: string): void {
    this.notifier.notify(type, message);
  }

  handleSubmitEditCategory(form: FormGroup) {
    const dataEdit = form.value;
    console.log('DATA update:', dataEdit);
    this.categoryService.editCategory(this.data, dataEdit).subscribe((res) => {
      alert("Edit success")
      console.log(res);
      // this.dialog.afterAllClosed(
        
      // )
    });
  }
}
