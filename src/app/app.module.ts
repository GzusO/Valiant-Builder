import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdventurersComponent } from './adventurers/adventurers.component';
import { AdventurerDetailComponent } from './adventurer-detail/adventurer-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdventurerSearchComponent } from './adventurer-search/adventurer-search.component';

@NgModule({
  declarations: [
    AppComponent,
    AdventurersComponent,
    AdventurerDetailComponent,
    MessagesComponent,
    DashboardComponent,
    AdventurerSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false, delay:0 }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
