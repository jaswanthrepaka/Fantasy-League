<?php
//error_reporting(E_ERROR);
session_start();
//ob_start();
//session_unset();
session_destroy();
header("location: Login.php");
?>
