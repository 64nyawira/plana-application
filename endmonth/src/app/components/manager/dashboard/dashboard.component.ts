import { Component } from '@angular/core';
import { NavbarComponent } from "../../user/navbar/navbar.component";
import { FooterComponent } from '../../footer/footer.component';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { recommendedEvents } from '../../../evento';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, FormsModule, CommonModule,RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  recommendedEvents = recommendedEvents;
  isFormVisible = false;
  isUpdateMode = false;
  selectedEvent: any = null;
  ticketType = 'single';
  isDeleteConfirmationVisible = false;
  eventToDelete: any = null;
  isNotificationFormVisible = false;

  constructor(private router: Router) { }

  ngOnInit(): void { }

  viewEvent(id: number): void {
    this.router.navigate(['/item', id]);
  }

  showForm(): void {
    this.isFormVisible = true;
    this.isUpdateMode = false;
    this.selectedEvent = null;
  }

  hideForm(): void {
    this.isFormVisible = false;
    this.isUpdateMode = false;
    this.selectedEvent = null;
  }

  onSubmit(form: NgForm) {
    if (this.isUpdateMode && this.selectedEvent) {
      const index = this.recommendedEvents.findIndex(event => event.id === this.selectedEvent.id);
      this.recommendedEvents[index] = { ...form.value, id: this.selectedEvent.id };
    } else {
      const newEvent = { ...form.value, id: this.recommendedEvents.length + 1 };
      this.recommendedEvents.push(newEvent);
    }
    this.hideForm();
  }

  updateEvent(eventId: number) {
    this.isFormVisible = true;
    this.isUpdateMode = true;
    this.selectedEvent = this.recommendedEvents.find(event => event.id === eventId);
    this.ticketType = this.selectedEvent.ticketType || 'single';
  }

  confirmDelete(event: any) {
    this.isDeleteConfirmationVisible = true;
    this.eventToDelete = event;
  }

  deleteEventConfirmed() {
    if (this.eventToDelete) {
      this.recommendedEvents = this.recommendedEvents.filter(event => event.id !== this.eventToDelete.id);
      this.isDeleteConfirmationVisible = false;
      this.eventToDelete = null;
    }
  }

  cancelDelete() {
    this.isDeleteConfirmationVisible = false;
    this.eventToDelete = null;
  }

  showNotificationForm(): void {
    this.isNotificationFormVisible = true;
  }

  hideNotificationForm(): void {
    this.isNotificationFormVisible = false;
  }

  sendNotification(form: NgForm): void {
    // Logic to send the notification
    console.log('Notification sent:', form.value.notificationMessage);
    this.hideNotificationForm();
  }
}
