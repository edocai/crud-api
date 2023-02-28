//scheme validation library build in TS
import { WithId } from 'mongodb';
import * as z from 'zod';
import { db } from '../../db';

//todo model
const Todo = z.object({
  content: z.string().min(1),
  done: z.boolean().default(false),
});

//makes a type by zod infering the type
export type Todo = z.infer<typeof Todo>;
//adds mongodb id (_id) to the type
export type TodoWithId = WithId<Todo>;
//will return typed information that has Todo properties
export const Todos = db.collection<Todo>('todos');
