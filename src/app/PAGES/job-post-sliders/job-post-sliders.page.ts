import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlide, IonSlides  } from '@ionic/angular';
//import { Slides } from 'ionic-angular';

@Component({
  selector: 'app-job-post-sliders',
  templateUrl: './job-post-sliders.page.html',
  styleUrls: ['./job-post-sliders.page.scss'],
})

export class JobPostSlidersPage implements OnInit {
 @ViewChild('slides', {static: true}) slides : IonSlides
  slideOpts = {
    //initialSlide: 1,
    slidesPerView:0,
    speed: 400,
    centeredSlides: true,
    spaceBetween: 20,


  };




  

  constructor() { }

  ngOnInit() {
  }
next(){

this.slides.slideNext().then(resp=>console.log('next'))

  
}
prev(){
  this.slides.slidePrev().then(resp=> console.log('prev'))
}
  
  

}
