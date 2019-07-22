/*
Extralazy.module eroaa extra.modulesta siten että se ladataan 'lazy' -periaatteella.
Otetaan selaimen muistiin vasta kun sitä tarvitaan eli komponentin linkkiä klikataan.
Näin voidaan säästää sovelluksen latausaikaa ja selaimen resursseja esim. mobiilisovelluksissa.
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ExtralazyComponent } from './components/extra/extralazy';

const routes: Routes = [
    {  path: '', component: ExtralazyComponent }
];

@NgModule({
    imports: [CommonModule,
         RouterModule.forChild(routes)
    ],
    declarations: [ExtralazyComponent]
})

export default class ExtralazyModule { }
