
/* console.log = function(msg){ alert("log: "+msg); };
console.warning = function(msg){ alert("warning: "+msg); };
console.error = function(msg){ alert("error: "+msg); }; */

var Usuario_fix = "<?php echo urls_nominus($IP); ?>";
var Usuario = "<?php echo $Data_Usuario; ?>"; if(Usuario == ""){ Usuario = Usuario_fix; }

$(".navsillo_").load("<?php echo $url_server; ?>/inc__/html_movil?html=menu&is_app=1");

var uid = uid_cookie; var uid_def = guid();
if (!uid) { window.uid = uid_def; localStorage.setItem('my_uid', uid_def); } else { window.uid = uid; }

var Usuario_SS = localStorage.getItem('usuario');
var myUuid = localStorage.getItem('key');
if (!myUuid) {
myUuid = guid();
localStorage.setItem('key', myUuid);
}
var my_key = myUuid;

if (!Usuario){ Usuario = "Invitado"; }

var firebase_app = "<?php echo $firebase_app; ?>";
var config_adminpanel_fb = {
apiKey: "<?php echo $firebase_apiKey; ?>",
authDomain: firebase_app+".firebaseapp.com",
databaseURL: "https://"+firebase_app+".firebaseio.com",
storageBucket: firebase_app+".appspot.com",
messagingSenderId: "<?php echo $firebase_messagingSenderId; ?>",
projectId: "<?php echo $firebase_app; ?>"
};

var AdminPanel_FB = firebase.initializeApp(config_adminpanel_fb);
var storage_FB = firebase.storage();
var storageRef_FB = storage_FB.ref();

jQuery(document).ready(function($) {

window.fb_update_progress = function (subida) {
AdminPanel_FB.database().ref('/users/'+Usuario_fix).update({
subida: subida
});
};

var websqlp_db = "epsa_landia"; var websqlp = new PouchDB(websqlp_db, {adapter: 'cordova-sqlite'});
if (!websqlp.adapter) { websqlp = new PouchDB(websqlp_db);
var display = document.getElementById('pouchdb-display');
display.innerHTML += (websqlp.adapter ? '&#10003; SQLite plugin is supported.<br/>' : '&#10007; SQLite plugin is not supported.<br/>');
}
websqlp.put({ _id: 'dave@gmail.com', name: 'David', age: 69 });
websqlp.changes().on('change', function() {
console.log('Ch-Ch-Changes');
});
websqlp.replicate.to('<?php echo $url_server; ?>/apps/pouchdb/');

//var user_lat; var user_lon;
var startPos;
if (navigator.geolocation) {
//navigator.geolocation.getCurrentPosition(function(position) {
//window.startPos = position;

navigator.geolocation.watchPosition(function(position) {

AdminPanel_FB.database().ref('/users/'+Usuario_fix).update({
lat: position.coords.latitude,
lon: position.coords.longitude,
altitud: position.coords.altitude,
geo_aprox: position.coords.accuracy,
last_geo: position.timestamp,
usuario: Usuario_fix,
user_agent: user_agent,
session_id: session_id,
ip: ip,
key: my_key
});

var Lat = position.coords.latitude;
var Lon = position.coords.longitude;
window.lat_global = Lat;
window.lon_global = Lon;

if(Lat != ""){ window.localStorage.setItem("User_Lat", Lat); }
if(Lon != ""){ window.localStorage.setItem("User_Lon", Lon); }
window.localStorage.setItem("Geo_Aprox", position.coords.accuracy);

$("#User_Lat").val(Lat);
$("#User_Lon").val(Lon);
$(".User_Lat").val(Lat);
$(".User_Lon").val(Lon);
$(".User_LatLon_print").html(Lat+","+Lon);
$(".User_Lat_print").html(Lat);
$(".User_Lon_print").html(Lon);
//$(".live_session").load(url_server+"/tools/live_session.php?u=<?php echo $Data_Usuario; ?>&lat="+Lat+"&lon="+Lon);
});
//}, function(error) {
//alert('Error occurred. Error code: ' + error.code);
    // error.code can be:
    //   0: unknown error
    //   1: permission denied
    //   2: position unavailable (error response from locaton provider)
    //   3: timed out
//alert(JSON.stringify(error));
//});

/*
//navigator.geolocation.watchPosition(showPosition);
navigator.geolocation.getCurrentPosition(showPosition);
function showPosition(position) {
}
} else {
//alert("Geolicalizacion no soportada.");
}
*/
}

var live_session_int = setInterval(function(){
$(".live_session").load(url_server+"/tools/live_session.php?u=<?php echo $Data_Usuario; ?>&lat="+window.lat_global+"&lon="+window.lon_global);
}, 30000);

});

jQuery(document).ready(function($){
window.enable_geocomplete = function enable_geocomplete(target, default_loc, map) {
if(target){ } else { target = "Direccion"; }
if(default_loc){  } else { default_loc = ""; }
if(map){
$("."+target+", #"+target).geocomplete({
map: map,
mapOptions: { scrollwheel: true },
markerOptions: { draggable: true, title: "Defina punto exacto" },
details: "form",
location: default_loc,
types: ["geocode", "establishment"],
detailsAttribute: "data-geo_"+target
});
} else {
$("."+target+", #"+target).geocomplete({
details: "form",
location: default_loc,
types: ["geocode", "establishment"],
detailsAttribute: "data-geo_"+target
});
}

$("."+target).bind("geocode:dragged", function(event, latLng){
$(".data-geo_"+target+"_lat").val(latLng.lat());
$(".data-geo_"+target+"_lng").val(latLng.lng());
//$(".data-geo_"+target+"_lat").html(latLng.lat());
//$(".data-geo_"+target+"_lng").html(latLng.lng());
//$("input[name=Lat]").val(latLng.lng()); $("input[name=Lon]").val(latLng.lng());
$("input[data-geo_"+target+"=lat]"); $("input[data-geo_"+target+"=lng]");
});
//$("#reset").click(function(){ $(target).geocomplete("resetMarker"); $("#reset").hide(); return false; });
};
});

jQuery(document).ready(function($){
window.enable_geocomplete_old = function enable_geocomplete(target, default_loc, map) {
if(target){ } else { target = ".Direccion"; }
if(default_loc){  } else { default_loc = ""; }
if(map){
$(target).geocomplete({
map: map,
mapOptions: { scrollwheel: true },
markerOptions: { draggable: true, title: "Defina punto exacto" },
details: "form",
location: default_loc,
types: ["geocode", "establishment"],
detailsAttribute: "data-geo"
});
} else {
$(target).geocomplete({
details: "form",
location: default_loc,
types: ["geocode", "establishment"],
detailsAttribute: "data-geo"
});
}

$(target).bind("geocode:dragged", function(event, latLng){
$("input[name=Lat]").val(latLng.lat());
$("input[name=Lon]").val(latLng.lng());
});
//$("#reset").click(function(){ $(target).geocomplete("resetMarker"); $("#reset").hide(); return false; });
};

window.GChart_Pie = function (div_id, title, gg_array, gg_colores) {
google.charts.load("current", {packages:["corechart"]}); google.charts.setOnLoadCallback(function(){
if (typeof gg_colores === 'undefined' || gg_colores === null) { gg_colores = {}; }
var data = google.visualization.arrayToDataTable(gg_array); var options = { is3D: true, title: title, slices: gg_colores };
var chart = new google.visualization.PieChart(document.getElementById(div_id));
chart.draw(data, options); }); };

window.GChart_Column = function (div_id, title, gg_array, gg_colores) {
//google.charts.load('current', {'packages':['bar']});
google.charts.load("current", {packages:['corechart']});
google.charts.setOnLoadCallback(function(){
if (typeof gg_colores === 'undefined' || gg_colores === null) { gg_colores = {}; }
var data = google.visualization.arrayToDataTable(gg_array);
//var options = { chart: { title: title }, vAxis: { format: 'short' } };
var options = { title: title, vAxis: { format: 'short' }};
var chart = new google.visualization.ColumnChart(document.getElementById(div_id));
//var chart = new google.charts.Bar(document.getElementById(div_id));
chart.draw(data, options);
//chart.draw(data, google.charts.Bar.convertOptions(options));
}); };

window.open_modal = function open_modal(url){
$(".modal-content").load(url);
};

function formatS2(cosa) { if (cosa.loading){ return cosa.text; } var markup = cosa.text_fix;
if (cosa.distancia) { markup += " (a "+cosa.distancia+" km)"; } return markup; }
function formatS2_Selection (cosa) { return cosa.text_fix || cosa.text; }
window.select2_ajax = function(target, url){
var select2_id_cliente = $("."+target);
select2_id_cliente.select2({ language: "es", allowClear: true, placeholder: "Seleccione", ajax: {
url: url, dataType: 'json', delay: 250, data: function (params) { return { q: params.term, page: params.page }; },
processResults: function (data, params) { params.page = params.page || 1;
return { results: data.items, pagination: { more: (params.page * 30) < data.total_count } }; }, cache: true },
escapeMarkup: function (markup) { return markup; },
minimumInputLength: 3, templateResult: formatS2, templateSelection: formatS2_Selection
});
};

});

function exitApp() {
if (cordova.platformId == 'android') {
navigator.app.exitApp(); /* Solo Android :( */
} else {
navigator.notification.alert(
'Para salir, pulse 2 veces la tecla Home y arrastre la ventana hacia arriba.',
function(){},
'Salir',
'Entendido'
);
}
}

const push = PushNotification.init({
	android: {
	},
    browser: {
        pushServiceURL: 'http://push.api.phonegap.com/v1/push'
    },
	ios: {
		alert: "true",
		badge: "true",
		sound: "true"
	},
	windows: {}
});

push.on('registration', (data) => {
//data.registrationId
var get_info_device = localStorage.getItem('info_device');
var get_imei = localStorage.getItem('imei');
var get_my_uuid = localStorage.getItem('my_uuid');
var get_Lat = localStorage.getItem('User_Lat');
var get_Lon = localStorage.getItem('User_Lon');
var get_Geo_Aprox = localStorage.getItem('Geo_Aprox');

localStorage.setItem('registrationId', data.registrationId);
window.localStorage.setItem("token_push", JSON.stringify(data));

$.post(url_server+"/tools/app_push.php",{
data: JSON.stringify(data), uuid: get_my_uuid, my_key: my_key, info_device: get_info_device, imei: get_imei,
geo_lat: get_Lat, geo_lon: get_Lon, geo_aprox: get_Geo_Aprox
},
function(data,status){
//alert("Data: " + data + "\nStatus: " + status);
});

});

push.on('notification', (data) => {
	// data.message,
	// data.title,
	// data.count,
	// data.sound,
	// data.image,
	// data.additionalData
alert(JSON.stringify(data));
console.log(JSON.stringify(data));
});

push.on('error', (e) => {
	// e.message
});

// data contains the push payload just like a notification event
push.on('emailGuests', function(data) {
alert('I should email my guests');
});

push.on('snooze', function(data) {
alert('Remind me later');
});

window.force_reload = function force_reload(){
window.location.reload();
};

$(".force_reload").click(function() {
window.location.reload();
});

function forceDownload(data, fileName, type="application/octet-stream") {
  // Create an invisible A element
  const a = document.createElement("a");
  a.style.display = "none";
  document.body.appendChild(a);
  // Set the HREF to a Blob representation of the data to be downloaded
  a.href = window.URL.createObjectURL(
    new Blob([data], { type })
  );
  // Use download attribute to set set desired file name
  a.setAttribute("download", fileName);
  // Trigger the download by simulating click
  a.click();
  // Cleanup
  window.URL.revokeObjectURL(a.href);
  document.body.removeChild(a);
}
