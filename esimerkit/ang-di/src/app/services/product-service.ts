import {Injectable} from '@angular/core';

// Tuoteolion ominaisuuksien tietotyypit on määritelty tässä servicen sisällä
export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public description: string) {
  }
}
/* Jokaisessa service-luokassa olisi hyvä olla @Injectable() -annotaatio, koska servicet yleensä
aina injektoidaan konstruktoreihin. Homma toimii ilman sitäkin, mutta Anglarin Injector antaa sisäisen
virheen */
@Injectable()
export class ProductService1 {
  getProduct(): Product {
    return new Product( 0, 'Huawei7', 299.99, 'Älyvapaa luuri 7 tuuman näytöllä. Tulee productService1:stä');
  }
}
@Injectable()
export class ProductService2 implements ProductService1 {
  getProduct(): Product {
    return new Product( 0, 'Samsung8', 399.99, 'Älyvapaa luuri 8 tuuman näytöllä. Tulee productService2:sta');
  }
}
