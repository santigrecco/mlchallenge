const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const path = require('path');

const items = require('./routes/items.routes');

const app = express();

app.use(express.static(__dirname + '/public/dist/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));


app.use('/api', items);


app.get('*', function (_req, res) {
  res.sendFile(path.resolve(__dirname, 'public', 'dist/index.html'))
})

const server = app.listen(port, () => {
  console.log("listening on port: ", port);
});

server.setTimeout(50000);