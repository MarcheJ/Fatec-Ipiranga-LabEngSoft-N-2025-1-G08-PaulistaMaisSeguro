import { getConnection } from './database.js';

const createUser = async (nmUsuario, emUsuario, snUsuario) => {
  const db = await getConnection();
  const query = `INSERT INTO usuarios (nmUsuario, emUsuario, snUsuario, stConta) VALUES (?, ?, ?, 'A')`;
  await db.run(query, [nmUsuario, emUsuario, snUsuario]);
  return { nmUsuario, emUsuario };
};

const getUserByEmail = async (emUsuario) => {
  const db = await getConnection();
  const query = `SELECT * FROM usuarios WHERE emUsuario = ?`;
  const user = await db.get(query, [emUsuario]);
  return user;
};

export { createUser, getUserByEmail };