<?php 
	include 'funciones.php';
    include 'conexion.php';
	$opcion = $_GET["opcion"];
	switch ($opcion) {
		case '1':
		//obtener lista de asistencia de las actividades
			$id_lista=$_GET['id_lista'];
			$sql = "SELECT * FROM lista_generales WHERE id_lista LIKE '%A".$id_lista."A%'";
			echo getSQL($sql);
			break;

		case '2':
		//obtener datos atraves del codigo qr
			$codigo_usuario = $_GET['codigo_usuario'];
			$sql= "SELECT * FROM lista_de_usuarios WHERE codigo_usuario='$codigo_usuario'";
			echo getSQL($sql);
			break;

		case '3':
		//buscar un externo por ci
			$ci_externo = $_GET['ci_externo'];
  	 		 include 'conexion.php';
			$sql= "SELECT * FROM externos WHERE ci_externo='$ci_externo'";
			echo getSQL($sql);
			break;

		case '4':
		//registrar un usuario
			$codigo_usuario = $_GET['codigo_usuario'];
			$i1="1";
			$i2="2";
			$i3="3";
			$i4="4";
			$i5="5";
			$i6="6";
			$consulta="SELECT * FROM lista_de_usuarios WHERE codigo_usuario='$codigo_usuario'";
			$ql=mysqli_query($con,$consulta);
			while($row=mysqli_fetch_array($ql)){
				$id=$row['id'];
				$id_rol=$row['id_rol'];
			}
		  	date_default_timezone_set("America/La_Paz");
		  	$id_tipo_asistencia ="3";
		  	$id_lista="1";
			$inicio=date('Y/m/d h:i:s');
			$fin=date('Y/m/d h:i:s');
			if (strcmp($id_rol,$i2)===0 || strcmp($id_rol,$i3)===0 || strcmp($id_rol,$i4)===0 ) {
				$ssql=$conn->prepare("SELECT id_lista_docente FROM lista_docentes WHERE id_lista='$id_lista'AND id_docente='$id'");
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
					echo putSQL($sql);
			
				}elseif($num >0){
					$sql = "UPDATE `lista_docentes` SET `id_lista`='$id_lista',`id_docente`='$id',`updated_at`='$fin' WHERE `id_lista_docente`='$id_lista_docente'";
					echo putSQL($sql);
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
					echo putSQL($sql);
			
				}elseif($num>0){
					$sql = "UPDATE `lista_estudiantes` SET `id_lista`='$id_lista',`id_estudiante`='$id',`updated_at`='$fin' WHERE id_lista_estudiante='$id_lista_estudiante'";
					echo putSQL($sql);
				}
			}
			break;
		case '5':
			$ci_externo = $_GET['ci'];
		    $sql1= "SELECT * FROM externos WHERE ci_externo='$ci_externo'";
    		echo getSQL($sql1);
			break;
		case '6':
			$sql = "SELECT `*` FROM `actividades_con_fechas` WHERE `estado_actividad` = 'Aprobado' ORDER BY (id_actividad) DESC ";
			echo getSQL($sql);
			break;
		case '7':
			$idsel = $_GET["id"];
			$sql = "SELECT `*` FROM `actividades_con_fechas` WHERE `estado_actividad` = 'Aprobado' AND `id_actividad`='$idsel'";
			echo getSQL($sql);
			break;
		case 'a':
			$idsel = $_GET["id"];
			$sql = "SELECT * FROM externos";
			echo getSQL($sql);
			break;
		case '8':
			$idsel = $_GET["id"];
			$sql = "SELECT * FROM actividad_fechas WHERE id_actividad='$idsel' ORDER BY (fecha_actividad) ASC  ";
			echo getSQL($sql);
			break;
		case '9':
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
			break;
		case '10':
			$id_lista = $_GET["id"];
			$sql = "SELECT * FROM listas_generales WHERE id_lista LIKE a ' ORDER BY (fecha_actividad) ASC  ";
			echo getSQL($sql);
			break;
		default:
			# code...
			break;
	}
