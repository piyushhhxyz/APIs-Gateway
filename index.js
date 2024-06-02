const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const chatbotRoutes = require('./routes/chat');

const app = express();
app.use(bodyParser.json());

app.use('/api', chatbotRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
