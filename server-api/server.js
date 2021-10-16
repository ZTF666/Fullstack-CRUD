const express = require("express")
const cors = require('cors')

const app = express()
const db = require("./app/models")

app.use(express.json())
app.use(cors())
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

/**Importing routes**/
const usersRouter = require('./app/routes/User.route')
/*********************/

/**Initializing routes**/
app.use('/api/users/',usersRouter)
/************************/


db.sequelize.sync().then(()=>{
    app.listen('3001',()=>{
    console.log('We Iz Runnin on PORT 3001')
})
})

