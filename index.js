const PORT = process.env.PORT || 3000;

const express = require('express');
const pg = require('pg');

const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });

const app = express();

app.use(express.static('public'));
app.use(express.json());



db.query(`
  CREATE TABLE IF NOT EXISTS clicks(
    id SERIAL PRIMARY KEY,
    pageX int NOT NULL,
    pageY int NOT NULL,
    eventPath VARCHAR(128) NOT NULL,
    timeOnPage VARCHAR(128) NOT NULL,
    textInTarget VARCHAR(128) NOT NULL,
    userId VARCHAR(128) NOT NULL
  );
`);




app.post('/clicks', async function(request, response) {
  const { pageX, pageY, eventPath, timeOnPage, textInTarget, userId } = request.body;
  console.log(request.body)
    response.json({ click: 'tracked' });
  
;


const result = await db.query(
  `INSERT INTO clicks (pageX, pageY, eventPath, timeOnPage, textInTarget, userId) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`,
  [pageX, pageY, eventPath, timeOnPage, textInTarget, userId]
);
response.json(result.rows[0]);
});

app.listen(PORT, () =>
  console.log(`Server is up and running at port ${PORT} 🚀`)
);
