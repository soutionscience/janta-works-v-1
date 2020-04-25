import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/SERVICES/api.service';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-sliding-results',
  templateUrl: './sliding-results.component.html',
  styleUrls: ['./sliding-results.component.scss'],
})
export class SlidingResultsComponent implements OnInit {
 @Input() workers: string [];
 sliderConfig ={
  spaceBetween: 10,
  centeredSlides: true,
   slidesPerView: 1.7
}

  constructor(private api: ApiService) { }

  ngOnInit() {
  // console.log('what is workers ', this.workers)
  }



}
