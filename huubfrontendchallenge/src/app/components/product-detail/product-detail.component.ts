import { Product } from './../../model/product/product';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'product-details',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  @Input() product: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
