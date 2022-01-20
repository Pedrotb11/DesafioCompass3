const mongoose = require('mongoose');
require('dotenv').config();
class Database {
    constructor() {
        this.connect();
    }

    connect() {
        return mongoose.connect('mongodb://localhost:27017/employee')
            .then(console.log('DB connected'))
    }
}

module.exports = new Database().connect();