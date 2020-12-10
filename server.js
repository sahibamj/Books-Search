const express = require('express');
const cors = require('cors');
const path = require('path');
const Database = require('./src/database.js');

const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(require("./src/routes.js"));

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
