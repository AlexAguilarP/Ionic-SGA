<?php
  if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    date_default_timezone_set("America/La_Paz");
    $id_actividad=$_POST['id_actividad'];
    $ci_externo = $_POST['ci'];
    $nombre =$_POST['nombre'];
    $apeP=$_POST['apeP'];
    $apeM=$_POST['apeM'];
    $correo=$_POST['correo'];
    $telf=$_POST['telefono'];
    $inicio=date('Y/m/d h:i:s');
    $fin=date('Y/m/d h:i:s');
    include 'conexion.php';
    $ssql=$con->prepare("SELECT id_externo FROM externos WHERE ci_externo='$ci_externo'");
    $ssql->execute();
    $ssql->bind_result($id_externo);
    while ($ssql->fetch()) {
      // code...
      $id_d= array();
      $id_d['id_externo']=$id_externo;
    }
    $num=$ssql->num_rows;
    if ($num == 0) {
      $sql = "INSERT INTO externos(ci_externo,nombre_externo,apellido_pat_externo,apellido_mat_externo,correo_externo,telefono_externo,created_at) VALUES ('$ci_externo','$nombre','$apeP','$apeM','$correo','$telf','$inicio') ";
      mysqli_query($con,$sql) or die (mysqli_error());
      }elseif($num >0){
    }
    $ssql=$con->prepare("SELECT id_externo FROM externos WHERE ci_externo='$ci_externo'");
    $ssql->execute();
    $ssql->bind_result($id_externo);
    while ($ssql->fetch()) {
      // code...
      $id_d= array();
      $id_d['id_externo']=$id_externo;
    }
    $sql = "INSERT INTO actividad_externos(id_externo,id_actividad,created_at) VALUES ('$id_externo','$id_actividad','$inicio') ";
    mysqli_query($con,$sql) or die (mysqli_error());
    echo "Registrado Correctamente";
    mysqli_close($con);
}else{
  echo "ERROR";
}
