const userSchema=require('../Model/User')
const {connect}=require('mongoose')
/*@http get method 
@access public
@url/movies/get-movies
*/
let registerUser=(req,res)=>{
    res.render('users/register')
}

let loginUser=async(req,res)=>{

 res.render('home')
}



/*@http post method 
@access private
@url/movies/create-movies
*/

let createUser=async(req,res)=>{
    console.log(req.body);
    res.redirect('/users/login',301,{})
}
let validateUser=async(req,res)=>{
    console.log(req.body);
    res.render('home')
}

/*@http put method 
@access private
@url/movies/update-movies/:id
*/


/*@http delete method 
@access private
@url/movies/delete-movies/:id
*/

module.exports={registerUser,loginUser,createUser,validateUser}