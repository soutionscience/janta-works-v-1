import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/SERVICES/api.service';
import {Worker} from '../../SHARED/worker.model'

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  workers: Worker [];

  constructor(private api: ApiService) { }

  ngOnInit() {

  }
  ionViewWillEnter(){
    this.getWorkers()
  }

  getWorkers(){
    this.api.getResource('users')
    .subscribe(resp=>{
      this.workers = resp;
      //console.log('getting ', this.workers)
    })

  }

}
