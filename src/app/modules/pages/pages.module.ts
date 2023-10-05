import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PagesRoutingModule } from './pages-routing.module';
import { MoviesComponent } from './movies/movies.component';
import { HighlightDirective } from '../../directives/highlight.directive';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [
    MoviesComponent,
    HighlightDirective,
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class PagesModule { }
