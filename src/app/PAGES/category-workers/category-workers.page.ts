import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { Worker } from 'src/app/SHARED/worker.model';

@Component({
  selector: 'app-category-workers',
  templateUrl: './category-workers.page.html',
  styleUrls: ['./category-workers.page.scss'],
})
export class CategoryWorkersPage implements OnInit {
  workers: Worker [] = [];

  constructor(private navParam: NavParams ) { 
    console.log('what are you receiveing ', this.navParam.data.test[1]);
    this.workers = this.navParam.data.test
  }

  ngOnInit() {
  }

}
