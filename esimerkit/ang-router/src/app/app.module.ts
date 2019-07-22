/*
Reitityksen vaatimat 'palikat' importataan moduuliin
Reititysstrategia tulee provideriin
*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {AppComponent} from './components/app.component';
import {HomeComponent} from './components/home';
import {OtherComponent} from './components/other';
import {ErrorComponent} from './components/error';
// HashLocationStrategy vaatii tämän importtauksen
import {LocationStrategy, HashLocationStrategy, APP_BASE_HREF} from '@angular/common';
import {LoginGuard} from './guards/login.guard';
import { ExtraModule } from './extra.module';
// ExralazyModulea ei importata tässä vaan se importataan vasta kun sen linkkiä klikataan

@NgModule({
  imports: [BrowserModule, ExtraModule, AppRoutingModule],
  declarations: [AppComponent, HomeComponent, OtherComponent, ErrorComponent],
  // HashLocationStrategy ja Guard otetaan käyttöön providerissa
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
