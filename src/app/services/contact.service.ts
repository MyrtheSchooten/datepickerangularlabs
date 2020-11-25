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

  addContact(c: Contact): void {
    this.http.post<Contact[]>(this.url, c)
      .subscribe(() => this.getContacts());
  }

  deleteContact(c: Contact): void {
    this.http.delete(`${this.url}/${c.id}`) // delete contact from server
      .subscribe(() => this.getContacts()); // when deleted: getAll (refresh)
  }

}
