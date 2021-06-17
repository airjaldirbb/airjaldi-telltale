const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const SensorsSchema = new Schema({
 
        
            network:{
            type: String,
          
        },
        location:{
            type: String,
      
        },
       
        batteryvolt:{
            type: Number,
            
        },
        batterytype:{
            type: String,
            
        },

        reading_time:{
            type: String,
            
        },
        voltage : {
            type: String,
          
        },


        batteryampere:{
            type: String,
         
        },
        
  

  


});




module.exports = Sensors = mongoose.model("Sensors", SensorsSchema);
