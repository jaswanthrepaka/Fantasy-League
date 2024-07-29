<?php
session_start();
?>
<!DOCTYPE html>

<html>

    <head>
        <title>Profile Update</title>
    </head>
    
    <style>
        *{margin: 0px; padding: 0px;}
        body{background: #ecf1f4; font-family: sans-serif;}
        .main{background-color: black;margin-bottom: 10px;}
        .form-wrap{ width: 320px; background: #414040; padding: 20px 20px; margin-left: 450px;}
        h1{text-align: center; color: #fff; font-weight: normal; margin-bottom: 20px;}
        
        input[type="text"], input[type="submit"],input[type="email"] {width: 100%; background: none; border: 1px solid #fff; border-radius: 3px; padding: 6px 15px; box-sizing: border-box; margin-bottom: 20px; font-size: 16px; color: #fff;}

        input[type="submit"]{ background: #bac675; border: 0; cursor: pointer; color: #3e3d3d;}
        input[type="submit"]:hover{ background: #39adc2; transition: .6s;}
        
        ::placeholder{color: #fff;}
    
    </style>

    <body>
        <div class="main">
            <h1 style="color: red;">SPORTS46W</h1>
        </div><br>
        <div class="form-wrap">
        
            <form action="dbcon.php" method="POST">
            
                <h1>Profile</h1>
                <input type="text" id="name" name="name" placeholder="Name" required>
                <input type="text" id="uname" name="username" placeholder="Username" required>
                <input type="email" id="email" name="email" placeholder="Email" required>
                <input type="text" id="phone" name="phone" placeholder="+91" maxlength="10" value="<?php
                echo $_SESSION['phn1'];
                ?>
                " disabled>
                <div id="bday">
                    <label style="color: white; font-size: 16px;">Date Of Birth:</label><br>
                    <input type="text"  placeholder="DD/MM/YYYY" pattern='(?:((?:0[1-9]|1[0-9]|2[0-9])\/(?:0[1-9]|1[0-2])|(?:30)\/(?!02)(?:0[1-9]|1[0-2])|31\/(?:0[13578]|1[02]))\/(?:19|20)[0-9]{2})'
                     name="DateOfBirth" id="bday" required autofocus autocomplete="nope">
                </div>
                <div class="rad" style="color: white;">
                    <label style="font-size: 16px;">Gender:</label><br><br>
                    <input type="radio" name="gender"  value="Male" />Male
                    <input type="radio" name="gender" value="Female" />Female
                </div><br>
                <input type="submit" name="update" value="Update">

            </form>
        </div>
    </body>
</html>