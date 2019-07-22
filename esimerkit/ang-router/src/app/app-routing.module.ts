import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home';
import { OtherComponent } from './components/other';
import { ErrorComponent } from './components/error';
import { LoginGuard } from './guards/login.guard';
// tähän määritellään sovelluksen reitit eli mikä url-polku
// vastaa mitäkin komponenttia
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'other/:id', component: OtherComponent, canActivate: [LoginGuard] },
  // lazy -tyyppinen moduuli ladataan vain silloin kun sitä tarvitaan eli klikataan linkkiä
    { path: 'extralazy', loadChildren: './extralazy.module'},
    { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
