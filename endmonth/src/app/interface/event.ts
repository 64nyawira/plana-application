export interface Event {
    id?: string;
    title: string;
    description: string;
    date: Date;
    time: Date;
    location: string;
    ticketTypes: string;
    no_tickets: number;
    pricing: number;
    managerId: string;
  }
  