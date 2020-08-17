const PORT = process.env.PORT || 3000;

const express = require('express');

const app = express();

app.use(express.static('public'));
app.use(express.json());

app.listen(PORT, () =>
  console.log(`Server is up and running at port ${PORT} 🚀`)
);

app.post('/clicks', async function(request, response) {
  const { pageX, pageY, eventPath, timeOnPage, textInTarget, userId } = request.body;
  console.log(request.body)
    response.json({ click: 'tracked' });
  }
);