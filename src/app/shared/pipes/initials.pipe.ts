import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/modules/auth/models/user';

@Pipe({
  name: 'initials'
})
export class InitialsPipe implements PipeTransform {

  transform(user: User): string {
    let initials = '';

    initials = user.firstName.charAt(0) + user.lastName.charAt(0);

    return initials.toUpperCase();
  }
}
