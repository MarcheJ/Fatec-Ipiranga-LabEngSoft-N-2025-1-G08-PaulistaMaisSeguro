import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const getConnection = async () => {
  return open({
    filename: './database.sqlite',
    driver: sqlite3.Database
  });
};

export { getConnection };
