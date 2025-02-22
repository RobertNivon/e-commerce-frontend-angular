import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { DisplayProductsComponent } from './components/display-products/display-products.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CreateItemComponent } from './components/create-item/create-item.component';
import { UpdateItemComponent } from './components/update-item/update-item.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ReviewFormComponent } from './components/review-form/review-form.component';
import { ReviewComponent } from './components/review/review.component';
import { ReviewPanelComponent } from './components/review-panel/review-panel.component';
import { StarsComponent } from './components/stars/stars.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    ProductCardComponent,
    CartComponent,
    CheckoutComponent,
    DisplayProductsComponent,
    ResetPasswordComponent,
    CreateItemComponent,
    UpdateItemComponent,
    ProductDetailsComponent,
    StarRatingComponent,
    ReviewFormComponent,
    ReviewComponent,
    ProductDetailsComponent,
    ReviewPanelComponent,
    StarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
