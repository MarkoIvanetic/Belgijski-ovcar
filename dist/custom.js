
// fix arrow end issues:
// https://github.com/DmitryBaranovskiy/raphael/issues/471

var chart_data = {};

chart_data.djanga = {
    chart: {
        container: "#pedigree-tree",
        levelSeparation: 30,

        rootOrientation: "WEST",

        nodeAlign: "BOTTOM",

        connectors: {
            type: "step",
            style: {
                "stroke-width": 2,
                'stroke': '#bbb'
            }
        },
        node: {
            HTMLclass: "big-commpany"
        }
    },

    nodeStructure: {
        text: { name: "Djanga Od Moslavine" },
        connectors: {
            // style: {
            //  'stroke': '#bbb'
            // }
        },
        children: [{
            text: { name: "Chapman Vom Holzmicheltal" },
            stackChildren: true,
            connectors: {
                // style: {
                //  'stroke': '#8080FF',
                //  'arrow-end': 'block-wide-long'
                // }
            },
            children: [{
                    text: { name: "Alf Vom Nordhang Der Eifel" },
                    children: [{
                        text: { name: "Daneskjold Hasse" }
                    }, {
                        text: { name: "Engie Airport Hannover" }
                    }]
                },
                {
                    text: { name: "Akida Von Skandinavika" },
                    children: [{
                        text: { name: "Igor Perle De Tourbiere" }
                    }, {
                        text: { name: "Bonny De Mare Baltico Vehemente" }
                    }]
                }
            ]
        }, {
            text: { name: "Lili Od Slunja" },
            stackChildren: true,
            connectors: {
                // stackIndent: 30,
                // style: {
                //  'stroke': '#E3C61A',
                //  'arrow-end': 'block-wide-long'
                // }
            },
            children: [{
                    text: { name: "Conan Van Karlosha" },
                    children: [{
                        text: { name: "Devil Van Joefarm" }
                    }, {
                        text: { name: "Dinia Van Joefarm" }
                    }]
                },
                {
                    text: { name: "Dina Od Slunja" },
                    children: [{
                        text: { name: "Chip Vom Turda" }
                    }, {
                        text: { name: "Astra" }
                    }]
                }
            ]
        }]
    }
};

chart_data.gero = {
    chart: {
        container: "#pedigree-tree",
        levelSeparation: 30,

        rootOrientation: "WEST",

        nodeAlign: "BOTTOM",

        connectors: {
            type: "step",
            style: {
                "stroke-width": 2,
                'stroke': '#bbb'
            }
        },
        node: {
            HTMLclass: "big-commpany"
        }
    },

    nodeStructure: {
        text: { name: "Djanga Od" },
        connectors: {
            // style: {
            //  'stroke': '#bbb'
            // }
        },
        children: [{
            text: { name: "Chapman Vom" },
            stackChildren: true,
            connectors: {
                // style: {
                //  'stroke': '#8080FF',
                //  'arrow-end': 'block-wide-long'
                // }
            },
            children: [{
                    text: { name: "Alf Vom Nordhang" },
                    children: [{
                        text: { name: "Daneskjold Hasse" }
                    }, {
                        text: { name: "Engie Airport Hannover" }
                    }]
                },
                {
                    text: { name: "Akida Von Skandinavika" },
                    children: [{
                        text: { name: "Igor Perle De Tourbiere" }
                    }, {
                        text: { name: "Bonny De Mare Baltico Vehemente" }
                    }]
                }
            ]
        }, {
            text: { name: "Lili Od Slunja" },
            stackChildren: true,
            connectors: {
                // stackIndent: 30,
                // style: {
                //  'stroke': '#E3C61A',
                //  'arrow-end': 'block-wide-long'
                // }
            },
            children: [{
                    text: { name: "Conan Van Karlosha" },
                    children: [{
                        text: { name: "Devil Van Joefarm" }
                    }, {
                        text: { name: "Dinia Van Joefarm" }
                    }]
                },
                {
                    text: { name: "Dina Od Slunja" },
                    children: [{
                        text: { name: "Chip Vom Turda" }
                    }, {
                        text: { name: "Astra" }
                    }]
                }
            ]
        }]
    }
};

chart_data.had = {
    chart: {
        container: "#pedigree-tree",
        levelSeparation: 30,

        rootOrientation: "WEST",

        nodeAlign: "TOP",

        connectors: {
            type: "step",
            style: {
                "stroke-width": 2,
                'stroke': '#bbb'
            }
        },
        node: {
            HTMLclass: "big-commpany"
        }
    },

    nodeStructure: {
        text: { name: "Djanga Od" },
        connectors: {
            // style: {
            //  'stroke': '#bbb'
            // }
        },
        children: [{
            text: { name: "Chapman Vom" },
            stackChildren: true,
            connectors: {
                // style: {
                //  'stroke': '#8080FF',
                //  'arrow-end': 'block-wide-long'
                // }
            },
            children: [{
                    text: { name: "Alf Vom Nordhang" },
                    children: [{
                        text: { name: "Daneskjold Hasse" }
                    }, {
                        text: { name: "Engie Airport Hannover" }
                    }]
                },
                {
                    text: { name: "Akida Von Skandinavika" },
                    children: [{
                        text: { name: "Igor Perle De Tourbiere" }
                    }, {
                        text: { name: "Bonny De Mare Baltico Vehemente" }
                    }]
                }
            ]
        }, {
            text: { name: "Lili Od Slunja" },
            stackChildren: true,
            connectors: {
                // stackIndent: 30,
                // style: {
                //  'stroke': '#E3C61A',
                //  'arrow-end': 'block-wide-long'
                // }
            },
            children: [{
                    text: { name: "Conan Van Karlosha" },
                    children: [{
                        text: { name: "Devil Van Joefarm" }
                    }, {
                        text: { name: "Dinia Van Joefarm" }
                    }]
                },
                {
                    text: { name: "Dina Od Slunja" },
                    children: [{
                        text: { name: "Chip Vom Turda" }
                    }, {
                        text: { name: "Astra" }
                    }]
                }
            ]
        }]
    }
};