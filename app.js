const express = require('express');
const path = require('path')

// INIT APP

const app = express();

// VIEW ENGINE

app.set('view engine', 'ejs')


// HOME ROUTE

app.get('/', (req, res) => res.render("index"))

// SETTING UP SERVER

app.listen(3000, () => console.log("Server is up running live..."))

// ERROR 404

app.use((req, res) => {
  res.status(404)
  res.send('404: File Not Found')
})