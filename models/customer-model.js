'use strict';

const sqlite3 = require('sqlite3').verbose();

//need to require in the database once named
const db = new sqlite3.Database('bangazonStore.sqlite');

module.exports = {
    get_all: () => {
        return new Promise((resolve, reject) => {
            db.all(
                //SQL STUFF
                , (err, user_data) => {
                    if (err) return reject(err);
                    resolve(user_data);
                });
        });
    },
    get_one: (id) => {
        return new Promise((resolve, reject) => {
            db.get(
                //SQL STUFF
                $ { id }, (err, user) => {
                    if (err) return reject(err);
                    resolve(user);
                });
        });
    }
}