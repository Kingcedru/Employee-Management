import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { EmplyoeesComponent } from './components/pages/Emplyoees/Emplyoees.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ProductsComponent } from './components/pages/products/products.component';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'dashboard',
    component: LayoutComponent,
    children: [
      {
        path: 'employees',
        component: EmplyoeesComponent,
      },
      {
        path: 'products',
        component: ProductsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
