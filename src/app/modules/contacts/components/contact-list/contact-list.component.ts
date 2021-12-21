import { Input, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Contact } from "src/app/shared/models/contact.model";
import { ContactService } from "src/app/shared/services/contact.service";
import { AddContactComponent } from "../add-contact/add-contact.component";
import { UpdateContactComponent } from "../update-contact/update-contact.component";
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit, AfterViewInit {
  @Input() contactId = '';

  displayedColumns: string[] = [
    "phoneNumber",
    "firstName",
    "lastName",
    "instagramUrl",
    "isFavorite",
    "delete",
    "update"];

  contacts: Contact[];
  dataSource: MatTableDataSource<Contact>;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private readonly contactService: ContactService,
    public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getAllContacts();
  }

  ngAfterViewInit() {
    this.getAllContacts();
  }

  getAllContacts(): void {
    this.contactService.getAllContacts()
      .subscribe(result => {
        this.contacts = result;
        this.dataSource = new MatTableDataSource<Contact>(this.contacts);
        this.dataSource.sort = this.sort;
      });
  }

  addNewContact(): void {
    const dialogRef = this.dialog.open(AddContactComponent, {
      panelClass: 'modal-window-container',
      width: '500px',
      height: '600px',
    })
  };

  deleteContact(id: string): void {
    this.contactService.deleteContact(id).subscribe(() =>
      window.location.reload());
  }

  updateContact(contact: string): void {
    const dialogRef = this.dialog.open(UpdateContactComponent, {
      panelClass: 'modal-window-container',
      width: '500px',
      height: '600px',
      data: contact
    })
  };

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  changeFavorite(isFavorite: boolean, contactId: string): void {
    this.contactService.changeFavorite(contactId, isFavorite).subscribe();
  }
}
