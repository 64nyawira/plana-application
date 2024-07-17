// src/services/eventService.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface CreateEventInput {
  title: string;
  description: string;
  date: Date;
  time: Date;
  location: string;
  ticketTypes: string;
  no_tickets:number,
  pricing: number;
  managerId: string;
}

interface UpdateEventInput {
  title?: string;
  description?: string;
  date?: Date;
  time?: Date;
  location?: string;
  ticketTypes?: string;
  no_tickets:number,
  pricing?: number;
  managerId?: string;
}

export class EventService {
  // Create Event
  async createEvent(data: CreateEventInput) {
    const managerExists = await prisma.user.findUnique({
      where: { id: data.managerId },
    });

    if (!managerExists) {
      throw new Error('Manager with the provided ID does not exist');
    }

    const event = await prisma.event.create({
      data,
    });

    return event;
  }

  // Get Event by ID
  async getEventById(id: string) {
    const event = await prisma.event.findUnique({
      where: { id },
    });
    if (!event) {
      throw new Error('Event not found');
    }
    return event;
  }

  // Update Event
  async updateEvent(id: string, data: UpdateEventInput) {
    if (data.managerId) {
      const managerExists = await prisma.user.findUnique({
        where: { id: data.managerId },
      });

      if (!managerExists) {
        throw new Error('Manager with the provided ID does not exist');
      }
    }

    const event = await prisma.event.update({
      where: { id },
      data,
    });
    return event;
  }

  // Delete Event
  async deleteEvent(id: string) {
    const event = await prisma.event.delete({
      where: { id },
    });
    return event;
  }

  // Get All Events
  async getAllEvents() {
    const events = await prisma.event.findMany();
    return events;
  }
}
