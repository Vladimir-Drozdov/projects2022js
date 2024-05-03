<?php
//header('Location: ../project11/index.html');
print_r($_POST);
$name=$_POST['name'];
echo "name: $name ";

$password= $_POST['password'];
echo "password: $password ";
$file= $_POST['file'];
echo "file: $file";