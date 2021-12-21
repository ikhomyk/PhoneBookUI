import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { Contact } from 'src/app/shared/models/contact.model';
import { ContactService } from 'src/app/shared/services/contact.service';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.scss']
})
export class FavoriteListComponent implements OnInit {
  displayedColumns: string[] = ['phoneNumber', 'firstName', 'lastName', "instagramUrl", "isFavorite", "delete", "update"];
  dataSource = new MatTableDataSource();

  contacts: Contact[];

  constructor(private readonly contactService: ContactService,
    private router: Router) {

  }
  ngOnInit(): void {
    this.getAllUserAchievements();
  }

  getAllUserAchievements(): void {
    this.contactService.getAllContacts()
      .pipe(take(1))
      .subscribe(result => {
        this.contacts = result.filter(el => el.isFavorite == true);
        this.dataSource = new MatTableDataSource(this.contacts);
      });
  }

  deleteContact(id: string): void {
    this.contactService.deleteContact(id).subscribe(() =>
      this.router.navigateByUrl(''));;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  changeFavorite(isFavorite: boolean, contactId: string): void{
    this.contactService.changeFavorite(contactId, isFavorite).subscribe(() =>
    window.location.reload());
  }
}
