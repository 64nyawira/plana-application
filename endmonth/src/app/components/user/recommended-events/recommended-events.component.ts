import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { recommendedEvents } from '../../../evento';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-recommended-events',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './recommended-events.component.html',
  styleUrls: ['./recommended-events.component.css'] // Correct spelling
})
export class RecommendedEventsComponent implements OnInit {
  repeatedEvents = [...recommendedEvents, ...recommendedEvents]; // Duplicate events array

  constructor(private router: Router) { }

  ngOnInit(): void { }

  viewEvent(id: number): void {
    this.router.navigate(['/item', id]);
  }

  
}
