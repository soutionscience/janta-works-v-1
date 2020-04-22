import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhoneRegistrationPageRoutingModule } from './phone-registration-routing.module';

import { PhoneRegistrationPage } from './phone-registration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhoneRegistrationPageRoutingModule
  ],
  declarations: [PhoneRegistrationPage]
})
export class PhoneRegistrationPageModule {}
