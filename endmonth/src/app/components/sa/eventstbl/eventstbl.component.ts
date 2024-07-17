import { Component } from '@angular/core';
import { recommendedEvents } from '../../../evento';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-eventstbl',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './eventstbl.component.html',
  styleUrl: './eventstbl.component.css'
})
export class EventstblComponent {
  events=recommendedEvents
  constructor() { }

  approveEvent(eventId: number): void {
    // Implement approve logic here, e.g., update event status
    console.log(`Event ${eventId} approved.`);
  }

  disapproveEvent(eventId: number): void {
    // Implement disapprove logic here, e.g., update event status
    console.log(`Event ${eventId} disapproved.`);
  }

  notifyEvent(eventId: number): void {
    // Implement notify logic here, e.g., send notification
    console.log(`Notify action triggered for event ${eventId}.`);
  }
}
