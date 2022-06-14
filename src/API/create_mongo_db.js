const mongodb = require('mongodb')
const env = require('dotenv')

env.config()
const mongoClient = mongodb.MongoClient
var uri = process.env.URI

mongoClient.connect(uri, (err, db)=>{
    if(err){
        throw err
    }
    var dbo = db.db('risden')
    var firstobj = {name:'alromario', age:21, email:'alromariodavis'}
    dbo.collection("Customers").insertOne(firstobj, (err, res)=>{
        if (err){
            throw err
        }
        console.log('document inserted')
        db.close()
    })
})