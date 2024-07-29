<?php
session_start();
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Sports24W</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="Mystyle.css">
        <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
        <script src="sports.js" async=""></script>
    </head>
    <body class="main1">
        <div id="top">
            <h2 style="float: left; font-size: 24px; margin-left: 10px;">Sports46W</h2>
            <input type="button" id="butn2" style="float: right; margin: 30px 20px 0px 0px; cursor: pointer;" name="sea" value="Search">
            <input id="search" type="search" name="search" placeholder="Search">
        </div>
        <div id="left">
            <div id="leftin" style="margin: 10px 0;">
                <div id="l1" >
                    <input type="button" onclick="window.location.href='profile.php';" value="Profile"><br>
                    <input type="button" onclick="" value="Leaderboard"><br>
                    <input type="button" onclick="" value="Winners"><br>
                    <input type="button" onclick="window.location.href='playerstats.html';" value="Player Stats" ><br>
                    <input type="button" onclick="window.location.href='matches.html';" value="Matches" class="current"><br>
                    <input type="button" onclick="window.location.href='Ipl.html'" value="Points Table"><br>
                </div><br>
                <div id="l2" >
                    <input type="button" onclick="" value="My Balance"><br>
                    <input type="button" onclick="" value="Offers"><br>
                    <input type="button" onclick="refer()" value="Refer"><br>
                </div><br>
                <div id="l3" >
                    <input type="button" onclick="feedback()" value="Feedback"><br>
                    <input type="button" onclick="" value="Help"><br>
                    <input type="button" onclick="window.location.href='logout.php'" value="Logout">
                </div><br>
            </div>
        </div> 
        <div id="right">
            <div id="menu">
                <input type="button" class="active" style="background-color: green;" onclick="Schedule()" value="Home">
                <input type="button" id="match" onclick="Match()" value="My Matches">
            </div>
            <div id="totcntst" >
                <div id="Menu1">
                    
                </div>
                <div id="Menu2" style=" display: none;">
                <?php
    include 'conn.php';

    $phn = $_SESSION['phn1'];
    $data="select * from teams where phone='$phn'";
    $result=mysqli_query($con,$data);
    //$row = mysqli_fetch_array($query, MYSQLI_ASSOC);
    if (mysqli_num_rows($result) > 0) {
     // output data of each row
     while($row = mysqli_fetch_assoc($result)) {
        echo '<h3>'.$row['team1'].' Vs ' .$row['team2'].'</h3>';
        echo '<label>'.$row['team'].'</label><br>';
        echo '<hr style="color:black;"><br>';
     }
   } else {
     echo "0 results";
   }
  
   ?>
                </div>
            </div>
        </div>
        <div class="bottom-up">
            <div>
                <h2 style="text-align: center;">Tutorials</h2>
            </div>
            <div id="tutor">
                <video width="320" height="240" controls>
                    <source src="../MiniProject/Videos/IplAd.mp4" type="video/mp4">
                </video>
            </div>
            <div id="tutor">
                <video width="320" height="240" controls>
                    <source src="../MiniProject/Videos/IplAd.mp4" type="video/mp4">
                </video>
            </div>
            <div id="tutor">
                <video width="320" height="240" controls>
                    <source src="../MiniProject/Videos/IplAd.mp4" type="video/mp4">
                </video>
            </div>
        </div>
        <div class="bottom">
            <div id="foot-top">
                <div id="left-col">
                    <div id="head">
                        <h2 style="color: white;">Sports46W</h2>
                    </div>
                    <div id="logo">
                        <a href="https://www.facebook.com/" target="blank">
                            <i class="fa fa-2x fa-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com/" target="blank">
                            <i class="fa fa-2x fa-instagram"></i>
                        </a>
                        <a href="https://www.twitter.com/" target="blank">
                            <i class="fa fa-2x fa-twitter"></i>
                        </a>
                        <a href="https://www.youtube.com/" target="blank">
                            <i class="fa fa-2x fa-youtube"></i>
                        </a>
                        <a href="https://www.linkedin.com/" target="blank">
                            <i class="fa fa-2x fa-linkedin"></i>
                        </a>
                    </div>
                </div>
                <div id="right-col">
                    <div id="left-link">
                        <ul>
                            <li>
                                <a href="#">Download App</a>
                                <a href="https://www.dream11.com/games/fantasy-cricket/how-to-play">How To Play</a>
                                <a href="#">Invite Friends</a>
                                <a href="#">Rules</a>
                                <a href="#">Fantasy League</a>
                            </li>
                        </ul>
                    </div>
                    <div id="right-link">
                        <ul>
                            <li>
                                <a href="#">About us</a>
                                <a href="#">Fairplay</a>
                                <a href="#">Help Desk</a>
                                <a href="#">Leaderboard</a>
                                <a href="#">Community Guidelines</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="foot">
                <a href="policy_terms.html">Privacy Policy</a>|
                <a href="policy_terms.html">Terms & Conditions</a>
            </div>
        </div>
    </body>
</html>