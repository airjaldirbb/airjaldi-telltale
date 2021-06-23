const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const relayUserSchema = new Schema({
  avatar: {
    type: String,
   
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
 
  phone: {
    type: Number,
    required: true
  },
  location: {
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
  
  relayNetwork: [
    {
        relayName:{
        type: String,
    
    },
   

  }
]
,
notifications: [
     {
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
      
   

  }
]


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




module.exports = relayUser = mongoose.model("relayUsers", relayUserSchema);
