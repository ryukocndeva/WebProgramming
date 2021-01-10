import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreFirstGuard } from './storeFirst.guard';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { StoreModule } from './store/store.module';
import { StoreComponent } from './store/store.component';
import { CartDetailComponent } from './store/cartDetail.component';
import { CheckoutComponent } from './store/checkout.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    StoreModule,
    RouterModule.forRoot([
      { path: "**", redirectTo: "/store" },
      { path: "store", component: StoreComponent, canActivate: [StoreFirstGuard] },
      { path: "cart", component: CartDetailComponent, canActivate: [StoreFirstGuard] },
      { path: "checkout", component: CheckoutComponent, canActivate: [StoreFirstGuard] },
      { path: "admin", loadChildren: "./admin/admin.module#AdminModule", canActivate: [StoreFirstGuard] },

    ])
  ],
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
