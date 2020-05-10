import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/SERVICES/api.service';
import { ModalController } from '@ionic/angular';
import { MainPage } from '../main/main.page';
import { CategoryWorkersPage } from '../category-workers/category-workers.page';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  categories: string [];
  freeLancers: any []

  constructor(private api: ApiService, private modalCtr: ModalController) { }

  ngOnInit() {
    this.getCategories();
    this.selectCategory('5eb2ec3208731061089f9a62')
  }
  getCategories(){
    this.api.getResource('categories')
    .subscribe(resp=>{
      this.categories = resp;
   //   console.log(this.categories.length)
    })
  }
  selectCategory(id){
    console.log('testing ', id);
    this.api.getSpecificResource('users/category', id)
    .subscribe((resp)=>{
      this.freeLancers = resp;
      console.log('free lancers ', this.freeLancers)
      this.modalCtr.create({
        component: CategoryWorkersPage,
        componentProps: this.freeLancers
      }).then((resp)=>resp.present())

    },error=> console.log('there is an error ', error))
  }

}
