## airjaldi_Arduino



# Measuring voltage using Arduino 

# 1.1 Board
    Our search for an Arduino device that can connect to a voltage sensor and be able to send measurements to a remote database led us to the Arduino Wemos D1 R2 (picture below). We chose this specific board because it comes with built-in WiFi module and its form factor is large enough to accommodate a voltage divider and power supply. 

![alt text](https://res.cloudinary.com/caremsservices/image/upload/v1623992936/airjaldi/github/arudrino/Page-1-Image-1.jpg "Board1")

# 1.2 Power Supply
    Power Supply: Arduino can be powered on with a USB, 5V or 2.3V power supply. Since we have at least one 12V battery in all locations we used 12V to 5/3.3V step-down converter, with a form-factor that is small enough and readily available in market. 

![alt text](https://res.cloudinary.com/caremsservices/image/upload/v1623994399/airjaldi/github/arudrino/thumbnail_aud_img.jpg "Power Supply")
                
                AC to 12 volt Power Supply


# 1.2. Voltage Sensor
        Arduinos have built-in voltage sensor which can measure voltages between 0-5 or 3.3 volts (depending upon the type). For reading voltages more that 0-5 or 0-3.3 we will have to make a voltage divider. There are various voltage dividers available in market but readily available one can measure voltage up to 25 volts. We need to measure voltage up to 60 volts or more so made our own. 

        Voltage divider formula2: 
        Where: 
        Vout = output voltage Vin = source voltage R1 = first resistor 
        
        R2 = second resistor 
        ..................Column Break................𝑉𝑖𝑛 𝑋 𝑅2 

        𝑉𝑜𝑢𝑡 = 𝑅1 + 𝑅2 


#
        Figure 3: Scheme of Voltage Divider circuit

![alt text](https://res.cloudinary.com/caremsservices/image/upload/v1623992935/airjaldi/github/arudrino/Page-3-Image-2.jpg "Voltage Divider Circuit")
![alt text](https://res.cloudinary.com/caremsservices/image/upload/v1624001959/airjaldi/github/arudrino/diagram.jpg "Voltage Divider Circuit 2")
         
         Figure 4. Voltage divider
         schematic (using Arduino)

# PCB (Printed Circuit Board) 
    for the circuit we used a We used prototype PCB, which has pre-drilled holes and can be easily cut to desired size.

![alt text](https://res.cloudinary.com/caremsservices/image/upload/v1624001959/airjaldi/github/arudrino/diagram.jpg "PCB Prototype board")
                
                Figure 5: PCB Prototype board 


##

![alt text](https://res.cloudinary.com/caremsservices/image/upload/v1624001959/airjaldi/github/arudrino/diagram.jpg "PCB Prototype assembly")
                
                Figure 6: PCB Prototype Assembly 

##

![alt text](https://res.cloudinary.com/caremsservices/image/upload/v1623992936/airjaldi/github/arudrino/Page-4-Image-5.jpg "PCB connected to Arduino")
                
                Figure 7: PCB connected to Arduino with pins connection A0 and GND 


##

![alt text](https://res.cloudinary.com/caremsservices/image/upload/v1623992937/airjaldi/github/arudrino/Page-5-Image-7.jpg "PCB connected to Arduino2")
                
                Figure 8: Resistors R1 and R2 connected and plugs for battery input (green – sensing, blue - convertor) 

##

![alt text](https://res.cloudinary.com/caremsservices/image/upload/v1623992935/airjaldi/github/arudrino/Page-5-Image-6.jpg "Telltale Assembled Prototype")
                
                Figure 9: Telltale Assembled Prototype 

##
        //AirJaldi Telltale voltage sensor 
        #include <ESP8266HTTPClient.h> 
        #include <ESP8266WiFi.h>
        #include <ArduinoJson.h> 
        #include <Wire.h> 
        const char* ssid = "AJ-WiFi"; //Wi-Fi SSID to connect to 
        const char* location = "Tanda Relay"; //Relay name 
        const char* network = "Kangra"; //Network name 
        const char* sensor = "Wemos D1"; //Type or name of arduino 
        const char* batteryvolt = "12"; // Default battery voltage 
        const char* batteryampere = "90"; // Battery ampere 
        const char* batterytype = "SF Sonic"; // Battery manufacturer 

        int analog0= A0;	//Input pin where + output from votage dividor is connected 
        float factor=5.288;	//Factor *check ratio calculator in the documentation* 
        void setup() { 
        Serial.begin(9600); 
        Serial.println(); Serial.print("Connecting to "); 
        Serial.println(ssid); 
        WiFi.mode(WIFI_STA); 
        WiFi.begin(ssid, "input Wi-Fi password here"); // Password for Wi-Fi 
        
        while (WiFi.status() != WL_CONNECTED) 
            delay(500); 
        Serial.println("Waiting for connection"); 
        }
        void loop() { 
            if (WiFi.status() == WL_CONNECTED) { //Check WiFi connection status 
            float voltage=0.0; 
            float value0=0.0,value1=0.0; 

            for(unsigned int i=0;i<10;i++){ 
                value0=value0+analogRead(analog0); 
                delay(5); 
            }

        value0=(float)value0/10.0; 
        value1=(float)(value0/1024.0)*3.3;	// Use 5 or 3.3 depending upon the type of arduino 
        voltage=value1*factor; 


        //Send HTTP HTTPClient http; 
        http.begin("url where json data to be sent eg: https://example.airjaldi.com/post.php" , "SSL certi ficate thumprint"); // refer to SSL thumbprint section in the documentation 
        http.addHeader("Content-Type", "application/json"); 
        http.addHeader("Accept", "application/json");

        StaticJsonBuffer<200> jsonBuffer; JsonObject& 
        root = jsonBuffer.createObject(); 
        root["location"] = location; 
        root["network"] = network; 
        root["sensor"] = sensor; 
        root["batteryvolt"] = batteryvolt; 
        root["batteryampere"] = batteryampere; 
        root["voltage"] = voltage; 
        root["batterytype"] = batterytype; 
        String buffer; 
        root.printTo(buffer); 

        int httpCode = http.POST(buffer); 

        if (httpCode > 0) { 
            if (httpCode == HTTP_CODE_OK) { 
            Serial.println("This device is authorized and data is sent"); 
            } else { 
                Serial.println("Failed to authorize device."); 
            } 
        } else { 
            Serial.println("Failed to connect to API."); 
        } 
         http.end(); 
        } else { 

        } 
        delay(300000); //Send a request every 5 minutes 

#

Http end point: This end point accept data from Arduino http post and save it in mongodb. 

Every 5 minutes the Arduino reads voltage from the battery and send it to http end point. 

Http end point accepts data and saves the same in mongodb with timestamp when the data is received. 

##
       
                Figure 10: Data Collection process, Schematic flow 

![alt text](https://res.cloudinary.com/caremsservices/image/upload/v1623992936/airjaldi/github/arudrino/Page-8-Image-8.jpg "Schematic Flow")

        <?php 
        require 'vendor/autoload.php'; 
        $jsonString = file_get_contents("php://input"); 
        $text = str_replace("'", '"', $jsonString); 
        $data = json_decode($text);
        $myFile = "request.log"; 
        file_put_contents($myFile, $text); 
        file_put_contents($myFile, $data); 
        $t = time(); 
        $reading_time = date("Y-m-d H:i", $t); 
        $location = $data->{'location'}; 
        $network = $data->{'network'}; 
        $sensor = $data->{'sensor'}; 
        $batteryvolt = $data->{'batteryvolt'}; 
        $voltage = $data->{'voltage'}; 

        $batterytype = $data->{'batterytype'}; 
        $batteryampere = $data->{'batteryampere'}; 

        $mongo = new MongoDB\Client( 'connection url of mongodb');
        $db	= $mongo->sensordata;

        $collection = $db->test; 
        $document = array( "network" 
            => $network, "location"
            => $location, "sensor" 
            => $sensor, 
            "batteryvolt" => $batteryvolt, 
            "voltage" => $voltage, 
            "batterytype" => $batterytype, 
            "reading_time" => $reading_time, 
            "batteryampere" => $batteryampere 
        );

        $collection->insertOne($document); 
        echo "Document inserted successfully"; 
        if ($collection->insertOne($data)) { 
            echo '<p style="color:green;">Record inserted successfully</p>'; 
        } else { 
            echo '<p style="color:red;">Error in insertion</p>'; 
        }


#
# 1.4 Factor Calculation 
    For our demo we used R1: 10kΩ and R2: 2.2 kΩ (see image 8). Since a resistor value has variance of 5-10% it is advisable to measure the actual value using a multimeter. Actual resistor’s value for the above R1 and R2 were 9.85kΩ and 2.15kΩ respectively. Using the voltage divider calculator for output voltage of 3.3V we have an input voltage 18.41V. Hence, for the given R1 and R2 we can use these devises to sense voltages of up to 18.41V. 

    
        ..................Column Break..................𝑉𝑖𝑛 𝑋 2.15 
        3.3=9.85 + 2.15 
        𝑉𝑖𝑛 = 18.41 
        
        (𝑚𝑎𝑥𝑖𝑚𝑢𝑚 𝑣𝑜𝑙𝑡𝑎𝑔𝑒 𝑤𝑒 𝑐𝑎𝑛 𝑚𝑒𝑎𝑠𝑢𝑟𝑒 𝑢𝑠𝑖ng 2𝑘Ω 𝑎𝑛𝑑 10kΩ 𝑟𝑒𝑠𝑖𝑠𝑡𝑜𝑟) 
        For voltage calculation we have to assign a multiplier in the Arduino code. This is calculated by supplying different voltages to the circuit and reading the output using a multimeter. 

        For our test here are the input and output voltage 
##

            Table 2: Input and output voltages using multimeter (for factor calculation) 
![alt text](https://res.cloudinary.com/caremsservices/image/upload/v1624008219/airjaldi/github/arudrino/table.png "table")

    Factor = 5.58 (this needs to be further adjusted because the circuit itself is not precise. One must run the code in Arduino IDE and compare the serial output with supplied input and lower or increase the factor value until the output is same as input). 

    SSL Thumbprint: The JSON data can be posted to http also but since this is not secure we used https. We need to insert the value of the SSL thumbprint in the code otherwise the Arduino will be stuck at the ssl handshake stage. In Google chrome you can browse the URL and find the thumbprint by clicking on certificate button. Copy the value and paste it in the Arduino code in section 1.5. 

##

                            Figure 11https://res.cloudinary.com/caremsservices/image/upload/v1624008219/airjaldi/github/arudrino/table.png: SSL Thumbprint 
![alt text](https://res.cloudinary.com/caremsservices/image/upload/v1623992937/airjaldi/github/arudrino/Page-10-Image-9.jpg "Input and voltage output")
        
        Eg: e9d4b50445712ba2976d475cd698c18171ea431b (thumbprint of random SSL certificate 

        MondoDb: We used mongo atlas (free version) to store the data. The json snippet is given below: 

            { 
                "_id": { 
                    "$oid": "60ade947610c1452542c6153" 
                        }, 
                        "network": "Dharamshala", 
                        "location": "Bindraban Relay", 
                        "sensor": "Wemos D1", 
                        "batteryvolt": "12", 
                        "voltage": "13.99558", 
                        "batterytype": "SF Sonic", 
                        "reading_time": "2021-05-26 11:53", 
                        "batteryampere": "40" 
            } 

##

1. Alerts are sent to various software suites (e.g. MS Teams, Bitrix) using Micorosoft Azure’s LogicApps.

3. Objective 3: Develop an easy-to-use reporting and alert system with PC and mobile applications (Android) 

    General:
    
    he UI was developed with AirJaldi’s networks populating it and using our own internal division of zones and networks within zones and relays within networks. Other users will be able to adapt this UI (as well as other parts of the software stack) to suit their own set ups. 

    The dashboard and APK were developed with assistance from a local company specializing in the creation of UIs, APIs and APKs, based on specs and active involvement our tech team in linking outputs from the TellTale sensor array and helping to develop the algorithms used to ingest and analyze data. 
    
    3.1 Web application 
    he web UI was designed to fulfill the following functions, with an emphasis on simplicity and clarity: 
    (i) Status overview and alert – a combination of “charge meters” and alerts, both using color codes (green=OK, orange=requires attention, red=problem that needs resolution). Using the simple color and visual queues, the network operator can quickly get an overall view of multiple locations and focus on the ones requiring attention. 

    (ii) Relay grouping 
    Relays are grouped by “networks” and “regions”, allowing admins to assign different viewing and configuration permission and allowing network operators to focus on information relevant to them (rather than having e.g. to sift through multiple relays in search of the ones relevant to them). 

    (iii) Detailed review – the detailed review of a relay helps the operator to gain a deeper visual understanding of the present status and trends over time, 

    (iv) Reports – reports help in viewing long-term trends and inform the operator Reports present a textual and graphic review of performance over longer periods of time and are useful for longer-term review, planning and adjustment, as well as comparing performance of different relays, different networks, etc. 

    (v) Settings – the UI settings allow admins, and to an extent operators, to create relays and define their main parameters, assign relays to networks, assign permissions and enroll users. A deeper level of settings – for creating an ISP instance, is available to admins who download the system and UIs and to AirJaldi team members who set up such an instance for a third party user. 

 



###  3.2  Web UI screen walk-through (Source: Airjaldi Telltale. Note: this URL will be replaced shortly with a Production environment – at the following URL: ajtelltale.com, expected launch by June 22)
##             
                                Figure 13: Web Login Page 

![alt text](https://res.cloudinary.com/caremsservices/image/upload/v1623992936/airjaldi/github/arudrino/Page-13-Image-10.jpg "Login Page")
            Comments: users, with different permission levels, login to the UI from their computers or mobile phones. 

##
                                Figure 14: Dashboard Page
![alt text](https://res.cloudinary.com/caremsservices/image/upload/v1623992937/airjaldi/github/arudrino/Page-14-Image-11.jpg "dashboard")

        Narration: 
        1. The main area of the dashboard page presents relays that require immediate attention.
        2. Relays are grouped by region, so the user needs to go to their own region to view immediate alerts 
        3. Specific relay view – power meter, with colors for different stages of health. Details on the relay - its name, the network it is affiliated to, and the nature of the issue, are provided above the power meter 
        4. Notifications of main events given in chronological order and with different colors for different alert levels. 
        5. General UI statistics – total no. of zones, networks, relays and users 


##  
                                Figure 15: Network Selection Page 
![alt text](https://res.cloudinary.com/caremsservices/image/upload/v1623992937/airjaldi/github/arudrino/Page-14-Image-12.jpg "Network Section")

     
        This screen allows the user to inspect ALL relays (healthy relays as well as those requiring attention) within a particular region and network. 


##
                                Figure 16: Network Dashboard
![alt text](https://res.cloudinary.com/caremsservices/image/upload/v1623992937/airjaldi/github/arudrino/Page-15-Image-13.jpg "Network dashboard")


        Narration: 

        1. Network name 
        2. Relay 
        3. Tab for adding new relays 
        4. Query specific relay (see figure 14) 


##
                            Figure 17: Relay page
 ![alt text](https://res.cloudinary.com/caremsservices/image/upload/v1623992938/airjaldi/github/arudrino/Page-15-Image-14.jpg "relay page")

 
        Narration:
        Screen reached upon selection of [View] button (see figure 13)
        1.  Relay name and zonal affiliation 
        2.  Current voltage and Amperage of the relay 
        3.  Voltage meter 
        4.  Calculating battery time till discharge. This message provides the field team with a time-frame for planning their response (“prepare equipment”, “get ready”, “go”, etc.). The system works as follows: once the first threshold (orange) is reached the system checks the voltage of last 20 minutes and calculates how much battery voltage decreased in said 20 minutes which we call “discharge rate”. For a 12 volts battery we consider 11 volts to be the discharge/ depleted voltage so once we have the “discharge rate” we can calculate how much time till the battery reaches its lowest allowed voltage. 
        5. Voltage graphed across time, green and red line displaying the normal and critical threshold limits (green and red, respectively). The time duration on display can be set by the viewer (Start Date, End Date) 


##
                        Figure 18: Report Generation Page  
![alt text](https://res.cloudinary.com/caremsservices/image/upload/v1623992938/airjaldi/github/arudrino/Page-16-Image-16.jpg "Report Generation Page")


        Narration:
        Relays could be added by an admin. user (as can networks). 


##
                        Figure 19: Users Page
![alt text](https://res.cloudinary.com/caremsservices/image/upload/v1623992938/airjaldi/github/arudrino/Page-17-Image-17.jpg "User Page")


        Narration
        User list. Users can be added by admin. and networks and relays assigned 


##
                        Figure 20: Reports page 
![alt text](https://res.cloudinary.com/caremsservices/image/upload/v1623992937/airjaldi/github/arudrino/Page-17-Image-18.jpg "Reports Page")


        Narration: reports, for detailed reviews (.pdf) or analysis (.csv) can be generated and downloaded by users.

        Note: the UI can be accessed via mobile phones, which presents similar functionalities with somewhat different graphic appearance.

##
# APK (Android Application Package) 
    In addition to the Web UI (computer and mobile) we have also developed an APK version, which provides the user with a stripped version of the UI, containing only alerts. 

# 4. Objective4: Measure and report on the cost-saving and improved uptime impact of the project
    As the system has been in operation for a short period, information on these indicators (also 
    mentioned in the “Project Evaluation” section) could not be provided at present. We expected to be able to report our findings here within 3-4 months. 

# 5. Disseminate the project findings and share the systems design 
    Dissemination will take place in two main ways. 
    First, information - we will publicize the project and the products via our website, social networks (LinkeDin, FB, twitter, etc.) and will reach out to organizations and online platforms. 
    Second, the TellTale products (code and manual Informing people about the project 
    Second, making the product available – the manuals, codes, etc. are available at a repository we created on GitHub airjaldirbb/airjaldi-telllate · GitHub . In addition, the Android app is available on the Google Play store (its presence and overview may help other potential users learn about TellTale) 

# 6. Create a paid support system for interested parties. 
    AirJaldi is planning to create a Freemium support system for interested parties. The system will consist of the following : 

- [Free service – a user can download the source files and manuals and implement the TellTale system at no cost. Beyond these resources, AirJaldi will offer general guidance and basic troubleshooting ](#)
- [Setup – AirJaldi will help the user to install and configure the system to their needs, for an installation and set up fee ](#)
- [Setup and management – AirJaldi will set up, install and provide ongoing support for running TellTale, for a one-time set up fee and additional monthly/quarterly/annual management and maintenance fee (AMC) ](#)