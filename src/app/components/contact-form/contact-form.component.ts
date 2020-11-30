import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Contact} from "../../models/contact";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ContactService} from "../../services/contact.service";

function emailValidator(control: AbstractControl) {
  if (!control.value) {
    return null;
  }

  let regex = /^.+@.+\.[a-zA-Z]+$/;
  return regex.test(control.value) ? null : { email: { valid: false } };
}

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})

export class ContactFormComponent implements OnInit{
  newContact = {} as Contact;
  addContactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService) { }

  ngOnInit() {
    this.addContactForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.pattern('^[a-zA-Z -]+$')]],
      surname: ['', [Validators.required, Validators.pattern('^[a-zA-Z -]+$')]],
      email: ['', [Validators.required, emailValidator]]
    });
  }

  addContact() {
    this.contactService.addContact(this.addContactForm.value);
    this.addContactForm.reset();
  }
}
