const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Inicializar base de datos SQLite
const db = new sqlite3.Database('./eventos.db', (err) => {
  if (err) {
    console.error('Error al abrir la base de datos:', err.message);
  } else {
    console.log('Conectado a la base de datos SQLite.');
  }
});

// Crear tablas si no existen
const createTables = () => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
  )`);
  db.run(`CREATE TABLE IF NOT EXISTS events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    name TEXT,
    created_at TEXT,
    FOREIGN KEY(user_id) REFERENCES users(id)
  )`);
  db.run(`CREATE TABLE IF NOT EXISTS guests (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    event_id INTEGER,
    name TEXT,
    group_name TEXT,
    group_color TEXT,
    FOREIGN KEY(event_id) REFERENCES events(id)
  )`);
  db.run(`CREATE TABLE IF NOT EXISTS tables (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    event_id INTEGER,
    name TEXT,
    is_main INTEGER DEFAULT 0,
    capacity INTEGER DEFAULT 10,
    FOREIGN KEY(event_id) REFERENCES events(id)
  )`);
  db.run(`CREATE TABLE IF NOT EXISTS table_guests (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    table_id INTEGER,
    guest_id INTEGER,
    FOREIGN KEY(table_id) REFERENCES tables(id),
    FOREIGN KEY(guest_id) REFERENCES guests(id)
  )`);
};
createTables();

// Endpoint de prueba
app.get('/', (req, res) => {
  res.json({ status: 'API funcionando' });
});

// Aquí irán los endpoints para usuarios, eventos, invitados, mesas, etc.

app.listen(PORT, () => {
  console.log(`API escuchando en http://localhost:${PORT}`);
});
