const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const chatbotRoutes = require('./routes/chat');
// const plannerRoutes = require('./routes/planner')

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/api', chatbotRoutes);
// app.use('/api', plannerRoutes);

const port = process.env.PORT || 3000;
app.get("/", (_, res) => res.send("SHUBH MANGAL PLANNINGs API Gateway Running"))
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
