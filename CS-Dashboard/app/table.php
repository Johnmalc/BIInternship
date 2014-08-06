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
        <script type="text/javascript" src="/scripts/csv.js"></script>
        <script type="text/javascript" src="/scripts/AjaxCallsCSV.js"></script>
        <script type="text/javascript" src="/scripts/ion.sound.min.js"></script>
    </head>

    <body>
        <div class="container-fluid">
            <div class="row clearfix">
                <div class="col-md-12 column">
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
                                <td><a href="/pages/01_NI_Real_Time.html">01_Ni_Real_Time.html</a></td>
                                <td>Killed-nobody like it</td>
                            </tr>
                            <tr class="warning">
                                <td>2</td>
                                <td>Too</td>
                                <td><a href="/pages/02_NI_SD_ELog_Last_12_Weeks.html">02_NI_SD_ELog_Last_12_Weeks.html</a></td>
                                <td>Too</td>
                            </tr>
                            <tr class="warning">
                                <td>3</td>
                                <td>Created from Excel File/Marco</td>
                                <td><a href="/pages/03_ZXO_Elog_Market_Rev.html">03_ZXO_Elog_Market_Rev.html</a></td>
                                <td>Too</td>
                            </tr>
                            <tr class="warning">
                                <td>4</td>
                                <td>Too</td>
                                <td><a href="/pages/04_SD_Air_Rail_Market_Rev.html">04_SD_Air_Rail_Market_Rev.html</a></td>
                                <td>Too</td>
                            </tr>
                            <tr class="danger">
                                <td>5</td>
                                <td>Change Colors of Background</td>
                                <td><a href="/pages/05_Button_Change.html">05_Button_Change.html</a></td>
                                <td>No Status</td>
                            </tr>
                            <tr class="success">
                                <td>6</td>
                                <td>Combination of 1st and 2nd</td>
                                <td><a href="/pages/06_All_in_One.html">06_All_in_One.html</a></td>
                                <td>No Status</td>
                            </tr>
                            <tr class="success">
                                <td>7</td>
                                <td>Angular Gauge with <a href="http://www.highcharts.com/demo/gauge-speedometer">HighCharts</a></td>
                                <td><a href="/pages/07.html">07.html</a></td>
                                <td>No Status</td>
                            </tr>
                            <tr class="success">
                                <td>8</td>
                                <td>Line Chart with streaming (live) data <a href="http://www.highcharts.com/demo/dynamic-update/">HighCharts</a> </td>
                                <td><a href="/pages/08.html">08.html</a></td>
                                <td>No Status</td>
                            </tr>
                            <tr class="success">
                                <td>9</td>
                                <td>Column Chart (grouped) <a href="http://www.highcharts.com/demo/column-negative">HighChart</a></td>
                                <td><a href="/pages/09.html">09.html</a></td>
                                <td>No Status</td>
                            </tr>
                            <tr class="success">
                                <td>10</td>
                                <td>Combination of <a href="http://www.highcharts.com/demo/column-stacked">Stacked Columns</a> and example above</td>
                                <td><a href="/pages/10.html">10.html</a></td>
                                <td>No Status</td>
                            </tr>
                            <tr class="success">
                                <td>11</td>
                                <td>Solid gauge <a href="http://www.highcharts.com/demo/gauge-solid">HighCharts</a></td>
                                <td><a href="/pages/11.html">11.html</a></td>
                                <td>No Status</td>
                            </tr>
                            <tr class="success">
                                <td>12</td>
                                <td>Combination of columns and line (and dual axes) <a href="http://www.highcharts.com/demo/combo-dual-axes">HighCharts</a></td>
                                <td><a href="/pages/12.html">12.html</a></td>
                                <td>No Status</td>
                            </tr>
                            <tr class="success">
                                <td>13</td>
                                <td>None</td>
                                <td><a href="/pages/13.html">13.html</a></td>
                                <td>No Status</td>
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

        <!-- build:js({app,.tmp}) scripts/main.js -->
        <script src="scripts/main.js"></script>
        <!-- endbuild -->
    </body>
</html>