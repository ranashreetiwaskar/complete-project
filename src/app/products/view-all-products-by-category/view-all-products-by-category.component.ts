import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-all-products-by-category',
  templateUrl: './view-all-products-by-category.component.html',
  styleUrl: './view-all-products-by-category.component.css'
})
export class ViewAllProductsByCategoryComponent implements OnInit {

  searchCategory =  '';

  constructor( private activatedRoute: ActivatedRoute ) {

  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe( data => {

      this.searchCategory = data['category'];
    })
  }

}
