import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactNamePipe } from './pipes/contact-name.pipe';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { HttpClientModule } from "@angular/common/http";
import {HomePage} from "./pages/homepage/home.page";
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import {ContactsPage} from "./pages/contactspage/contacts.page";

@NgModule({
  declarations: [
    AppComponent,
    ContactNamePipe,
    ContactFormComponent,
    ContactListComponent,
    HomePage,
    ContactsPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
