import {Component } from '@angular/core';
import {ProductService1, Product} from '../services/product-service';

@Component({
  selector: 'app-product1',
  template: `<div style="background-color: yellow">Product1: {{product.title}} {{product.price}}. {{product.description}}</div>`
})
export class Product1Component {
  product: Product;
/* ProductService1 on määritelty yhteiseksi oletusprovideriksi juurimoduulissa ja
   servicen vaihto on mahdollista sieltä.*/
   // servicen injektio konstruktoriin
  constructor(private productService: ProductService1) {
    this.product = productService.getProduct();
  }
}
