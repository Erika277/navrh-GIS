var wms_layers = [];


        var lyr_Googlesatelite_0 = new ol.layer.Tile({
            'title': 'Google satelite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}
'
            })
        });

        var lyr_GoogleMapsatelite_1 = new ol.layer.Tile({
            'title': 'Google Mapsatelite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}
'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_AM250_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://zbgisws.skgeodesy.sk/amsr_wms/service.svc/get",
    attributions: ' ',
                              params: {
                                "LAYERS": "1",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "AM250",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_AM250_3, 1]);
var lyr_Footprint_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://zbgisws.skgeodesy.sk/amsr_wms/service.svc/get",
    attributions: ' ',
                              params: {
                                "LAYERS": "2",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Footprint",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Footprint_4, 0]);
var lyr_hraniceadmin_5 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://zbgisws.skgeodesy.sk/zbgis_administrativne_hranice_wms_featureinfo/service.svc/get",
    attributions: ' ',
                              params: {
                                "LAYERS": "1",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "hranice admin",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_hraniceadmin_5, 1]);
var lyr_Kraje_6 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://kataster.skgeodesy.sk/eskn/services/NR/kn_wms_norm/MapServer/WmsServer",
    attributions: ' ',
                              params: {
                                "LAYERS": "15",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Kraje",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Kraje_6, 1]);
var lyr_Okresy_7 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://kataster.skgeodesy.sk/eskn/services/NR/kn_wms_norm/MapServer/WmsServer",
    attributions: ' ',
                              params: {
                                "LAYERS": "14",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Okresy",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Okresy_7, 1]);
var lyr_Jaskya_8 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://zbgisws.skgeodesy.sk/zbgis_povrch_wms_featureinfo/service.svc/get",
    attributions: ' ',
                              params: {
                                "LAYERS": "5",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Jaskyňa",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Jaskya_8, 1]);
var lyr_Administrativeboundary_9 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://zbgisws.skgeodesy.sk/inspire_administrative_units_wms/service.svc/get",
    attributions: ' ',
                              params: {
                                "LAYERS": "AU.AdministrativeBoundary",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Administrative boundary",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Administrativeboundary_9, 1]);
var lyr_Obec_10 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://zbgisws.skgeodesy.sk/zbgis_administrativne_hranice_wms_featureinfo/service.svc/get",
    attributions: ' ',
                              params: {
                                "LAYERS": "0",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Obec",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Obec_10, 1]);
var lyr_Boundary_11 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://zbgisws.skgeodesy.sk/amsr_wms/service.svc/get",
    attributions: ' ',
                              params: {
                                "LAYERS": "3",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Boundary",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Boundary_11, 1]);

        var lyr_roadmap_12 = new ol.layer.Tile({
            'title': 'roadmap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}&s=Ga'
            })
        });

        var lyr_terrain_13 = new ol.layer.Tile({
            'title': 'terrain',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}&s=Ga'
            })
        });
var format_povrchovtechnickabanskobjekty_14 = new ol.format.GeoJSON();
var features_povrchovtechnickabanskobjekty_14 = format_povrchovtechnickabanskobjekty_14.readFeatures(json_povrchovtechnickabanskobjekty_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_povrchovtechnickabanskobjekty_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_povrchovtechnickabanskobjekty_14.addFeatures(features_povrchovtechnickabanskobjekty_14);cluster_povrchovtechnickabanskobjekty_14 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_povrchovtechnickabanskobjekty_14
});
var lyr_povrchovtechnickabanskobjekty_14 = new ol.layer.Vector({
                declutter: true,
                source:cluster_povrchovtechnickabanskobjekty_14, 
                style: style_povrchovtechnickabanskobjekty_14,
                interactive: true,
                title: '<img src="styles/legend/povrchovtechnickabanskobjekty_14.png" /> povrchové technické a banské objekty'
            });
var format_Atraktivitageoturizmu2_15 = new ol.format.GeoJSON();
var features_Atraktivitageoturizmu2_15 = format_Atraktivitageoturizmu2_15.readFeatures(json_Atraktivitageoturizmu2_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Atraktivitageoturizmu2_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Atraktivitageoturizmu2_15.addFeatures(features_Atraktivitageoturizmu2_15);cluster_Atraktivitageoturizmu2_15 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Atraktivitageoturizmu2_15
});
var lyr_Atraktivitageoturizmu2_15 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Atraktivitageoturizmu2_15, 
                style: style_Atraktivitageoturizmu2_15,
                interactive: true,
                title: '<img src="styles/legend/Atraktivitageoturizmu2_15.png" /> Atraktivita geoturizmu 2'
            });
var format_Atraktivitageoturizmu_16 = new ol.format.GeoJSON();
var features_Atraktivitageoturizmu_16 = format_Atraktivitageoturizmu_16.readFeatures(json_Atraktivitageoturizmu_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Atraktivitageoturizmu_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Atraktivitageoturizmu_16.addFeatures(features_Atraktivitageoturizmu_16);cluster_Atraktivitageoturizmu_16 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Atraktivitageoturizmu_16
});
var lyr_Atraktivitageoturizmu_16 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Atraktivitageoturizmu_16, 
                style: style_Atraktivitageoturizmu_16,
                interactive: true,
                title: '<img src="styles/legend/Atraktivitageoturizmu_16.png" /> Atraktivita geoturizmu'
            });
var format_mzeagalrie2_17 = new ol.format.GeoJSON();
var features_mzeagalrie2_17 = format_mzeagalrie2_17.readFeatures(json_mzeagalrie2_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mzeagalrie2_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mzeagalrie2_17.addFeatures(features_mzeagalrie2_17);cluster_mzeagalrie2_17 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_mzeagalrie2_17
});
var lyr_mzeagalrie2_17 = new ol.layer.Vector({
                declutter: true,
                source:cluster_mzeagalrie2_17, 
                style: style_mzeagalrie2_17,
                interactive: true,
                title: '<img src="styles/legend/mzeagalrie2_17.png" /> múzeá a galérie 2'
            });
var format_tlne_18 = new ol.format.GeoJSON();
var features_tlne_18 = format_tlne_18.readFeatures(json_tlne_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tlne_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tlne_18.addFeatures(features_tlne_18);cluster_tlne_18 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_tlne_18
});
var lyr_tlne_18 = new ol.layer.Vector({
                declutter: true,
                source:cluster_tlne_18, 
                style: style_tlne_18,
                interactive: true,
                title: '<img src="styles/legend/tlne_18.png" /> štôlne'
            });
var format_prrodnrezervciaaprrodnpamiatka_19 = new ol.format.GeoJSON();
var features_prrodnrezervciaaprrodnpamiatka_19 = format_prrodnrezervciaaprrodnpamiatka_19.readFeatures(json_prrodnrezervciaaprrodnpamiatka_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_prrodnrezervciaaprrodnpamiatka_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_prrodnrezervciaaprrodnpamiatka_19.addFeatures(features_prrodnrezervciaaprrodnpamiatka_19);cluster_prrodnrezervciaaprrodnpamiatka_19 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_prrodnrezervciaaprrodnpamiatka_19
});
var lyr_prrodnrezervciaaprrodnpamiatka_19 = new ol.layer.Vector({
                declutter: true,
                source:cluster_prrodnrezervciaaprrodnpamiatka_19, 
                style: style_prrodnrezervciaaprrodnpamiatka_19,
                interactive: true,
                title: '<img src="styles/legend/prrodnrezervciaaprrodnpamiatka_19.png" /> prírodná rezervácia a prírodná pamiatka'
            });
var format_vyhliadky_20 = new ol.format.GeoJSON();
var features_vyhliadky_20 = format_vyhliadky_20.readFeatures(json_vyhliadky_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vyhliadky_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vyhliadky_20.addFeatures(features_vyhliadky_20);cluster_vyhliadky_20 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_vyhliadky_20
});
var lyr_vyhliadky_20 = new ol.layer.Vector({
                declutter: true,
                source:cluster_vyhliadky_20, 
                style: style_vyhliadky_20,
                interactive: true,
                title: '<img src="styles/legend/vyhliadky_20.png" /> vyhliadky'
            });
var format_piargskyvodohospodrskychodnk_21 = new ol.format.GeoJSON();
var features_piargskyvodohospodrskychodnk_21 = format_piargskyvodohospodrskychodnk_21.readFeatures(json_piargskyvodohospodrskychodnk_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_piargskyvodohospodrskychodnk_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_piargskyvodohospodrskychodnk_21.addFeatures(features_piargskyvodohospodrskychodnk_21);
var lyr_piargskyvodohospodrskychodnk_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_piargskyvodohospodrskychodnk_21, 
                style: style_piargskyvodohospodrskychodnk_21,
                interactive: true,
                title: '<img src="styles/legend/piargskyvodohospodrskychodnk_21.png" /> piargsky vodohospodársky chodník'
            });
var format_piargskyvodohospodrskychodnkzastvky_22 = new ol.format.GeoJSON();
var features_piargskyvodohospodrskychodnkzastvky_22 = format_piargskyvodohospodrskychodnkzastvky_22.readFeatures(json_piargskyvodohospodrskychodnkzastvky_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_piargskyvodohospodrskychodnkzastvky_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_piargskyvodohospodrskychodnkzastvky_22.addFeatures(features_piargskyvodohospodrskychodnkzastvky_22);cluster_piargskyvodohospodrskychodnkzastvky_22 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_piargskyvodohospodrskychodnkzastvky_22
});
var lyr_piargskyvodohospodrskychodnkzastvky_22 = new ol.layer.Vector({
                declutter: true,
                source:cluster_piargskyvodohospodrskychodnkzastvky_22, 
                style: style_piargskyvodohospodrskychodnkzastvky_22,
                interactive: true,
                title: '<img src="styles/legend/piargskyvodohospodrskychodnkzastvky_22.png" /> piargsky vodohospodársky chodník zastávky'
            });
var format_hranicaBgeoparku_23 = new ol.format.GeoJSON();
var features_hranicaBgeoparku_23 = format_hranicaBgeoparku_23.readFeatures(json_hranicaBgeoparku_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hranicaBgeoparku_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hranicaBgeoparku_23.addFeatures(features_hranicaBgeoparku_23);
var lyr_hranicaBgeoparku_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_hranicaBgeoparku_23, 
                style: style_hranicaBgeoparku_23,
                interactive: true,
                title: '<img src="styles/legend/hranicaBgeoparku_23.png" /> hranica BŠ geoparku'
            });
var format_chodnkoekolgipiargskychtajchov_24 = new ol.format.GeoJSON();
var features_chodnkoekolgipiargskychtajchov_24 = format_chodnkoekolgipiargskychtajchov_24.readFeatures(json_chodnkoekolgipiargskychtajchov_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_chodnkoekolgipiargskychtajchov_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_chodnkoekolgipiargskychtajchov_24.addFeatures(features_chodnkoekolgipiargskychtajchov_24);
var lyr_chodnkoekolgipiargskychtajchov_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_chodnkoekolgipiargskychtajchov_24, 
                style: style_chodnkoekolgipiargskychtajchov_24,
                interactive: true,
                title: '<img src="styles/legend/chodnkoekolgipiargskychtajchov_24.png" /> chodník o ekológií piargskych tajchov'
            });
var format_piargskychodnkzastvky_25 = new ol.format.GeoJSON();
var features_piargskychodnkzastvky_25 = format_piargskychodnkzastvky_25.readFeatures(json_piargskychodnkzastvky_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_piargskychodnkzastvky_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_piargskychodnkzastvky_25.addFeatures(features_piargskychodnkzastvky_25);cluster_piargskychodnkzastvky_25 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_piargskychodnkzastvky_25
});
var lyr_piargskychodnkzastvky_25 = new ol.layer.Vector({
                declutter: true,
                source:cluster_piargskychodnkzastvky_25, 
                style: style_piargskychodnkzastvky_25,
                interactive: true,
                title: '<img src="styles/legend/piargskychodnkzastvky_25.png" /> piargsky chodník zastávky'
            });
var format_hradzmokkatiehradisko_26 = new ol.format.GeoJSON();
var features_hradzmokkatiehradisko_26 = format_hradzmokkatiehradisko_26.readFeatures(json_hradzmokkatiehradisko_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hradzmokkatiehradisko_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hradzmokkatiehradisko_26.addFeatures(features_hradzmokkatiehradisko_26);cluster_hradzmokkatiehradisko_26 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_hradzmokkatiehradisko_26
});
var lyr_hradzmokkatiehradisko_26 = new ol.layer.Vector({
                declutter: true,
                source:cluster_hradzmokkatiehradisko_26, 
                style: style_hradzmokkatiehradisko_26,
                interactive: true,
                title: '<img src="styles/legend/hradzmokkatiehradisko_26.png" /> hrad, zámok, kaštieľ, hradisko'
            });
var format_parkoviskparkovacieplochy_27 = new ol.format.GeoJSON();
var features_parkoviskparkovacieplochy_27 = format_parkoviskparkovacieplochy_27.readFeatures(json_parkoviskparkovacieplochy_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parkoviskparkovacieplochy_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parkoviskparkovacieplochy_27.addFeatures(features_parkoviskparkovacieplochy_27);cluster_parkoviskparkovacieplochy_27 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_parkoviskparkovacieplochy_27
});
var lyr_parkoviskparkovacieplochy_27 = new ol.layer.Vector({
                declutter: true,
                source:cluster_parkoviskparkovacieplochy_27, 
                style: style_parkoviskparkovacieplochy_27,
                interactive: true,
                title: '<img src="styles/legend/parkoviskparkovacieplochy_27.png" /> parkoviská, parkovacie plochy'
            });
var format_mzeagalrie_28 = new ol.format.GeoJSON();
var features_mzeagalrie_28 = format_mzeagalrie_28.readFeatures(json_mzeagalrie_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mzeagalrie_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mzeagalrie_28.addFeatures(features_mzeagalrie_28);cluster_mzeagalrie_28 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_mzeagalrie_28
});
var lyr_mzeagalrie_28 = new ol.layer.Vector({
                declutter: true,
                source:cluster_mzeagalrie_28, 
                style: style_mzeagalrie_28,
                interactive: true,
                title: '<img src="styles/legend/mzeagalrie_28.png" /> múzeá a galérie'
            });
var format_ubytovanie_29 = new ol.format.GeoJSON();
var features_ubytovanie_29 = format_ubytovanie_29.readFeatures(json_ubytovanie_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ubytovanie_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ubytovanie_29.addFeatures(features_ubytovanie_29);cluster_ubytovanie_29 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_ubytovanie_29
});
var lyr_ubytovanie_29 = new ol.layer.Vector({
                declutter: true,
                source:cluster_ubytovanie_29, 
                style: style_ubytovanie_29,
                interactive: true,
                title: '<img src="styles/legend/ubytovanie_29.png" /> ubytovanie'
            });
var format_chodnkoekolgiipiargskychtajchov_30 = new ol.format.GeoJSON();
var features_chodnkoekolgiipiargskychtajchov_30 = format_chodnkoekolgiipiargskychtajchov_30.readFeatures(json_chodnkoekolgiipiargskychtajchov_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_chodnkoekolgiipiargskychtajchov_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_chodnkoekolgiipiargskychtajchov_30.addFeatures(features_chodnkoekolgiipiargskychtajchov_30);cluster_chodnkoekolgiipiargskychtajchov_30 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_chodnkoekolgiipiargskychtajchov_30
});
var lyr_chodnkoekolgiipiargskychtajchov_30 = new ol.layer.Vector({
                declutter: true,
                source:cluster_chodnkoekolgiipiargskychtajchov_30, 
                style: style_chodnkoekolgiipiargskychtajchov_30,
                interactive: true,
                title: '<img src="styles/legend/chodnkoekolgiipiargskychtajchov_30.png" /> chodník o ekológii piargskych tajchov'
            });
var format_piargskychodnk_31 = new ol.format.GeoJSON();
var features_piargskychodnk_31 = format_piargskychodnk_31.readFeatures(json_piargskychodnk_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_piargskychodnk_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_piargskychodnk_31.addFeatures(features_piargskychodnk_31);
var lyr_piargskychodnk_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_piargskychodnk_31, 
                style: style_piargskychodnk_31,
                interactive: true,
                title: '<img src="styles/legend/piargskychodnk_31.png" /> piargsky chodník'
            });
var format_Tajchy2_32 = new ol.format.GeoJSON();
var features_Tajchy2_32 = format_Tajchy2_32.readFeatures(json_Tajchy2_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tajchy2_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tajchy2_32.addFeatures(features_Tajchy2_32);
var lyr_Tajchy2_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tajchy2_32, 
                style: style_Tajchy2_32,
                interactive: true,
                title: '<img src="styles/legend/Tajchy2_32.png" /> Tajchy 2'
            });
var format_stravovanie_33 = new ol.format.GeoJSON();
var features_stravovanie_33 = format_stravovanie_33.readFeatures(json_stravovanie_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_stravovanie_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_stravovanie_33.addFeatures(features_stravovanie_33);cluster_stravovanie_33 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_stravovanie_33
});
var lyr_stravovanie_33 = new ol.layer.Vector({
                declutter: true,
                source:cluster_stravovanie_33, 
                style: style_stravovanie_33,
                interactive: true,
                title: '<img src="styles/legend/stravovanie_33.png" /> stravovanie'
            });
var format_achty_34 = new ol.format.GeoJSON();
var features_achty_34 = format_achty_34.readFeatures(json_achty_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_achty_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_achty_34.addFeatures(features_achty_34);cluster_achty_34 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_achty_34
});
var lyr_achty_34 = new ol.layer.Vector({
                declutter: true,
                source:cluster_achty_34, 
                style: style_achty_34,
                interactive: true,
                title: '<img src="styles/legend/achty_34.png" /> šachty'
            });

lyr_Googlesatelite_0.setVisible(true);lyr_GoogleMapsatelite_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_AM250_3.setVisible(true);lyr_Footprint_4.setVisible(true);lyr_hraniceadmin_5.setVisible(true);lyr_Kraje_6.setVisible(true);lyr_Okresy_7.setVisible(true);lyr_Jaskya_8.setVisible(true);lyr_Administrativeboundary_9.setVisible(true);lyr_Obec_10.setVisible(true);lyr_Boundary_11.setVisible(true);lyr_roadmap_12.setVisible(true);lyr_terrain_13.setVisible(true);lyr_povrchovtechnickabanskobjekty_14.setVisible(true);lyr_Atraktivitageoturizmu2_15.setVisible(true);lyr_Atraktivitageoturizmu_16.setVisible(true);lyr_mzeagalrie2_17.setVisible(true);lyr_tlne_18.setVisible(true);lyr_prrodnrezervciaaprrodnpamiatka_19.setVisible(true);lyr_vyhliadky_20.setVisible(true);lyr_piargskyvodohospodrskychodnk_21.setVisible(true);lyr_piargskyvodohospodrskychodnkzastvky_22.setVisible(true);lyr_hranicaBgeoparku_23.setVisible(true);lyr_chodnkoekolgipiargskychtajchov_24.setVisible(true);lyr_piargskychodnkzastvky_25.setVisible(true);lyr_hradzmokkatiehradisko_26.setVisible(true);lyr_parkoviskparkovacieplochy_27.setVisible(true);lyr_mzeagalrie_28.setVisible(true);lyr_ubytovanie_29.setVisible(true);lyr_chodnkoekolgiipiargskychtajchov_30.setVisible(true);lyr_piargskychodnk_31.setVisible(true);lyr_Tajchy2_32.setVisible(true);lyr_stravovanie_33.setVisible(true);lyr_achty_34.setVisible(true);
var layersList = [lyr_Googlesatelite_0,lyr_GoogleMapsatelite_1,lyr_OpenStreetMap_2,lyr_AM250_3,lyr_Footprint_4,lyr_hraniceadmin_5,lyr_Kraje_6,lyr_Okresy_7,lyr_Jaskya_8,lyr_Administrativeboundary_9,lyr_Obec_10,lyr_Boundary_11,lyr_roadmap_12,lyr_terrain_13,lyr_povrchovtechnickabanskobjekty_14,lyr_Atraktivitageoturizmu2_15,lyr_Atraktivitageoturizmu_16,lyr_mzeagalrie2_17,lyr_tlne_18,lyr_prrodnrezervciaaprrodnpamiatka_19,lyr_vyhliadky_20,lyr_piargskyvodohospodrskychodnk_21,lyr_piargskyvodohospodrskychodnkzastvky_22,lyr_hranicaBgeoparku_23,lyr_chodnkoekolgipiargskychtajchov_24,lyr_piargskychodnkzastvky_25,lyr_hradzmokkatiehradisko_26,lyr_parkoviskparkovacieplochy_27,lyr_mzeagalrie_28,lyr_ubytovanie_29,lyr_chodnkoekolgiipiargskychtajchov_30,lyr_piargskychodnk_31,lyr_Tajchy2_32,lyr_stravovanie_33,lyr_achty_34];
lyr_povrchovtechnickabanskobjekty_14.set('fieldAliases', {'x,': 'x,', 'y,': 'y,', 'z,': 'z,', 'Info': 'Info', 'Číslo': 'Číslo', 'Foto': 'Foto', });
lyr_Atraktivitageoturizmu2_15.set('fieldAliases', {'x,': 'x,', 'y,': 'y,', 'z,': 'z,', 'Atraktivita geoturizmu': 'Atraktivita geoturizmu', 'Číslo': 'Číslo', });
lyr_Atraktivitageoturizmu_16.set('fieldAliases', {'x,': 'x,', 'y,': 'y,', 'z,': 'z,', 'Atraktivita geoturizmu': 'Atraktivita geoturizmu', 'Číslo': 'Číslo', });
lyr_mzeagalrie2_17.set('fieldAliases', {'x,': 'x,', 'y,': 'y,', 'y,_1': 'y,_1', 'Múzeá a galérie': 'Múzeá a galérie', 'Číslo': 'Číslo', });
lyr_tlne_18.set('fieldAliases', {'x,': 'x,', 'y,': 'y,', 'z,': 'z,', 'Štôlne': 'Štôlne', 'Číslo': 'Číslo', 'Foto': 'Foto', });
lyr_prrodnrezervciaaprrodnpamiatka_19.set('fieldAliases', {'x,': 'x,', 'y,': 'y,', 'z,': 'z,', 'Info': 'Info', 'Číslo': 'Číslo', });
lyr_vyhliadky_20.set('fieldAliases', {'x,': 'x,', 'y,': 'y,', 'z,': 'z,', 'Info': 'Info', 'Číslo': 'Číslo', 'Foto': 'Foto', });
lyr_piargskyvodohospodrskychodnk_21.set('fieldAliases', {'chodnik': 'chodnik', });
lyr_piargskyvodohospodrskychodnkzastvky_22.set('fieldAliases', {'zastavky': 'zastavky', 'id': 'id', 'Info': 'Info', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_hranicaBgeoparku_23.set('fieldAliases', {'id': 'id', 'hranica b�': 'hranica b�', });
lyr_chodnkoekolgipiargskychtajchov_24.set('fieldAliases', {'id': 'id', 'č.': 'č.', });
lyr_piargskychodnkzastvky_25.set('fieldAliases', {'piargsky': 'piargsky', 'Info': 'Info', });
lyr_hradzmokkatiehradisko_26.set('fieldAliases', {'x,': 'x,', 'y,': 'y,', 'z,': 'z,', 'Info': 'Info', 'Číslo': 'Číslo', 'Foto': 'Foto', });
lyr_parkoviskparkovacieplochy_27.set('fieldAliases', {'x,': 'x,', 'y,': 'y,', 'z,': 'z,', 'Info': 'Info', 'Číslo': 'Číslo', });
lyr_mzeagalrie_28.set('fieldAliases', {'x,': 'x,', 'y,': 'y,', 'y,_1': 'y,_1', 'Múzeá a galérie': 'Múzeá a galérie', 'Číslo': 'Číslo', });
lyr_ubytovanie_29.set('fieldAliases', {'x,': 'x,', 'y,': 'y,', 'z,': 'z,', 'Info': 'Info', 'Číslo': 'Číslo', });
lyr_chodnkoekolgiipiargskychtajchov_30.set('fieldAliases', {'Name': 'Name', 'Zastávka': 'Zastávka', 'Info': 'Info', });
lyr_piargskychodnk_31.set('fieldAliases', {'Piargsky c': 'Piargsky c', });
lyr_Tajchy2_32.set('fieldAliases', {'Name': 'Name', 'GPS': 'GPS', 'ID': 'ID', 'Photo': 'Photo', 'URL': 'URL', });
lyr_stravovanie_33.set('fieldAliases', {'x,': 'x,', 'y,': 'y,', 'z,': 'z,', 'Info': 'Info', 'Číslo': 'Číslo', });
lyr_achty_34.set('fieldAliases', {'x,': 'x,', 'y,': 'y,', 'z,': 'z,', 'Šachty': 'Šachty', 'Číslo': 'Číslo', });
lyr_povrchovtechnickabanskobjekty_14.set('fieldImages', {'x,': 'TextEdit', 'y,': 'TextEdit', 'z,': 'Range', 'Info': 'TextEdit', 'Číslo': 'Range', 'Foto': 'TextEdit', });
lyr_Atraktivitageoturizmu2_15.set('fieldImages', {'x,': 'TextEdit', 'y,': 'TextEdit', 'z,': 'Range', 'Atraktivita geoturizmu': 'TextEdit', 'Číslo': 'Range', });
lyr_Atraktivitageoturizmu_16.set('fieldImages', {'x,': 'TextEdit', 'y,': 'TextEdit', 'z,': 'Range', 'Atraktivita geoturizmu': 'TextEdit', 'Číslo': 'Range', });
lyr_mzeagalrie2_17.set('fieldImages', {'x,': 'TextEdit', 'y,': 'TextEdit', 'y,_1': 'Range', 'Múzeá a galérie': 'TextEdit', 'Číslo': 'Range', });
lyr_tlne_18.set('fieldImages', {'x,': 'TextEdit', 'y,': 'TextEdit', 'z,': 'Range', 'Štôlne': 'TextEdit', 'Číslo': 'Range', 'Foto': 'ExternalResource', });
lyr_prrodnrezervciaaprrodnpamiatka_19.set('fieldImages', {'x,': 'TextEdit', 'y,': 'TextEdit', 'z,': 'Range', 'Info': 'TextEdit', 'Číslo': 'Range', });
lyr_vyhliadky_20.set('fieldImages', {'x,': 'TextEdit', 'y,': 'TextEdit', 'z,': 'Range', 'Info': 'TextEdit', 'Číslo': 'Range', 'Foto': 'TextEdit', });
lyr_piargskyvodohospodrskychodnk_21.set('fieldImages', {'chodnik': 'TextEdit', });
lyr_piargskyvodohospodrskychodnkzastvky_22.set('fieldImages', {'zastavky': 'TextEdit', 'id': 'Range', 'Info': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_hranicaBgeoparku_23.set('fieldImages', {'id': 'TextEdit', 'hranica b�': 'TextEdit', });
lyr_chodnkoekolgipiargskychtajchov_24.set('fieldImages', {'id': 'TextEdit', 'č.': 'TextEdit', });
lyr_piargskychodnkzastvky_25.set('fieldImages', {'piargsky': 'TextEdit', 'Info': 'TextEdit', });
lyr_hradzmokkatiehradisko_26.set('fieldImages', {'x,': 'TextEdit', 'y,': 'TextEdit', 'z,': 'Range', 'Info': 'TextEdit', 'Číslo': 'Range', 'Foto': 'TextEdit', });
lyr_parkoviskparkovacieplochy_27.set('fieldImages', {'x,': 'TextEdit', 'y,': 'TextEdit', 'z,': 'Range', 'Info': 'TextEdit', 'Číslo': 'Range', });
lyr_mzeagalrie_28.set('fieldImages', {'x,': 'TextEdit', 'y,': 'TextEdit', 'y,_1': 'Range', 'Múzeá a galérie': 'TextEdit', 'Číslo': 'Range', });
lyr_ubytovanie_29.set('fieldImages', {'x,': 'TextEdit', 'y,': 'TextEdit', 'z,': 'Range', 'Info': 'TextEdit', 'Číslo': 'Range', });
lyr_chodnkoekolgiipiargskychtajchov_30.set('fieldImages', {'Name': 'TextEdit', 'Zastávka': 'TextEdit', 'Info': 'TextEdit', });
lyr_piargskychodnk_31.set('fieldImages', {'Piargsky c': '', });
lyr_Tajchy2_32.set('fieldImages', {'Name': 'TextEdit', 'GPS': 'TextEdit', 'ID': 'TextEdit', 'Photo': 'TextEdit', 'URL': 'TextEdit', });
lyr_stravovanie_33.set('fieldImages', {'x,': 'TextEdit', 'y,': 'TextEdit', 'z,': 'Range', 'Info': 'TextEdit', 'Číslo': 'Range', });
lyr_achty_34.set('fieldImages', {'x,': 'TextEdit', 'y,': 'TextEdit', 'z,': 'Range', 'Šachty': 'TextEdit', 'Číslo': 'Range', });
lyr_povrchovtechnickabanskobjekty_14.set('fieldLabels', {'x,': 'no label', 'y,': 'no label', 'z,': 'no label', 'Info': 'no label', 'Číslo': 'no label', 'Foto': 'no label', });
lyr_Atraktivitageoturizmu2_15.set('fieldLabels', {'x,': 'no label', 'y,': 'no label', 'z,': 'no label', 'Atraktivita geoturizmu': 'no label', 'Číslo': 'no label', });
lyr_Atraktivitageoturizmu_16.set('fieldLabels', {'x,': 'no label', 'y,': 'no label', 'z,': 'no label', 'Atraktivita geoturizmu': 'no label', 'Číslo': 'no label', });
lyr_mzeagalrie2_17.set('fieldLabels', {'x,': 'no label', 'y,': 'no label', 'y,_1': 'no label', 'Múzeá a galérie': 'no label', 'Číslo': 'no label', });
lyr_tlne_18.set('fieldLabels', {'x,': 'no label', 'y,': 'no label', 'z,': 'no label', 'Štôlne': 'no label', 'Číslo': 'no label', 'Foto': 'no label', });
lyr_prrodnrezervciaaprrodnpamiatka_19.set('fieldLabels', {'x,': 'no label', 'y,': 'no label', 'z,': 'no label', 'Info': 'no label', 'Číslo': 'no label', });
lyr_vyhliadky_20.set('fieldLabels', {'x,': 'no label', 'y,': 'no label', 'z,': 'no label', 'Info': 'no label', 'Číslo': 'no label', 'Foto': 'no label', });
lyr_piargskyvodohospodrskychodnk_21.set('fieldLabels', {'chodnik': 'no label', });
lyr_piargskyvodohospodrskychodnkzastvky_22.set('fieldLabels', {'zastavky': 'no label', 'id': 'no label', 'Info': 'no label', });
lyr_hranicaBgeoparku_23.set('fieldLabels', {'id': 'no label', 'hranica b�': 'no label', });
lyr_chodnkoekolgipiargskychtajchov_24.set('fieldLabels', {'id': 'no label', 'č.': 'no label', });
lyr_piargskychodnkzastvky_25.set('fieldLabels', {'piargsky': 'no label', 'Info': 'no label', });
lyr_hradzmokkatiehradisko_26.set('fieldLabels', {'x,': 'no label', 'y,': 'no label', 'z,': 'no label', 'Info': 'no label', 'Číslo': 'no label', 'Foto': 'no label', });
lyr_parkoviskparkovacieplochy_27.set('fieldLabels', {'x,': 'no label', 'y,': 'no label', 'z,': 'no label', 'Info': 'no label', 'Číslo': 'no label', });
lyr_mzeagalrie_28.set('fieldLabels', {'x,': 'no label', 'y,': 'no label', 'y,_1': 'no label', 'Múzeá a galérie': 'no label', 'Číslo': 'no label', });
lyr_ubytovanie_29.set('fieldLabels', {'x,': 'no label', 'y,': 'no label', 'z,': 'no label', 'Info': 'no label', 'Číslo': 'no label', });
lyr_chodnkoekolgiipiargskychtajchov_30.set('fieldLabels', {'Name': 'no label', 'Zastávka': 'no label', 'Info': 'no label', });
lyr_piargskychodnk_31.set('fieldLabels', {'Piargsky c': 'no label', });
lyr_Tajchy2_32.set('fieldLabels', {'Name': 'no label', 'GPS': 'no label', 'ID': 'no label', 'Photo': 'no label', 'URL': 'no label', });
lyr_stravovanie_33.set('fieldLabels', {'x,': 'no label', 'y,': 'no label', 'z,': 'no label', 'Info': 'no label', 'Číslo': 'no label', });
lyr_achty_34.set('fieldLabels', {'x,': 'no label', 'y,': 'no label', 'z,': 'no label', 'Šachty': 'no label', 'Číslo': 'no label', });
lyr_achty_34.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});