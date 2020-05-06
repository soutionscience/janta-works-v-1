import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobPostSlidersPage } from './job-post-sliders.page';

const routes: Routes = [
  {
    path: '',
    component: JobPostSlidersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobPostSlidersPageRoutingModule {}
