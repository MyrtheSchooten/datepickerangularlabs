import { Route } from '@angular/router';
import {HomePage} from "./pages/homepage/home.page";
import {ContactsPage} from "./pages/contactspage/contacts.page";

export const routes: Route[] = [
  { path: 'home', component: HomePage },
  { path: 'contacts', component: ContactsPage },
];
