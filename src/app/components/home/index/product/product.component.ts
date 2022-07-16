import { Component, OnInit } from '@angular/core';
import { propertyAdd } from '../../models/propertyAdd';
import { HomeServiceService } from '../../services/home-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public allProductList: propertyAdd[] = [];
  constructor(private _HomeServiceService:HomeServiceService) { }

  ngOnInit(): void {
    this._HomeServiceService.getAllProperty().subscribe(data=>{
      console.log(data);
      this.allProductList=data;
    }
    ,error=>{
      console.log(error);
    }
    )
  }

}
