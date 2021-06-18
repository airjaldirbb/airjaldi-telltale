
#include <ESP8266HTTPClient.h>
#include <ESP8266WiFi.h>
#include <ArduinoJson.h>
#include <Wire.h>
#include <RunningMedian.h>

const char* ssid = "YOURSSID"; // Replace with SSID of your WiFi network
const char* location = "LocationName"; // Replace with name of the location where the sensor is located
const char* network = "NetworkName"; // Name of the place
const char* sensor = "Wemos D1"; // Type or name of sensor
const char* batteryvolt = "36"; // default battery voltage
const char* batteryampere = "150"; //  battery ampere
const char* batterytype = "Exide"; // default battery voltage

int analog0= A0;              //Analog A0 as used to measure
float factor=15.08;           //Resistor's Ratio Factor
RunningMedian samples = RunningMedian(20); // Take 20 samples before taking the median
void setup() {

  Serial.begin(9600);
  Serial.println(); Serial.print("Connecting to ");
  Serial.println(ssid);
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, "wifipassword"); // Paste your WiFi password

  while (WiFi.status() != WL_CONNECTED)

    delay(500);
  Serial.println("Waiting for connection");

}

void loop() {

  if (WiFi.status() == WL_CONNECTED) { //Check WiFi connection status
    int raw = analogRead(analog0);
    samples.add(raw);
    long m = samples.getMedian();
    float voltage=0.0;
    float value0=0.0,value1=0.0;

  value1=(float)(m/1024.0)*3.3;      //Convert Voltage in 3.3v. Use 5.0 if using other arduino.
  voltage=value1*factor;             /

    Serial.println( "Voltage0: " + String( voltage, 1 ) + " Volts" ); // Print voltage in serial console 
    Serial.println( "Raw: " + String( m ) + " Counts" ); // Print raw values in serial console 
    HTTPClient http;
    http.begin("https://url/index.php" , "dd 16 155 64 43 b5 b3 ba ea 11 08 3a 3c f1 dc e8 d3 83 dd 8e"); // URL of php script and thubprint of ssl certificate
    http.addHeader("Content-Type", "application/json");
    http.addHeader("Accept", "application/json");

    StaticJsonBuffer<200> jsonBuffer;
    JsonObject& root = jsonBuffer.createObject();
    root["location"] = location;
    root["network"] = network;
    root["sensor"] = sensor;
    root["batteryvolt"] = batteryvolt;
    root["batteryampere"] = batteryampere;
    root["voltage"] = String(voltage, 1);
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
    //End Send HTTP
  } else {
      Serial.println("Failed to connect to WiFi.");
  }

  delay(300000); //Send a request every 5 minutes
 
 

}
