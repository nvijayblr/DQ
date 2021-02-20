import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AuthGuardService as AuthGaurd } from './services/auth-guard.service';
import { LoginComponent } from './components/login-signup/login/login.component';
import { SignupComponent } from './components/login-signup/signup/signup.component';

const routes: Routes = [
  // { path: '', component: LandingComponent },
  { path: '', component: LoginComponent },
  // { path: 'signup', component: SignupComponent },
  {
    path: 'auth',
    loadChildren: () => import('./components/authorized/authorized.module').then(m => m.AuthorizedModule),
    canActivate: [AuthGaurd]
  }, {
  //   path: 'static',
  //   loadChildren: () => import('./components/static/static.module').then(m => m.StaticModule)
  // }, {
    path: '', redirectTo: '', pathMatch: 'full'
  }, {
    path: '**', redirectTo: '', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
