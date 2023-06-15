const mongoose = require('mongoose');

function dbConnect() {
    mongoose.set('strictQuery', false); 
    mongoose.connect(process.env.MONGO_URI)

    const db= mongoose.connection;
    //create a promise that resolves when the connection is successful
    return new Promise((resolve, reject) => {
        db.on('error', (err) => {
            console.error.bind(console, 'connection error:');
            reject(err);
        });
        db.once('open', () => {
            console.log("Connected to MongoDB");
            resolve();
        });
    }
    )
}

module.exports = dbConnect;