import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobPostSlidersPageRoutingModule } from './job-post-sliders-routing.module';

import { JobPostSlidersPage } from './job-post-sliders.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
   JobPostSlidersPageRoutingModule
  ],
  declarations: [JobPostSlidersPage]
})
export class JobPostSlidersPageModule {}
