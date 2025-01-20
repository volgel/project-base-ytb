const mongoose = require('mongoose');

let instance = null;
class Database {
    constructor() {
        if (!instance) {
            this.mongoConnection = null;
            instance = this;
        }
        return instance;
    }
    async connect(options) {
        try {
            console.log('Connecting to database');
            let db = await mongoose.connect(options.CONNECTION_STRING)
    
            this.mongoConnection = db;
            console.log('Database connection established');
        } catch (err) {
            console.log(err);
            process.exit(1);
        }
      
    }
}
module.exports = Database;