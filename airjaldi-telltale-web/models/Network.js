const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const NetworkSchema = new Schema({
  networkName: {
    type: String,

  },
  zone: {
    type: String,

  },

  relayNetwork: [
    {
        relayNetworkName:{
        type: String,
        required: true
    },
    sensor:{
        type: String,
        required: true
    },
    batterytype:{
        type: String,
        required: true
    },


    batteryampere:{
        type: String,
        required: true
    },
    

    UpperVoltageThreshold:{
        type: Number,
        required: true
    },
    LowerVoltageThreshold:{
        type: Number,
        required: true
    },
   
    coment: [
      {
          avatar:{
          type: String,
          required: true
      },
      email:{
          type: String,
          required: true
      },
       name:{
          type: String,
          required: true
      },
  
  
      coment:{
          type: Object,
          required: true
      },
      date: {
        type: Date,
        default: Date.now
      },
      
  
     
     
      
      
      
      
  
     
    }
  ]
    
    
    
    

   
  }
]



,


  


} ,  { minimize: false });




module.exports = Network = mongoose.model("Network", NetworkSchema);
