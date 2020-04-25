import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/SERVICES/api.service';

@Component({
  selector: 'app-sliding-results',
  templateUrl: './sliding-results.component.html',
  styleUrls: ['./sliding-results.component.scss'],
})
export class SlidingResultsComponent implements OnInit {
  workers: string [];

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getWorkers()
  }
  getWorkers(){
    this.api.getResource('users')
    .subscribe(resp=>{
      this.workers = resp;
      console.log('getting ', this.workers)
    })

  }

}
