const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = 3001;
const dbPath = path.join(__dirname, 'db.sqlite');
const db = new sqlite3.Database(dbPath);

app.use(cors());
app.use(express.json());

app.get('/api/get_characters', (req, res) => {
  db.all('SELECT * FROM characters ORDER BY id DESC', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.post('/api/add_character', (req, res) => {
  const { name, class: className, level = 1 } = req.body;

  if (!name || !className || !level) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  db.run(
    'INSERT INTO characters (name, class, level) VALUES (?, ?, ?)',
    [name, className, level],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ success: true, id: this.lastID });
    }
  );
});

app.get('/api/get_classes', (req, res) => {
  db.all('SELECT id, name, description FROM classes', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });

    // Add packageKey dynamically
    const withPackageKeys = rows.map(cls => ({
      ...cls,
      packageKey: `${cls.name.toLowerCase().replace(/\s+/g, '')}Package`
    }));

    res.json(withPackageKeys);
  });
});

app.get('/api/get_backgrounds', (req, res) => {
  db.all('SELECT id, name, description FROM backgrounds', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.get('/api/get_races', (req, res) => {
  db.all('SELECT id, name, description FROM races', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.get('/api/get_subraces', (req, res) => {
  const raceId = parseInt(req.query.race_id);

  if (!isNaN(raceId)) {
    db.all(
      'SELECT id, name, description FROM subraces WHERE race_id = ?',
      [raceId],
      (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
      }
    );
  } else {
    db.all('SELECT id, name, description, race_id FROM subraces', [], (err, rows) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(rows);
    });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Node backend running on http://localhost:${PORT}`);
});