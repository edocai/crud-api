import { Router } from 'express';
import { findAll } from './todos.handlers';

const router = Router();

router.get('/', findAll);

export default router;