import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { RouteGuardGuard } from './guards/route-guard.guard';
import { RouteDeactivateGuard } from './guards/route-deactivate.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [RouteGuardGuard],
  },
  {
    path: 'signup',
    component: SignUpComponent,
    canDeactivate: [RouteDeactivateGuard],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./log-in/log-in.module').then((m) => m.LogInModule),
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
