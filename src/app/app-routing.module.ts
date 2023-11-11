import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('../app/pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('../app/pages/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'oasis',
    loadChildren: () => import('../app/pages/oasis/oasis.module').then(m => m.OasisModule)
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
