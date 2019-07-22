import { Component } from '@angular/core';
import { ProductService1, ProductService2, Product } from '../services/product-service';

@Component({
  selector: 'app-product2',
  template: `<div style="background-color: cyan">Product2: {{product.title}} {{product.price}}. {{product.description}}</div>`,
  /* Servicen vaihto komponentista käsin.
     Tässä "ylikirjoitetaan" moduulin tarjoama ProductService1 useClass -määreellä
     Jos providers -rivin kommentoi pois, käytetään moduulin tarjoamaa serviceä.
  */
  providers: [{ provide: ProductService1, useClass: ProductService2 }]
})
export class Product2Component {
  product: Product;
  // servicen injektio konstruktoriin, useClass vaihtaa servicen
  constructor(private productService: ProductService1) {
    this.product = productService.getProduct();
  }
}
