//scheme validation library build in TS
import * as z from 'zod';
import { db } from '../../db';

const Todo = z.object({
  content: z.string().min(1),
  done: z.boolean().default(false),
});

//makes a type by zod infering the type
export type Todo = z.infer<typeof Todo>;
//will return typed information that have Todo properties
export const Todos = db.collection<Todo>('todos');
