import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeliveryDetailsComponent } from './delivery-details/delivery-details.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderAcceptedComponent } from './order-accepted/order-accepted.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DeliveryDetailsComponent,
    OrderDetailsComponent,
    OrderAcceptedComponent
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
