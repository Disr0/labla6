const fs = require('node-fs')
const getDb = require('../db')

const db = getDb()

fs.mkdir('./build/static/db', () => {
    fs.writeFile(
        `./build/static/db/${key}.json`,
        JSON.stringify(value),
        (err) => {
            if (err) throw err;
        }
    )
})