const express = require('express');
const app = express();

app.use(express.static(__dirname + '/client'));

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/client/index.html');
});

app.listen(3000);
console.log('App listening on port 3000');
