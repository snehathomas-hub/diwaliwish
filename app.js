const express=require("express");
const app=express();
const port=process.env.PORT || 8082;
var nodemailer = require('nodemailer');

app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');


app.get('/',function(req,res){
    res.render("index",
    {
        title:'Diwali wish'
    });
});





app.listen(port,()=>{
    console.log("Server ready at" + port);
});