import { Router } from 'express';
import { TodoWithId, Todos } from './todos.model';

const router = Router();

router.get<{}, TodoWithId[]>('/', async (req, res) => {
  const result = await Todos.find();
  const todos = await result.toArray();
  res.json(todos);
});

export default router;