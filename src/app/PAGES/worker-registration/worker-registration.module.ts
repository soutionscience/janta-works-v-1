import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkerRegistrationPageRoutingModule } from './worker-registration-routing.module';

import { WorkerRegistrationPage } from './worker-registration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    WorkerRegistrationPageRoutingModule
  ],
  declarations: [WorkerRegistrationPage]
})
export class WorkerRegistrationPageModule {}
