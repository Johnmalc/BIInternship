<?php

if (!session_id()) session_start();
    if (!$_SESSION['logon']){
        header("Location:index.php");
        die();
    }
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Index File for Dashboard</title>
        <META NAME="ROBOTS" CONTENT="NOINDEX, NOFOLLOW">
        <!-- build:css styles/vendor.css -->
        <!-- bower:css -->
        <link rel="stylesheet" href="../bower_components/bootstrap/dist/css/bootstrap.css">
        <!-- endbower -->
        <!-- endbuild -->
        <!-- build:css(.tmp) styles/main.css -->
        <link rel="stylesheet" href="styles/styles.css">
        <!-- endbuild -->
    </head>

    <body>
        <div class="container-fluid">
            <div class="row padding">
                <div class="col-lg-12">
                    <table class="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Type & Library</th>
                                <th>Link</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="warning">
                                <td>1</td>
                                <td>Created Directly from SAS</td>
                                <td><a href="/pages/01_NI_Real_Time.php">01_Ni_Real_Time.php</a></td>
                                <td>No Status</td>
                            </tr>
                            <tr class="warning">
                                <td>2</td>
                                <td>Too</td>
                                <td><a href="/pages/02_NI_SD_ELog_Last_12_Weeks.php">02_NI_SD_ELog_Last_12_Weeks.php</a></td>
                                <td>No Status</td>
                            </tr>
                            <tr class="warning">
                                <td>3</td>
                                <td>Highcharts Elog/ZXO together </td>
                                <td><a href="/pages/03_ZXO_Elog_Market_Rev.php">03_ZXO_Elog_Market_Rev.php</a></td>
                                <td>No Status</td>
                            </tr>
                            <tr class="warning">
                                <td>17</td>
                                <td>Splited <a href="/pages/03_ZXO_Market_Rev.php">03_ZXO_Market_Rev.php</a></td>
                                <td><a href="/pages/03_Elog_Market_Rev.php">03_Elog_Market_Rev.php</a></td>
                                <td>No Status</td>
                            </tr>
                            <tr class="warning">
                                <td>4</td>
                                <td>Too</td>
                                <td><a href="/pages/04_SD_Air_Rail_Market_Rev.php">04_SD_Air_Rail_Market_Rev.php</a></td>
                                <td>No Status</td>
                            </tr>
                            <tr class="warning">
                                <td>18</td>
                                <td>Too <a href="/pages/04_SD_Air_Market_Rev.php">04_SD_Air_Market_Rev.php</a></td>
                                <td><a href="/pages/04_SD_Rail_Market_Rev.php">04_SD_Rail_Market_Rev.php</a></td>
                                <td>No Status</td>
                            </tr>
                            <tr class="warning">
                                <td>5</td>
                                <td>Change Colors of Background</td>
                                <td><a href="/pages/05_Button_Change.php">05_Button_Change.php</a></td>
                                <td>No Status</td>
                            </tr>
                            <tr class="warning">
                                <td>6</td>
                                <td>Combination of 1st and 2nd</td>
                                <td><a href="/pages/06_All_in_One.php">Classic_dashboard.php</a></td>
                                <td>No Status</td>
                            </tr>
                            <tr class="warning">
                                <td>6</td>
                                <td>Dashboard with new graphics</td>
                                <td><a href="/pages/06_All_in_One_WithNew.php">Pos_dashboard.php</a></td>
                                <td>No Status</td>
                            </tr>
                            <tr class="info">
                                <td>7</td>
                                <td>Angular Gauge with <a href="http://www.highcharts.com/demo/gauge-speedometer">HighCharts</a></td>
                                <td><a href="/pages/07.php">07.php</a></td>
                                <td>No Status</td>
                            </tr>
                            <tr class="info">
                                <td>8</td>
                                <td>Line Chart with streaming (live) data <a href="http://www.highcharts.com/demo/dynamic-update/">HighCharts</a> </td>
                                <td><a href="/pages/08.php">08.php</a></td>
                                <td>No Status</td>
                            </tr>
                            <tr class="info">
                                <td>9</td>
                                <td>Column Chart (grouped) and Last 12 Weeks together <a href="http://www.highcharts.com/demo/column-negative">HighChart</a></td>
                                <td><a href="/pages/09.php">09.php</a></td>
                                <td>No Status</td>
                            </tr>
                            <tr class="info">
                                <td>10</td>
                                <td>Combination of <a href="http://www.highcharts.com/demo/column-stacked">Stacked Columns</a> and example above</td>
                                <td><a href="/pages/10.php">10.php</a></td>
                                <td>No Status</td>
                            </tr>
                            <tr class="info">
                                <td>11</td>
                                <td>Solid gauge <a href="http://www.highcharts.com/demo/gauge-solid">HighCharts</a></td>
                                <td><a href="/pages/11.php">11.php</a></td>
                                <td>No Status</td>
                            </tr>
                            <tr class="info">
                                <td>14</td>
                                <td>Combination of columns and line (and dual axes) &&&&& Area Chart (Reverted) <a href="http://www.highcharts.com/demo/combo-dual-axes">HighCharts</a></td>
                                <td><a href="/pages/14.php">14.php</a></td>
                                <td>No Status</td>
                            </tr>
                            <!-- <tr class="info">
                                <td>15</td>
                                <td>Pia Chart </td>
                                <td><a href="/pages/15.php">15.php</a></td>
                                <td>No Status</td>
                            </tr> -->
                            <tr class="info">
                                <td>16</td>
                                <td>Pia Charts and some 3D options</td>
                                <td><a href="/pages/16.php">16.php</a></td>
                                <td><a href="http://jsfiddle.net/gh/get/jquery/1.9.1/highslide-software/highcharts.com/tree/master/samples/highcharts/demo/heatmap/">HeatMap Test</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>


        <!-- build:js scripts/vendor.js -->
        <!-- bower:js -->
        <script src="../bower_components/underscore/underscore.js"></script>
        <script src="../bower_components/jquery/dist/jquery.js"></script>
        <!-- endbower -->
        <!-- endbuild -->

        <!-- build:js scripts/plugins.js -->
        <script src="../bower_components/bootstrap/js/affix.js"></script>
        <script src="../bower_components/bootstrap/js/alert.js"></script>
        <script src="../bower_components/bootstrap/js/dropdown.js"></script>
        <script src="../bower_components/bootstrap/js/tooltip.js"></script>
        <script src="../bower_components/bootstrap/js/modal.js"></script>
        <script src="../bower_components/bootstrap/js/transition.js"></script>
        <script src="../bower_components/bootstrap/js/button.js"></script>
        <script src="../bower_components/bootstrap/js/popover.js"></script>
        <script src="../bower_components/bootstrap/js/carousel.js"></script>
        <script src="../bower_components/bootstrap/js/scrollspy.js"></script>
        <script src="../bower_components/bootstrap/js/collapse.js"></script>
        <script src="../bower_components/bootstrap/js/tab.js"></script>
        <!-- endbuild -->
    </body>
</html>
