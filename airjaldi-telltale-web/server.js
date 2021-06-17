const express = require("express");
const mongoose = require("mongoose");

const passport = require("passport");
const MongoClient = require("mongodb");
const users = require("./routes/users");

const path = require('path');
const app = express();
const cors = require('cors')

const bodyParser = require("body-parser");


// Bodyparser middleware

app.use(cors())
// DB Config
const moment = require('moment')
const db = require("./config/keys").mongoURI;
const Notifications = require("./models/Notifications");
const Sensor = require("./models/Sensor");
const { getConfirmLocale } = require("antd/lib/modal/locale");
const RelayUser = require("./models/RelayUser");

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true ,useUnifiedTopology: true}
  )
  .then(() => 
  
    
  
 
  MongoClient.connect("mongodb+srv://amakien_team:FuWVJj1psE1l4i8x@telltail.3wrhr.mongodb.net/",
  {
    useUnifiedTopology: true,
     useNewUrlParser: true,
  
  }).then((client) => {
    const connect = client.db("sensordata")
    console.log('sdds')
    setInterval ( async  function   () {
   
     let netw = await  Network.find({})
     
    
     netw.forEach( async  cities => {

     
       
      let user = await Network.findOne({networkName:cities.networkName} );
  
      connect.collection('test').find().sort({reading_time:-1}).limit(200).toArray(function(err, names) {
       
  
      

          if(!err) {
    
     console.log(names.slice(0, 10))
            
            const newNames  =  names.filter(sets => sets.network === cities.networkName ) 
           
 
    
            const netLength = user.relayNetwork;
           
     
              const data1 =  newNames
              
              // getting first two item from array of list
         const data = data1.slice( 0 ,  netLength.length);
    
   
 
 
        
          netLength.forEach( async element => {
          
            // console.log(element.relayList)
            console.log(element.UpperVoltageThreshold  , "hjadhjk")
    
            const set  =  data.filter(sets => sets.location === element.relayNetworkName ) 
     
               
            // console.log(set , set.length)
             
            if(set.length  === 0) {

                // console.log(element.relayNetworkName)
            const  noti =  await   Notifications.find({location:element.relayNetworkName})
               
          


            // check if Notification length if it  is zero its becomes undefined
              
            if(noti.length === 0) {
              const data = {
                    status:"red",
                    network: cities.networkName,
                    message:'Sensor is not working',
                    location:element.relayNetworkName,
                    reading_time: moment().format()
                  }
        
                   const alert = await Notifications.create(data)
                  //  console.log(alert)
                      // console.log("sensor Closd" , element.relayNetworkName)
                
            }
             else {
               // Checking last value to not send again message
              const last =  noti[noti.length - 1]
          
    
              if(last.message === "Sensor is not working" ) {
                console.log("message Alrady Sended" , element.relayNetworkName )
            }
            else {
              const data = {
                status:"red",
                network: cities.networkName,
                message:'Sensor is not working',
                location:element.relayNetworkName,
                reading_time: moment().format()
              }
    
               const alert = await Notifications.create(data)
               console.log(alert)
                  console.log("sensor Closd" , element.relayNetworkName)
            }       
          }
                }
                  else {
                   
          const sensors = await Sensor.findOne({reading_time:set[0].reading_time , location:set[0].location})

          if(sensors) {
            // console.log("exist")
          
         
         

          } 
          else {
            const sensors = await Sensor.create(set[0])
               console.log(sensors , "sdds")

               const data = await RelayUser.find({})
               const users = []
               
               data.forEach(element =>{
                  const set  =  element.relayNetwork.filter(sets => sets.relayName === sensors.location) 
                // console.log(set.length)
                if(set.length === 1 ){
            users.push(element._id)
           }
                  
               });
              //  console.log(users , sensors.location)

         
  const  noti =  await   Notifications.find({location:element.relayNetworkName})
 
  // console.log(noti)
 const last =  noti[noti.length - 1]

 if(noti.length === 0) {
  const data = {
    status:"green",
    ...set[0],

    message:'Sensor is Connected'
  }

       const alert = await Notifications.create(data)
   
    
      //  console.log(alert , data)
 
       users.forEach(element => {

        RelayUser.findOneAndUpdate({  _id: element  },{  $push: { "notifications": data  }  },  { new: true, upsert: true },function(err, doc) {



          // console.log("notificationss")
      
      
        });
      
         
       });

    
}
               
else {
 if (sensors.voltage > element.UpperVoltageThreshold  && sensors.voltage < element.UpperVoltageThreshold  + 2) {


 

 
    if(last.status === "red"   ) {

         const data = {
            status:"green",
            ...set[0],
            _id:sensors._id,
            message:'Sensor is working Now'
          }

           const alert = await Notifications.create(data)

            //  console.log(alert)

             users.forEach(element => {

              RelayUser.findOneAndUpdate({  _id: element  },{  $push: { "notifications": data  }  },  { new: true, upsert: true },function(err, doc) {
      
      
      
                // console.log("notificationss" , "green")
            
            
              });
            
               
             });

    }

     else if( last.status === "orange" ) {

      const data = {
         status:"green",
         ...set[0],
         _id:sensors._id,
         message:'Sensor is working Now'
       }

        const alert = await Notifications.create(data)

          // console.log(alert)

          users.forEach(element => {

           RelayUser.findOneAndUpdate({  _id: element  },{  $push: { "notifications": data  }  },  { new: true, upsert: true },function(err, doc) {
   
   
   
            //  console.log("notificationss" , "green")
         
         
           });
         
            
          });

 }
    else {  
  // console.log("good" , sensors , sensors.network)
    }
      
        } 
         else if (sensors.voltage > element.LowerVoltageThreshold  && sensors.voltage < element.UpperVoltageThreshold ) {
           
          if(last.status  === "green" ) {

            const data = {
              status:"orange",
               ...set[0],
               _id:sensors._id,
               message:'Sensor stared Discharing'
             }
   
              const alert = await Notifications.create(data)
   
                // console.log(alert)

                users.forEach(element => {

                  RelayUser.findOneAndUpdate({  _id: element  },{  $push: { "notifications": data  }  },  { new: true, upsert: true },function(err, doc) {
          
          
          
                    // console.log("notificationss" , "orange")
                
                
                  });
                
                   
                 });
   
       }
       else if (last.status  === "orange") {
        // console.log("oragane Alrt Aldeady Sended")
        }
      
       else {
        //  console.log("oragane Alrt Aldeady Sended")
       }
         
        }
        else if (sensors.voltage > 0 && sensors.voltage <  element.LowerVoltageThreshold ) {
          if(last.status  === "green" ) {

            const data = {
              status:"red",
               ...set[0],
               _id:sensors._id,
               message:'Sensor is dicharged'
             }
   
              const alert = await Notifications.create(data)
   
                // console.log(alert)

                users.forEach(element => {

                  RelayUser.findOneAndUpdate({  _id: element  },{  $push: { "notifications": data  }  },  { new: true, upsert: true },function(err, doc) {
          
          
          
                    // console.log("notificationss" , "red")
                
                
                  });
                
                   
                 });
   
       }
     else  if(last.status  === "orange" ) {

        const data = {
          status:"red",
           ...set[0],
           _id:sensors._id,
           message:'Sensor is dicharged'
         }

          const alert = await Notifications.create(data)

            // console.log(alert)

            users.forEach(element => {

              RelayUser.findOneAndUpdate({  _id: element  },{  $push: { "notifications": data  }  },  { new: true, upsert: true },function(err, doc) {
      
      
      
                // console.log("notificationss" , "red")
            
            
              });
            
               
             });

   }
   
   else {
    // console.log("Red Alert Aldeady Sended")
  }
          
          
}
        }

          }
       
                  }
            
          });
    
    
       
           
            
          }
      });


     });



  
    
  }, 5000);

}).catch((err) => {
  
    // Printing the error message
    console.log(err.Message);
  })
  
    


  )
  .catch(err => console.log(err));
  




  

 
// Passport middleware
app.use(passport.initialize());

app.use(express.urlencoded({
  extended: true
}));

app.use(express.json());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api", users);





const port = process.env.PORT || 5000;

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));