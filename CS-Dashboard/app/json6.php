<?php
// Set the JSON header
header("Content-type: text/json");
//load csv
$file2="csv/RevenueRailPrevCur.csv";
$csv2= file_get_contents($file2);
//build array from csv
$array2 = array_map("str_getcsv", explode("\n", $csv2));

// Internal
// php 5.3.26 doesn't support almost any options
// ", JSON_PRETTY_PRINT | JSON_NUMERIC_CHECK"

// Create a PHP array and echo it as JSON
echo json_encode($array2, JSON_NUMERIC_CHECK);
?>
