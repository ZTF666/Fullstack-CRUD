module.exports = (sequelize,DataTypes)=>{
    const User = sequelize.define('User',{

        fname:{
        type:DataTypes.STRING,
        allowNull:false,

    },
        lname:{
        type:DataTypes.STRING,
        allowNull:false,

    },
        email:{
        type:DataTypes.STRING,
        allowNull:false,

    },
        number:{
        type:DataTypes.INTEGER,
        allowNull:false,

    },
        image:{
        type:DataTypes.STRING(1234),
        allowNull:false,

    },




    })

    return User
}