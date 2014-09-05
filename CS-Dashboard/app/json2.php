<?php
// Set the JSON header
header("Content-type: text/json");
//load csv file
$file="csv/ordersCreated.csv";
$csv= file_get_contents($file);
//build array from csv
$arrayCSV = array_map("str_getcsv", explode("\n", $csv));

// Internal
// php 5.3.26 doesn't support almost any options
// ", JSON_PRETTY_PRINT | JSON_NUMERIC_CHECK"

// Create a PHP array and echo it as JSON
echo json_encode($arrayCSV, JSON_NUMERIC_CHECK);

?>
