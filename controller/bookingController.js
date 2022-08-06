const bookingSchema=require('../Model/Booking')
const {connect}=require('mongoose')
/*@http get method 
@access public
@url/movies/get-movies
*/
let bookingPage=async(req,res)=>{
    res.render('bookings/bookingPage')

}




/*@http post method 
@access private
@url/movies/create-movies
*/

/*@http put method 
@access private
@url/movies/update-movies/:id
*/


/*@http delete method 
@access private
@url/movies/delete-movies/:id
*/

module.exports={}