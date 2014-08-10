<?php 
// Set the JSON header
header("Content-type: text/json");

$file="csv/ordersCreated2.csv";
$csv= file_get_contents($file);
$arrayCSV = array_map("str_getcsv", explode("\n", $csv));


$file="csv/ordersCreated3.csv";
$csv= file_get_contents($file);
$arrayCSV2 = array_map("str_getcsv", explode("\n", $csv));

$merg = array_merge($arrayCSV, $arrayCSV2);


// The x value is the current JavaScript time, which is the Unix time multiplied by 1000.
$x = time() * 1000;
// The y value is a random number
$y = rand(0, 100);

$o = array_values($arrayCSV);
// Create a PHP array and echo it as JSON
// php 5.3.26 doesn't support almost any options
// ", JSON_PRETTY_PRINT | JSON_NUMERIC_CHECK"
// JSON_PRETTY_PRINT |
$ret = array($x, $y);

echo json_encode($arrayCSV, JSON_NUMERIC_CHECK);
//echo json_encode($ret);

?>