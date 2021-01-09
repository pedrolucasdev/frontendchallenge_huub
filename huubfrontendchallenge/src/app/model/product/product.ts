import { ProductVariant } from "./product-variant";

export class Product {
  id: number;
  variants: ProductVariant[];
  name: string;
  description: string;
  supplier: string;
  season: string;
  family: string;
  subfamily: string;
  type: string;
  fabric: string;
  currency_iso3code: string;
}
