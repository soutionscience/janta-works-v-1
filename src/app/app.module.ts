import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, IonSlide, IonSlides } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StorageService } from './SERVICES/storage.service';
import { IonicStorageModule } from '@ionic/storage';
import{RestangularModule} from 'ngx-restangular'
import { restangularConfigFactory } from './SHARED/restangular.config';
import { SharedModule } from './SHARED/shared/shared.module';
import { SlidingResultsComponent } from './COMPONENT/sliding-results/sliding-results.component';
import { MainPage } from './PAGES/main/main.page';
import { MainPageModule } from './PAGES/main/main.module';

@NgModule({
  declarations: [AppComponent, ],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    FormsModule, 
    RestangularModule.forRoot(restangularConfigFactory),
    ReactiveFormsModule,
    IonicStorageModule.forRoot(),
    SharedModule,
   // MainPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
   // StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
