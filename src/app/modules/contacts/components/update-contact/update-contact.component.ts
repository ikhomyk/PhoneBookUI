import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { Contact } from 'src/app/shared/models/contact.model';
import { ContactService } from 'src/app/shared/services/contact.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.scss']
})
export class UpdateContactComponent implements OnInit {
public contact: Contact;
isFavorite = true;

contactTypes = [
  {
    name: 'Home',
    number: 0
  },
  {
    name: 'Family',
    number: 1
  },
  {
    name: 'Work',
    number: 2
  },
  {
    name: 'Other',
    number: 3
  }
]

contactForm: FormGroup = new FormGroup({
  "firstName": new FormControl(""),
  "lastName": new FormControl(""),
  "phoneNumber": new FormControl(""),
  "gitHub": new FormControl(""),
  "instagram": new FormControl(""),
  "isFavorite": new FormControl("")
});
  constructor(
    public dialogRef: MatDialogRef<UpdateContactComponent>,
    @Inject(MAT_DIALOG_DATA ,)
    public data: string,
    private router: Router,
    private contactService: ContactService
  ) { }

  ngOnInit(): void {
    this.getContact();
  }

  close(): void {
    this.dialogRef.close();
  }

  getContact(): void{
    this.contactService.getContact(this.data).pipe(take(1))
    .subscribe(result => {
      this.contact = result;
      console.log(this.contact)
    });
  }

  updateContact(): void {
    if (this.contactForm.valid) {
      this.contactService.updateContact(
        this.data,
        this.contactForm.value.firstName,
        this.contactForm.value.lastName,
        this.contactForm.value.phoneNumber,
        !!this.contactForm.value.isFavorite,
        this.contactForm.value.gitHub,
        this.contactForm.value.instagram
      ).pipe(take(1)).subscribe(res => {
        window.location.reload()
          this.dialogRef.close();
        });
    } else {
    }
  }
}
