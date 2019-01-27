const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('path');
const home = require('./views/home');
const users = require('./views/users');
const userInfo = require('./views/userInfo');

// use morgan to log server request info
app.use(morgan('dev'));

express.static('/');
app.use(express.static(path.join(__dirname, 'public')));

let port = 1337;

app.get('/', (req, res) => {
  res.send(home);
});

app.get('/users', (req, res) => {
  res.send(users);
});

app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  res.send(userInfo(id));
});

// server is now listening for requests
app.listen(port, () => {
  console.log(`Server is listening in port ${port}`);
});
