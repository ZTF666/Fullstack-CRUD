const express = require("express")
const cors = require('cors')
const mysql = require ("mysql2")

const app = express()
const db = require("./models")
const {User} = require('./models')

app.use(express.json())
app.use(cors())
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})



// fetch all
app.get('/select',async (req,res)=>{
    const listofusers = await User.findAll()
    res.json(listofusers)
})
// push
app.post('/insert',async (req,res)=>{

    const user = req.body
    await User.create(user)
    res.json(user)

})
// delete
app.delete('/delete/:id',async (req,res)=>{
    const id = req.params.id
    await User.destroy({
        where:{
            id:id
        }
    })
    res.json('Deleted')


})
// fetch by id
app.get('/byid/:id',async (req,res)=>{
    const id = req.params.id
    const user = await User.findByPk(id)
    res.json(user)

})

// Update user 

app.put('/edit/:id',async(req,res)=>{
    const id = req.params.id
    const {fname,lname,number,email} = req.body
    const user = await User.update({
        fname:fname,
        lname:lname,
        email:email,
        number:number
    },
    {where:{id:id}})
    res.json(user)
})






db.sequelize.sync().then(()=>{
    app.listen('3001',()=>{
    console.log('We Iz Runnin on PORT 3001')
})
})

