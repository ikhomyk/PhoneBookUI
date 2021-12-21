import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Contact } from "../models/contact.model";
import { UserContactsService } from "./user-contacts.service";

@Injectable({
    providedIn: 'root'
})
export class ContactService {

    constructor(private readonly httpClient: HttpClient,
        private readonly userContactsService: UserContactsService) {

    }
    getAllContacts(): Observable<Contact[]> {
        return this.httpClient.get<Contact[]>(`${environment.apiUrl}Contact`)
            .pipe(tap(contacts => {
                this.userContactsService.contacts = contacts;
                console.log(this.userContactsService.contacts)
            }));
    };

    createContact(contactFirstName: any,
        contactLastName: string,
        phoneNumber: string,
        isFavorite: boolean,
        instagramUrl: string): Observable<Contact> {

        const body = {
            contactFirstName,
            contactLastName,
            phoneNumber,
            isFavorite,
            instagramUrl
        };
        return this.httpClient.post<Contact>(`${environment.apiUrl}Contact`, body)
            .pipe(tap(contact =>
                console.log(contact)))
    };

    updateContact(
        contactId: string,  
        contactFirstName: any,
        contactLastName: string,
        phoneNumber: string,
        isFavorite: boolean,
        gitHubUrl: string,
        instagramUrl: string): Observable<Contact> {

        const body = {
            contactFirstName,
            contactLastName,
            phoneNumber,
            isFavorite,
            gitHubUrl,
            instagramUrl
        };
        return this.httpClient.put<Contact>(`${environment.apiUrl}Contact/${contactId}`, body)
            .pipe(tap(contact =>
                console.log(contact)))
    };

    deleteContact(contactId: string): any {
        const id = contactId;
        return this.httpClient.delete(`${environment.apiUrl}Contact/${id}`)
        .pipe();
    };

    getContact(contactId: string): Observable<Contact>{
        return this.httpClient.get<Contact>(`${environment.apiUrl}Contact/${contactId}`)
        .pipe(tap(contact => {
            console.log(contact);
        }));
    }

    changeFavorite(contactId:string, 
        isFavorite: boolean): Observable<object>{
        return this.httpClient.patch(`${environment.apiUrl}Contact/${contactId}?isFavorite=${isFavorite}`, null);
    }

}