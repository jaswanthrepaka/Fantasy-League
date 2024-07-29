<?php
session_start();
$_SESSION['phn1']=$_POST['phn1'];
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Sports11</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="Mystyle.css">
        <script src="sports.js" async=""></script>
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    </head>
    <body class="main">
        <h1>Sports46W</h1>
        <div id="login-page">
            <div id="error"></div>
            <div id="success"></div>
            <h2>Login</h2>
            <div id="text">
                <i class="fa fa-phone" aria-hidden="true"></i>
                <input type="text" id="mobile" name="mobile" placeholder="00000-00000" required>
            </div>
            <div id="text">
                <input type="text" id="refer" name="refercode" placeholder="Ref-code Optional" >
            </div>
            <div id="btn">
                <input type="button" id="butn" onclick="get()" value="Get Otp">
            </div>
            <div id="ver">
                <div id="text">
                    <label style="font-size: 24px;" for="otp">One-Time-Password</One-Time-Password></label><br><br>
                    <input type="number"  id="otp" placeholder="Enter otp"><br>
                </div>
                <div id="btn" style="margin-top: 5px;">
                    <a onclick="get()" href="#678" style="font-size: 15px; color: white;">Resend otp</a>
                    <input id="butn1" type="button" style="float: right;" onclick="verify()" value="Verify">
                </div>
            </div>
        </div>
        
    </body>
</html>