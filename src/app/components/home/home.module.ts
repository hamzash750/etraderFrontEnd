import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './index/header/header.component';
import { SearchComponent } from './index/search/search.component';
import { ProductComponent } from './index/product/product.component';
import { CalculatorComponent } from './index/product/calculator/calculator.component';
import { RecentlyReduceComponent } from './index/product/recently-reduce/recently-reduce.component';
import { HomeServiceService } from './services/home-service.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [
    IndexComponent,
    HeaderComponent,
    SearchComponent,
    ProductComponent,
    CalculatorComponent,
    RecentlyReduceComponent,
    ProductDetailsComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    HomeRoutingModule
  ],
  providers:[HomeServiceService]
})
export class HomeModule { }
