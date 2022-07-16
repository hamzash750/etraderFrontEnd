import { ProductDetailsComponent } from './product-details/product-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {path:"",component:IndexComponent},
  {path:"detail",component:ProductDetailsComponent},
  {path:"payment",component:PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
