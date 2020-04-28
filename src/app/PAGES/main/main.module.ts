import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPageRoutingModule } from './main-routing.module';

import { MainPage } from './main.page';
import { SlidingResultsComponent } from 'src/app/COMPONENT/sliding-results/sliding-results.component';
import { SearchComponent } from 'src/app/COMPONENT/search/search.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPageRoutingModule
  ],
  declarations: [MainPage, SlidingResultsComponent, SearchComponent]
})
export class MainPageModule {}
