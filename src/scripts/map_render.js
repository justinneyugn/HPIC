export function fn1() {
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
        .defer(d3.json, "../src/data/us_states.json")
        .await(ready);

    // create basis for legend
    let color = d3.scale.linear()
        .range(["rgb(213,222,217)","rgb(69,173,168)","rgb(84,36,55)","rgb(238,130,238)","rgb(60,179,113)"]);
    let legendText = ["Nene Leakes", "Kim Zolciak-Biermann", "Kandi Burruss", "Porsha Williams", "Kenya Moore"];

    let div = d3.select("body")
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

        // topojson.feature converts raw geo data into useable geo data
        let states = topojson.feature(data, data.objects.us_states).features

        // create buttons to pick a year
        let years = ["2012", "2013", "2014", "2015"]

        let buttons = d3.select("body").append("div")
            .attr("id", "buttons")
            .selectAll("button")
            .data(years)
            .enter()
            .append("button")
            .text(function(d) {return d;})

        // add ids for each button
        let buttontags = document.querySelectorAll("button")
        buttontags[0].setAttribute("class", "firstButton")
        buttontags[1].setAttribute("class", "secondButton")
        buttontags[2].setAttribute("class", "thirdButton")
        buttontags[3].setAttribute("class", "fourthButton")
        

        color.domain([0,1,2,3,4]); // set range of input data



        document.getElementById("buttons").addEventListener("click", function(e){
            if (e.target && e.target.matches("button.firstButton")){
                d3.csv("../src/data/2012_data.csv", test)
            } else if (e.target && e.target.matches("button.secondButton")){
                d3.csv("../src/data/2013_data.csv", test)
            } else if (e.target && e.target.matches("button.thirdButton")){
                d3.csv("../src/data/2014_data.csv", test)
            } else if (e.target && e.target.matches("button.fourthButton")){
                d3.csv("../src/data/2015_data.csv", test)
            }
        })
        
        function test(dataset){

            for (let i = 0; i < dataset.length; i++) {
                let dataState = dataset[i].State;
                let dataValue = 0
                let arr = [parseInt(dataset[i].Nene), parseInt(dataset[i].Kim), parseInt(dataset[i].Kandi), parseInt(dataset[i].Porsha), parseInt(dataset[i].Kenya)]
                let biggest = Math.max(...arr);
                dataValue = arr.indexOf(biggest);

                for (let j = 0; j < states.length; j++){
                    let stateName = states[j].properties.name;
                    if (dataState === stateName){
                        states[j].properties["cast"] = dataValue;
                        break;
                    }
                }
                
            }
            svg.selectAll(".state")
            .data(states)
            .enter().append("path")
            .attr("class", "state")
            .attr("d", path) // "d" is the coordinate points for each state, path draws it
            .style("stroke", "#fff")
            .style("stroke-width", "1")
            .style("fill", function(d) {
                let value = d.properties.cast;
                return color(value);
            })
        }

        let legend = d3.select("body").append("svg")
            .attr("class", "legend")
            .attr("width", 140)
            .attr("height", 200)
            .selectAll("g")
            .data(color.domain().slice())
            .enter()
            .append("g")
            .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; })
        
    
        legend.append("rect")
            .attr("width", 18)
            .attr("height", 18)
            .attr("class", "rect")
            .style("fill", color);

        legend.append("text")
            .data(legendText)
            .attr("x", 24)
            .attr("y", 9)
            .attr("dy", ".35em")
            .attr("class", "housewife")
            .append("a")
            .attr("target", "_blank")
            .text(function(d) { return d; });

        // attach link to each name in legend
        let atags = document.querySelectorAll("a")
        atags[0].setAttribute("href", "https://www.youtube.com/watch?v=uHs9FXMz2cM")
        atags[1].setAttribute("href", "https://www.youtube.com/watch?v=wNSwN6dcJcc")
        atags[2].setAttribute("href", "https://www.youtube.com/watch?v=sbrHY7PpXcA")
        atags[3].setAttribute("href", "https://www.youtube.com/watch?v=69hWiJPNlIE")
        atags[4].setAttribute("href", "https://www.youtube.com/watch?v=RVo4EUjznZ0")

        

    }
};
