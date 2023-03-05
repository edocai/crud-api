import { Router } from 'express';
import { createOne, findAll } from './todos.handlers';

const router = Router();

router.get('/', findAll);
router.post('/', createOne);

export default router;