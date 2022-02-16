
import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryService } from './category.service';
import { AddCategoryComponent } from './add-category/add-category.component';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

export interface Category {
  id: number;
  category_name: string;
  detail: string;
  price: string;
  date: string;
}

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
  category$: Observable<Category[]>
  ngOnInit() {
    // this.categoryService.getAllCategory().subscribe((res) => {
    //   this.dataSource.data = res;
    //   console.log('Data recieve:', res)
    // })
    // this.category$ = this.categoryService.getAllCategory()
    this.refesh()
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
  //Auto refesh
  refesh() {
    this.categoryService.getAllCategory().subscribe((data: Category[]) => {
      this.dataSource.data = data
    })
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
  openEditDialog(id: number) {
    this.dialog.open(EditCategoryComponent, {
      data: id
    })
  }
}

