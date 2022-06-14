const app = require('express')
const cors = require('cors')
const env = require('dotenv')

env.config()


const server = app()

server.use(cors())

server.get('/', (req, res)=>{
    res.send('Hello world')
})

server.listen(process.env.PORT, ()=> {
    console.log("api listening on port "+ process.env.PORT)
})