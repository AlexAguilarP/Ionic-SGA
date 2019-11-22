<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-with");
header("Content-Type: application/json; charset=utf-8");
function conecta_bd()
{
	$servidor = "localhost";
	$usuario = "root";
	$clave = "";
	$bd = "proyecto";

	$conn = mysqli_connect($servidor, $usuario, $clave, $bd);

	if (mysqli_connect_errno()) {
		echo mysqli_connect_error();
		exit(0);
	}

	return $conn;
}

function genFecha($fecha)
{
	$meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"];
	$date = explode("-", $fecha);
	return $date[2] . " de " . $meses[intval($date[1]) - 1] . " del " . $date[0];
}

function getSQL($sql)
{
	$res;
	$conn	=	conecta_bd();
	$rs = mysqli_query($conn, $sql);
	$array = array();
	if ($rs) {
		$array = array();
		while ($fila = mysqli_fetch_assoc($rs)) {
			$array[] = array_map('utf8_encode', $fila);
		}
		$res = json_encode($array, JSON_NUMERIC_CHECK);
	} else {
		$res = null;
		echo mysqli_error($conn);
	}
	mysqli_close($conn);
	return $res;
}

function getSQLE($sql)
{
	$res;
	$conn	=	conecta_bd();
	$rs = mysqli_query($conn, $sql);
	$array = array();
	if ($rs) {
		$array = array();
		while ($fila = mysqli_fetch_assoc($rs)) {
			$array[] = array_map('utf8_encode', $fila);
		}
		$res = json_ecode($array);
	} else {
		$res = null;
		echo mysqli_error($conn);
	}
	mysqli_close($conn);
	return $res;
}

function putSQL($sql)
{
	$res;
	$conn	=	conecta_bd();
	$rs = mysqli_query($conn, $sql);
	if ($rs) {
		$array = true;
		$res = json_encode($array);
	} else {
		$array = false;
		$res = json_encode($array);
		echo mysqli_error($conn);
	}
	mysqli_close($conn);
	return $res;
}
