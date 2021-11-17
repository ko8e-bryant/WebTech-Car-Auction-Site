const express =require("express");
const path=require("path");
const app=express();
const hbs=require("hbs");
require("./db/conn");



const Register=require("./models/registers");

const port=process.env.PORT||3000;
const static_path=path.join(__dirname, "../public");
const template_path=path.join(__dirname,"../templates/views");
const partials_path=path.join(__dirname, "../templates/partials");



  

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));  
app.set("view engine", "hbs");
app.set("views",template_path); 
hbs.registerPartials(partials_path);

app.get("/",(req,res)=>{
    res.render("index") 
});
 
app.get("/listOfCars",(req,res)=>{
    res.render("listOfCars"); 
})

app.get("/login",(req,res)=>{
    res.render("login"); 
})

app.get("/EachCar",(req,res)=>{
    res.render("EachCar"); 
})
app.get("/index",(req,res)=>{
    res.render("index"); 
})
app.listen(port,()=>{
    console.log(`server is running at port no ${port}`);
 
})

//creating new user in our database
app.post("/index",async(req,res)=>{
    try{
        const registerUser= new Register({
            fullname:req.body.fullname,
            password:req.body.password
        });
        const registered=await registerUser.save();
        res.status(201).render("index");
        //console.log(req.body.fullname);
        //res.send(req.body.fullname);
    }catch(error){
        res.status(400).send(error);
    }
})