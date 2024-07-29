<?php
    session_start();
    /*echo '<pre>';
    print_r($_SESSION);
    echo '</pre>';*/
    
    include 'conn.php';
        $phn =$_SESSION['phn1'];
        $team1=$_SESSION['team1'];
        $team2=$_SESSION['team2'];
        $team=implode(',',$_POST['p']);
        $sql="insert into teams(phone,team1,team2,team) VALUES('$phn','$team1','$team2','$team')";
        $query=mysqli_query($con,$sql);
    if($query)
    {?>
        <script>
            alert("created successful");
        </script>
    <?php
    }
    else{
        ?>
                                <script>
                                    alert("creation not  successful");
                                </script>
                            <?php
    }


?>