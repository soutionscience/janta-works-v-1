import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/SERVICES/api.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  categories: string [];

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getCategories()
  }
  getCategories(){
    this.api.getResource('categories')
    .subscribe(resp=>{
      this.categories = resp;
   //   console.log(this.categories.length)
    })
  }

}
