import { Component, Input, OnInit } from '@angular/core';
import { AuthUserService } from 'src/app/shared/services/auth-user.service';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss']
})
export class GreetingComponent implements OnInit {
  @Input() greetMessage;
  greet: string;

  constructor(public readonly authUserService: AuthUserService) { }

  ngOnInit(): void {
    this.getGreeting();
  }

  getGreeting(): void {
    const myDate = new Date();
    const hrs = myDate.getHours();

    if (hrs >= 5 && hrs <= 11) {
      this.greet = 'Good morning';
    } else if (hrs >= 12 && hrs <= 17) {
      this.greet = 'Good day';
    } else if (hrs >= 18 && hrs <= 23) {
      this.greet = 'Good evening';
    } else if (hrs >= 0 && hrs <= 5) {
      this.greet = 'Good night';
    }
  }
}
