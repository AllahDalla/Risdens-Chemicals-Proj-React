const mongodb = require('mongodb')
const env = require('dotenv')

env.config()
const mongoClient = mongodb.MongoClient
var url = process.env.URI
console.log(url)

// mongoClient.connect(url, (err, db)=>{
//     if(err){
//         throw err
//     }
//     console.log('Database created')
//     db.close()
// })