import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CheckoutComponent } from './checkout/checkout.component';



@NgModule({
  declarations: [
    CartComponent,
    ErrorPageComponent,
    WishlistComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CartComponent,
    ErrorPageComponent,
    WishlistComponent,
    CheckoutComponent
  ]
})
export class PageModule { }
