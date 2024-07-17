// src/routes/eventRouter.ts

import { Router } from 'express';
import { EventController } from '../controller/event.controller';

const eventRouter = Router();
const eventController = new EventController();

eventRouter.post('/create', eventController.createEvent);
eventRouter.get('/getone/:id', eventController.getEventById);
eventRouter.put('/update/:id', eventController.updateEvent);
eventRouter.delete('/delete/:id', eventController.deleteEvent);
eventRouter.get('/all', eventController.getAllEvents);

export default eventRouter;
