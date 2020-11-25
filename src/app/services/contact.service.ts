import {Injectable} from "@angular/core";
import {Contact} from "../models/contact";
import {HttpClient} from "@angular/common/http";


@Injectable({ providedIn: 'root' })
export class ContactService {

  private url = "http://localhost:9080/rest_war_exploded/resources/contacts"

  contacts: Contact[] = [
    { firstname: 'Sam', surname: 'Smith', email: 'sam.smith@music.com' },
    { firstname: 'Frank', surname: 'Muscles', email: 'frank@muscles.com' },
    { firstname: 'Eddy', surname: 'Valentino', email: 'eddy@valfam.co.uk' }
  ];

  constructor(private http: HttpClient) { }

  getContacts() {
    return this.http.get<Contact[]>(this.url);
  }

  addContact(newContact: Contact) {
    this.contacts.push(newContact);
  }
}
