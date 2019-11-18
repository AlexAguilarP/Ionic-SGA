<?php
include 'api/funciones.php';
include 'api/conexion.php';
$id_actividad=$_GET['id_actividad'];
$ci_externo = $_GET['ci'];
$nombre =utf8_decode($_GET['nombre']);
$apeP=utf8_decode($_GET['apeP']);
$apeM=utf8_decode($_GET['apeM']);
$correo=utf8_decode($_GET['correo']);
$telf=$_GET['telefono'];
$inicio=date('Y/m/d h:i:s');
$fin=date('Y/m/d h:i:s');
$consulta="SELECT id_externo FROM externos WHERE ci_externo='$ci_externo'";
$ql=mysqli_query($con,$consulta);
while($row=mysqli_fetch_array($ql)){
  $id=$row['id_externo'];
}
if (empty($id) ) {
    $sql = "INSERT INTO externos(ci_externo,nombre_externo,apellido_pat_externo,apellido_mat_externo,correo_externo,telefono_externo,created_at) VALUES ('$ci_externo','$nombre','$apeP','$apeM','$correo','$telf','$inicio') ";
    putSQL($sql);
  }
$consulta="SELECT id_externo FROM externos WHERE ci_externo='$ci_externo'";
$ql=mysqli_query($con,$consulta);
while($row=mysqli_fetch_array($ql)){
  $id=$row['id_externo'];
}
$ssql="SELECT id_actividad_externo FROM actividad_externos WHERE id_actividad='$id_actividad'AND id_externo='$id'";
$resp=mysqli_query($con,$ssql);
while($rowa=mysqli_fetch_array($resp)){
  $id_actividad_externo=$rowa['id_actividad_externo'];
}
if (empty($id_actividad_externo)) {
  $sql = "INSERT INTO actividad_externos(id_externo,id_actividad,created_at) VALUES ('$id','$id_actividad','$inicio')";
  echo putSQL($sql);	
}else{
  $sql = "UPDATE `actividad_externos` SET `updated_at`='$fin' WHERE id_actividad_externo='$id_actividad_externo'";
  echo putSQL($sql);
}
?>
