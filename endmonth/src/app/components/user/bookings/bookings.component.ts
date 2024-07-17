import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from "../../footer/footer.component";
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [FormsModule, CommonModule, FooterComponent, SidebarComponent],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css'
})
export class BookingsComponent {
  bookings: any[] = [
    { id: 1, title: 'Event 1', tickets: 2, amount: 200, status: 'Pending' },
    { id: 2, title: 'Event 2', tickets: 1, amount: 100, status: 'Confirmed' },
    { id: 3, title: 'Event 3', tickets: 4, amount: 400, status: 'Pending' },
    { id: 4, title: 'Event 4', tickets: 3, amount: 300, status: 'Confirmed' },
    { id: 5, title: 'Event 5', tickets: 2, amount: 200, status: 'Pending' },
    { id: 6, title: 'Event 6', tickets: 1, amount: 100, status: 'Confirmed' },
    { id: 7, title: 'Event 7', tickets: 4, amount: 400, status: 'Pending' },
    { id: 8, title: 'Event 8', tickets: 3, amount: 300, status: 'Confirmed' },
    { id: 9, title: 'Event 9', tickets: 2, amount: 200, status: 'Pending' },
    { id: 10, title: 'Event 10', tickets: 1, amount: 100, status: 'Confirmed' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  cancelBooking(booking: any): void {
    booking.status = 'Cancelled';
   
  }

  deleteBooking(booking: any): void {
    const index = this.bookings.indexOf(booking);
    if (index !== -1) {
      this.bookings.splice(index, 1);
     
    }
  }
}
