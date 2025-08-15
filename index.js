const express = require('express')
const cors = require('cors');
require('dotenv').config();
const { Pool } = require('pg');

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

const pool = new Pool({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  ssl: {
    require: true,
  },
});

/*
async function getPgVersion() {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT version()');
    console.log(result.rows[0]);
  } finally {
    client.release();
  }
}
getPgVersion();
*/

const gifRoutes = require('./routes/gifRoutes.js')
const authRoutes = require('./routes/authRoutes.js')

const app = express()
const port = 3000

app.use(cors())


// Router
app.use('/gif', gifRoutes); 
//app.use('/collection', collectionRoutes); 
app.use('/auth', authRoutes); 


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
