let nodeStructure = [];
let dogNames = [];

$('.pedigree-wrapper ul li a').each(function() {
    let dogName = $(this).text();
    dogNames.push(dogName);

})

function createDog(name) {
    return {
        "text": { "name": name },
        "connectors":{},
        "stackChildren": true,
        "children": []
    }
}

// gen 4 - 34, 56

let d0 = createDog(dogNames[0]);
d0.children = [createDog(dogNames[1]), createDog(dogNames[2])]

d0.children[0].children = [createDog(dogNames[3]), createDog(dogNames[4])]
d0.children[1].children = [createDog(dogNames[5]), createDog(dogNames[6])]

let d1 = createDog(dogNames[7]);
d1.children = [createDog(dogNames[8]), createDog(dogNames[9])]

d1.children[0].children = [createDog(dogNames[10]), createDog(dogNames[11])]
d1.children[1].children = [createDog(dogNames[12]), createDog(dogNames[13])]

let original = createDog($('.showTitle').text());
original.children = [d0, d1];

console.log(original);



let data = {
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
            HTMLclass: "dog-pedigree"
        }
    },
    nodeStructure: original
}

console.log(JSON.stringify(data));