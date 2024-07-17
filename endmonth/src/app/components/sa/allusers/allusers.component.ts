import { Component } from '@angular/core';
import { users } from '../../../users';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../../user/navbar/navbar.component";
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-allusers',
  standalone: true,
  imports: [CommonModule, NavbarComponent,RouterLink,FormsModule],
  templateUrl: './allusers.component.html',
  styleUrl: './allusers.component.css'
})
export class AllusersComponent {
  users = users;
  isDeleteConfirmationVisible = false;
  userToDelete: any = null;

  constructor() { }

  confirmDelete(user: any): void {
    this.isDeleteConfirmationVisible = true;
    this.userToDelete = user;
  }

  deleteConfirmed(): void {
    if (this.userToDelete) {
      this.users = this.users.filter(u => u.id !== this.userToDelete.id);
      this.isDeleteConfirmationVisible = false;
      this.userToDelete = null;
    }
  }

  cancelDelete(): void {
    this.isDeleteConfirmationVisible = false;
    this.userToDelete = null;
  }
}
