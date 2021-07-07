import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessionListComponent } from './profession-list/profession-list.component';
import { LineageListComponent } from './lineage-list/lineage-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/lineages', pathMatch: 'full' },
  { path: 'professions', component: ProfessionListComponent},
  { path: 'lineages', component: LineageListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }