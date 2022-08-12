const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
    MongoClient.connect('mongodb+srv://busra:busra12345@cluster0.24xwswy.mongodb.net/?retryWrites=true&w=majority')
        .then(client => {
            console.log("connectec");
            callback(client);

        })
        .catch(err => {
            console.log(err);
            throw err;
        })
}

module.exports = mongoConnect;