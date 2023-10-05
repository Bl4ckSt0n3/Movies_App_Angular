import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { ProductsComponent } from './products/products.component';
import { authGuard } from 'src/app/services/shared/auth.guard';

const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
  // { path: 'products:id', component: ProductsComponent, canActivate: [authGuard] },
  { path: 'products', component: ProductsComponent, canActivate: [authGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
