import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo : 'auth',
    pathMatch: 'full'
  },
  {
    path:'auth',
    loadChildren: ()=>import('./authentication/authentication.module').then(m =>m.AuthenticationModule)
  },
  { 
    path: 'customer',  
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) 
  },
  {
    path: '**',
    redirectTo : 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

