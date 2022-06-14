const mongodb = require('mongodb')
const env = require('dotenv')

env.config()
const mongoClient = mongodb.MongoClient
var uri = process.env.URI

mongoClient.connect(uri, (err, db)=>{
    if(err){
        throw err
    }
    var dbo = db.db(process.env.DB_NAME)
    var firstobj = {name:'xxxxxxx', age:21, email:'xxxxxxxxx'}
    dbo.collection("Customers").insertOne(firstobj, (err, res)=>{
        if (err){
            throw err
        }
        console.log('document inserted')
        db.close()
    })
})