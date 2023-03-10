import { Request, NextFunction, Response } from 'express';
import { ZodError } from 'zod';
import { TodoWithId, Todos, Todo } from './todos.model';

export async function findAll(req: Request, res: Response<TodoWithId[]>, next: NextFunction) {
  try {
    const result = await Todos.find();
    const todos = await result.toArray();
    res.json(todos);
  } catch (error) {
    next(error);
  }
}

export async function createOne(req: Request<{}, TodoWithId, Todo>, res: Response<TodoWithId>, next: NextFunction) {
  try {
    //parses object
    const validateResult = await Todo.parse(req.body);
    const insertResult = await Todos.insertOne(validateResult);
    if (!insertResult.acknowledged) throw new Error('Errow was found'); 
    res.status(201);
    res.json({
      _id: insertResult.insertedId,
      ...validateResult,
    });
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(422);
    }
    next(error);
  }
}