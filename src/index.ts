import express, { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';

import usersRouter from './routes/users';

dotenv.config();
const app = express();

app.use(express.json());

app.use('/api/users', usersRouter);

app.get('/', (_req: Request, res: Response, _next: NextFunction): any =>
	res.send('Hello World from nixEXPRESS!'),
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
	console.log(`Server running on http://localhost:${PORT}`),
);
 