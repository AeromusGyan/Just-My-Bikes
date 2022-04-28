import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { BikeComponent } from './bike/bike.component';
import { ShopComponent } from './shop/shop.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    HomeComponent,
    BikeComponent,
    ShopComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomeComponent,
    BikeComponent,
    ShopComponent,
    AboutComponent,
    ContactComponent
  ]
})
export class MainModule { }
