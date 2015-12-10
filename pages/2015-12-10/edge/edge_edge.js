/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'img_1',
                            type: 'image',
                            rect: ['32px', '52px', '92%', '82.7%', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"img_1.jpg",'0%','0%','100%','auto', 'no-repeat'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'TextCopy',
                            type: 'text',
                            rect: ['434px', '65px', '184px', '61px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">金星女</p>",
                            font: ['Arial, Helvetica, sans-serif', [48, "px"], "rgba(236,149,21,1.00)", "normal", "none", "", "break-word", "normal"],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['255px', '65px', '184px', '61px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​火星男</p>",
                            font: ['Arial, Helvetica, sans-serif', [48, "px"], "rgba(236,149,21,1.00)", "normal", "none", "", "break-word", "normal"],
                            filter: [0, 0, 1, 1, 0, 0, 0, 5, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['294px', '600px', '211px', '61px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​相亲相爱</p>",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [48, "px"], "rgba(236,149,21,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '800px', '600px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 2500,
                    autoPlay: true,
                    data: [
                        [
                            "eid10",
                            "left",
                            1000,
                            500,
                            "easeOutQuint",
                            "${Text}",
                            '-184px',
                            '255px'
                        ],
                        [
                            "eid18",
                            "top",
                            2000,
                            500,
                            "easeOutQuint",
                            "${Text2}",
                            '600px',
                            '481px'
                        ],
                        [
                            "eid20",
                            "filter.blur",
                            1500,
                            250,
                            "easeOutQuint",
                            "${Text}",
                            '5px',
                            '0px'
                        ],
                        [
                            "eid22",
                            "filter.blur",
                            2000,
                            250,
                            "easeOutQuint",
                            "${TextCopy}",
                            '5px',
                            '0px'
                        ],
                        [
                            "eid14",
                            "left",
                            1500,
                            500,
                            "easeOutQuint",
                            "${TextCopy}",
                            '800px',
                            '434px'
                        ],
                        [
                            "eid6",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${img_1}",
                            '0.000000',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("edge_edgeActions.js");
})("EDGE-19213456");
