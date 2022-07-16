import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { propertyAdd, propertyReview } from '../models/propertyAdd';
import { HomeServiceService } from '../services/home-service.service';
const url = 'assets/js/mymain.js';
declare var $:any;
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit,OnDestroy,AfterViewInit {

  constructor(private _homeService:HomeServiceService,private route:ActivatedRoute) { }

  public propertyDetails: propertyAdd | undefined;
  public allProductReviews: propertyReview[] = [];
  paymentHandler: any = null;
  ngOnInit(): void {
    this.invokeStripe();
    this.route.queryParams.subscribe(parm => {

      this._homeService.getPropertyDetails(Number(parm["id"])).subscribe(data=>{
        this.propertyDetails=data;
      });
      this._homeService.getPropertyReviews(Number(parm["id"])).subscribe(data=>{
        this.allProductReviews=data;
      });
    })
   
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    setTimeout(() => {
      this.loadScript();
    }, 500);
  }
  public loadScript() {
    let node = document.createElement('script');
    node.src = url;
    node.id="mainScript";
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }
  ngOnDestroy(): void {
    $('#mainScript').remove();
  }
  checkProductRating(rating:number=0){
 return rating;
  }
  makePayment(amount: any) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_IkAmCKSQYtx2e3fEBiCRW6dY00vJSeFT9k',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken);
        alert('Stripe token generated!');
      },
    });
    paymentHandler.open({
      name: 'Property Management',
      description: 'Pay With Stripe',
      amount: amount * 100,
    });
  }
  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_IkAmCKSQYtx2e3fEBiCRW6dY00vJSeFT9k',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
            alert('Payment has been successfull!');
          },
        });
      };
      window.document.body.appendChild(script);
    }
  }
}