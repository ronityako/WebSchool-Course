import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeliveryDetailsComponent } from './delivery-details/delivery-details.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderAcceptedComponent } from './order-accepted/order-accepted.component';

const routes: Routes = [
  {path: '', component: OrderDetailsComponent},
  {path: 'delivery-details', component: DeliveryDetailsComponent},
  {path: 'order-accepted', component: OrderAcceptedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
