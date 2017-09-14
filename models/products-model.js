const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/bangazonStore.sqlite');

module.exports = {
    get_all: () => {
        return new Promise((resolve, reject) => {
            db.all(`SELECT * FROM products`,
                (err, products_data) => {
                    if (err) return reject(err);
                    resolve(products_data);
                });
        });
    },
    get_one: (id) => {
        return new Promise((resolve, reject) => {
            db.get(`SELECT * FROM products WHERE product_id = ${id}`,
                (err, product_data) => {
                    if (err) return reject(err);
                    resolve(product_data);
                });
        });
    },
    remove_one: (id) => {
        return new Promise((resolve, reject) => {
            db.run(`DELETE FROM products WHERE product_id = ${id}`,
                (err, product_data) => {
                    if (err) return reject(err);
                    resolve(product_data);
                });
        });
    }
}