# airjaldi_telltale

![alt text](https://res.cloudinary.com/caremsservices/image/upload/v1623924598/airjaldi/github/blob/Page-1-Image-1.jpg "Banner1")

# AirJaldi Telltale is a Network Relay Power Monitoring App. 

# Open-source, free, preconfigured, opinionated, and always real-time.

 ![alt text](https://res.cloudinary.com/caremsservices/image/upload/v1623924598/airjaldi/github/blob/Page-1-Image-2.jpg "Banner1")

 AirJaldi telltale is for monitoring power parameters in network relays. With this application, network companies can monitor various network power parameters with intuitive front-end showing the data reported the sensors and make appropriate decisions. 


  ![alt text](https://res.cloudinary.com/caremsservices/image/upload/v1623924599/airjaldi/github/blob/Page-2-Image-3.jpg "Home Page")
  Latest release: v1.0, June 17, 2021 

  ## Menu
   - [Features](#)
   - [Web App Installation](#) 
   - [Mobile App Installation](#) 
   - [How it works](#) 
   - [Infographic](#) 
   - [Documentation](#) 
   - [Community](#) 
   - [Contribute](#) 
   - [License](#) 
   - [Is it any good?](#) 

## Features:

Here's what you can expect from AirJaldi Telltale: 
1. [Power monitoring tool for network relay power batteries. ](#)
2. [To Read and use the data collected by sensors at various network locations in web and mobile apps as required by the Network Companies.](#)
3. [Communication channels are emails, notifications etc for various events](#)
4. [Dashboard to manage all the content and updates.](#)
    
    - [a. Present the status of various network relays.](#)
    - [b. Location's 'voltage' graphs with option to select the time. ](#)
    - [c. Filter data based on selection parameters ](#)
    - [d. Show Alert Notifications ](#)
    - [e. Pictorial presentation of power status of network relays](#)

5. User Types

    - [a. Admin - Admin login to manage various parameters and settings ](#)
    - [b. Admin can manage all data, users and generate various reports ](#)
    - [c. Admin can register new users and assign to various networks  ](#)
    - [d. Admin should be able to create users based on the "network' name. ](#)
    - [e. Admin should be able to set a threshold for each type of 'battery volt'](#)

6. Network User - Network Users can be assigned to a network 
    - [a. Network User will receive notification alerts for the assigned network ](#)
    - [b. Network User will have access to the data on Mobile Apps](#)

7. Types of alerts: - Low severity, High severity, and Critical.
    - [a. Low: When a battery starts to discharge or no AC power ](#)
    - [b. High: when battery reading is for 12V battery reaches 12volts (in the case of 12 volts battery) ](#) 
    - [c. Critical: When there is no reading for the last 5 minutes. ](#)
    - [d. Alert Message: Your Network relay sensor is not working ](#)
    - [e. Alert Message: Your Network relay battery will die in xx hours yy minutes](#)
    - [f. Alerts to be generated as notifications in the dashboard of web apps and push notifications in Mobile apps.](#)

8. Report
    - [a. The number of each type of alert generated for a given relay or all the relays. This basically will tell us which relay needs attention. We should be able to view the report on the dashboard and should be downloadable in CSV. Also need a time picker for a day, week, month, quarter, etc.](#)

    - [b. Reports can be generated based on various selected time parameters.](#)



## 9. Possibility of sending alerts to API endpoints in JSON.

# Here is the example JSON response.

        { 

        "location": "abc", 

        "network": "xyz", 

        "battery_voltage": "xx", // last reading of battery voltage 

        "email": "email@example.com",  // Email address of the executive added under the network. 

        "phone": "0000000000" // Email address of the executive added under the network. 

        } 


## Get AirJaldi Telltale 

        https://github.com/airjaldirbb/airjaldi-telltale.git

## Web App Installation 

    Following are the instructions to clone AirJaldi Telltale: 

        Step 1. git clone https://github.com/airjaldirbb/airjaldi-telltale.git 

        Step 2. cd  airJaldi-telltale 

        Step 3.  npm install &&  cd client npm install 

        Step 4 . To start server  run `npm run dev` 

        Step 5 . cd config   

        Step 6. change Database credentials and password in keys.js file 

        module.exports = { 

        mongoURI: "mongodb+srv://XXXXX:XXXX@telltail.3wrhr.mongodb.net/XXXXXX", 

        secretOrKey: "******", 

        password:"*****" 

        }; 


## How it works

AirJaldi Telltale allows you to monitor the power status of your relay batteries. 

# AirJaldi Telltale Various Screens 

  ![alt text](https://res.cloudinary.com/caremsservices/image/upload/v1623924599/airjaldi/github/blob/Page-5-Image-4.jpg "dahboard")

![alt text](https://res.cloudinary.com/caremsservices/image/upload/v1623924600/airjaldi/github/blob/Page-6-Image-5.jpg "users")

![alt text](https://res.cloudinary.com/caremsservices/image/upload/v1623924600/airjaldi/github/blob/Page-6-Image-6.jpg "user assigned")

![alt text](https://res.cloudinary.com/caremsservices/image/upload/v1623924600/airjaldi/github/blob/Page-7-Image-7.jpg "Notification and alearts")

![alt text](https://res.cloudinary.com/caremsservices/image/upload/v1623924602/airjaldi/github/blob/Page-7-Image-8.jpg "Add Relay")

![alt text](https://res.cloudinary.com/caremsservices/image/upload/v1623924602/airjaldi/github/blob/Page-8-Image-9.jpg "Status")

![alt text](https://res.cloudinary.com/caremsservices/image/upload/v1623924600/airjaldi/github/blob/Page-8-Image-10.jpg "Activities Log")

![alt text](https://res.cloudinary.com/caremsservices/image/upload/v1623924600/airjaldi/github/blob/Page-9-Image-11.jpg "Download Report")


![alt text](https://res.cloudinary.com/caremsservices/image/upload/v1623924601/airjaldi/github/blob/Page-9-Image-12.jpg "user management")

![alt text](https://res.cloudinary.com/caremsservices/image/upload/v1623924602/airjaldi/github/blob/Page-10-Image-13.jpg "Add Network")


![alt text](https://res.cloudinary.com/caremsservices/image/upload/v1623924602/airjaldi/github/blob/Page-10-Image-14.jpg "Map")

![alt text](https://res.cloudinary.com/caremsservices/image/upload/v1623924603/airjaldi/github/blob/Page-11-Image-15.jpg "Alerts")


## Contribute

Contributions are the lifeblood of open-source projects. While we continue to invest in and improve AirJaldi Telltale, we need help to democratize monitoring! 

- [Read our Contributing Guide, which contains all the information you need to contribute to Telltale, such as improving our documentation, engaging in the community, and developing new features. We've made it as frictionless as possible, but if you need help, just ping us on our community forums! ](#)

- [We have a whole category dedicated to contributing and extending AirJaldi Telltale on our community forums ]()

- [Found a bug? Open a GitHub issue. ](#)

- [View our Security Policy. ](#)

## License

    The AirJaldi Telltale is GPLv3+. AirJaldi Telltale re-distributes other open-source tools and libraries. Please check the third party licenses. 

## Is it any good?
Yes.

When people first hear about a new product, they frequently ask if it is any good. A Hacker News user remarked: 

Note to self: Starting immediately, all raganwald projects will have a â€œIs it any good?â€ section in the readme, and the answer shall be â€œyes.". 
# airjaldi_telltale

![alt text](https://res.cloudinary.com/caremsservices/image/upload/v1623924598/airjaldi/github/blob/Page-1-Image-1.jpg "Banner1")

# AirJaldi Telltale is a Network Relay Power Monitoring App. 

# Open-source, free, preconfigured, opinionated, and always real-time.

 ![alt text](https://res.cloudinary.com/caremsservices/image/upload/v1623924598/airjaldi/github/blob/Page-1-Image-2.jpg "Banner1")

 AirJaldi telltale is for monitoring power parameters in network relays. With this application, network companies can monitor various network power parameters with intuitive front-end showing the data reported the sensors and make appropriate decisions. 


  ![alt text](https://res.cloudinary.com/caremsservices/image/upload/v1623924599/airjaldi/github/blob/Page-2-Image-3.jpg "Home Page")
  Latest release: v1.0, June 17, 2021 

  ## Menu
   - [Features](#)
   - [Web App Installation](#) 
   - [Mobile App Installation](#) 
   - [How it works](#) 
   - [Infographic](#) 
   - [Documentation](#) 
   - [Community](#) 
   - [Contribute](#) 
   - [License](#) 
   - [Is it any good?](#) 

## Features:

Here's what you can expect from AirJaldi Telltale: 
1. [Power monitoring tool for network relay power batteries. ](#)
2. [To Read and use the data collected by sensors at various network locations in web and mobile apps as required by the Network Companies.](#)
3. [Communication channels are emails, notifications etc for various events](#)
4. [Dashboard to manage all the content and updates.](#)
    
    - [a. Present the status of various network relays.](#)
    - [b. Location's 'voltage' graphs with option to select the time. ](#)
    - [c. Filter data based on selection parameters ](#)
    - [d. Show Alert Notifications ](#)
    - [e. Pictorial presentation of power status of network relays](#)

5. User Types

    - [a. Admin - Admin login to manage various parameters and settings ](#)
    - [b. Admin can manage all data, users and generate various reports ](#)
    - [c. Admin can register new users and assign to various networks  ](#)
    - [d. Admin should be able to create users based on the "network' name. ](#)
    - [e. Admin should be able to set a threshold for each type of 'battery volt'](#)

6. Network User - Network Users can be assigned to a network 
    - [a. Network User will receive notification alerts for the assigned network ](#)
    - [b. Network User will have access to the data on Mobile Apps](#)

7. Types of alerts: - Low severity, High severity, and Critical.
    - [a. Low: When a battery starts to discharge or no AC power ](#)
    - [b. High: when battery reading is for 12V battery reaches 12volts (in the case of 12 volts battery) ](#) 
    - [c. Critical: When there is no reading for the last 5 minutes. ](#)
    - [d. Alert Message: Your Network relay sensor is not working ](#)
    - [e. Alert Message: Your Network relay battery will die in xx hours yy minutes](#)
    - [f. Alerts to be generated as notifications in the dashboard of web apps and push notifications in Mobile apps.](#)

8. Report
    - [a. The number of each type of alert generated for a given relay or all the relays. This basically will tell us which relay needs attention. We should be able to view the report on the dashboard and should be downloadable in CSV. Also need a time picker for a day, week, month, quarter, etc.](#)

    - [b. Reports can be generated based on various selected time parameters.](#)



## 9. Possibility of sending alerts to API endpoints in JSON.

# Here is the example JSON response.

        { 

        "location": "abc", 

        "network": "xyz", 

        "battery_voltage": "xx", // last reading of battery voltage 

        "email": "email@example.com",  // Email address of the executive added under the network. 

        "phone": "0000000000" // Email address of the executive added under the network. 

        } 


## Get AirJaldi Telltale 

    - [https://github.com/airjaldirbb/airjaldi-telltale.git ](https://github.com/airjaldirbb/airjaldi-telltale.git )

## Web App Installation 

    Following are the instructions to clone AirJaldi Telltale: 

        Step 1. git clone https://github.com/airjaldirbb/airjaldi-telltale.git 

        Step 2. cd  airJaldi-telltale 

        Step 3.  npm install &&  cd client npm install 

        Step 4 . To start server  run `npm run dev` 

        Step 5 . cd config   

        Step 6. change Database credentials and password in keys.js file 

        module.exports = { 

        mongoURI: "mongodb+srv://XXXXX:XXXX@telltail.3wrhr.mongodb.net/XXXXXX", 

        secretOrKey: "******", 

        password:"*****" 

        }; 


## How it works

AirJaldi Telltale allows you to monitor the power status of your relay batteries. 

# AirJaldi Telltale Various Screens 

  ![alt text](https://res.cloudinary.com/caremsservices/image/upload/v1623924599/airjaldi/github/blob/Page-5-Image-4.jpg "dahboard")

![alt text](https://res.cloudinary.com/caremsservices/image/upload/v1623924600/airjaldi/github/blob/Page-6-Image-5.jpg "users")

![alt text](https://res.cloudinary.com/caremsservices/image/upload/v1623924600/airjaldi/github/blob/Page-6-Image-6.jpg "user assigned")

![alt text](https://res.cloudinary.com/caremsservices/image/upload/v1623924600/airjaldi/github/blob/Page-7-Image-7.jpg "Notification and alearts")

![alt text](https://res.cloudinary.com/caremsservices/image/upload/v1623924602/airjaldi/github/blob/Page-7-Image-8.jpg "Add Relay")

![alt text](https://res.cloudinary.com/caremsservices/image/upload/v1623924602/airjaldi/github/blob/Page-8-Image-9.jpg "Status")

![alt text](https://res.cloudinary.com/caremsservices/image/upload/v1623924600/airjaldi/github/blob/Page-8-Image-10.jpg "Activities Log")

![alt text](https://res.cloudinary.com/caremsservices/image/upload/v1623924600/airjaldi/github/blob/Page-9-Image-11.jpg "Download Report")


![alt text](https://res.cloudinary.com/caremsservices/image/upload/v1623924601/airjaldi/github/blob/Page-9-Image-12.jpg "user management")

![alt text](https://res.cloudinary.com/caremsservices/image/upload/v1623924602/airjaldi/github/blob/Page-10-Image-13.jpg "Add Network")


![alt text](https://res.cloudinary.com/caremsservices/image/upload/v1623924602/airjaldi/github/blob/Page-10-Image-14.jpg "Map")

![alt text](https://res.cloudinary.com/caremsservices/image/upload/v1623924603/airjaldi/github/blob/Page-11-Image-15.jpg "Alerts")


## Contribute

Contributions are the lifeblood of open-source projects. While we continue to invest in and improve AirJaldi Telltale, we need help to democratize monitoring! 

- [Read our Contributing Guide, which contains all the information you need to contribute to Telltale, such as improving our documentation, engaging in the community, and developing new features. We've made it as frictionless as possible, but if you need help, just ping us on our community forums! ](#)

- [We have a whole category dedicated to contributing and extending AirJaldi Telltale on our community forums ]()

- [Found a bug? Open a GitHub issue. ](#)

- [View our Security Policy. ](#)

## License

    The AirJaldi Telltale is GPLv3+. AirJaldi Telltale re-distributes other open-source tools and libraries. Please check the third party licenses. 

## Is it any good?
Yes.

When people first hear about a new product, they frequently ask if it is any good. A Hacker News user remarked: 

Note to self: Starting immediately, all raganwald projects will have a â€œIs it any good?â€ section in the readme, and the answer shall be â€œyes.". 
