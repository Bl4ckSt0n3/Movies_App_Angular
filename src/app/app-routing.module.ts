import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './modules/pages/movies/movies.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'pages/movies' },
  {
    path: 'pages',
    loadChildren: () => import('./modules/pages/pages.module').then(module => module.PagesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
