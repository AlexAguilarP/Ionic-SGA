<?php
  if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $ci_externo = $_GET['ci_externo'];
    include 'conexion.php';
    $sql1= "SELECT * FROM externos WHERE ci_externo='$ci_externo'";
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
