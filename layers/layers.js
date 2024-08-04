var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_PUNO_1 = new ol.format.GeoJSON();
var features_PUNO_1 = format_PUNO_1.readFeatures(json_PUNO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUNO_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUNO_1.addFeatures(features_PUNO_1);
var lyr_PUNO_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PUNO_1, 
                style: style_PUNO_1,
                popuplayertitle: "PUNO",
                interactive: true,
                title: '<img src="styles/legend/PUNO_1.png" /> PUNO'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_PUNO_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_PUNO_1];
lyr_PUNO_1.set('fieldAliases', {'LOCALIDAD': 'LOCALIDAD', 'ESTE': 'ESTE', 'NORTE': 'NORTE', });
lyr_PUNO_1.set('fieldImages', {'LOCALIDAD': '', 'ESTE': '', 'NORTE': '', });
lyr_PUNO_1.set('fieldLabels', {'LOCALIDAD': 'inline label - always visible', 'ESTE': 'inline label - always visible', 'NORTE': 'inline label - always visible', });
lyr_PUNO_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});