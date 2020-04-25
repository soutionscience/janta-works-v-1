import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkerRegistrationPage } from './worker-registration.page';

const routes: Routes = [
  {
    path: '',
    component: WorkerRegistrationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkerRegistrationPageRoutingModule {}
