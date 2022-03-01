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
        .defer(d3.json, "../src/scripts/us.json")
        .await(ready);


    // uses Albers USA through GeoMercator and centers it while zooming in 
    let projection = d3.geoAlbersUsa()
        .translate([ width / 2, height / 2])
        .scale(850);

    // creates path (geoPath) and sets projection
    // changes latitude and logitude in order to render a round map onto our flat surface
    let path = d3.geoPath()
        .projection(projection);

    function ready(error, data) {
        console.log(data);

        // topojson.feature converts raw geo data into useable geo data
        let states = topojson.feature(data, data.objects.states).features
        console.log(states);

        svg.selectAll(".state")
            .data(states)
            .enter().append("path")
            .attr("class", "state")
            // "d" is the coordinate points for each state, path draws it
            .attr("d", path)

    }
};
