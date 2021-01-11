import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  isAtProductList = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.isAtProductList = this.router.url === '/product-list';
  }

  onProductListClick() {
    if (this.router.url !== '/product-list') {
      this.router.navigate(['/product-list']);
      this.isAtProductList = true;
    }
  }

}
