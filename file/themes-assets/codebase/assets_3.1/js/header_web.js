/*
const client_stitch = stitch.Stitch.initializeDefaultAppClient('app_web_historial-ffqpz');
const db_stitch = client_stitch.getServiceClient(stitch.RemoteMongoClient.factory, 'mongodb-atlas').db('app_web');

client_stitch.auth.loginWithCredential(new stitch.AnonymousCredential()).then(() =>
// db.collection('historial').find({owner_id: client.auth.user.id}, { limit: 100}).asArray()
//db.collection('historial').find({}, { limit: 100}).asArray()
function () {
}
).then(docs => {
//console.log("Found docs", docs)
// console.log("[MongoDB Stitch] Connected to Stitch")
}).catch(err => {
console.error(err)
});

//db.collection('historial').updateOne({owner_id: client.auth.user.id}, {$set:{ip:"<?php echo ip(); ?>",user_agent:"<?php echo user_agent(); ?>",fecha_hora:"<?php echo date('m-d-Y H:i:s'); ?>"}},{upsert:true});
var consulta = function () {
var docs_stitch = db_stitch.collection('historial').find({}, { limit: 100}).asArray();
docs_stitch.then(lol=>{
//$(".log").html(lol[0].fecha_hora);
console.log(lol[0].fecha_hora)
});
}; consulta(); */

var websqlp_db = "epsa_landia"; var websqlp = new PouchDB(websqlp_db);
//var remoteDB = new PouchDB('https://templum.serveo.net/epsa_landia');
if (!websqlp.adapter) { websqlp = new PouchDB(websqlp_db);
var display = document.getElementById('pouchdb-display');
display.innerHTML += (websqlp.adapter ? '&#10003; SQLite plugin is supported.<br/>' : '&#10007; SQLite plugin is not supported.<br/>');
}

websqlp.put({
_id: 'mydoc',
title: 'Heroes',
cosas: 'ola k ase'
}, function(err, response) {
  if (err) { return console.log(err); }
  // handle response
});

websqlp.get('mydoc', function(err, doc) {
if (err) { return console.log(err); }
console.log("doc: "+JSON.stringify(doc));
});

websqlp.get('mydoc', function(err, doc) {
  if (err) { return console.log(err); }
  websqlp.put({
    _id: 'mydoc',
    _rev: doc._rev,
    title: "Let's Dance"
  }, function(err, response) {
    if (err) { return console.log(err); }
    // handle response
  });
});

websqlp.find({
selector: {_id: {$gt: null}},
sort: ['_id']
}, function (err, result) {
if (err) { return console.log(err); }
console.log("result: "+JSON.stringify(result));
});

websqlp.changes().on('change', function() {
console.log('Ch-Ch-Changes');
});
//websqlp.replicate(websqlp_db, '<?php echo $url_server; ?>/apps/pouchdb/');
//websqlp.replicate.to(websqlp_db, 'https://templum.serveo.net/');
//websqlp.replicate.to('https://templum.serveo.net/epsa_landia');

/* websqlp.sync(remoteDB, { live: true }).on('change', function (change) {
console.log('Sync Ch-Ch-Changes: '+JSON.stringify(change));
}).on('error', function (err) { console.log('Sync errro :( :'+JSON.stringify(err)); }); */

/* console.log = function(msg){ alert("log: "+msg); };
console.warning = function(msg){ alert("warning: "+msg); };
console.error = function(msg){ alert("error: "+msg); }; */

var Usuario_fix = "<?php echo urls_nominus($IP); ?>";
var Usuario = "<?php echo $Data_Usuario; ?>"; if(Usuario == ""){ Usuario = Usuario_fix; }

var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/rn/g,"n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}

function guid() { function s4() { return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1); } return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4(); }
//var uid = localStorage.getItem('my_uid');
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
var storage_FB = firebase.storage(); var storageRef_FB = storage_FB.ref(); var messaging = firebase.messaging();

jQuery(document).ready(function($) {
//var user_lat; var user_lon; var startPos;

var geo_options = { enableHighAccuracy: true, maximumAge: 30000, timeout: 27000 };
if (navigator.geolocation) {

navigator.geolocation.getCurrentPosition(function(position) { window.startPos = position;
//var watchID = navigator.geolocation.watchPosition(function(position) {

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

if(Lat != ""){ localStorage.setItem("User_Lat", Lat); }
if(Lon != ""){ localStorage.setItem("User_Lon", Lon); }

window.localStorage.setItem("Geo_Aprox", position.coords.accuracy);

$("#User_Lat").val(Lat);
$("#User_Lon").val(Lon);
$(".User_Lat").val(Lat);
$(".User_Lon").val(Lon);
$(".User_LatLon_print").html(Lat+","+Lon);
$(".User_Lat_print").html(Lat);
$(".User_Lon_print").html(Lon);
$(".live_session").load(url_server+"/tools/live_session.php?u=<?php echo $Data_Usuario; ?>&lat="+Lat+"&lon="+Lon);
},
function(error) {
    //alert('Error occurred. Error code: ' + error.code);
    // error.code can be:
    //   0: unknown error
    //   1: permission denied
    //   2: position unavailable (error response from locaton provider)
    //   3: timed out
//alert(JSON.stringify(error));
localStorage.setItem("geo_error", JSON.stringify(error));
}, geo_options);

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
}, 15000);

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

window.addEventListener('load', function(){
function updateOnlineStatus(event) {
var condition = navigator.onLine ? "online" : "offline";
console.log("Event: " + event.type + "; Status: " + condition);
if(condition == "online"){
$(".check_internet").hide('slow');
} else {
$(".check_internet").show('slow');
} }
window.addEventListener('online',  updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);
});

});

function formatS2(cosa) { if (cosa.loading) return cosa.text; var markup = cosa.text_fix; }
function formatS2_Selection (cosa) { return cosa.text_fix || cosa.text; }
window.select2_ajax = function(target, url){
var select2_id_cliente = $("."+target);
select2_id_cliente.select2({ language: "es", allowClear: true, placeholder: "Seleccione", ajax: {
url: url,
dataType: 'json', delay: 250,
data: function (params) { return { q: params.term, page: params.page }; },
processResults: function (data, params) { params.page = params.page || 1;
return { results: data.items, pagination: { more: (params.page * 30) < data.total_count } }; }, cache: true },
escapeMarkup: function (markup) { return markup; },
minimumInputLength: 3, templateResult: formatS2, templateSelection: formatS2_Selection
});
};

function requestPermissionNotif(){ messaging.requestPermission().then(function(){
console.log('Gracias por aceptar las notificaciones :)');
resetToken();
}).catch(function(err) { console.log('No diste permiso de notificarte :(', err); setTokenSentToServer(false); });
}
requestPermissionNotif();

messaging.onTokenRefresh(function() {messaging.getToken().then(function(refreshedToken) {
console.log('Token_Updated');
setTokenSentToServer(false);
sendTokenToServer(refreshedToken);
resetToken();
}).catch(function(err) { console.log('Error_Refresh: ', err); }); });

function isTokenSentToServer(){ return window.localStorage.getItem('sentToServer') == 1; }
function setTokenSentToServer(sent){ window.localStorage.setItem('sentToServer', sent ? 1 : 0); }

function sendTokenToServer(currentToken) {
//console.log('Token: ' + currentToken);
localStorage.setItem('p_t', currentToken);
if (!isTokenSentToServer()){
$(".web_push").load(url_server+"/tools/web_push.php?t="+currentToken+"&uid="+uid+"&id_n="+id_n);
setTokenSentToServer(true); } else {  }
$(".web_push").load(url_server+"/tools/web_push.php?t="+currentToken+"&uid="+uid+"&id_n="+id_n);
}

function resetToken(){
messaging.getToken().then(function(currentToken) { if(currentToken){
sendTokenToServer(currentToken);
} else {console.log('No Instance ID token available :('); setTokenSentToServer(false); }
}).catch(function(err) { setTokenSentToServer(false); console.log('Error :( ', err); });
}

messaging.onMessage(function(payload){ console.log("Mensaje: ", payload); });

function exitApp(){ location = "../../"; }

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
