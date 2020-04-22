import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhoneRegistrationPage } from './phone-registration.page';

const routes: Routes = [
  {
    path: '',
    component: PhoneRegistrationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhoneRegistrationPageRoutingModule {}
