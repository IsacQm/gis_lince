var map = L.map('map', {
    center: [-12.087133578079387, -77.03940673796507],
    zoom: 15,
    minZoom: 9,
    maxZoom: 30,
    maxBounds: [[-12.092506, -77.046225], [-12.077063, -77.023099]]
});

var basemapOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <ahref="http://osm.org/copyright"> OpenStreetMap</a> contributor'
});
basemapOSM.addTo(map);

var bgoogleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{ maxZoom: 20,
subdomains:['mt0','mt1','mt2','mt3'] });
bgoogleSat.addTo(map);

var bgoogleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{ maxZoom: 20,
subdomains:['mt0','mt1','mt2','mt3'] });
bgoogleHybrid.addTo(map);

var pendientes_lince = L.tileLayer.wms("http://localhost:8080/geoserver/web_lince/wms?", {
    layers: "web_lince:pendientes_lince", //gisweb: pendientes de Lince
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
 pendientes_lince.addTo(map);

var centros = L.tileLayer.wms("http://localhost:8080/geoserver/web_lince/wms?", {
    layers: "web_lince:colegios_lince", //gisweb:centros educativos Lince
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
centros.addTo(map);

var curvas_2m = L.tileLayer.wms("http://localhost:8080/geoserver/web_lince/wms?", {
    layers: "web_lince:curvas_2m", //gisweb:curvas_2m Lince
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
 curvas_2m.addTo(map);

 var farmacias_lince = L.tileLayer.wms("http://localhost:8080/geoserver/web_lince/wms?", {
    layers: "web_lince:farmacias_lince", //gisweb: farmacias de Lince
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
 farmacias_lince.addTo(map);

 var grifos_lince = L.tileLayer.wms("http://localhost:8080/geoserver/web_lince/wms?", {
    layers: "web_lince:grifos_lince", //gisweb: grifos de Lince
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
 grifos_lince.addTo(map);

 var hospital_lince = L.tileLayer.wms("http://localhost:8080/geoserver/web_lince/wms?", {
    layers: "web_lince:hospital_lince", //gisweb: hospital de Lince
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
 hospital_lince.addTo(map); 

 var museo_lince = L.tileLayer.wms("http://localhost:8080/geoserver/web_lince/wms?", {
    layers: "web_lince:museo_lince", //gisweb: museos de Lince
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
 museo_lince.addTo(map);  

 

 var baseMaps = {
    "OSM": basemapOSM,
    "Google Satelite": bgoogleSat,
    "Hybrid": bgoogleHybrid
};

var overlayMaps = {
    "Pendientes": pendientes_lince,
    "Curvas de Nivel": curvas_2m,
    "Centros educativos": centros,
    "Farmacias": farmacias_lince,
    "Grifos": grifos_lince,
    "Hospital": hospital_lince,
    "Museo": museo_lince
    
};

L.control.layers(baseMaps, overlayMaps,{
    position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
    collapsed: false // true
}).addTo(map);

L.control.scale({
    imperial: false
  }).addTo(map);
  
