import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CategoryService } from '../category.service';
import { Category } from '../category';

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
      price: new FormControl(''),
      date: new FormControl(''),
    });
  }
  handleSubmitAddCategory(form: FormGroup) {
    const data = form.value;
    // data.id = randomInt(200)
    console.log('DATA:', data);
    this.categoryService.addCategory(data).subscribe((res) => {
      console.log(res);
    });
  }
}
