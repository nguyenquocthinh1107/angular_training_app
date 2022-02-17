import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from 'src/services/product/product.service';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

export interface Product {
  id: number;
  product_name: string;
  category: string;
  detail: string;
  date: string;
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements AfterViewInit {
  category: Product[] = [];
  displayedColumns: string[] = ['product_name', 'category', 'detail', 'date', 'action'];
  dataSource: MatTableDataSource<Product>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private productService: ProductService,
    public dialog: MatDialog
  ) {
    this.dataSource = new MatTableDataSource(this.category);
  }
  category$: Observable<Product[]>;
  ngOnInit() {
    this.productService.actionGetAllProduct().subscribe((res) => {
      this.dataSource.data = res;
    });
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
  openAddDialog() {
    let DialogRef = this.dialog.open(AddProductComponent);
    DialogRef.afterClosed().subscribe(result => {
      this.productService.actionGetAllProduct().subscribe((res) => {
        this.dataSource.data = res;
      });
    })
  }
  //Open Delete dialog
  openDeleteDialog(id: number) {
    let DialogRef = this.dialog.open(DeleteProductComponent, {
      data: id,
    });
    DialogRef.afterClosed().subscribe(result => {
      this.productService.actionGetAllProduct().subscribe((res) => {
        this.dataSource.data = res;
      });
    })
  }
  openEditDialog(id: number) {
    let DialogRef = this.dialog.open(EditProductComponent, {
      data: id,
    });
    DialogRef.afterClosed().subscribe(result => {
      this.productService.actionGetAllProduct().subscribe((res) => {
        this.dataSource.data = res;
      });
    })
  }
}
