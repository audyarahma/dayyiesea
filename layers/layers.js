var wms_layers = [];

var format_Kradenan_Kedungtuban_Cepu_0 = new ol.format.GeoJSON();
var features_Kradenan_Kedungtuban_Cepu_0 = format_Kradenan_Kedungtuban_Cepu_0.readFeatures(json_Kradenan_Kedungtuban_Cepu_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kradenan_Kedungtuban_Cepu_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kradenan_Kedungtuban_Cepu_0.addFeatures(features_Kradenan_Kedungtuban_Cepu_0);
var lyr_Kradenan_Kedungtuban_Cepu_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kradenan_Kedungtuban_Cepu_0, 
                style: style_Kradenan_Kedungtuban_Cepu_0,
                popuplayertitle: 'Kradenan_Kedungtuban_Cepu',
                interactive: true,
                title: '<img src="styles/legend/Kradenan_Kedungtuban_Cepu_0.png" /> Kradenan_Kedungtuban_Cepu'
            });

lyr_Kradenan_Kedungtuban_Cepu_0.setVisible(true);
var layersList = [lyr_Kradenan_Kedungtuban_Cepu_0];
lyr_Kradenan_Kedungtuban_Cepu_0.set('fieldAliases', {'LANDUSE': 'LANDUSE', 'SUMBER': 'SUMBER', 'TAHUN': 'TAHUN', 'LUAS': 'LUAS', });
lyr_Kradenan_Kedungtuban_Cepu_0.set('fieldImages', {'LANDUSE': '', 'SUMBER': '', 'TAHUN': '', 'LUAS': '', });
lyr_Kradenan_Kedungtuban_Cepu_0.set('fieldLabels', {'LANDUSE': 'no label', 'SUMBER': 'no label', 'TAHUN': 'no label', 'LUAS': 'no label', });
lyr_Kradenan_Kedungtuban_Cepu_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});