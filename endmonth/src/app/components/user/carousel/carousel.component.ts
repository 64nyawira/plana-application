import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { upcomingEvents } from '../../../events';
import { recommendedEvents } from '../../../evento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  recommendedEvents = recommendedEvents;
  events = upcomingEvents;
  currentIndex = 0;

  constructor(private router: Router) {}

  ngOnInit() {
    setInterval(() => {
      this.transitionEvents();
    }, 6000); // Delay the transition to 5 seconds
  }

  getClass(index: number) {
    if (index === this.currentIndex) {
      return 'current';
    } else if (index === (this.currentIndex + this.events.length - 1) % this.events.length) {
      return 'previous';
    } else if (index === (this.currentIndex + 1) % this.events.length) {
      return 'next';
    } else {
      return 'hidden';
    }
  }

  transitionEvents() {
    this.currentIndex = (this.currentIndex + 1) % this.events.length;
  }
}
