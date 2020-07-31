<?php
include_once ("../../funciones.php");
header("Cache-Control: no-cache, must-revalidate"); // HTTP/1.1
header("Expires: Sat, 26 Jul 1997 05:00:00 GMT"); // Fecha en el pasado
header('Access-Control-Allow-Origin: *');
//header('Content-Type: application/json; charset=ISO-8859-1', true);
header("content-type: application/javascript; charset=ISO-8859-1", true);
include_once ("service-worker.js");
?>