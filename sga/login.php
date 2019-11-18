<?php
  if($_SERVER['REQUEST_METHOD']=='POST'){
    $username = $_POST['username'];
    $password = $_POST['password'];
    include 'conexion.php';
    $sql = "SELECT * FROM lista_de_responsables WHERE codigo_usuario = '$username' AND password_usuario='$password'";
    $result = mysqli_query($con,$sql);
    $check = mysqli_fetch_array($result);
  if(isset($check)){
  echo 'success';
  }else{
  echo 'Usuario o contraseña incorrecta. Vuelva a ingresar datos por favor';
  }
}
?>
