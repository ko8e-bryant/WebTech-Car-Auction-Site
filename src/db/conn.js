const mongoose =require("mongoose");

mongoose.connect("mongodb://localhost:27017/People",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log(`connnection is succesfull`);
}).catch((e)=> {
    console.log(`Not succesfull`);
})
 