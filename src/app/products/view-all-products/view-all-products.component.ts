import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { from, take, map, forkJoin, of, mergeMap, toArray } from 'rxjs';

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrl: './view-all-products.component.css'
})
export class ViewAllProductsComponent implements OnInit {

  productlist: any;

  constructor( private productsService: ProductsService ){ }

  ngOnInit(): void {
    
    this.productsService.getAllProducts().subscribe( data => {
    this.productlist = data;
    // console.log(this.productlist);
      
  });

}
}
