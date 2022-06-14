const app = require('express')
const cors = require('cors')
const env = require('dotenv')
const parser = require('body-parser')

const DatabaseInteraction = require('./create_mongo_db')


env.config()


const server = app()

server.use(cors())
server.use(parser.urlencoded({extended: false}))
server.use(parser.json())

server.get('/', (req, res)=>{
    res.sendStatus(200)
})

server.post('/authorize', (req, res)=> {
    let query = req.body.username
    let userLst = DatabaseInteraction(true, {username: query}, false, "Users")
    if(userLst){
        res.sendStatus(200)
    }else{
        res.sendStatus(404)
    }
})

server.post('/create_user', (req, res)=>{
    let record = req.body
    DatabaseInteraction(true, "Users", record)
    res.sendStatus(200)
})

server.listen(process.env.PORT, ()=> {
    console.log("api listening on port "+ process.env.PORT)
})