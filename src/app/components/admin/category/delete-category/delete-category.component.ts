import { Component, OnInit, Inject } from '@angular/core';
import { CategoryService } from 'src/services/category/category.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.scss'],
})
export class DeleteCategoryComponent implements OnInit {
  constructor(
    private categoryService: CategoryService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
  }
  handleDeleteCategory() {
    this.categoryService.actionDeleteCategory(this.data).subscribe((res) => {
      alert("Delete success")
      console.log(res);
    });
  }
}
