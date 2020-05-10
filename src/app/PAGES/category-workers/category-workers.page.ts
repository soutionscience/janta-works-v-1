import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-category-workers',
  templateUrl: './category-workers.page.html',
  styleUrls: ['./category-workers.page.scss'],
})
export class CategoryWorkersPage implements OnInit {
  category: any [];

  constructor(private navParam: NavParams) { 
    console.log('what are you receiveing ', this.navParam.data)
  }

  ngOnInit() {
  }

}
