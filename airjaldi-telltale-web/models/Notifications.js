const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const notificationSchema = new Schema({
  network: {
    type: String,

  },

  location: {
    type: String,

  },
  status: {
    type: String,
  },
  reading_time: {
    type: String,
  },
  sensor: {
    type: String,
  },
  batteryvolt: {
    type: String,
  },

  batterytype: {
    type: String,
  },
  batteryampere: {
    type: String,
  },
  message: {
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




module.exports = notification = mongoose.model("notification", notificationSchema);
