import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/permanent/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './component/pages/home/home.component';
import { RatingModule } from 'ng-starrating';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './component/permanent/search/search.component';
import { FoodPageComponent } from './component/pages/food-page/food-page.component';
import { CartPagesComponent } from './component/pages/cart-pages/cart-pages.component';
import { TitleComponent } from './component/permanent/title/title.component';
import { NotFoundComponent } from './component/permanent/not-found/not-found.component';
import { LoginPageComponent } from './component/pages/login-page/login-page.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RegistrationPageComponent } from './component/pages/registration-page/registration-page.component';
import { TextInputComponent } from './component/permanent/text-input/text-input.component';
import { InputContainerComponent } from './component/permanent/input-container/input-container.component';
import { InputValidationComponent } from './component/permanent/input-validation/input-validation.component';
import { DefaultButtonComponent } from './component/permanent/default-button/default-button.component';
import { ToastrModule } from 'ngx-toastr';
import {MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    FoodPageComponent,
    CartPagesComponent,
    TitleComponent,
    NotFoundComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    TextInputComponent,
    InputContainerComponent,
    InputValidationComponent,
    DefaultButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    RatingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDialogModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      timeOut: 3000,
      newestOnTop: false
    })
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
