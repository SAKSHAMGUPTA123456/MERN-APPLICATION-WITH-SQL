const db = require('../sql/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  try {
    const { username, phone, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const token = jwt.sign({ email }, process.env.SECRET, { expiresIn: '30d' });

    // Check if user already exists
    const [userCheck] = await db.execute('SELECT * FROM testing WHERE email = ?', [email]);
    if (userCheck.length > 0) {
      return res.status(400).json({ error: 'User already exists with this email' });
    }

    // Insert user
    await db.execute(
      'INSERT INTO testing (username, phone, email, password, token) VALUES (?, ?, ?, ?, ?)',
      [username, phone, email, hashedPassword, token]
    );

    // Fetch user details back
    const [result] = await db.execute('SELECT * FROM testing WHERE username = ?', [username]);
    res.status(200).json({ mssg: 'User data successfully stored in SQL', details: result });

  } catch (error) {
    res.status(400).json({ mssg: error.message });
  }
};

const services = async (req, res) => {
  try {
    const [result] = await db.execute('SELECT * FROM services');
    res.status(200).json({ details: result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { register, services };
