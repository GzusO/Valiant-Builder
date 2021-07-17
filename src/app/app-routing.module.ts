import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessionListComponent } from './profession/profession-list/profession-list.component';
import { LineageListComponent } from './lineage/lineage-list/lineage-list.component';
import { CharacteristicListComponent } from './characteristic-list/characteristic-list.component';
import { ClassListComponent } from './class-list/class-list.component';
import { BuilderComponent } from './builder/builder.component';

const routes: Routes = [
  { path: '', redirectTo: '/lineages', pathMatch: 'full' },
  { path: 'professions', component: ProfessionListComponent},
  { path: 'lineages', component: LineageListComponent},
  { path: 'characteristics',component:CharacteristicListComponent},
  { path: 'classes', component:ClassListComponent},
  { path: 'builder', component:BuilderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }