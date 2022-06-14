const mongodb = require('mongodb')
const env = require('dotenv')

env.config()

function DatabaseInteraction(
    requestQuery= false,
    queryObj = {},
    createRecord= false,
    dbName='errorCollectionCreated', 
    dbData={variable:'value'}, 
    createdb=false, 
    ){
    const mongoClient = mongodb.MongoClient
    var uri = process.env.URI

    mongoClient.connect(uri, (err, db)=>{
        if(err){
            throw err
        }
        var dbo = db.db(process.env.DB_NAME)
        if(createdb){
            dbo.createCollection(dbName, (err, res)=> {
                if(err)throw err

                console.log("Collection "+dbName+" created successfully")
            })
            
        }

        if(createRecord){
            var data = dbData
            dbo.collection(dbName).insertOne(data, (err, res)=>{
                if (err){
                    throw err
                }
                console.log('document inserted')
                db.close()
            })
        }

        if(requestQuery){
            dbo.collection(dbName).find(queryObj).toArray( (err, result)=>{
                if(err)throw err
                if(result.length > 0){
                    console.log(result)
                    return true
                }else{
                    return false
                }
            })
        }
    })
}


module.exports = DatabaseInteraction