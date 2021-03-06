import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/SERVICES/api.service';
import { IonInput } from '@ionic/angular';
import { IonSlides } from '@ionic/angular';
import { Worker } from 'src/app/SHARED/worker.model';


@Component({
  selector: 'app-sliding-results',
  templateUrl: './sliding-results.component.html',
  styleUrls: ['./sliding-results.component.scss'],
})
export class SlidingResultsComponent implements OnInit {
 @Input() workers: Worker [];
//  @ViewChild(IonSlides, static:bool) slides: IonSlides;
 sliderConfig ={
  spaceBetween: 10,
  centeredSlides: true,
   slidesPerView: 1.4
}

  constructor(private api: ApiService) { }

  ngOnInit() {
  // console.log('what is workers ', this.workers)
  }



}
