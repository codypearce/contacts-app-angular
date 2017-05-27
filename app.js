const express = require('express');
const app = express();

app.get('*', function(req, res) {
  res.sendfile('./index.html');
});

app.listen(3000);
console.log('App listening on port 3000');
