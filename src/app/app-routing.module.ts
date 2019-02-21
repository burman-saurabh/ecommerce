import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './shopping/components/products/products.component';
import { LoginComponent } from './login/login.component';
import { adminRoutes } from './admin/admin-routing.module';
import { shoppingRoutes } from './shopping/shopping-routing.module';

const routes: Routes = [
  {path: '', component: ProductsComponent},
  {path: 'login', component: LoginComponent},
  ...adminRoutes,
  ...shoppingRoutes,
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
