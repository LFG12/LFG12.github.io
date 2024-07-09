
// 谷歌街道
var GoogleNormalMap = L.tileLayer.chinaProvider('Google.Normal.Map', {
    maxZoom: 23,
    minZoom: 0
}),
    // 地形
    GoogleTerrainMap = L.tileLayer.chinaProvider('Google.Terrain.Map', {
        maxZoom: 23,
        minZoom: 0
    }),
    GoogleTerrainAnnotion = L.tileLayer.chinaProvider('Google.Terrain.Annotion', {
        maxZoom: 23,
        minZoom: 0
    }),
    // 卫星
    GoogleSatelliteMap = L.tileLayer.chinaProvider('Google.Satellite.Map', {
        maxZoom: 23,
        minZoom: 0
    }),
    GoogleSatelliteAnnotion = L.tileLayer.chinaProvider('Google.Satellite.Annotion', {
        maxZoom: 23,
        minZoom: 0
    });

// 高德街道
var GaoDeNormalMap = L.tileLayer.chinaProvider('GaoDe.Normal.Map', {
    maxZoom: 18,
    minZoom: 3
}),
    // 卫星
    GaoDeSatelliteMap = L.tileLayer.chinaProvider('GaoDe.Satellite.Map', {
        maxZoom: 18,
        minZoom: 0
    }),
    GaoDeSatelliteAnnotion = L.tileLayer.chinaProvider('GaoDe.Satellite.Annotion', {
        maxZoom: 18,
        minZoom: 0
    });

// Arcgis街道
var ArcgisNormalMap = L.tileLayer.chinaProvider('Arcgis.Normal.Map', {
    maxZoom: 18,
    minZoom: 0
}),
    // 卫星
    ArcgisSatelliteMap = L.tileLayer.chinaProvider('Arcgis.Satellite.Map', {
        maxZoom: 18,
        minZoom: 0
    }),
    ArcgisSatelliteAnnotion = L.tileLayer.chinaProvider('Arcgis.Satellite.Annotion', {
        maxZoom: 18,
        minZoom: 0
    });

// Open街道
var OpenNormalMap = L.tileLayer.chinaProvider('Open.Normal.Map', {
    maxZoom: 23,
    minZoom: 0,
    id: 'mapbox.streets'
});


var google_streets = L.layerGroup([GoogleNormalMap]),
    google_terrain = L.layerGroup([GoogleTerrainMap, GoogleTerrainAnnotion]),
    google_satellite = L.layerGroup([GoogleSatelliteMap]),
    google_hybrid = L.layerGroup([GoogleSatelliteMap, GoogleSatelliteAnnotion]);

var gaode_streets = L.layerGroup([GaoDeNormalMap]),
    gaode_satellite = L.layerGroup([GaoDeSatelliteMap]),
    gaode_hybrid = L.layerGroup([GaoDeSatelliteMap, GaoDeSatelliteAnnotion]);

var arcgis_streets = L.layerGroup([ArcgisNormalMap]),
    arcgis_satellite = L.layerGroup([ArcgisSatelliteMap]),
    arcgis_hybrid = L.layerGroup([ArcgisSatelliteMap, ArcgisSatelliteAnnotion]);

var open_streets = L.layerGroup([OpenNormalMap]);

var baseLayers = {
    "高德地图(街道)": gaode_streets,
    "高德地图(卫星)": gaode_satellite,
    "高德地图(混合)": gaode_hybrid,
    "Arcgis(卫星)": arcgis_satellite,
    "Arcgis(街道)": arcgis_streets,
    "Arcgis(混合)": arcgis_hybrid,
    "谷歌地图(街道)": google_streets,
    "谷歌地图(地形)": google_terrain,
    "谷歌地图(卫星)": google_satellite,
    "谷歌地图(混合)": google_hybrid,
    "OpenMap(街道)": open_streets
};

var overlayLayers = {};


var map = L.map("map", {
    center: [30.54, 114.29],
    zoom: 9,
    layers: [gaode_streets],
    zoomControl: true,
    worldCopyJump: true,
    zoomSnap: 0.5,
    zoomDelta: 0.5,
    wheelPxPerZoomLevel: 120
});

L.control.layers(baseLayers).addTo(map);