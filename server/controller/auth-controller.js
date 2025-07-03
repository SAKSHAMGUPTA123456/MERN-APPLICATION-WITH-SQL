const db = require('../sql/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {A
  try {
    const { username, phone, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    const token = jwt.sign({ email }, process.env.SECRET, { expiresIn: '30d' });

    // Check if user already exists
    const userCheck = await db.query('SELECT * FROM testing WHERE email = $1', [email]);

    if (userCheck.rows.length > 0) {
      return res.status(400).json({ error: 'User already exists with this email' });
    }

    // Insert user
    await db.query(
      'INSERT INTO testing (username, phone, email, password, token) VALUES ($1, $2, $3, $4, $5)',
      [username, phone, email, hashedPassword, token]
    );

    // Fetch user back
    const result = await db.query('SELECT * FROM testing WHERE username = $1', [username]);
    res.status(200).json({ mssg: 'User data successfully stored in PostgreSQL', details: result.rows });

  } catch (error) {
    res.status(400).json({ mssg: error.message });
  }
};

const services = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM services');
    res.status(200).json({ details: result.rows });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { register, services };
