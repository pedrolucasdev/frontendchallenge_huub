import { Product } from './../../../model/product/product';
import { ProductService } from './../../../services/product/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  page = 1;
  pageSize = 14;
  total = 0;
  products: Product[] = [];
  selectedProduct: Product;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productService.getProducts(this.page, this.pageSize).subscribe(
      success => {
        this.products = success.data;
        this.total = success.paginator.total_items_count;
        this.selectedProduct = this.products[0];
      },
      error => {
        console.log('failed to fetch products')
      }
    )
  }

  changePage(value) {
    this.page = value;
    this.fetchProducts();
  }

  onProductSelected(p: Product) {
    this.selectedProduct = p;
  }
}
