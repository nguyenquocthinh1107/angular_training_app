import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CategoryService } from 'src/services/category/category.service';
import { Category } from '../category.component';
  
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
})
export class AddCategoryComponent implements OnInit {
  addCategory: FormGroup;
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.addCategory = new FormGroup({
      category_name: new FormControl(''),
      detail: new FormControl(''),
      date: new FormControl(''),
    });
  }
  handleSubmitAddCategory(form: FormGroup) {
    const data = form.value;
    this.categoryService.actionAddCategory(data).subscribe((res) => {
      alert("Add new category success")
      console.log(res);
    });
  }
}
