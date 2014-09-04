<?php 
// Set the JSON header
header("Content-type: text/json");

$file20="csv/RevenueAirPrevCur.csv";

$csv20= file_get_contents($file20);

$array20 = array_map("str_getcsv", explode("\n", $csv20));

// The x value is the current JavaScript time, which is the Unix time multiplied by 1000.
$x = time() * 1000;
// The y value is a random number
$y = rand(0, 100);

// Create a PHP array and echo it as JSON
// php 5.3.26 doesn't support almost any options
// ", JSON_PRETTY_PRINT | JSON_NUMERIC_CHECK"
// JSON_PRETTY_PRINT |
$ret = array($x, $y);

echo json_encode($array20, JSON_NUMERIC_CHECK);
//echo json_encode($ret);
?>