import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../interface/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private baseUrl = 'http://localhost:3000/event';

  constructor(private http: HttpClient) { }

 
  createEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(`${this.baseUrl}/create`, event, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  getAllEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.baseUrl}/all`);
  }

  
  getEventById(id: string): Observable<Event> {
    return this.http.get<Event>(`${this.baseUrl}/getone/${id}`);
  }

 
  updateEvent(id: string, event: Partial<Event>): Observable<Event> {
    return this.http.put<Event>(`${this.baseUrl}/update/${id}`, event, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  deleteEvent(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }
}
