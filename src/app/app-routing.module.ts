import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './core/auth/auth.component';
import { RegisterComponent } from './core/register/register.component';
import { authGuard } from './services/shared/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth' },
  {
    path: 'pages',
    loadChildren: () => import('./modules/pages/pages.module').then(module => module.PagesModule),
    // canActivate: [authGuard],
  },
  { path: 'auth', component: AuthComponent},
  { path: 'register', component: RegisterComponent },

  // Note: If you add the Wildcard Route as the first route in Router Configuration 
  // then no other routes will be reached as the Wildcard
  { path: '**', component: AuthComponent }, // wildcard route method
];

// ****************** NOTE ******************** //
// The order of the routes is very important. When matching routes find, the angular router uses first-match wins strategy. 
// So more specific routes should be placed above less specific routes. 
// So, Routes with a static path should be placed first, followed by the empty path route, that matches the default route. 
// The wildcard route should be the last route in your router configuration as shown in the below image.

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
