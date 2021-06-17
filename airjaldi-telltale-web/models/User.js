const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  
  role: {
    type: String,
  
  },




// notification:[{
//   img : {
//     type:String,
//     required: true
    
//  },

//    message: {
//    type:String,
//    required: true
   
// },
//   decription: {
//   type:String,
//   required: true
  
// },


// }]
  


});




module.exports = User = mongoose.model("users", UserSchema);
