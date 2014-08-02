<?php 
// Set the JSON header
header("Content-type: text/json");

$file="csv/data3.csv";

$csv= file_get_contents($file);

$array = array_map("str_getcsv", explode("\n", $csv));

// The x value is the current JavaScript time, which is the Unix time multiplied by 1000.
$x = time() * 1000;
// The y value is a random number
$y = rand(0, 100);

// Create a PHP array and echo it as JSON
$ret = array($x, $y);
echo json_encode($array, JSON_PRETTY_PRINT | JSON_NUMERIC_CHECK);
//echo json_encode($ret);
?>