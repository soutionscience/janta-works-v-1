import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SlidingResultsComponent } from './COMPONENT/sliding-results/sliding-results.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'categories',
    pathMatch:'full'
  },
 
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./PAGES/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'phone-registration',
    loadChildren: () => import('./PAGES/phone-registration/phone-registration.module').then( m => m.PhoneRegistrationPageModule)
  },
  {
    path: 'user-type',
    loadChildren: () => import('./PAGES/user-type/user-type.module').then( m => m.UserTypePageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./PAGES/registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'select-user-type',
    loadChildren: () => import('./PAGES/select-user-type/select-user-type.module').then( m => m.SelectUserTypePageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./PAGES/main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'worker-registration',
    loadChildren: () => import('./PAGES/worker-registration/worker-registration.module').then( m => m.WorkerRegistrationPageModule)
  },
  {
    path: 'job-post',
    loadChildren: () => import('./PAGES/job-post/job-post.module').then( m => m.JobPostPageModule)
  },
  {
    path: 'job-post-sliders',
    loadChildren: () => import('./PAGES/job-post-sliders/job-post-sliders.module').then( m => m.JobPostSlidersPageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./PAGES/categories/categories.module').then( m => m.CategoriesPageModule)
  },
  {
    path: 'category-workers',
    loadChildren: () => import('./PAGES/category-workers/category-workers.module').then( m => m.CategoryWorkersPageModule)
  }





];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    ReactiveFormsModule,
    FormsModule
  ],
  declarations:[],
  exports: [RouterModule]
})
export class AppRoutingModule {}
