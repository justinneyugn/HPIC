export function fn1() {

    console.log("3");
    let margin = { top: 0, left: 0, right: 0, bottom: 0};
    let height = 400 - margin.top - margin.bottom;
    let width = 800 - margin.left - margin.right;

    // boilerplate for starting a d3 visualization
    let svg = d3.select("#map")
        .append("svg")
        .attr("height", height + margin.top + margin.bottom)
        .attr("width", width + margin.left + margin.right)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // us.json imported from GeoJSON from TopoJSON
    d3.queue()
        .defer(d3.json, "../src/scripts/us_states.json")
        .await(ready);
    // d3.queue()
    //     .defer(d3.json, "us_states.json")
    //     .await(ready);

    // create basis for legend
    let color = d3.scale.linear()
        .range(["rgb(213,222,217)","rgb(69,173,168)","rgb(84,36,55)","rgb(238,130,238)","rgb(60,179,113"]);
    
    let legendText = ["Nene Leakes", "Kim Zolciak-Biermann", "Porsha Williams", "Kenya Moore"];

    let div = d3.select("map")
        .append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

    // uses Albers USA through GeoMercator and centers it while zooming in 
    let projection = d3.geoAlbersUsa()
        .translate([ width / 2, height / 2])
        .scale(900);

    // creates path (geoPath) and sets projection
    // changes latitude and logitude in order to render a round map onto our flat surface
    let path = d3.geoPath()
        .projection(projection);


    function ready(error, data) {
        console.log(data);

        // topojson.feature converts raw geo data into useable geo data
        let states = topojson.feature(data, data.objects.us_states).features
        console.log(states);

        // load in 2012 data
        d3.csv("../src/data/2012_test.csv", function(dataset){
            color.domain([0,1,2,3,4]); // set range of input data

            for (let i = 0; i < dataset.length; i++) {
                let dataState = dataset[i].State;
                // console.log(dataState)
                let dataValue = 0
                let arr = [parseInt(dataset[i].Nene), parseInt(dataset[i].Kim), parseInt(dataset[i].Kandi), parseInt(dataset[i].Porsha), parseInt(dataset[i].Kenya)]
                let biggest = Math.max(...arr);
                dataValue = arr.indexOf(biggest);

                for (let j = 0; j < states.length; j++){
                    let stateName = states[j].properties.name;
                    if (dataState === stateName){
                        states[j].properties["cast"] = dataValue;
                        console.log(states[j].properties["cast"])
                        break;
                    }
                }
                svg.selectAll(".state")
                .data(states)
                .enter().append("path")
                .attr("class", "state")
                // "d" is the coordinate points for each state, path draws it
                .attr("d", path)
                .style("stroke", "#fff")
                .style("stroke-width", "1")
                .style("fill", function(d) {
                    // let value = d.properties.castMember;
                    console.log(d.properties);
                    // if (!value) return "rgb(213,222,217)"
                })
            }
        })
        console.log(states)

        // svg.selectAll(".state")
        //     .data(states)
        //     .enter().append("path")
        //     .attr("class", "state")
        //     // "d" is the coordinate points for each state, path draws it
        //     .attr("d", path)
        //     .style("stroke", "#fff")
        //     .style("stroke-width", "1")
        //     .style("fill", function(d) {
        //         // let value = d.properties.castMember;
        //         console.log(d.properties);
        //         // if (!value) return "rgb(213,222,217)"
        //     })

    }
};
