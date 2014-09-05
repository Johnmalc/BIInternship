<?php
// Set the JSON header
header("Content-type: text/json");
//load csv file
$file20="csv/RevenueAirPrevCur.csv";
$csv20= file_get_contents($file20);
//build array from csv
$array20 = array_map("str_getcsv", explode("\n", $csv20));



// Internal
// php 5.3.26 doesn't support almost any options
// ", JSON_PRETTY_PRINT | JSON_NUMERIC_CHECK"

// Create a PHP array and echo it as JSON
echo json_encode($array20, JSON_NUMERIC_CHECK);
?>
