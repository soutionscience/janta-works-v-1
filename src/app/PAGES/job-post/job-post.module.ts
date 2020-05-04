import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobPostPageRoutingModule } from './job-post-routing.module';

import { JobPostPage } from './job-post.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobPostPageRoutingModule
  ],
  declarations: [JobPostPage]
})
export class JobPostPageModule {}
