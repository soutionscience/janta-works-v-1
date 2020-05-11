import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidingResultsComponent } from 'src/app/COMPONENT/sliding-results/sliding-results.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [SlidingResultsComponent],
  imports: [
    CommonModule,
    IonicModule,
    
  ],
  exports:[SlidingResultsComponent]
})
export class SharedModule { }
