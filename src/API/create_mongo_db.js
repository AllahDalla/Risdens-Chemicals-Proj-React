const mongodb = require('mongodb')
const env = require('dotenv')

env.config()
const mongoClient = mongodb.MongoClient
var uri = process.env.URI
console.log(uri)

mongoClient.connect(uri, (err, db)=>{
    if(err){
        throw err
    }
    console.log('Database created')
    db.close()
})