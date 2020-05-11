import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriesPageRoutingModule } from './categories-routing.module';

import { CategoriesPage } from './categories.page';
import { CategoryWorkersPage } from '../category-workers/category-workers.page';
import { SharedModule } from 'src/app/SHARED/shared/shared.module';

@NgModule({
  entryComponents:[CategoryWorkersPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriesPageRoutingModule,
    SharedModule
  ],
  declarations: [CategoriesPage, CategoryWorkersPage]
})
export class CategoriesPageModule {}
