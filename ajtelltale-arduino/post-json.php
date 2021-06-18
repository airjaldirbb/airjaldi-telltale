<?php
require 'vendor/autoload.php';
$jsonString = file_get_contents("php://input");
$text = str_replace("'", '"', $jsonString);
$data = json_decode($text);
$t = time();
$reading_time = date("Y-m-d H:i", $t);
$location = $data->{'location'};
$network = $data->{'network'};
$sensor = $data->{'sensor'};
$batteryvolt = $data->{'batteryvolt'};
$voltage = $data->{'voltage'};


$batterytype = $data->{'batterytype'};
$batteryampere = $data->{'batteryampere'};


$mongo = new MongoDB\Client( 'connection url of mongodb'
);
$db	= $mongo->sensordata;


$collection = $db->test;
$document = array( "network" => $network, "location" => $location, "sensor" => $sensor,
"batteryvolt" => $batteryvolt, "voltage" => $voltage, "batterytype" => $batterytype, "reading_time" => $reading_time, "batteryampere" => $batteryampere
);
