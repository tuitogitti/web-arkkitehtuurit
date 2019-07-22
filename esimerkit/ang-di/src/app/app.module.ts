import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from './components/app.component';
import {Product1Component} from './components/product1';
import {Product2Component} from './components/product2';
import {ProductService1} from './services/product-service';
// import {ProductService2} from './services/product-service';
@NgModule({
  imports: [BrowserModule],
  providers: [ProductService1],
  // Servicen vaihto moduulista. Tämä on IoC eli Inversion of Control:
  // providers: [{provide: ProductService1, useClass: ProductService2}],
  declarations: [AppComponent, Product1Component, Product2Component],
  bootstrap: [AppComponent]
})
export class AppModule { }
