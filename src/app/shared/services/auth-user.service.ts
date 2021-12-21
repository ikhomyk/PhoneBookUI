import { Injectable } from "@angular/core";
import { User } from "src/app/modules/auth/models/user";

@Injectable({
    providedIn: 'root'
})
export class AuthUserService {
    authUser: User;
}