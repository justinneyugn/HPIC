/*  This visualization was made possible by modifying code provided by:

Michelle Chandra, State Choropleth example from "Basic US State Map - D3" 
http://bl.ocks.org/michellechandra/0b2ce4923dc9b5809922  

Jonathan Soma, video from "Making a map of the United States with d3, topojson, and a csv"
https://www.youtube.com/watch?v=G-VggTK-Wlg&t=983s */


export function fn1() {
    let margin = { top: 0, left: 0, right: 0, bottom: 0 };
    let height = 500 - margin.top - margin.bottom;
    let width = 700 - margin.left - margin.right;

    // boilerplate for starting a d3 visualization
    let svg = d3.select("#map")
        .append("svg")
        .attr("height", height + margin.top + margin.bottom)
        .attr("width", width + margin.left + margin.right)
        .attr("id", "positioning")
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Append Div for tooltip to SVG
    let div = d3.select("body")
        .append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

    // us.json imported from GeoJSON from TopoJSON
    d3.queue()
        .defer(d3.json, "https://raw.githubusercontent.com/justinneyugn/hpic_data/main/us_states.json")
        .await(ready);

    // create basis for legend
    let color = d3.scale.linear()
        .range(["#003F5C", "#58508D", "#BC5090", "#FF6361", "#FFA600"]);
    // .range(["#E0BBE4","#BAC1F1","#91C7ED","#78C9D8","#7EC7B9"]);
    let legendText = ["Nene Leakes", "Kim Zolciak-Biermann", "Kandi Burruss", "Porsha Williams", "Kenya Moore"];


    // uses Albers USA through GeoMercator and centers it while zooming in 
    let projection = d3.geoAlbersUsa()
        .translate([width / 2, height / 2])
        .scale(900);

    // creates path (geoPath) and sets projection
    // changes latitude and logitude in order to render a round map onto our flat surface
    let path = d3.geoPath()
        .projection(projection);


    function ready(error, data) {

        // topojson.feature converts raw geo data into useable geo data
        let states = topojson.feature(data, data.objects.us_states).features

        // create buttons to pick a year
        let years = ["2012", "2013", "2014", "2015", "2016"]

        let buttons = d3.select("body").append("div")
            .attr("id", "buttons")
            .selectAll("button")
            .data(years)
            .enter()
            .append("button")
            .text(function (d) { return d; })

        // add ids for each button
        let buttontags = document.querySelectorAll("button")
        buttontags[0].setAttribute("class", "firstButton")
        buttontags[1].setAttribute("class", "secondButton")
        buttontags[2].setAttribute("class", "thirdButton")
        buttontags[3].setAttribute("class", "fourthButton")
        buttontags[4].setAttribute("class", "fifthButton")




        color.domain([0, 1, 2, 3, 4]); // set range of input data


        function test(dataset) {
            let housewife = ["Nene Leakes", "Kim Zolciak", "Kandi Burruss", "Porsha Williams", "Kenya Moore"];

            for (let i = 0; i < dataset.length; i++) {
                let dataState = dataset[i].State;
                let dataValue = 0;
                let secondValue = 0;
                let arr = [parseInt(dataset[i].Nene), parseInt(dataset[i].Kim), parseInt(dataset[i].Kandi), parseInt(dataset[i].Porsha), parseInt(dataset[i].Kenya)]
                let biggest = Math.max(...arr);
                dataValue = arr.indexOf(biggest);
                if (dataValue > -1) {
                    arr.splice(dataValue, 1);
                }
                let secondBiggest = Math.max(...arr);
                secondValue = arr.indexOf(secondBiggest);
                if (secondValue >= dataValue) {
                    secondValue += 1;
                }

                for (let j = 0; j < states.length; j++) {
                    let stateName = states[j].properties.name;
                    if (dataState === stateName) {
                        states[j].properties["cast"] = dataValue;
                        states[j].properties["second"] = secondValue;
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
                .style("fill", function (d) {
                    let value = d.properties.cast;
                    return color(value);
                })

            //changes the fill color of map based on change in states.properties.cast when a different year is clicked
            let state = document.querySelectorAll(".state");
            for (let i = 0; i < state.length; i++) {
                let value = states[i].properties.cast;
                state[i].style.fill = color(value);
            }

            svg.selectAll(".state")
                .on("mouseover", function (d) {
                    div.transition()
                        .duration(200)
                        .style("opacity", .9);
                    div.text(housewife[d.properties.second])
                        .style("left", (d3.event.pageX) + "px")
                        .style("top", (d3.event.pageY - 28) + "px");
                })
                .on("mouseout", function (d) {
                    div.transition()
                        .duration(500)
                        .style("opacity", 0);
                });
        }

        //start the homepage with 2012 map already loaded
        d3.csv("https://raw.githubusercontent.com/justinneyugn/hpic_data/main/2012_data.csv", test);


        //event listeners that load respective year's data onto map
        document.getElementById("buttons").addEventListener("click", function (e) {
            if (e.target && e.target.matches("button.firstButton")) {
                d3.csv("https://raw.githubusercontent.com/justinneyugn/hpic_data/main/2012_data.csv", test)
            } else if (e.target && e.target.matches("button.secondButton")) {
                d3.csv("https://raw.githubusercontent.com/justinneyugn/hpic_data/main/2013_data.csv", test)
            } else if (e.target && e.target.matches("button.thirdButton")) {
                d3.csv("https://raw.githubusercontent.com/justinneyugn/hpic_data/main/2014_data.csv", test)
            } else if (e.target && e.target.matches("button.fourthButton")) {
                d3.csv("https://raw.githubusercontent.com/justinneyugn/hpic_data/main/2015_data.csv", test)
            } else if (e.target && e.target.matches("button.fifthButton")) {
                d3.csv("https://raw.githubusercontent.com/justinneyugn/hpic_data/main/2016_data.csv", test)
            }
        })

        let legend = d3.select("body").append("svg")
            .attr("class", "legend")
            .attr("width", 250)
            .attr("height", 200)
            .selectAll("g")
            .data(color.domain().slice())
            .enter()
            .append("g")
            .attr("transform", function (d, i) { return "translate(0," + i * 20 + ")"; })


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
            .text(function (d) { return d; });

        // attach link to each name in legend
        let atags = document.querySelectorAll("a")
        atags[2].setAttribute("href", "https://www.youtube.com/watch?v=uHs9FXMz2cM")
        atags[3].setAttribute("href", "https://www.youtube.com/watch?v=wNSwN6dcJcc")
        atags[4].setAttribute("href", "https://www.youtube.com/watch?v=sbrHY7PpXcA")
        atags[5].setAttribute("href", "https://www.youtube.com/watch?v=69hWiJPNlIE")
        atags[6].setAttribute("href", "https://www.youtube.com/watch?v=RVo4EUjznZ0")



    }
};
