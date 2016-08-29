'use strict';

const express = require('express');
const app = express();
const path = require('path');
const config = require(path.join(__dirname, '..', '..', 'config.js'));

// app.get('/api', function (req, res) {
//   res.send('Hello World!');
// });

app.use(express.static(path.join(__dirname, '..', 'public')));

app.listen(config.server.port, config.server.ip, () => {
    console.log('Example app listening on port ' + config.server.port);
});
