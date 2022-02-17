import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryService } from 'src/services/category/category.service';
import { AddCategoryComponent } from './add-category/add-category.component';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';

export interface Category {
  id: number;
  category_name: string;
  detail: string;
  date: string;
}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements AfterViewInit {
  category: Category[] = [];
  displayedColumns: string[] = [
    'category_name',
    'detail',
    'date',
    'action',
  ];
  dataSource: MatTableDataSource<Category>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private categoryService: CategoryService,
    public dialog: MatDialog
  ) {
    this.dataSource = new MatTableDataSource(this.category);
  }
  category$: Observable<Category[]>;
  ngOnInit() {
    this.categoryService.actionGetAllCategory().subscribe((res) => {
      this.dataSource.data = res;
    });
    console.log("OnInit called")
    // this.category$ = this.categoryService.getAllCategory(
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  //Open Add dialog
  openAddDialog() {
    let DialogRef = this.dialog.open(AddCategoryComponent);
    DialogRef.afterClosed().subscribe(result => {
      this.categoryService.actionGetAllCategory().subscribe((res) => {
        this.dataSource.data = res;
      });
    })
  }
  //Open Delete dialog
  openDeleteDialog(id: number) {
    let DialogRef = this.dialog.open(DeleteCategoryComponent, {
      data: id,
    });
    DialogRef.afterClosed().subscribe(result => {
      this.categoryService.actionGetAllCategory().subscribe((res) => {
        this.dataSource.data = res;
      });
    })
  }
  openEditDialog(id: number) {
    let DialogRef = this.dialog.open(EditCategoryComponent, {
      data: id,
    });
    DialogRef.afterClosed().subscribe(result => {
      this.categoryService.actionGetAllCategory().subscribe((res) => {
        this.dataSource.data = res;
      });
    })
  }
}
