import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryWorkersPageRoutingModule } from './category-workers-routing.module';

import { CategoryWorkersPage } from './category-workers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryWorkersPageRoutingModule
  ],
  declarations: [CategoryWorkersPage]
})
export class CategoryWorkersPageModule {}
