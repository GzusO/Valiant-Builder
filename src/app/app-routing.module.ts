import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessionListComponent } from './profession/profession-list/profession-list.component';
import { LineageListComponent } from './lineage/lineage-list/lineage-list.component';
import { CharacteristicListComponent } from './characteristic-list/characteristic-list.component';
import { ClassListComponent } from './class/class-list/class-list.component';
import { BuilderComponent } from './builder/builder.component';
import { ArmorListComponent } from './item/armor-list/armor-list.component';
import { WeaponListComponent } from './item/weapon-list/weapon-list.component';
import { GearListComponent } from './item/gear-list/gear-list.component';
import { EnchantmentListComponent } from './item/enchantment-list/enchantment-list.component';
import { ValiantListComponent } from './valiant/valiant-list/valiant-list.component';
import { ValiantDetailComponent } from './valiant/valiant-detail/valiant-detail.component';
import { ValiantRandomizerComponent } from './valiant/valiant-randomizer/valiant-randomizer.component';

const routes: Routes = [
  { path: '', redirectTo: '/lineages', pathMatch: 'full' },
  { path: 'professions', component: ProfessionListComponent},
  { path: 'lineages', component: LineageListComponent},
  { path: 'characteristics',component:CharacteristicListComponent},
  { path: 'classes', component:ClassListComponent},
  { path: 'builder', component:BuilderComponent},
  { path: 'armor', component:ArmorListComponent},
  { path: 'weapon', component:WeaponListComponent},
  { path: 'gear', component:GearListComponent},
  { path: 'enchantments', component:EnchantmentListComponent},
  { path: 'valiants', component:ValiantListComponent},
  { path: 'valiant/:id', component:ValiantDetailComponent},
  { path: 'random', component:ValiantRandomizerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }