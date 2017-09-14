'use strict';

let express = require('express');
let app = express();
let bodyParser = require('body-parser');
require('dotenv').config();

let routes = require('./routes/');

const log_params = (req, res, next) => {
    console.log('req.params', req.params.id);
    console.log('req.url from "logParams"', req.url);
    next();
};
// Body Parser
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

app.use(log_params);
app.use('/api/v1/', routes);

app.use((req, res, next) => {
    let err = new ERROR('Whoops');
    err.status = 404;
    next(err)
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        message: "This Does Not Work",
        err: err
    });
});

let port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});