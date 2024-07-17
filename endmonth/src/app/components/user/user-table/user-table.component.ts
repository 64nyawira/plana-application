import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [CommonModule,FormsModule, RouterLink, NavbarComponent],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.css'
})
export class UserTableComponent {
  users: any[] = [];
  selectedUser: any = null;
  notificationMessage: string = '';

  constructor() { }

  ngOnInit(): void {
    this.users = [
      { username: 'John Doe', email: 'john@example.com', location: 'New York', phone_no: '+1 123 456 7890' },
      { username: 'Jane Smith', email: 'jane@example.com', location: 'Los Angeles', phone_no: '+1 987 654 3210' },
      // Add more users as needed
    ];
  }

  showNotificationForm(user: any): void {
    this.selectedUser = user;
  }

  sendNotification(): void {
    // Implement notification sending logic here
    console.log(`Notification sent to ${this.selectedUser.username}: ${this.notificationMessage}`);
    this.resetNotificationForm();
  }

  cancelNotification(): void {
    this.resetNotificationForm();
  }

  private resetNotificationForm(): void {
    this.selectedUser = null;
    this.notificationMessage = '';
  }
  
}
