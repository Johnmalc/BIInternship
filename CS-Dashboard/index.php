<?php
    session_start();

    $userinfo = array(
                    'tm'=>'Osvlad!2',
                    'admin'=>'sca()'
    );

    if(isset($_GET['logout'])) {
        $_SESSION['username'] = '';
        header('Location:  ' . $_SERVER['PHP_SELF']);
    }

    if(isset($_POST['username'])) {
        if($userinfo[$_POST['username']] == $_POST['password']) {
            $_SESSION['username'] = $_POST['username'];
            $_SESSION['logon'] = true;
        }else {
            
        }
    }
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Login</title>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="/css/bootstrap.min.css" rel="stylesheet">
        <link href="/css/styles_login.css" rel="stylesheet">
        <script src="/js/jquery-2.1.1.min.js"></script>
        <script type="text/javascript" src="/js/csv.js"></script>
        <script type="text/javascript" src="/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="/js/AjaxCallsCSV.js"></script>
        <script type="text/javascript" src="/js/underscore-min.js" ></script>
        <script type="text/javascript" src="/js/ion.sound.min.js"></script>
        <META NAME="ROBOTS" CONTENT="NOINDEX, NOFOLLOW">
    </head>
    <body>
        <?php if($_SESSION['username']): ?>
            <p>You are logged in as <?=$_SESSION['username']?></p>
            <p>Follow an overview of already existing pages <a href="/table.php">here</a></p>
            <p><a href="?logout=1">Logout</a></p>
        <?php endif; ?>
<!--
        <form name="login" action="" method="post">
            Username:  <input type="text" name="username" value="" /><br />
            Password:  <input type="password" name="password" value="" /><br />
            <input type="submit" name="submit" value="Submit" />
        </form>
-->
        <div class="container-fluid">
            <form class="form-signin" method="post" action="">
                <h2 class="form-signin-heading">Please sign in</h2>
                <input type="text" class="form-control" name="username" placeholder="Username" required autofocus>
                <input type="password" class="form-control" name="password" placeholder="Password" required>
                <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            </form>
        </div>
    </body>
</html>