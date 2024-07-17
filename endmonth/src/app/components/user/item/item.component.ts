import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { recommendedEvents } from '../../../evento';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent implements OnInit{
  event: any;
  showForm: boolean = false;
  showConfirmation: boolean = false;
  tickets: number = 1;
  paymentMethod: string = 'mpesa';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.event = recommendedEvents.find(event => event.id === +id);
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
}
