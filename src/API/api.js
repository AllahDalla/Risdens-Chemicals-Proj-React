const app = require('express')
const cors = require('cors')

const server = app()

server.use(cors())

server.get('/', (req, res)=>{
    res.send('Hello world')
})

server.listen(8000, ()=> {
    console.log("api listening on port 8000")
})