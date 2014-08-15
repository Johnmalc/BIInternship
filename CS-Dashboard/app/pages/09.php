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
        <link rel="stylesheet" href="../bower_components/bootstrap/dist/css/bootstrap.css">
        <link href="/styles/styles.css" rel="stylesheet">
        <!-- build:js scripts/vendor.js -->
        <!-- bower:js -->
        <script src="../bower_components/underscore/underscore.js"></script>
        <script src="../bower_components/jquery/dist/jquery.js"></script>
        <!-- endbower -->
        <!-- endbuild -->
        <script src="http://code.highcharts.com/highcharts.js"></script>
        <script src="http://code.highcharts.com/highcharts-more.js"></script>
        <script type="text/javascript" src="/scripts/graphics9.js"></script>

    </head>
    <body>
        <script type="text/javascript">
            setTimeout(function () { 
                location.reload(true); 
            }, 60000);   
            doAJAXRevenue('../csv/RealTimeRevenueFooter.csv');
        </script>

        <div class="container-fluid">
            <div id="container3" style="min-width: 310px; height: 400px; margin: 0 auto"></div>

            <div class="row nahoru">
                <div class="col-lg-3">
                    <img src="/img/sdrail.png" alt="Generic thumbnail">
                </div>
                <div class="col-lg-3">
                    <img src="/img/sdair.png" alt="Generic thumbnail">
                </div>
                <div class="col-lg-3">
                    <img src="/img/sdtotal.png" alt="Generic thumbnail">
                </div>
                <div class="col-lg-3">
                    <img src="/img/elog.png" alt="Generic thumbnail">
                </div>
            </div>

    </body>
</html>