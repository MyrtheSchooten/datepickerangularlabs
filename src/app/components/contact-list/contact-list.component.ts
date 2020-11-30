import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../../models/contact';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html'
})
export class ContactListComponent implements OnInit {
  contacts: Contact[];

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.getContacts().subscribe(contacts => {
      this.contacts = contacts;
    });
  }

  editContact(contact: Contact) {
    contact.edit = true;
  }

  saveContact(contact: Contact) {
    contact.edit = false;
  }

  deleteContact(c: Contact): void {
    this.contactService.deleteContact(c);
  }

}

