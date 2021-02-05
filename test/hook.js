import {
    dropTables,
    createTables,
    insertIntoTables,
  } from '../src/utils/queryFunction';
  
  before(async () => {
    await createTables();
    await insertIntoTables();
  });
  
  after(async () => {
    await dropTables();
  });