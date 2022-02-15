
import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Category } from './category';
import { CategoryService } from './category.service';
import { AddCategoryComponent } from './add-category/add-category.component';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements AfterViewInit {
  category: Category[] = [];
   
  displayedColumns: string[] = ['category_name', 'detail', 'price', 'date', 'action'];
  dataSource: MatTableDataSource<Category>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private categoryService: CategoryService, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(this.category);
  }

  ngOnInit() {
    this.categoryService.getAllCategory().subscribe((res) => {
      this.dataSource.data = res;
      console.log("DATA Recieve:", res)
    })
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
    this.dialog.open(AddCategoryComponent)
  }
  //Open Delete dialog
  openDeleteDialog(id: number) {
    this.dialog.open(DeleteCategoryComponent, {
      data: id
    })
  }
}

