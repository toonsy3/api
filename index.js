// app.js
const express = require('express');
const cors = require('cors');
const { messagesTable } = require('./db/messagesModel');

const app = express();
const port = 8080;

app.use(cors());

app.get('/messages/:uuid', async (req, res) => {
  try {
    const data = await messagesTable.findAll({
      where: { uuid: req.params.uuid },
      order: [['timestamp', 'DESC']],
      limit: 250
    });

    if (data.length === 0) {
      return res.status(404).send({ status: 'error', message: 'No messages found' });
    }

    return res.status(200).send({ status: 'ok', data: data });
  } catch (error) {
    console.error('Error processing the request:', error);
    res.status(500).send({ status: 'error', message: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Chatlogs API listening at http://localhost:${port}`);
});
