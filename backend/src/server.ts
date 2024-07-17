import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import bodyParser from 'body-parser';
import Eventrouter from './Router/event.router';
import eventRouter from './Router/event.router';
import authRouter from './Router/user.router';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: 'http://localhost:4200',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.use(bodyParser.json()); // or app.use(express.json())


app.use("/event",eventRouter)
app.use("/user",authRouter)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
