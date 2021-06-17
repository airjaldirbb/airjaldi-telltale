const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ActivitySchema = new Schema({
 
        
    date: {
        type: Date,
        default: Date.now
      },
       

        message:{
            type: String,
         
        },
        
  

  


});




module.exports = Activity = mongoose.model("Activity", ActivitySchema);
