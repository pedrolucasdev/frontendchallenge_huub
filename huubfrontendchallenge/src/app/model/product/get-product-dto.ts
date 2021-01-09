import { Paginator } from "../pagination/paginator";
import { Product } from "./product";

export class GetProductDTO {
  code: number;
  message: string;
  details: string;
  paginator: Paginator;
  data: Product[];
  request_identifier: string;
}




