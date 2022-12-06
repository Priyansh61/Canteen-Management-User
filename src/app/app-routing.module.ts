import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPagesComponent } from './component/pages/cart-pages/cart-pages.component';
import { FoodPageComponent } from './component/pages/food-page/food-page.component';
import { HomeComponent } from './component/pages/home/home.component';
import { LoginPageComponent } from './component/pages/login-page/login-page.component';
import { RegistrationPageComponent } from './component/pages/registration-page/registration-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'search/:searchTerm',component: HomeComponent
  },
  { path: 'food/:id', component: FoodPageComponent },
  { path: 'cart-page', component: CartPagesComponent },
  { path: 'login-page', component: LoginPageComponent },
  { path: 'register', component: RegistrationPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
