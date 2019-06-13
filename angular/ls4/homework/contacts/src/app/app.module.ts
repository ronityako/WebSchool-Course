import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DetailsFormComponent } from './components/details-form/details-form.component';
import { ContactsTableComponent } from './components/contacts-table/contacts-table.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsFormComponent,
    ContactsTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
