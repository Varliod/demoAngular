import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './demo/home/home.component';
import { NavBarComponent } from './demo/Shared/nav-bar/nav-bar.component';
import { Binding1Component } from './demo/demo/binding1/binding1.component';
import { FooterComponent } from './demo/Shared/footer/footer.component';
import { TwoWayBinding2Component } from './demo/demo/two-way-binding2/two-way-binding2.component';
import { VueComponent } from './exos/exoShopping/vue/vue.component';
import { ShopComponent } from './exos/exoShopping/shop/shop.component';
import { PanierComponent } from './exos/exoShopping/panier/panier.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    Binding1Component,
    FooterComponent,
    TwoWayBinding2Component,
    VueComponent,
    ShopComponent,
    PanierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
