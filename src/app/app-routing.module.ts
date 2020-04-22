import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    loadChildren: ()=> import('./PAGES/welcome/welcome.module').then(m=>m.WelcomePageModule)
  },
  {
    path: '',
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
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
