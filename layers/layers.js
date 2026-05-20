var wms_layers = [];


        var lyr_Positronretina_0 = new ol.layer.Tile({
            'title': 'Positron (retina)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png'
            })
        });
var format_HasilPretest6JalanKotaKediriJalann_Fix_Bisashp_1 = new ol.format.GeoJSON();
var features_HasilPretest6JalanKotaKediriJalann_Fix_Bisashp_1 = format_HasilPretest6JalanKotaKediriJalann_Fix_Bisashp_1.readFeatures(json_HasilPretest6JalanKotaKediriJalann_Fix_Bisashp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HasilPretest6JalanKotaKediriJalann_Fix_Bisashp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HasilPretest6JalanKotaKediriJalann_Fix_Bisashp_1.addFeatures(features_HasilPretest6JalanKotaKediriJalann_Fix_Bisashp_1);
var lyr_HasilPretest6JalanKotaKediriJalann_Fix_Bisashp_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HasilPretest6JalanKotaKediriJalann_Fix_Bisashp_1, 
                style: style_HasilPretest6JalanKotaKediriJalann_Fix_Bisashp_1,
                popuplayertitle: 'Hasil Pretest 6/Jalan Kota Kediri/Jalann_Fix_Bisa.shp',
                interactive: true,
                title: '<img src="styles/legend/HasilPretest6JalanKotaKediriJalann_Fix_Bisashp_1.png" /> Hasil Pretest 6/Jalan Kota Kediri/Jalann_Fix_Bisa.shp'
            });
var format_HasilPretest6AreaTerjangkauAreaKomersialTerjangkau400MClipAreaKomersilshp_2 = new ol.format.GeoJSON();
var features_HasilPretest6AreaTerjangkauAreaKomersialTerjangkau400MClipAreaKomersilshp_2 = format_HasilPretest6AreaTerjangkauAreaKomersialTerjangkau400MClipAreaKomersilshp_2.readFeatures(json_HasilPretest6AreaTerjangkauAreaKomersialTerjangkau400MClipAreaKomersilshp_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HasilPretest6AreaTerjangkauAreaKomersialTerjangkau400MClipAreaKomersilshp_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HasilPretest6AreaTerjangkauAreaKomersialTerjangkau400MClipAreaKomersilshp_2.addFeatures(features_HasilPretest6AreaTerjangkauAreaKomersialTerjangkau400MClipAreaKomersilshp_2);
var lyr_HasilPretest6AreaTerjangkauAreaKomersialTerjangkau400MClipAreaKomersilshp_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HasilPretest6AreaTerjangkauAreaKomersialTerjangkau400MClipAreaKomersilshp_2, 
                style: style_HasilPretest6AreaTerjangkauAreaKomersialTerjangkau400MClipAreaKomersilshp_2,
                popuplayertitle: 'Hasil Pretest 6/Area Terjangkau/Area Komersial Terjangkau (400M)/Clip Area Komersil.shp',
                interactive: true,
                title: '<img src="styles/legend/HasilPretest6AreaTerjangkauAreaKomersialTerjangkau400MClipAreaKomersilshp_2.png" /> Hasil Pretest 6/Area Terjangkau/Area Komersial Terjangkau (400M)/Clip Area Komersil.shp'
            });
var format_HasilPretest6AreaTerjangkauAreaPerumahanTerjangkau800MClipAreaPerumahanshp_3 = new ol.format.GeoJSON();
var features_HasilPretest6AreaTerjangkauAreaPerumahanTerjangkau800MClipAreaPerumahanshp_3 = format_HasilPretest6AreaTerjangkauAreaPerumahanTerjangkau800MClipAreaPerumahanshp_3.readFeatures(json_HasilPretest6AreaTerjangkauAreaPerumahanTerjangkau800MClipAreaPerumahanshp_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HasilPretest6AreaTerjangkauAreaPerumahanTerjangkau800MClipAreaPerumahanshp_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HasilPretest6AreaTerjangkauAreaPerumahanTerjangkau800MClipAreaPerumahanshp_3.addFeatures(features_HasilPretest6AreaTerjangkauAreaPerumahanTerjangkau800MClipAreaPerumahanshp_3);
var lyr_HasilPretest6AreaTerjangkauAreaPerumahanTerjangkau800MClipAreaPerumahanshp_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HasilPretest6AreaTerjangkauAreaPerumahanTerjangkau800MClipAreaPerumahanshp_3, 
                style: style_HasilPretest6AreaTerjangkauAreaPerumahanTerjangkau800MClipAreaPerumahanshp_3,
                popuplayertitle: 'Hasil Pretest 6/Area Terjangkau/Area Perumahan Terjangkau (800M)/Clip Area Perumahan.shp',
                interactive: true,
                title: '<img src="styles/legend/HasilPretest6AreaTerjangkauAreaPerumahanTerjangkau800MClipAreaPerumahanshp_3.png" /> Hasil Pretest 6/Area Terjangkau/Area Perumahan Terjangkau (800M)/Clip Area Perumahan.shp'
            });
var format_HasilPretest6AreaTerjangkauAreaPublikTerjangkau400MClipAreaPublikshp_4 = new ol.format.GeoJSON();
var features_HasilPretest6AreaTerjangkauAreaPublikTerjangkau400MClipAreaPublikshp_4 = format_HasilPretest6AreaTerjangkauAreaPublikTerjangkau400MClipAreaPublikshp_4.readFeatures(json_HasilPretest6AreaTerjangkauAreaPublikTerjangkau400MClipAreaPublikshp_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HasilPretest6AreaTerjangkauAreaPublikTerjangkau400MClipAreaPublikshp_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HasilPretest6AreaTerjangkauAreaPublikTerjangkau400MClipAreaPublikshp_4.addFeatures(features_HasilPretest6AreaTerjangkauAreaPublikTerjangkau400MClipAreaPublikshp_4);
var lyr_HasilPretest6AreaTerjangkauAreaPublikTerjangkau400MClipAreaPublikshp_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HasilPretest6AreaTerjangkauAreaPublikTerjangkau400MClipAreaPublikshp_4, 
                style: style_HasilPretest6AreaTerjangkauAreaPublikTerjangkau400MClipAreaPublikshp_4,
                popuplayertitle: 'Hasil Pretest 6/Area Terjangkau/Area Publik Terjangkau (400M)/Clip Area Publik.shp',
                interactive: true,
                title: '<img src="styles/legend/HasilPretest6AreaTerjangkauAreaPublikTerjangkau400MClipAreaPublikshp_4.png" /> Hasil Pretest 6/Area Terjangkau/Area Publik Terjangkau (400M)/Clip Area Publik.shp'
            });
var format_HasilPretest6HalteKotaKediriHalte_Fixbisashp_5 = new ol.format.GeoJSON();
var features_HasilPretest6HalteKotaKediriHalte_Fixbisashp_5 = format_HasilPretest6HalteKotaKediriHalte_Fixbisashp_5.readFeatures(json_HasilPretest6HalteKotaKediriHalte_Fixbisashp_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HasilPretest6HalteKotaKediriHalte_Fixbisashp_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HasilPretest6HalteKotaKediriHalte_Fixbisashp_5.addFeatures(features_HasilPretest6HalteKotaKediriHalte_Fixbisashp_5);
var lyr_HasilPretest6HalteKotaKediriHalte_Fixbisashp_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HasilPretest6HalteKotaKediriHalte_Fixbisashp_5, 
                style: style_HasilPretest6HalteKotaKediriHalte_Fixbisashp_5,
                popuplayertitle: 'Hasil Pretest 6/Halte Kota Kediri/Halte_Fix bisa.shp',
                interactive: true,
    title: 'Hasil Pretest 6/Halte Kota Kediri/Halte_Fix bisa.shp<br />\
    <img src="styles/legend/HasilPretest6HalteKotaKediriHalte_Fixbisashp_5_0.png" /> Halte Ahmad Dahlan<br />\
    <img src="styles/legend/HasilPretest6HalteKotaKediriHalte_Fixbisashp_5_1.png" /> Halte Imam Bonjol<br />\
    <img src="styles/legend/HasilPretest6HalteKotaKediriHalte_Fixbisashp_5_2.png" /> Halte Permata Hijau<br />\
    <img src="styles/legend/HasilPretest6HalteKotaKediriHalte_Fixbisashp_5_3.png" /> Halte Semampir<br />\
    <img src="styles/legend/HasilPretest6HalteKotaKediriHalte_Fixbisashp_5_4.png" /> Halte Semeru<br />' });

lyr_Positronretina_0.setVisible(true);lyr_HasilPretest6JalanKotaKediriJalann_Fix_Bisashp_1.setVisible(true);lyr_HasilPretest6AreaTerjangkauAreaKomersialTerjangkau400MClipAreaKomersilshp_2.setVisible(true);lyr_HasilPretest6AreaTerjangkauAreaPerumahanTerjangkau800MClipAreaPerumahanshp_3.setVisible(true);lyr_HasilPretest6AreaTerjangkauAreaPublikTerjangkau400MClipAreaPublikshp_4.setVisible(true);lyr_HasilPretest6HalteKotaKediriHalte_Fixbisashp_5.setVisible(true);
var layersList = [lyr_Positronretina_0,lyr_HasilPretest6JalanKotaKediriJalann_Fix_Bisashp_1,lyr_HasilPretest6AreaTerjangkauAreaKomersialTerjangkau400MClipAreaKomersilshp_2,lyr_HasilPretest6AreaTerjangkauAreaPerumahanTerjangkau800MClipAreaPerumahanshp_3,lyr_HasilPretest6AreaTerjangkauAreaPublikTerjangkau400MClipAreaPublikshp_4,lyr_HasilPretest6HalteKotaKediriHalte_Fixbisashp_5];
lyr_HasilPretest6JalanKotaKediriJalann_Fix_Bisashp_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Klasifikas': 'Klasifikas', 'ORDE01': 'ORDE01', 'ORDE02': 'ORDE02', 'ORDE03': 'ORDE03', 'ORDE04': 'ORDE04', 'JNSRSR': 'JNSRSR', 'STSJRN': 'STSJRN', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'Nama Jalan': 'Nama Jalan', 'SBDATA': 'SBDATA', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Le_1': 'Shape_Le_1', });
lyr_HasilPretest6AreaTerjangkauAreaKomersialTerjangkau400MClipAreaKomersilshp_2.set('fieldAliases', {'Zona': 'Zona', 'OBJECTID': 'OBJECTID', 'Nama Halte': 'Nama Halte', 'REMARK': 'REMARK', 'type': 'type', 'start': 'start', 'Jangkauan ': 'Jangkauan ', 'Luas (M2)': 'Luas (M2)', 'Luas Total': 'Luas Total', 'Persentase': 'Persentase', });
lyr_HasilPretest6AreaTerjangkauAreaPerumahanTerjangkau800MClipAreaPerumahanshp_3.set('fieldAliases', {'NAMZON': 'NAMZON', 'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'type': 'type', 'start': 'start', 'Jangkauan': 'Jangkauan', 'LuasM2': 'LuasM2', 'LuasAllM2': 'LuasAllM2', 'Persentase': 'Persentase', });
lyr_HasilPretest6AreaTerjangkauAreaPublikTerjangkau400MClipAreaPublikshp_4.set('fieldAliases', {'Zona': 'Zona', 'OBJECTID': 'OBJECTID', 'Nama Halte': 'Nama Halte', 'REMARK': 'REMARK', 'type': 'type', 'start': 'start', 'Jangkauan ': 'Jangkauan ', 'Luas (M2)': 'Luas (M2)', 'Luas Total': 'Luas Total', 'Persentase': 'Persentase', });
lyr_HasilPretest6HalteKotaKediriHalte_Fixbisashp_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Nama Halte': 'Nama Halte', 'Jenis': 'Jenis', });
lyr_HasilPretest6JalanKotaKediriJalann_Fix_Bisashp_1.set('fieldImages', {'OBJECTID': '', 'Klasifikas': '', 'ORDE01': '', 'ORDE02': '', 'ORDE03': '', 'ORDE04': '', 'JNSRSR': '', 'STSJRN': '', 'WADMPR': '', 'WADMKK': '', 'Nama Jalan': '', 'SBDATA': '', 'SHAPE_Leng': '', 'Shape_Le_1': '', });
lyr_HasilPretest6AreaTerjangkauAreaKomersialTerjangkau400MClipAreaKomersilshp_2.set('fieldImages', {'Zona': '', 'OBJECTID': '', 'Nama Halte': '', 'REMARK': '', 'type': '', 'start': '', 'Jangkauan ': '', 'Luas (M2)': '', 'Luas Total': '', 'Persentase': '', });
lyr_HasilPretest6AreaTerjangkauAreaPerumahanTerjangkau800MClipAreaPerumahanshp_3.set('fieldImages', {'NAMZON': '', 'OBJECTID': '', 'Name': '', 'REMARK': '', 'type': '', 'start': '', 'Jangkauan': '', 'LuasM2': '', 'LuasAllM2': '', 'Persentase': '', });
lyr_HasilPretest6AreaTerjangkauAreaPublikTerjangkau400MClipAreaPublikshp_4.set('fieldImages', {'Zona': '', 'OBJECTID': '', 'Nama Halte': '', 'REMARK': '', 'type': '', 'start': '', 'Jangkauan ': '', 'Luas (M2)': '', 'Luas Total': '', 'Persentase': '', });
lyr_HasilPretest6HalteKotaKediriHalte_Fixbisashp_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'Nama Halte': 'TextEdit', 'Jenis': 'TextEdit', });
lyr_HasilPretest6JalanKotaKediriJalann_Fix_Bisashp_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'Klasifikas': 'inline label - visible with data', 'ORDE01': 'hidden field', 'ORDE02': 'hidden field', 'ORDE03': 'hidden field', 'ORDE04': 'hidden field', 'JNSRSR': 'hidden field', 'STSJRN': 'hidden field', 'WADMPR': 'hidden field', 'WADMKK': 'hidden field', 'Nama Jalan': 'inline label - visible with data', 'SBDATA': 'hidden field', 'SHAPE_Leng': 'hidden field', 'Shape_Le_1': 'hidden field', });
lyr_HasilPretest6AreaTerjangkauAreaKomersialTerjangkau400MClipAreaKomersilshp_2.set('fieldLabels', {'Zona': 'hidden field', 'OBJECTID': 'hidden field', 'Nama Halte': 'inline label - visible with data', 'REMARK': 'hidden field', 'type': 'hidden field', 'start': 'hidden field', 'Jangkauan ': 'hidden field', 'Luas (M2)': 'inline label - visible with data', 'Luas Total': 'hidden field', 'Persentase': 'hidden field', });
lyr_HasilPretest6AreaTerjangkauAreaPerumahanTerjangkau800MClipAreaPerumahanshp_3.set('fieldLabels', {'NAMZON': 'hidden field', 'OBJECTID': 'hidden field', 'Name': 'inline label - visible with data', 'REMARK': 'hidden field', 'type': 'hidden field', 'start': 'hidden field', 'Jangkauan': 'hidden field', 'LuasM2': 'inline label - visible with data', 'LuasAllM2': 'hidden field', 'Persentase': 'hidden field', });
lyr_HasilPretest6AreaTerjangkauAreaPublikTerjangkau400MClipAreaPublikshp_4.set('fieldLabels', {'Zona': 'hidden field', 'OBJECTID': 'hidden field', 'Nama Halte': 'inline label - visible with data', 'REMARK': 'hidden field', 'type': 'hidden field', 'start': 'hidden field', 'Jangkauan ': 'hidden field', 'Luas (M2)': 'inline label - visible with data', 'Luas Total': 'hidden field', 'Persentase': 'hidden field', });
lyr_HasilPretest6HalteKotaKediriHalte_Fixbisashp_5.set('fieldLabels', {'OBJECTID': 'hidden field', 'Nama Halte': 'inline label - visible with data', 'Jenis': 'hidden field', });
lyr_HasilPretest6HalteKotaKediriHalte_Fixbisashp_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});