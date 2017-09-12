'use strict';

let express = require('express');
let app = express();
require('dotenv').config();

let routes = require('./routes/');

const logParams = (req, res, next) => {
    console.log("Middleware function awesomeness");
    // console.log('request', req);
    console.log('req.params', req.params.id);
    console.log('req.url from "logParams"', req.url);
    next();
};

app.use(logParams);
app.use('/api/v1/', routes);

app.use((req, res, next) => {
    let err = new ERROR('Whoops');
    err.status = 404;
    next()

});

app.use((err, req, rex, next) => {
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