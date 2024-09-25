import { NgModule, signal } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { ListOrdersComponent } from './orders/list-orders/list-orders.component';
import { ViewAllProductsComponent } from './products/view-all-products/view-all-products.component';
import { ViewProductComponent } from './products/view-product/view-product.component';

const routes: Routes = [
  // { path:'log-in', component: LoginComponent },
  // { path:'dashboard', component: DashboardComponent },
  // { path:'sign-up', component: SignupComponent },
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: 'orders', component: ListOrdersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}

