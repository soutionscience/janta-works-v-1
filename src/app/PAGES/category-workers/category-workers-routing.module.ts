import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryWorkersPage } from './category-workers.page';

const routes: Routes = [
  {
    path: '',
    component: CategoryWorkersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryWorkersPageRoutingModule {}
