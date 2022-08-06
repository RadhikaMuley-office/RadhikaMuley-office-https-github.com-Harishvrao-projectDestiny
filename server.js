const express =require('express');
const {engine}=require('express-handlebars')
const {connect}=require('mongoose')
const {MONGODB_URL,MONGODB_CLOUD_URL,PORT}=require('./config/index')
const app=express()
const Handlebars=require('handlebars');
const methodOverride=require('method-override');
//router catch 
const bookingRoute=require('./routes/bookingRoute')
const userRoute=require('./routes/userRoute')
const adminRoute=require('./routes/adminRoute')



//middleware section starts here
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname+'/public'));
app.engine('handlebars',engine())
app.set('view engine','handlebars')
//method override
app.use(methodOverride('_method'))
//middleware section ends here




//base url starts here
app.get('/',(req,res)=>{
    res.render('home')
})
//base url ends here



//mount section starts here
app.use('/user',userRoute)
app.use('/booking',bookingRoute)
app.use('/admin',adminRoute)
//mount section ends here






//node js server starts here
let startserver=async ()=>{
try {
  
    if(process.env.NODE_ENV==='development'){
         //db connection
          await connect(MONGODB_URL)
          console.log('mongodb connected');
    }
    if(process.env.NODE_ENV==='production'){
        await connect(MONGODB_CLOUD_URL)
        console.log('mongodb cloud connected')   
    }
     app.listen(PORT ,(err)=>{
    if(err) throw err;
    console.log(`server listen port no ${PORT}`);
 })
    
} catch (error) {
    console.log(error);
}
}
startserver()