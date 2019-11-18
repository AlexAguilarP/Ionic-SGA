<?php
  if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $codigo_usuario = $_GET['codigo_usuario'];
    $id__tipo_asistencia =1;
    include 'conexion.php';
    $sql1= "SELECT * FROM lista_de_usuarios WHERE codigo_usuario='$codigo_usuario'";
    $resultado= $con-> query($sql1);
    while($fila = $resultado->fetch_array()){
      $usuario[]=array_map('utf8_encode',$fila);
    }
    echo json_encode($usuario);
    $resultado->close();
}else{
  echo "ERROR";
}

?>
