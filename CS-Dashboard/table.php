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
        <link href="/css/bootstrap.min.css" rel="stylesheet">
        <link href="/css/styles.css" rel="stylesheet">
        <script src="/js/jquery-2.1.1.min.js"></script>
        <script type="text/javascript" src="/js/csv.js"></script>
        <script type="text/javascript" src="/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="/js/AjaxCallsCSV.js"></script>
        <script type="text/javascript" src="/js/underscore-min.js" ></script>
        <script type="text/javascript" src="/js/ion.sound.min.js"></script>
    </head>

    <body>
        <div class="container-fluid">
            <div class="row clearfix">
                <div class="col-md-12 column">
                    <table class="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product</th>
                                <th>Payment Taken</th> 
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> 1</td>
                                <td> TB - Monthly</td>
                                <td> 01/04/2012 </td>
                                <td>  Default </td>
                            </tr>
                            <tr class="active">
                                <td> 1</td>
                                <td>TB - Monthly</td>
                                <td>01/04/2012 </td>
                                <td>Approved</td>
                            </tr>
                            <tr class="success">
                                <td>2
                                </td>
                                <td>TB - Monthly</td>
                                <td>02/04/2012</td>
                                <td>Declined</td>
                            </tr>
                            <tr class="warning">
                                <td>3</td>
                                <td>TB - Monthly</td>
                                <td>03/04/2012</td>
                                <td>Pending</td>
                            </tr>
                            <tr class="danger">
                                <td>4</td>
                                <td>TB - Monthly</td>
                                <td> 04/04/2012</td>
                                <td> Call in to confirm</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </body>
</html>