const express = require("express");
const router = express.Router();
const MongoClient = require("mongodb");
const User = require("../models/User");
const Activity = require('../models/Activity')
const { check, validationResult } = require('express-validator');
const bcrypt = require("bcryptjs");
const moment = require('moment')
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const mongoose = require("mongoose");
const test = require("../models/Notifications");
const Network = require("../models/Network");
const Notifications = require("../models/Notifications");
const Sensor = require("../models/Sensor");
const RelayUser = require("../models/RelayUser");
const auth = require('../middleware/auth');


const passport = require("passport");
  router.post(
    '/login',
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { email, password } = req.body;

      try {
        let user = await User.findOne({ email });

        if (!user) {
          return res
            .status(400)
            .json({ errors: [{ msg: 'Invalid Credentials' }] });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
          return res
            .status(400)
            .json({ errors: [{ msg: 'Invalid Credentials' }] });
        }

        const payload = {
          user: {
            id: user.id,
            name:user.name,
            email:user.email
          }
        };

        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: '5 days' },
          (err, token) => {
            if (err) throw err;
            res.json({ token });
          }
        );

        const set = {
          message: `User Login in device ${req.body.message} `
        }
        const data =  await Activity.create(set)
        console.log(data)

        
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
      }
    }
  );
  router.post(
    '/register',
    check('name', 'Name is required').notEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { name, email, password } = req.body;

      try {
        let user = await User.findOne({ email });

        if (user) {
          return res
            .status(400)
            .json({ errors: [{ msg: 'User already exists' }] });
        }



        user = new User({
          name,
          email,
     role:"admin",
          password
        });

        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);

        await user.save();

        const payload = {
          user: {
            id: user.id
          }
        };

        jwt.sign(
          payload,
        keys.secretOrKey,
          { expiresIn: '5 days' },
          (err, token) => {
            if (err) throw err;
            res.json({ token });
          }
        );
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
      }
    }
  );





  router.get( '/getNetworkProfile/:id/:relay',

  async (req, res) => {




    try {

      console.log(req.params.relay)


     const data = await    Network.findOne({networkName: req.params.id})

     
    


     const sensors = await    Sensor.find({location:req.params.relay }).sort({reading_time:-1}).limit(2)

     const set = {
       sensors : sensors,
       data:data
     }
     res.json(set)







    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);


router.get( '/relayGraph/:relay',

async (req, res) => {




  try {

    console.log(req.params.relay)


   

   
  


   const sensors = await    Sensor.find({location:req.params.relay }).sort({reading_time:-1})

  
   res.json(sensors)







  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
}
);

router.get( '/getNetworkProfile/:id/',

async (req, res) => {




  try {

   


   const data = await    Network.findOne({networkName: req.params.id})

  
  


   const sensors = await    Sensor.find({network:req.params.id }).sort({reading_time:-1}).limit(data.relayNetwork.length)

   const set = {
     sensors : sensors,
     data:data
   }
   res.json(set)







  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
}
);

router.get( '/getReportList/:id',

  async (req, res) => {




    try {






     const sensors = await    Sensor.find({location: req.params.id})


     res.json(sensors.reverse())







    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

router.get( '/getNetwork',

async (req, res) => {




  try {


   const data = await    Network.find({})



 res.json(data)





  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
}
);

router.get( '/getRealyUsers',

async (req, res) => {

 

  // const data = await RelayUser.create(req.body) 
  // console.log(data)

  try {
  const data = await  RelayUser.find({  })



    res.json(data)


  






  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
}
);



router.get( '/getNotifications',

async (req, res) => {




  try {


   const data = await    Notifications.find({})

 res.json(data.reverse())





  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
}
);



router.post('/addNetwork',

async (req, res) => {




  try {
   
  
  
     const net = await Network.findOne({networkName:req.body.networkName})
   
     
     if(net) {
      return res
        .status(400)
        .json({ errors: { msg: `${req.body.networkName} All Ready Exist` } });
      }
     else {
      const network = await Network.create(req.body)
   res.json(network)
   const set = {
     message: `New Network Added  ${req.body.networkName} in ${req.body.zone} Zone`
   }
   const data =  await Activity.create(set)
   console.log(data)
     }


    

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
}
);


router.get('/NetworkUsers/:id',

async (req, res) => {




  try {


   
   const users = await RelayUser.find({})


   const arr = []
  
   users.forEach(element => {
      
  
  
    const set  =  element.relayNetwork.filter(sets => sets.relayName === req.params.id) 
   
  
  if(set.length > 0) {
    arr.push(element)
  }

     });


     res.json(arr)





          




  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
}
);


router.get('/getRelay',

async (req, res) => {




  try {

    const net   = await   Network.find({})


   
    
    const arr = []

    net.forEach(element => {
   

      arr.push(...element.relayNetwork)
      
    });
     

    res.json(arr)
  
    





          




  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
}
)

router.get('/allrelay',

async (req, res) => {




  try {

    const net   = await   Network.find({})


   
    
    const arr = []

    net.forEach(element => {
   
    
      arr.push(...element.relayNetwork)
      
    });
    
    const sensors = []
  
    const set = await Sensor.find({}).sort({reading_time:-1})
  
    





          
  const data = {
    data:arr,
    sensors:set
  }

res.json(data)


  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
}
)


router.post('/addUser',

async (req, res) => {




  try {
    const { email} = req.body;
    console.log(req.body)
    let user = await RelayUser.findOne({ email });

    if (user) {
      return res
        .status(400)
        .json({ errors: { msg: 'User already exists' } });
    }
    else {
  
 
    const data = await RelayUser.create(req.body)
 
    res.json(data)

  const mess = {
    message:`New User created  `

  }

 

  const data1 = await Activity.create(mess)
  console.log(data1)


    }

          




  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
}
)

router.patch('/deleteUser/:id',

async (req, res) => {




  try {
  

    const mess = {
      message:`User with id ${req.params.id} is deleted `
  
    }
    

    const data1 = await Activity.create(mess)
    console.log(data1)
    
    const data = await RelayUser.findOneAndDelete({_id: req.params.id})
 
    res.json(data)




          




  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
}
)

router.post('/addRelay',

async (req, res) => {




  try {

    const arr =[]

  
      const data =  await Network.find({})

      data.forEach(   element => {
     
          
      const err=   element.relayNetwork.filter(sets => sets.relayNetworkName === req.body.relayNetworkName) 
       
     arr.push(...err)
     
      });
      if(arr.length === 1) {
        return res
        .status(400)
        .json({ errors: { msg: `${req.body.relayNetworkName} relay Exist` } });
      }
      else {

   
    Network.findOneAndUpdate({  networkName: req.body.networkName  },{  $push: { "relayNetwork": req.body  }  },  { new: true, upsert: true },function(err, doc) {


  res.json(doc)



    });
    const set = {
      message: `New Relay Added  ${req.body.relayNetworkName} in ${req.body.networkName } network`
    }
    const data =  await Activity.create(set)
    console.log(data)
      }
    


    





          




  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
}
)

router.get('/getdata/:id',

async (req, res) => {

  



  try {

    
    
    const data = await Network.find({zone:req.params.id})


     const arr = []
     const final = []

     data.forEach(element => {
      
      arr.push(...element.relayNetwork.map(t => ({ UpperVoltageThreshold: t.UpperVoltageThreshold, LowerVoltageThreshold: t.LowerVoltageThreshold , location:t.relayNetworkName,network: element.networkName })) )
     
       
     });
 
   
     const senor =  await Sensor.find().sort({reading_time:-1}).limit(100)
       const sensor = senor

  
   
     arr.forEach( async element => {

      
      
      const err=   sensor.filter(sets => sets.location ===  element.location) 
         const set =  err.slice(0, 1)
        
         if(set.length === 0){

         
     const set = {
       voltage : 0,
       ...element,
       message: "Sensor is not Working"
     }
     final.push(set)

         
       
           
         }else {
         
         if(set[0].voltage < element.LowerVoltageThreshold  ) {
      
          final.push(set[0])
         }
        }
     });

      res.json(final)

    





          




  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
}
)


router.get('/DashboardDet',

async (req, res) => {

  



  try {

   
    
    const data = await Network.find({})


     const arr = []
    

     data.forEach(element => {

      arr.push(...element.relayNetwork)
       
     });
     

    const users =  await RelayUser.find({})

    


const datas = {
  network: data.length,
  users:users.length,
relay:arr.length
}
res.json(datas)

          




  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
}
)


router.post('/updateThresHold',

async (req, res) => {


  try {

    const set = {
      UpperVoltageThreshold:req.body.UpperVoltageThreshold,
      LowerVoltageThreshold:req.body.LowerVoltageThreshold
    }
    
    Network.findOneAndUpdate(
      { "networkName": req.body.network, "relayNetwork.relayNetworkName": req.body.location },
      { 
          "$set": {
               "relayNetwork.$.LowerVoltageThreshold": req.body.LowerVoltageThreshold
         ,
         "relayNetwork.$.UpperVoltageThreshold": req.body.UpperVoltageThreshold
            }
      },
      function(err,doc) {
    
        res.json(doc.relayNetwork)
      }
  );
  





          




  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
}
)

router.get(
  '/relayUserNotification',
  auth, 
  async (req, res) => {
    
    console.log(req.user.id)
  
    try {
      let user = await RelayUser.findOne({ _id: req.user.id });
     
    

     
    
  res.json(user.notifications)
      

     
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

router.get('/getdataRelay',

auth ,

async (req, res) => {

  



  try {

 
     

    
    
    const data = await Network.find({})


     const arr = []
     const final = []

     data.forEach(element => {

      arr.push(...element.relayNetwork)
       
     });
     const senor =  await Sensor.find().sort({reading_time:-1}).limit(100)
       const sensor = senor
       

  
   
     arr.forEach( async element => {

 
      
      
      const err=   sensor.filter(sets => sets.location ===  element.relayNetworkName) 
         const set =  err.slice(0, 1)
       
         if(set.length === 0){
           console.log('Nsdds')
         }
         else {
         if(set[0].voltage < element.LowerVoltageThreshold  ) {
           final.push(set[0])
         }
        }
     });


    

      let user = await RelayUser.findOne({ _id: req.user.id });
  


  const ress = final.filter(f => user.relayNetwork.some(item => item.relayName   === f.location));



  res.json(ress)


  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
}
)

router.get(
  '/relayUserRelay',
  auth,
  async (req, res) => {
  
 
    try {
      console.log(req.user.id)
      const senor =  await Sensor.find({})
      const sensor = senor.reverse()

      let user = await RelayUser.findOne({ _id: req.user.id });
  

  
      
  res.json(user.relayNetwork.reverse())
    

      

     
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);


router.get(
  '/relaylist',
  auth,
  async (req, res) => {
  
 

      try {


        const data = await    RelayUser.findOne({_id: req.user.id})
   
   
   
        const sensors = await    Sensor.find({}).sort({reading_time:-1}).limit(2000)
   
        // const set = {
        //   sensors : sensors,
        //   data:data.relayNetwork.reverse()
        // }
        // res.json(set)

        const arr = []

        const set = data.relayNetwork.reverse()


        set.forEach(element => {
          
          console.log(element)
          
          

          const err =   sensors.filter(sets => sets.location ===  element.relayName) 
            
            
            
        arr.push(err.slice(0, 1)[0])
          
        });

        res.json(arr)
   
   
   
   
   
   
   
       } catch (err) {
         console.error(err.message);
         res.status(500).send('Server error');
       }
   
  }
);


router.get(
  '/getcoment/:network/:relay',
  auth,
  async (req, res) => {
  
 

      try {


       
   
    const set  = await  Network.findOne({  networkName: req.params.network  })


        
        
          const com=   set.relayNetwork.filter(sets => sets.relayNetworkName ===  req.params.relay) 
            
      res.json(com[0].coment)
   
   
       } catch (err) {
         console.error(err.message);
         res.status(500).send('Server error');
       }
   
  }
);

router.post(
  '/addcoment',
  auth,
  async (req, res) => {
  
 

      try {


        console.log(req.body)
   
        Network.findOneAndUpdate({  networkName: req.body.network ,  "relayNetwork.relayNetworkName": req.body.location   },{  $push: { "relayNetwork.$.coment": req.body  }  },  { new: true, upsert: true },function(err, doc) {


          console.log(doc)
        
        
        
            });
   
   
   
       } catch (err) {
         console.error(err.message);
         res.status(500).send('Server error');
       }
   
  }
);

//appp
 



router.post(
  '/relaylogin',
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Password is required').exists(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

 
    try {
      let user = await RelayUser.findOne({ email });

      

      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      const isMatch = await await RelayUser.findOne({ password })

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      const payload = {
        user: {
          id: user.id,
          name:user.name,
          email:user.email,
          avatar:user.avatar
        }
      };

      jwt.sign(
        payload,
        keys.secretOrKey,
        { expiresIn: '5 days' },
        (err, token) => {
          if (err) throw err;
          res.json({ 
          token,
          user_id: user.id,
          name:user.name,
          email:user.email,
          avatar: user.avatar
        });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);



router.get(
  '/relayUserNotification/:id',
  async (req, res) => {
  
 
    try {
      let user = await RelayUser.findOne({ _id: req.params.id });

      const final = user.notifications.reverse().map(t => ({
        _id: t._id,
            status: t.status,
            network: t.network,
            location: t.location,
            sensor: t.sensor,
            batteryvolt: t.batteryvolt,
            batterytype: t.batterytype,
            reading_time: moment(t.reading_time).format("dddd, MMMM Do YYYY, h:mm:ss a"),
            batteryampere: t.batteryampere,
            message: t.batteryampere
      }))
      const data = {
           
   
        notifications : final

      }
    
  res.json(data)
      

     
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);


router.get(
  '/relayUserRelay/:id',
  async (req, res) => {
  
 
    try {
      const senor =  await Sensor.find({})
      const sensor = senor.reverse()

      let user = await RelayUser.findOne({ _id: req.params.id });
  

      const data = {
           
     
        userRelay: user.relayNetwork.reverse()

      }
      
  res.json(data)
    

      

     
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);




router.get('/getdataRelay/:id',

async (req, res) => {

  



  try {

 
     

    
    
    const data = await Network.find({})


     const arr = []
     const final = []

     data.forEach(element => {

      arr.push(...element.relayNetwork)
       
     });
     const senor =  await Sensor.find().sort({reading_time:-1}).limit(100)
       const sensor = senor
       
 

       console.log(sensor)
  
   
     arr.forEach( async element => {

      
      
      const err=   sensor.filter(sets => sets.location ===  element.relayNetworkName) 
         const set =  err.slice(0, 1)
         console.log(set)
         if(set[0].voltage < element.LowerVoltageThreshold  ) {
           final.push(set[0])
         }
     });


    

      let user = await RelayUser.findOne({ _id: req.params.id });
  


  const ress = final.filter(f => user.relayNetwork.some(item => item.relayName   === f.location));


  const datas = {

    alert :ress

  }
  res.json(datas)


  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
}
)


router.get('/realyInfo/:id',

async (req, res) => {

  
  try {

 
      const set = await Sensor.findOne({location:req.params.id}).sort({reading_time:-1}).limit(1)

     
    res.json(set)
    
 

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
}
)


router.patch("/update-password",   auth,

async  (req, res) => {
      
  

  const { oldpassword ,newpassword, confirmPassword } = req.body
     
    try {

      let user = await User.findOne({_id: req.user.id});
      
      const isMatch = await bcrypt.compare(oldpassword, user.password);
      const isMatch2 = await bcrypt.compare(newpassword, user.password);
      if(  newpassword  !== confirmPassword ) {
        return res.status(400).json({ password: "Confirm Passwords must match" });
      }
      else if (!isMatch) {
      
        return res.status(400).json({ password: "Old Passwords must match" });
      
      }
      else if (isMatch2) {
      
        return res.status(400).json({ password: "Your new password must be different from your previous password" });
      
      }
      else {

        const salt = await bcrypt.genSalt(10);
  
         const password = await bcrypt.hash(newpassword, salt);
    
         console.log(password)

         User.findOneAndUpdate({_id: req.user.id}, {$set:{password:password}}, {new: true}, (err, doc) => {
          res.json(doc)
           })
           const set = {
            message: `Password Changed by device ${req.body.message} `
          }
          const data =  await Activity.create(set)
          console.log(data)
            

      }
      // else {

      //   const isMatch = await bcrypt.compare(password, user.password);
      // }
    
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
      
     
  
  
  });


  router.get("/getActivity",   auth,

async  (req, res) => {
      
  

  
    try {

      const cctivity = await    Activity.find({}).sort({date:-1}).limit(200)
    
      res.json(cctivity)
      // else {

      //   const isMatch = await bcrypt.compare(password, user.password);
      // }
    
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
      
     
  
  
  });

  

  router.get("/getStatus",   

  async  (req, res) => {
        
    
  
    
      try {
  
    
  

 
  MongoClient.connect("mongodb+srv://amakien_team:FuWVJj1psE1l4i8x@telltail.3wrhr.mongodb.net/",
  {
    useUnifiedTopology: true,
     useNewUrlParser: true,
  
  }).then((client) => {
    const connect = client.db("sensordata")
    console.log('sdds')
    connect.collection('test').find().sort({reading_time:-1}).limit(200).toArray(function(err, names) {
       
  
      

      if(!err) {

 res.json(names.slice(0, 10))
        
      }
  })
}).catch((err) => {
  
    // Printing the error message
    console.log(err.Message);
  })
  
    


  
  
      
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
        
       
    
    
    });

module.exports = router;