<?php
if (!session_id()) session_start();
    if (!$_SESSION['logon']){ 
        header("Location:table.php");
        die();
    }
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <title>CS Dashboard</title>
        <!-- build:css styles/vendor.css -->
        <!-- bower:css -->
        <link rel="stylesheet" href="../bower_components/bootstrap/dist/css/bootstrap.css">
        <!-- endbower -->
        <!-- endbuild -->
        <!-- build:js scripts/vendor.js -->
        <!-- bower:js -->
        <script src="../bower_components/underscore/underscore.js"></script>
        <script src="../bower_components/jquery/dist/jquery.js"></script>
        <!-- endbower -->
        <!-- endbuild -->
        <link href="/styles/styles.css" rel="stylesheet">
        <script type="text/javascript" src="/scripts/csv.js"></script>
        <script src="http://code.highcharts.com/highcharts.js"></script>
        <script src="http://code.highcharts.com/highcharts-more.js"></script>
        <script src="http://code.highcharts.com/highcharts-3d.js"></script>
        <script type="text/javascript" src="/scripts/AjaxCallsCSV.js"></script>
        <script type="text/javascript" src="/scripts/graphics9.js"></script>
        <script type="text/javascript" src="/scripts/graphics14.js"></script>
        <script type="text/javascript" src="/scripts/graphics12.js"></script>
        <script type="text/javascript" src="/scripts/graphics16.js"></script>


    </head>

    <body>
        <!--<script type="text/javascript">
            setTimeout(function () { 
                location.reload(true); 
            }, 60000);
            doAJAXRevenue('../csv/RealTimeRevenueFooter.csv');
        </script> 
        -->
        
        <div class="container-fluid">
            
            <div class="col-lg-12">
                <div class="row">
                    <div id="container3" style="min-width: 310px; height: 400px; margin: 0 auto"></div>
                    <div id="container" style="min-width: 310px; height: 400px; margin: 0 auto"></div>
                    <div id="novy" style="min-width: 310px; height: 400px; margin: 0 auto"></div>    <!-- 12 -->
                    <div id="containerAgent" style="height: 400px"></div>
                    <div id="dole" style="height: 400px"></div>
                </div>
            </div>


        </div>
    </body>
</html>

