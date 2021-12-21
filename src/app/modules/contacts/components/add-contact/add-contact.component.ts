import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { Contact } from 'src/app/shared/models/contact.model';
import { ContactService } from 'src/app/shared/services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {
  isFavorite = true;
  contact: Contact ;

  contactForm: FormGroup = new FormGroup({
    "firstName": new FormControl("", Validators.required),
    "lastName": new FormControl("", Validators.required),
    "phoneNumber": new FormControl("", Validators.required),
    "instagram": new FormControl("", Validators.required),
    "isFavorite": new FormControl("")
  });

  constructor(
    public dialogRef: MatDialogRef<AddContactComponent>,
    @Inject(MAT_DIALOG_DATA,)
    public data: string,
    private contactService: ContactService
  ) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }

  createContact(): void {
    if (this.contactForm.valid) {
      this.contactService.createContact(
        this.contactForm.value.firstName,
        this.contactForm.value.lastName,
        this.contactForm.value.phoneNumber,
        !!this.contactForm.value.isFavorite,
        this.contactForm.value.instagram
      )
        .pipe(take(1)).subscribe(res => {
          window.location.reload
          this.dialogRef.close();
        });
    } else {
    }
  }
}
