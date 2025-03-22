import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { createUser, getUserByEmail } from './database/userModel.js';
import jwt from 'jsonwebtoken';

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use(bodyParser.json());

app.post('/api/register', async (req, res) => {
  const { nmUsuario, emUsuario, snUsuario } = req.body;
  try {
    const user = await createUser(nmUsuario, emUsuario, snUsuario);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.post('/api/login', async (req, res) => {
  const { emUsuario, snUsuario } = req.body;
  try {
    const user = await getUserByEmail(emUsuario);
    if (user && user.snUsuario === snUsuario) {
      const token = jwt.sign({ id: user.id }, 'your_jwt_secret');
      res.status(200).json({ ...user, token });
    } else {
      res.status(401).json({ message: 'Credenciais inválidas' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.get('/api/user', async (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  try {
    const decoded = jwt.verify(token, 'your_jwt_secret');
    const user = await getUserByEmail(decoded.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(401).json({ message: 'Token inválido' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
