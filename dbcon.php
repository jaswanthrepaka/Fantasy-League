<?php
$name = $_POST['name'];
$username = $_POST['username'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$DateOfBirth = $_POST['DateOfBirth'];
$gender = $_POST['gender'];
if (!empty($username) || !empty($name) || !empty($gender) || !empty($email) || !empty($DateOfBirth) || !empty($phone)) {
    $host = "localhost";
    $dbUsername = "root";
    $dbPassword = "";
    $dbname = "signup";
    //create connection
    $conn = new mysqli($host, $dbUsername, $dbPassword, $dbname);
    if (mysqli_connect_error()) {
     die('Connect Error('. mysqli_connect_errno().')'. mysqli_connect_error());
    } else {
     $SELECT = "SELECT email From info Where email = ? Limit 1";
     $INSERT = "INSERT Into info (name,username,email,gender,DateOfBirth,phone) values(?, ?, ?, ?, ?, ?)";
     //Prepare statement
     $stmt = $conn->prepare($SELECT);
     $stmt->bind_param("s", $email);
     $stmt->execute();
     $stmt->bind_result($email);
     $stmt->store_result();
     $rnum = $stmt->num_rows;
     if ($rnum==0) {
      $stmt->close();
      $stmt = $conn->prepare($INSERT);
      $stmt->bind_param("sssssi", $name, $username, $email, $gender,$DateOfBirth,$phone);
      $stmt->execute();
      echo "<script> alert('New record inserted sucessfully'); </script>";
     } else {
      echo "<script> alert('Someone already register using this email'); </script>";
     }
     $stmt->close();
     $conn->close();
    }
} else {
 echo "All field are required";
 die();
}
?>