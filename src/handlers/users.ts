import { Request, Response } from 'express';
import { createUser } from '../dtos/createUser';
import { createUserQueryParams } from '../types/query-params';
export function getUsers(req: Request, res: Response) {
	res.send([]);
}

export function getUsersById(req: Request, res: Response) {
	res.send([]);
}

export function createUser(
	req: Request<{}, {}, createUser, createUserQueryParams>,
	res: Response,
) {
	// req.query.loginAfterCreate = true;
	res.status(201).send({});
}
