import { HttpOptions } from './../../model/http/http-options';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GetProductDTO } from 'src/app/model/product/get-product-dto';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getProducts(page: number, pageSize: number): Observable<GetProductDTO> {
    const url = `${this.apiUrl}products?page=${page}&page_size=${pageSize}`;

    return this.http.get<GetProductDTO>(url, HttpOptions)
  }
}
