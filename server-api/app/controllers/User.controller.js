const db = require('../models/')
const Users = db.User

// create user
exports.create = (req, res) => {
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    const user = req.body

        Users.create(user).then(data=>res.send(data))
         .catch(err=> res.status(500).send(err.message || "Error while creating User..."))

}
// fetch all users
exports.findAll=(req,res)=>{
    Users.findAll()
    .then(data=>res.send(data))
    .catch(err=>res.status(500).send(err.message || 'Error while retrieving data...'))
}
// fetch user by id
exports.findOne=(req,res)=>{
    const id = req.params.id
    Users.findByPk(id)
    .then(data=>{
        if(data){res.send(data)}
        else{res.status(404).send('Does not exist...')}
    })
    .catch(err=>res.status(500).send(err.message || 'Error ! try again later...'))
}
// update user's data
exports.update=(req,res)=>{
    const id = req.params.id 
    const {fname,lname,number,email} = req.body
    Users.update({
        fname:fname,
        lname:lname,
        email:email,
        number:number
    },
    {where:{id:id}})
    .then((data)=>{
        if(data == 1){
            res.send({message:"User data was updated successfully !"})
        }else{
            res.status(404).send({message:"Error ! empty Body or Cannot update data .User : "+id+" does not exist."})
        }
    })
    .catch((err)=>res.status(500).send(err.message || "Error updating User data"))

}
// delete user's data
exports.delete=(req,res)=>{
    const id = req.params.id 
    Users.destroy({where:{id:id}})
    .then(data=>{
        if(data){res.send('Data deleted successfully')}
        else{res.status(404).send('Data with this id does not exist ')}
    })
    .catch(err=>res.status(500).send(err.message || "Error while deleting data"))
}

