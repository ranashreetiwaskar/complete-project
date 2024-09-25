import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { ProductsService } from '../../products/products.service';
import { Category } from '../category';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit{

  categoryList: any;

  constructor( private productsService: ProductsService){ }


  ngOnInit(): void {

    this.productsService.getCategories().subscribe(data => {
      this.categoryList = data;
    });
  }
}
