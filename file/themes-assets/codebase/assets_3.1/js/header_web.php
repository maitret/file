<?php
header("Cache-Control: no-cache, must-revalidate"); // HTTP/1.1
header("Expires: Sat, 26 Jul 1997 05:00:00 GMT"); // Fecha en el pasado
header('Access-Control-Allow-Origin: *');
//header("content-type: application/javascript");
//header('Content-Type: application/json; charset=ISO-8859-1', true);
include_once("../../funciones.php");
header("content-type: application/javascript; charset=ISO-8859-1", true);
$is_included = 1;

$id_nofif = $mysqli->real_escape_string(Valida_utf8($_REQUEST['id_n']));
$is_app = $mysqli->real_escape_string(Valida_utf8($_REQUEST['is_app']));
$is_included = 1;
$User_Agent = user_agent();
$IP = ip();
$get_uid_cookie = $_COOKIE['uid'];
if($get_uid_cookie == ""){
$uid = urls__(getGUID());
setcookie('uid', $uid, time()+60*60*24*30, "/", "", 1);
$get_uid_cookie = $uid;
}
?>
var key = "<?php echo $Get_Key; ?>";
var key_dev = "<?php echo $Get_Key; ?>";
var id_cliente = "<?php echo $Get_IdCliente; ?>";
var lat = "<?php echo $Get_Lat; ?>";
var lon = "<?php echo $Get_Lon; ?>";
var session_id = "<?php echo session_id(); ?>";
var user_agent = "<?php echo $User_Agent; ?>";
var ip = "<?php echo $IP; ?>";
var url_server = "<?php echo $url_server; ?>";
var id_n = "<?php echo $id_nofif; ?>";
var uid_cookie = "<?php echo $get_uid_cookie; ?>";
var is_app = "<?php echo $is_app; ?>";
<?php
//echo "var div_usuario_sesion = ".json_encode($div_usuario_sesion).";";
if($is_app == "1"){
include_once("header_app.js");
} else {
include_once("header_web.js");
//include_once("inc_service-worker.js");
}
?>

