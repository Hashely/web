var wms_layers = [];

var format_HOSP_0 = new ol.format.GeoJSON();
var features_HOSP_0 = format_HOSP_0.readFeatures(json_HOSP_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HOSP_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HOSP_0.addFeatures(features_HOSP_0);
var lyr_HOSP_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HOSP_0, 
                style: style_HOSP_0,
                interactive: true,
                title: '<img src="styles/legend/HOSP_0.png" /> HOSP'
            });
var format_HOT_1 = new ol.format.GeoJSON();
var features_HOT_1 = format_HOT_1.readFeatures(json_HOT_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HOT_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HOT_1.addFeatures(features_HOT_1);
var lyr_HOT_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HOT_1, 
                style: style_HOT_1,
                interactive: true,
                title: '<img src="styles/legend/HOT_1.png" /> HOT'
            });
var format_RES_2 = new ol.format.GeoJSON();
var features_RES_2 = format_RES_2.readFeatures(json_RES_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RES_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RES_2.addFeatures(features_RES_2);
var lyr_RES_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RES_2, 
                style: style_RES_2,
                interactive: true,
                title: '<img src="styles/legend/RES_2.png" /> RES'
            });
var format_ROAD_3 = new ol.format.GeoJSON();
var features_ROAD_3 = format_ROAD_3.readFeatures(json_ROAD_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ROAD_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ROAD_3.addFeatures(features_ROAD_3);
var lyr_ROAD_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ROAD_3, 
                style: style_ROAD_3,
                interactive: true,
                title: '<img src="styles/legend/ROAD_3.png" /> ROAD'
            });
var format_TOUR_4 = new ol.format.GeoJSON();
var features_TOUR_4 = format_TOUR_4.readFeatures(json_TOUR_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TOUR_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TOUR_4.addFeatures(features_TOUR_4);
var lyr_TOUR_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TOUR_4, 
                style: style_TOUR_4,
                interactive: true,
                title: '<img src="styles/legend/TOUR_4.png" /> TOUR'
            });
var format_Boundary1_5 = new ol.format.GeoJSON();
var features_Boundary1_5 = format_Boundary1_5.readFeatures(json_Boundary1_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Boundary1_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Boundary1_5.addFeatures(features_Boundary1_5);
var lyr_Boundary1_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Boundary1_5, 
                style: style_Boundary1_5,
                interactive: true,
                title: '<img src="styles/legend/Boundary1_5.png" /> Boundary1'
            });

lyr_HOSP_0.setVisible(true);lyr_HOT_1.setVisible(true);lyr_RES_2.setVisible(true);lyr_ROAD_3.setVisible(true);lyr_TOUR_4.setVisible(true);lyr_Boundary1_5.setVisible(true);
var layersList = [lyr_HOSP_0,lyr_HOT_1,lyr_RES_2,lyr_ROAD_3,lyr_TOUR_4,lyr_Boundary1_5];
lyr_HOSP_0.set('fieldAliases', {'Name': 'Name', 'State': 'State', 'LGA': 'LGA', 'Hospital': 'Hospital', 'Easing': 'Easing', 'Northing': 'Northing', });
lyr_HOT_1.set('fieldAliases', {'Name': 'Name', 'State': 'State', 'LGAs': 'LGAs', 'Hotels': 'Hotels', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_RES_2.set('fieldAliases', {'Name': 'Name', 'State': 'State', 'LGA': 'LGA', 'Restaurant': 'Restaurant', 'Field5': 'Field5', 'Field6': 'Field6', });
lyr_ROAD_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'name': 'name', 'Shape_Leng': 'Shape_Leng', });
lyr_TOUR_4.set('fieldAliases', {'name': 'name', 'state': 'state', 'lga': 'lga', 'location': 'location', 'acess': 'acess', 'easting': 'easting', 'northing': 'northing', });
lyr_Boundary1_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_HOSP_0.set('fieldImages', {'Name': 'TextEdit', 'State': 'TextEdit', 'LGA': 'TextEdit', 'Hospital': 'TextEdit', 'Easing': 'TextEdit', 'Northing': 'TextEdit', });
lyr_HOT_1.set('fieldImages', {'Name': 'TextEdit', 'State': 'TextEdit', 'LGAs': 'TextEdit', 'Hotels': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_RES_2.set('fieldImages', {'Name': 'TextEdit', 'State': 'TextEdit', 'LGA': 'TextEdit', 'Restaurant': 'TextEdit', 'Field5': 'TextEdit', 'Field6': 'TextEdit', });
lyr_ROAD_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'name': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_TOUR_4.set('fieldImages', {'name': 'TextEdit', 'state': 'TextEdit', 'lga': 'TextEdit', 'location': 'TextEdit', 'acess': 'TextEdit', 'easting': 'TextEdit', 'northing': 'TextEdit', });
lyr_Boundary1_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_HOSP_0.set('fieldLabels', {'Name': 'no label', 'State': 'no label', 'LGA': 'no label', 'Hospital': 'header label', 'Easing': 'no label', 'Northing': 'no label', });
lyr_HOT_1.set('fieldLabels', {'Name': 'no label', 'State': 'no label', 'LGAs': 'no label', 'Hotels': 'header label', 'Easting': 'no label', 'Northing': 'no label', });
lyr_RES_2.set('fieldLabels', {'Name': 'no label', 'State': 'no label', 'LGA': 'no label', 'Restaurant': 'header label', 'Field5': 'no label', 'Field6': 'no label', });
lyr_ROAD_3.set('fieldLabels', {'OBJECTID': 'no label', 'name': 'header label', 'Shape_Leng': 'no label', });
lyr_TOUR_4.set('fieldLabels', {'name': 'header label', 'state': 'no label', 'lga': 'no label', 'location': 'no label', 'acess': 'no label', 'easting': 'no label', 'northing': 'no label', });
lyr_Boundary1_5.set('fieldLabels', {'OBJECTID': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Boundary1_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});