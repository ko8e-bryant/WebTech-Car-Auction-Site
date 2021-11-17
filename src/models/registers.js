const mongoose =require("mongoose");

const loginSchema=new mongoose.Schema({
fullname:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true 
}

})

//we create collections here

const Register=new mongoose.model("Login",loginSchema);

module.exports= Register;