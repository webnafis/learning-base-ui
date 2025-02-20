import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        loadChildren: () => import('./login-page/login-page.module').then(m => m.LoginPageModule),
        // data: { animation: 'HomePage' },
      },
      {
        path: 'signup',
        loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule),
        // data: { animation: 'HomePage' },
      },
    ]
    },
  ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
