export let data=
{
    "stopVisualization": {
        "12": {
            "view": "grid"
        },
        "5": {
            "view": "list"
        },
        "6": {
            "view": "list"
        },
        "10": {
            "view": "list"
        },
        "17": {
            "view": "list"
        }
    },
    "elements": {
        "trains": {
            "view": "list",
            "label": "menu_real_time_train",
            "hasMap": true,
            "markerIcon": "ic_train",
            "transportType": "TRAIN",
            "icon": "ic_train",
            "list": [
                {
                    "agencyId": "5",
                    "color": "#cd251c",
                    "routes": [
                        {
                            "routeId": "BV_R1_G",
                            "routeSymId": "BV_R1_G",
                            "title": "Bolzano - Verona",
                            "color": "#cd251c",
                            "showTrips": true
                        },
                        {
                            "routeId": "BV_R1_R",
                            "routeSymId": "BV_R1_R",
                            "title": "Verona - Bolzano",
                            "color": "#cd251c",
                            "showTrips": true
                        }
                    ]
                },
                {
                    "agencyId": "6",
                    "color": "#cd251c",
                    "routes": [
                        {
                            "routeId": "TB_R2_G",
                            "routeSymId": "TB_R2_G",
                            "title": "Trento - Bassano D.G.",
                            "color": "#cd251c",
                            "showTrips": true
                        },
                        {
                            "routeId": "TB_R2_R",
                            "routeSymId": "TB_R2_R",
                            "title": "Bassano D.G. - Trento",
                            "color": "#cd251c",
                            "showTrips": true
                        }
                    ]
                },
                {
                    "agencyId": "10",
                    "color": "#cd251c",
                    "routes": [
                        {
                            "routeId": "555",
                            "routeSymId": "555",
                            "color": "#cd251c",
                            "title": "Trento - Malé"
                        },
                        {
                            "routeId": "556",
                            "routeSymId": "556",
                            "color": "#cd251c",
                            "title": "Malé - Trento"
                        }
                    ]
                }
            ]
        },
        "extraurbano": {
            "view": "list",
            "label": "menu_real_time_bus_suburban",
            "hasMap": true,
            "markerIcon": "ic_extraurbanBus",
            "transportType": "BUSSUBURBAN",
            "icon": "ic_extraurban-bus",
            "list": [
                {
                    "agencyId": "17",
                    "hasMap": true,
                    "groups": [
                        {
                            "label": "301",
                            "title": "301 - TRENTO-BESENELLO-CALLIANO-ROVERETO",
                            "color": "#fcbf0e",
                            "routes": [
                                {
                                    "routeId": "110_17_0",
                                    "routeSymId": "301A",
                                    "title": "TRENTO-BESENELLO-CALLIANO-ROVERETO",
                                    "label": "301"
                                },
                                {
                                    "routeId": "110_17_1",
                                    "routeSymId": "301R",
                                    "title": "ROVERETO-CALLIANO-BESENELLO-TRENTO",
                                    "label": "301"
                                }
                            ]
                        },
                        {
                            "label": "302",
                            "title": "302 - TRENTO-RAVINA-MATTARELLO-ALDENO-GARNIGA TERME",
                            "color": "#fcbf0e",
                            "routes": [
                                {
                                    "routeId": "181_17_0",
                                    "routeSymId": "302A",
                                    "title": "TRENTO-RAVINA-MATTARELLO-ALDENO-GARNIGA TERME",
                                    "label": "302"
                                },
                                {
                                    "routeId": "181_17_1",
                                    "routeSymId": "302R",
                                    "title": "GARNIGA TERME-ALDENO-MATTARELLO-RAVINA-TRENTO",
                                    "label": "302"
                                }
                            ]
                        },
                        {
                            "label": "303",
                            "title": "303 - TRENTO-V.VATTARO-CARBONARE-LAVARONE-LUSERNA",
                            "color": "#fcbf0e",
                            "routes": [
                                {
                                    "routeId": "186_17_0",
                                    "routeSymId": "303A",
                                    "title": "TRENTO-V.VATTARO-CARBONARE-LAVARONE-LUSERNA",
                                    "label": "303"
                                },
                                {
                                    "routeId": "186_17_1",
                                    "routeSymId": "303R",
                                    "title": "LUSERNA-LAVARONE-CARBONARE-V.VATTARO-TRENTO",
                                    "label": "303"
                                }
                            ]
                        },
                        {
                            "label": "305",
                            "title": "305 - ROVERETO-MORI-BRENTONICO-SACCONE",
                            "color": "#fcbf0e",
                            "routes": [
                                {
                                    "routeId": "231_17_0",
                                    "routeSymId": "305A",
                                    "title": "ROVERETO-MORI-BRENTONICO-SACCONE",
                                    "label": "305"
                                },
                                {
                                    "routeId": "231_17_1",
                                    "routeSymId": "305R",
                                    "title": "SACCONE-BRENTONICO-MORI-ROVERETO",
                                    "label": "305"
                                }
                            ]
                        },
                        {
                            "label": "306",
                            "title": "306 - ROVERETO-CALLIANO-FOLGARIA-LAVARONE",
                            "color": "#fcbf0e",
                            "routes": [
                                {
                                    "routeId": "196_17_0",
                                    "routeSymId": "306A",
                                    "title": "ROVERETO-CALLIANO-FOLGARIA-LAVARONE",
                                    "label": "306"
                                },
                                {
                                    "routeId": "196_17_1",
                                    "routeSymId": "306R",
                                    "title": "LAVARONE-FOLGARIA-CALLIANO-ROVERETO",
                                    "label": "306"
                                }
                            ]
                        },
                        {
                            "label": "307",
                            "title": "307 - ROVERETO-MORI-CHIZZOLA-CORNÈ-ALA-AVIO",
                            "color": "#fcbf0e",
                            "routes": [
                                {
                                    "routeId": "200_17_0",
                                    "routeSymId": "307A",
                                    "title": "ROVERETO-MORI-CHIZZOLA-CORNÈ-ALA-AVIO",
                                    "label": "307"
                                },
                                {
                                    "routeId": "200_17_1",
                                    "routeSymId": "307R",
                                    "title": "AVIO-ALA-CORNÈ-CHIZZOLA-MORI-ROVERETO",
                                    "label": "307"
                                }
                            ]
                        },
                        {
                            "label": "310",
                            "title": "310 - ROVERETO-MORI-S.FELICE-RONZO CHIENIS",
                            "color": "#fcbf0e",
                            "routes": [
                                {
                                    "routeId": "220_17_0",
                                    "routeSymId": "310INA",
                                    "title": "ROVERETO-MORI-S.FELICE-RONZO CHIENIS",
                                    "label": "310"
                                },
                                {
                                    "routeId": "220_17_1",
                                    "routeSymId": "310INR",
                                    "title": "RONZO CHIENIS-S.FELICE-MORI-ROVERETO",
                                    "label": "310"
                                }
                            ]
                        },
                        {
                            "label": "311",
                            "title": "311 - ROVERETO-VILLA-NOMI-ALDENO",
                            "color": "#fcbf0e",
                            "routes": [
                                {
                                    "routeId": "194_17_0",
                                    "routeSymId": "311A",
                                    "title": "ROVERETO-VILLA-NOMI-ALDENO",
                                    "label": "311"
                                },
                                {
                                    "routeId": "194_17_1",
                                    "routeSymId": "311R",
                                    "title": "ALDENO-NOMI-VILLA-ROVERETO",
                                    "label": "311"
                                }
                            ]
                        },
                        {
                            "label": "312",
                            "title": "312 - ROVERETO-PARROCCHIA DI V.-PIAN DELLE FUGAZZE",
                            "color": "#fcbf0e",
                            "routes": [
                                {
                                    "routeId": "215_17_0",
                                    "routeSymId": "312A",
                                    "title": "ROVERETO-PARROCCHIA DI V.-PIAN DELLE FUGAZZE",
                                    "label": "312"
                                },
                                {
                                    "routeId": "215_17_1",
                                    "routeSymId": "312R",
                                    "title": "PIAN DELLE FUGAZZE-PARROCCHIA DI V.-ROVERETO",
                                    "label": "312"
                                }
                            ]
                        },
                        {
                            "label": "314",
                            "title": "314 - ROVERETO-RIVA-OBRA DI VALLARSA-OMETTO",
                            "color": "#fcbf0e",
                            "routes": [
                                {
                                    "routeId": "203_17_0",
                                    "routeSymId": "314A",
                                    "title": "ROVERETO-RIVA-OBRA DI VALLARSA-OMETTO",
                                    "label": "314"
                                },
                                {
                                    "routeId": "203_17_1",
                                    "routeSymId": "314R",
                                    "title": "OMETTO-OBRA DI VALLARSA-RIVA-ROVERETO",
                                    "label": "314"
                                }
                            ]
                        },
                        {
                            "label": "315",
                            "title": "315 - ROVERETO-TERRAGNOLO-SERRADA-FOLGARIA",
                            "color": "#fcbf0e",
                            "routes": [
                                {
                                    "routeId": "198_17_0",
                                    "routeSymId": "315A",
                                    "title": "ROVERETO-TERRAGNOLO-SERRADA-FOLGARIA",
                                    "label": "315"
                                },
                                {
                                    "routeId": "198_17_1",
                                    "routeSymId": "315R",
                                    "title": "FOLGARIA-SERRADA-TERRAGNOLO-ROVERETO",
                                    "label": "315"
                                }
                            ]
                        },
                        {
                            "label": "316",
                            "title": "316 - ROVERETO-TRAMBILENO-VANZA-POZZACCHIO",
                            "color": "#fcbf0e",
                            "routes": [
                                {
                                    "routeId": "190_17_0",
                                    "routeSymId": "316AA",
                                    "title": "ROVERETO-TRAMBILENO-VANZA-POZZACCHIO",
                                    "label": "316"
                                },
                                {
                                    "routeId": "190_17_1",
                                    "routeSymId": "316AR",
                                    "title": "POZZACCHIO-VANZA-TRAMBILENO-ROVERETO",
                                    "label": "316"
                                }
                            ]
                        },
                        {
                            "label": "318",
                            "title": "318 - VALLE S.FELICE-MANZANO-NOMESINO",
                            "color": "#fcbf0e",
                            "routes": [
                                {
                                    "routeId": "235_17_0",
                                    "routeSymId": "318INA",
                                    "title": "VALLE S.FELICE-MANZANO-NOMESINO",
                                    "label": "318"
                                },
                                {
                                    "routeId": "235_17_1",
                                    "routeSymId": "318INR",
                                    "title": "NOMESINO-MANZANO-VALLE S.FELICE",
                                    "label": "318"
                                }
                            ]
                        },
                        {
                            "label": "319",
                            "title": "319 - BESAGNO-CROSANO-CORNÈ-SACCONE",
                            "color": "#fcbf0e",
                            "routes": [
                                {
                                    "routeId": "233_17_0",
                                    "routeSymId": "319A",
                                    "title": "BESAGNO-CROSANO-CORNÈ-SACCONE",
                                    "label": "319"
                                },
                                {
                                    "routeId": "233_17_1",
                                    "routeSymId": "319R",
                                    "title": "SACCONE-CORNÈ-CROSANO BIVIO-BESAGNO",
                                    "label": "319"
                                }
                            ]
                        },
                        {
                            "label": "321",
                            "title": "321 - TRENTO-CALLIANO-FOLGARIA-LAVARONE",
                            "color": "#fcbf0e",
                            "routes": [
                                {
                                    "routeId": "205_17_0",
                                    "routeSymId": "321A",
                                    "title": "TRENTO-CALLIANO-FOLGARIA-LAVARONE",
                                    "label": "321"
                                },
                                {
                                    "routeId": "205_17_1",
                                    "routeSymId": "321R",
                                    "title": "LAVARONE-FOLGARIA-CALLIANO-TRENTO",
                                    "label": "321"
                                }
                            ]
                        },
                        {
                            "label": "332",
                            "title": "332 - ROVERETO-MORI-RIVA-ARCO-BOLOGNANO",
                            "color": "#fcbf0e",
                            "routes": [
                                {
                                    "routeId": "634_17_0",
                                    "routeSymId": "332A",
                                    "title": "ROVERETO-MORI-RIVA-ARCO-BOLOGNANO",
                                    "label": "332"
                                },
                                {
                                    "routeId": "634_17_1",
                                    "routeSymId": "332R",
                                    "title": "BOLOGNANO-ARCO-RIVA-MORI-ROVERETO",
                                    "label": "332"
                                }
                            ]
                        },
                        {
                            "label": "334",
                            "title": "334 - ROVERETO-ALA-SABBIONARA-AVIO-MASI-ROVERETO",
                            "color": "#fcbf0e",
                            "routes": [
                                {
                                    "routeId": "507_17_0",
                                    "routeSymId": "334A",
                                    "title": "ROVERETO-ALA-SABBIONARA-AVIO-MASI-ROVERETO",
                                    "label": "334"
                                }
                            ]
                        },
                        {
                            "label": "335",
                            "title": "335 - ROVERETO-ALA-MASI D'AVIO-AVIO-ROVERETO",
                            "color": "#fcbf0e",
                            "routes": [
                                {
                                    "routeId": "503_17_0",
                                    "routeSymId": "335A",
                                    "title": "ROVERETO-ALA-MASI D'AVIO-AVIO-ROVERETO",
                                    "label": "335"
                                }
                            ]
                        },
                        {
                            "label": "336",
                            "title": "336 - ALA-RONCHI DI ALA-PONZOLOTTI",
                            "color": "#fcbf0e",
                            "routes": [
                                {
                                    "routeId": "580_17_0",
                                    "routeSymId": "336AA",
                                    "title": "ALA-RONCHI DI ALA-PONZOLOTTI",
                                    "label": "336"
                                },
                                {
                                    "routeId": "580_17_1",
                                    "routeSymId": "336AR",
                                    "title": "RONCHI-ALA",
                                    "label": "336"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        "urbano": {
            "view": "grid",
            "label": "menu_real_time_bus_urban",
            "hasMap": true,
            "markerIcon": "ic_urbanBus",
            "icon": "ic_urban-bus",
            "transportType": "BUS",
            "list": [
                {
                    "agencyId": "16",
                    "hasMap": true,
                    "groups": [
                        {
                            "label": "1",
                            "color": "#174072",
                            "routes": [
                                {
                                    "routeId": "01A_Rov",
                                    "routeSymId": "01A",
                                    "title": "Corso Bettini-Ospedale-Lizzana-Marco",
                                    "label": "1",
                                    "wheelChairBoarding": 1
                                },
                                {
                                    "routeId": "01R_Rov",
                                    "routeSymId": "01R",
                                    "title": "Marco-Lizzana-Corso Bettini-Pomarolo",
                                    "label": "1",
                                    "wheelChairBoarding": 1
                                }
                            ]
                        },
                        {
                            "label": "2",
                            "color": "#D65A2E",
                            "routes": [
                                {
                                    "routeId": "02A_Rov",
                                    "routeSymId": "02A",
                                    "title": "Costa-Corso Rosmini-S.Giorgio",
                                    "label": "2",
                                    "wheelChairBoarding": 2
                                },
                                {
                                    "routeId": "02R_Rov",
                                    "routeSymId": "02R",
                                    "title": "S.Giorgio-Corso Rosmini-Costa",
                                    "label": "2",
                                    "wheelChairBoarding": 2
                                }
                            ]
                        },
                        {
                            "label": "3",
                            "color": "#C02927",
                            "routes": [
                                {
                                    "routeId": "03A_Rov",
                                    "routeSymId": "03A",
                                    "title": "Pedersano-Nogaredo-Rosmini-Lenzima",
                                    "label": "3",
                                    "wheelChairBoarding": 1
                                },
                                {
                                    "routeId": "03R_Rov",
                                    "routeSymId": "03R",
                                    "title": "Lenzima-Rosmini-Nogaredo-Pedersano",
                                    "label": "3",
                                    "wheelChairBoarding": 1
                                }
                            ]
                        },
                        {
                            "label": "4",
                            "color": "#0976B7",
                            "routes": [
                                {
                                    "routeId": "04A_Rov",
                                    "routeSymId": "04A",
                                    "title": "Noarna-S.Ilario-Isera-Villa Lagarina",
                                    "label": "4",
                                    "wheelChairBoarding": 1
                                },
                                {
                                    "routeId": "04R_Rov",
                                    "routeSymId": "04R",
                                    "title": "Villa Lagarina-Isera-S.Ilario-Noarna",
                                    "label": "4",
                                    "wheelChairBoarding": 1
                                }
                            ]
                        },
                        {
                            "label": "5",
                            "color": "#E8C01C",
                            "routes": [
                                {
                                    "routeId": "05A_Rov",
                                    "routeSymId": "05R",
                                    "title": "Mori-Villa Lagarina-Pomarolo-Nomi",
                                    "label": "5",
                                    "wheelChairBoarding": 1
                                }
                            ]
                        },
                        {
                            "label": "6",
                            "color": "#6EB046",
                            "routes": [
                                {
                                    "routeId": "06A_Rov",
                                    "routeSymId": "06A",
                                    "title": "Nomi-Pomarolo/Volano-Rosmini-Mori",
                                    "label": "6",
                                    "wheelChairBoarding": 1
                                },
                                {
                                    "routeId": "06R_Rov",
                                    "routeSymId": "06R",
                                    "title": "Mori-Rosmini-Calliano-Nomi",
                                    "label": "6",
                                    "wheelChairBoarding": 1
                                }
                            ]
                        },
                        {
                            "label": "7",
                            "color": "#1B9887",
                            "routes": [
                                {
                                    "routeId": "07A_Rov",
                                    "routeSymId": "07A",
                                    "title": "Noriglio-Rosmini-Campana Dei Caduti",
                                    "label": "7",
                                    "wheelChairBoarding": 2
                                },
                                {
                                    "routeId": "07R_Rov",
                                    "routeSymId": "07R",
                                    "title": "Campana Dei Caduti-Rosmini-Noriglio",
                                    "label": "7",
                                    "wheelChairBoarding": 2
                                }
                            ]
                        },
                        {
                            "label": "8",
                            "color": "#f8ad1e",
                            "routes": [
                                {
                                    "routeId": "08A_Rov",
                                    "routeSymId": "08A",
                                    "title": "Ospedale-Stazione FS-Isera-Villa Lag.",
                                    "label": "8",
                                    "wheelChairBoarding": 1
                                },
                                {
                                    "routeId": "08R_Rov",
                                    "routeSymId": "08R",
                                    "title": "Villa Lagarina-Isera-P.le Orsi-Ospedale",
                                    "label": "8",
                                    "wheelChairBoarding": 1
                                }
                            ]
                        },
                        {
                            "label": "A",
                            "color": "#B9BAB5",
                            "routes": [
                                {
                                    "routeId": "AC_Rov",
                                    "routeSymId": "AC",
                                    "title": "Brione-Cesari-Ospedale-Podesta-Brione",
                                    "label": "A",
                                    "wheelChairBoarding": 1
                                }
                            ]
                        },
                        {
                            "label": "B",
                            "color": "#B9BAB5",
                            "routes": [
                                {
                                    "routeId": "BC_Rov",
                                    "routeSymId": "BC",
                                    "title": "Ossario-Osp.-S.Giorgio-Osp.-Ossario",
                                    "label": "B",
                                    "wheelChairBoarding": 1
                                }
                            ]
                        },{
                            "label": "AB",
                            "color": "#B9BAB5",
                            "routes": [
                                {
                                    "routeId": "AA_Rov",
                                    "routeSymId": "ABA",
                                    "title": "Via Magazol-S.Giorgio-Cornacalda",
                                    "label": "AB",
                                    "wheelChairBoarding": 1
                                },
                                {
                                    "routeId": "AR_Rov",
                                    "routeSymId": "ABR",
                                    "title": "Cornacalda-Ospedale-Via Magazol",
                                    "label": "AB",
                                    "wheelChairBoarding": 1
                                }
                            ]
                        },
                        {
                            "label": "N1",
                            "color": "#000000",
                            "routes": [
                                {
                                    "routeId": "N1A_Rov",
                                    "routeSymId": "N1A",
                                    "title": "C.so Bettini-Lizzana-Marco-Mori",
                                    "label": "N1",
                                    "wheelChairBoarding": 1
                                },
                                {
                                    "routeId": "N1R_Rov",
                                    "routeSymId": "N1R",
                                    "title": "Mori-Marco-C.so Bettin",
                                    "label": "N1",
                                    "wheelChairBoarding": 1
                                }
                            ]
                        },{
                            "label": "N2",
                            "color": "#000000",
                            "routes": [
                                {
                                    "routeId": "N2A_Rov",
                                    "routeSymId": "N2A",
                                    "title": "Costa-Corso Rosmini",
                                    "label": "N2",
                                    "wheelChairBoarding": 1
                                },
                                {
                                    "routeId": "N2R_Rov",
                                    "routeSymId": "N2R",
                                    "title": "P.le orsi-C.so Rosmini-Costa",
                                    "label": "N2",
                                    "wheelChairBoarding": 1
                                }
                            ]
                        },{
                            "label": "N3",
                            "color": "#000000",
                            "routes": [
                                {
                                    "routeId": "N3A_Rov",
                                    "routeSymId": "N3A",
                                    "title": "Castellano-Stazione FS",
                                    "label": "N3",
                                    "wheelChairBoarding": 1
                                },
                                {
                                    "routeId": "N3R_Rov",
                                    "routeSymId": "N3R",
                                    "title": "P.le Orsi-Volano-Castellano",
                                    "label": "N3",
                                    "wheelChairBoarding": 1
                                }
                            ]
                        },{
                            "label": "N5",
                            "color": "#000000",
                            "routes": [
                                {
                                    "routeId": "N5R_Rov",
                                    "routeSymId": "N5R",
                                    "title": "C.so Bettini-Isera-Nomi",
                                    "label": "N5",
                                    "wheelChairBoarding": 1
                                }
                            ]
                        },{
                            "label": "N6",
                            "color": "#000000",
                            "routes": [
                                {
                                    "routeId": "N6A_Rov",
                                    "routeSymId": "N6A",
                                    "title": "Nomi-Besenello-Stazione FS",
                                    "label": "N6",
                                    "wheelChairBoarding": 1
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
}