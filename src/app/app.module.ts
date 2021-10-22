import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule} from '@angular/material/table'; 
import { MatStepperModule } from '@angular/material/stepper'
import { MatChipsModule } from '@angular/material/chips'
import { MatListModule } from '@angular/material/list';
import { MatSortModule } from '@angular/material/sort';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { FooterComponent } from './footer/footer.component';
import { CharacteristicListComponent } from './characteristic-list/characteristic-list.component';
import { ClassListComponent } from './class/class-list/class-list.component';
import { BuilderComponent } from './builder/builder.component'
import { FilterByTypePipe } from './Pipes/filter-by-type.pipe';
import { MapPipe } from './Pipes/map.pipe';
import { LineageListComponent } from './lineage/lineage-list/lineage-list.component';
import { LineageCardComponent } from './lineage/lineage-card/lineage-card.component';
import { ClassDetailComponent } from './class/class-detail/class-detail.component';
import { AbilityContentComponent } from './ability/ability-content/ability-content.component';
import { ArmorListComponent } from './item/armor-list/armor-list.component';
import { WeaponListComponent } from './item/weapon-list/weapon-list.component';
import { GearListComponent } from './item/gear-list/gear-list.component';
import { EnchantmentListComponent } from './item/enchantment-list/enchantment-list.component';
import { CharacteristicDialogComponent } from './characteristic/characteristic-dialog/characteristic-dialog.component'
import { CharacteristicDialogDialog } from './characteristic/characteristic-dialog/characteristic-dialog-dialog.component';
import { CharacteristicDetailComponent } from './characteristic/characteristic-detail/characteristic-detail.component';
import { ValiantListComponent } from './valiant/valiant-list/valiant-list.component';
import { ValiantDetailComponent } from './valiant/valiant-detail/valiant-detail.component';
import { AbilityCardComponent } from './ability/ability-card/ability-card.component';
import { ValiantExportDialogComponent } from './valiant/valiant-export-dialog/valiant-export-dialog.component';
import { TagTooltipDialogComponent } from './tag/tag-tooltip-dialog/tag-tooltip-dialog.component';
import { AbilitySelectDialogComponent } from './ability/ability-select-dialog/ability-select-dialog.component';
import { ValiantRandomizerComponent } from './valiant/valiant-randomizer/valiant-randomizer.component';
import { ItemEditDialogComponent } from './item/item-edit-dialog/item-edit-dialog.component';
import { TrackerComponent } from './tracker/tracker/tracker.component';
import { DevComponent } from './dev/dev.component';
import { FillPipe } from './Pipes/fill.pipe';
import { AbilityListItemComponent } from './ability/ability-list-item/ability-list-item.component';
import { TagDirective } from './tag.directive';
import { ArchetypeCardComponent } from './class/archetype-card/archetype-card.component';


@NgModule({
  declarations: [
    AppComponent,
    LineageListComponent,
    FooterComponent,
    CharacteristicListComponent,
    ClassListComponent,
    BuilderComponent,
    FilterByTypePipe,
    MapPipe,
    LineageCardComponent,
    ClassDetailComponent,
    AbilityContentComponent,
    ArmorListComponent,
    WeaponListComponent,
    GearListComponent,
    EnchantmentListComponent,
    CharacteristicDialogComponent,
    CharacteristicDialogDialog,
    CharacteristicDetailComponent,
    ValiantListComponent,
    ValiantDetailComponent,
    AbilityCardComponent,
    ValiantExportDialogComponent,
    TagTooltipDialogComponent,
    AbilitySelectDialogComponent,
    ValiantRandomizerComponent,
    ItemEditDialogComponent,
    TrackerComponent,
    DevComponent,
    FillPipe,
    AbilityListItemComponent,
    TagDirective,
    ArchetypeCardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatGridListModule,
    MatTabsModule,
    MatDividerModule,
    MatTableModule,
    MatStepperModule,
    MatChipsModule,
    MatListModule,
    MatSortModule,
    MatMenuModule,
    MatDialogModule,
    MatSnackBarModule,
    ClipboardModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
