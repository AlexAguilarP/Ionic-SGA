<?php
include 'api/funciones.php';
include 'api/conexion.php';
date_default_timezone_set("America/La_Paz");
      $fecha=date('Y-m-d');
      echo($fecha);
			$hora=date('h:i:s');
			$usuario=$_GET['usuario'];
			$sql = "SELECT lista_de_responsables.`*` FROM lista_de_responsables WHERE lista_de_responsables.codigo_usuario='$usuario' AND limite_fecha>'$fecha'";
			echo getSQL($sql);
?>
