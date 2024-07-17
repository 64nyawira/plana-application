import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { recommendedEvents } from '../../evento';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item2',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './item2.component.html',
  styleUrls: ['./item2.component.css'] // Ensure this path is correct
})
export class Item2Component implements OnInit {
  event: any;
  showForm: boolean = false;
  showConfirmation: boolean = false;
  tickets: number = 1;
  paymentMethod: string = 'mpesa';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.event = recommendedEvents.find(event => event.id === Number(id));
    }
  }

  bookNow(): void {
    this.showForm = true;
  }

  goBack(): void {
    this.router.navigate(['/user']);
  }

  submitForm(): void {
    this.showForm = false;
    this.showConfirmation = true;
  }

  closeConfirmation(): void {
    this.showConfirmation = false;
  }

  cancelConfirmation(): void {
    this.showConfirmation = false;
  }

  cancelForm(): void {
    this.showForm = false;
  }
}
