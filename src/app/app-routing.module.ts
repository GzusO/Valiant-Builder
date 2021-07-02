import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdventurersComponent } from './adventurers/adventurers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdventurerDetailComponent } from './adventurer-detail/adventurer-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'adventurers', component: AdventurersComponent },
  { path: 'dashboard',   component: DashboardComponent   },
  { path: 'detail/:id',  component: AdventurerDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }