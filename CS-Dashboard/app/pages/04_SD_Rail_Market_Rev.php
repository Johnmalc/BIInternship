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
        <script src="http://code.highcharts.com/highcharts.js"></script>
        <script src="http://code.highcharts.com/highcharts-more.js"></script>
        <script type="text/javascript" src="/scripts/csv.js"></script>
        <script type="text/javascript" src="/scripts/AjaxCallsCSV.js"></script>
        <script type="text/javascript" src="/scripts/papaparse.js"></script>
        <script type="text/javascript" src="/scripts/graphics21.js"></script>
    </head>

    <body>
        <script type="text/javascript">
            setTimeout(function () { 
                location.reload(true); 
            }, 60000);
            doAJAXRevenue('../csv/RealTimeRevenueFooter.csv');
        </script> 

        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-9 col-lg-offset-3">
                    <h1>Monthly Sameday Rail Market Rev. in TEUR</h1>
                </div>
            </div>
             
            <div class="row nahoru">    
                <div class=" col-lg-8">
 		    <div id="samedayrail" style="height:400px; width:1150px; margin: auto 0"></div>    <!-- 21 -->
                </div>
            </div>

            <div class="row">
                <footer id="footer" >
                    <table>
                        <tbody  >
                            <tr style="">
                                <td class="time" style="font-size:33px;">
                                    <script type="text/javascript">date_time('date_time')</script> 
                                </td>
                                <td>&nbsp;&nbsp;&nbsp;</td>
                                <td class="TextToDisplay"></td>
                                <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                                <td>&nbsp;</td>
                                <td class="revenue"></td>
                                <td class="budget"></td>
                                <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                                <td id="ocr2">
                                    <img class="thmbDiv" />
                                </td>                                                          
                            </tr>
                        </tbody>                  
                    </table>
                </footer>
            </div>

        </div>

    </body>
</html>

