import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class UserContactsService {
  contacts: Contact[];

  contact: Contact[];
}
