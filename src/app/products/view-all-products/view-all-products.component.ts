import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { from, take, map, forkJoin, of, mergeMap } from 'rxjs';

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrl: './view-all-products.component.css'
})
export class ViewAllProductsComponent implements OnInit {

  productlist: any;
  // dataViewCategory: any;

  constructor( private productsService: ProductsService ){ }

  ngOnInit(): void {

    this.productsService.getAllProducts().subscribe( data => {
      this.productlist = data;
      console.log(this.productlist);
  }
);

  // setTimeout(() => {
  //   return this.productsService.getCategories().subscribe( data => {
  //     this.dataViewCategory = data;
  //     console.log(this.dataViewCategory);
  //   });
  
  // }, 5000);


  const arr1 = [[10,20,50],[10,20,40]];
  const arr2 = [[50,50,60]];

  forkJoin({
    arr1,
    arr2
  }).subscribe(data => console.log(data))
  
}
}
