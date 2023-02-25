//scheme validation library build in TS
import * as z from 'zod';

const Todo = z.object({
  content: z.string().min(1),
  done: z.boolean(),
});

//makes an type by zod infering the type
type Todo = z.infer<typeof Todo>;

export default Todo;

