<?php
  if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    date_default_timezone_set("America/La_Paz");
    $id = $_POST['id'];
    $id_tipo_asistencia ="3";
    $id_lista=$_POST['id_lista'];
    $id_rol=$_POST['id_rol'];
    $i1="1";
    $i2="2";
    $i3="3";
    $i4="4";
    $i5="5";
    $i6="6";
    $inicio=date('Y/m/d h:i:s');
    $fin=date('Y/m/d h:i:s');
    include 'conexion.php';
    if (strcmp($id_rol,$i2)===0 || strcmp($id_rol,$i3)===0 || strcmp($id_rol,$i4)===0 ) {
      $ssql=$con->prepare("SELECT id_lista_docente FROM lista_docentes WHERE id_lista='$id_lista'AND id_docente='$id'");
      $ssql->execute();
      $ssql->bind_result($id_lista_docente);
      while ($ssql->fetch()) {
        // code...
        $id_d= array();
        $id_d['id_lista_docente']=$id_lista_docente;
      }
      $num=$ssql->num_rows;
      if ($num == 0) {
        $sql = "INSERT INTO lista_docentes(id_lista,id_docente,id_tipo_asistencia,created_at) VALUES ('$id_lista','$id','$id_tipo_asistencia','$inicio') ";
        mysqli_query($con,$sql) or die (mysqli_error());

      }elseif($num >0){
        $sql = "UPDATE `lista_docentes` SET `id_lista`='$id_lista',`id_docente`='$id',`updated_at`='$fin' WHERE `id_lista_docente`='$id_lista_docente'";
        mysqli_query($con,$sql) or die (mysqli_error());
      }
    }elseif (strcmp($id_rol,$i1)===0 || strcmp($id_rol,$i5)===0 || strcmp($id_rol,$i6)===0) {
      $ssql=$con->prepare("SELECT id_lista_estudiante FROM lista_estudiantes WHERE id_lista='$id_lista'AND id_estudiante='$id'");
      $ssql->execute();
      $ssql->bind_result($id_lista_estudiante);
      while ($ssql->fetch()) {
        // code...
        $id_d= array();
        $id_d['id_lista_estudiante']=$id_lista_estudiante;
      }
      $num=$ssql->num_rows;
      if ($num == 0) {
        $sql = "INSERT INTO lista_estudiantes(id_lista,id_estudiante,id_tipo_asistencia,created_at) VALUES ('$id_lista','$id','$id_tipo_asistencia','$inicio') ";
        mysqli_query($con,$sql) or die (mysqli_error());

      }elseif($num>0){
        $sql = "UPDATE `lista_estudiantes` SET `id_lista`='$id_lista',`id_estudiante`='$id',`updated_at`='$fin' WHERE id_lista_estudiante='$id_lista_estudiante'";
        mysqli_query($con,$sql) or die (mysqli_error());
      }
    }
    mysqli_close($con);
}else{
  echo "ERROR";
}
