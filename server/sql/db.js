// require('dotenv').config();
// const mysql = require('mysql2');

// const db = mysql.createConnection({
//   host: process.env.HOST,
//   user: process.env.USER,
//   password: process.env.PASSWORD,
//   database: process.env.DATABASE,
//   port: process.env.PORT,
// });

// module.exports = db.promise();
// require('dotenv').config();
// const { Pool } = require('pg');

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false, // for Render cloud-hosted DB
//   },
// });

// module.exports = pool;
require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // works for Supabase, Neon, etc.
  },
});

module.exports = pool;

