import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OasisComponent } from './oasis.component';

const routes: Routes = [
  { path: '', component: OasisComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OasisRoutingModule { }
