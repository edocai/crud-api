import { client } from './db';

//closes the database connection after all the tests complete
global.afterAll(async () => {
  await client.close();
});