require('dotenv').config()
const pgPromise = require('pg-promise');

const pgp = pgPromise({}); // Empty object means no additional config required

const config = {
    host: process.env.localhost,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD
};

const db = pgp(config);

/*
db.any('select * from product')
    .then(res => {
        console.log(res);
    });
*/
exports.db = db;