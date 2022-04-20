# H.P.I.C. (Head Peach In Charge)

Since 2008, The Real Housewives of Atlanta has been on the forefront of pop culture. 
From the endless viral memes to the iconic fights, the show has seen multiple peaks in success, serving as a huge 
platform for their breakout stars while providing great reaction gifs throughout social media.

**[H.P.I.C.](https://justinneyugn.github.io/HPIC/)** captures the changing popularity throughout the cast by highlighting the most popular Housewife in each state on a rendered map of the U.S. 
As viewers believe the show's peak spanned from Season 4 to Season 8, **[H.P.I.C.](https://justinneyugn.github.io/HPIC/)** traverses through 2012 to 2016 and provides
a closer look at who spearheaded the show's popularity.



## Functionality 

With **[H.P.I.C.](https://justinneyugn.github.io/HPIC/)**, users can:

* Choose a year ranging from the show's fourth season to the eighth season to change the map
* Refer to a legend that displays which color on the map pertains to the most popular housewife
* Hover over a state to show the second most popular housewife of each state
* Click on a link for each member with their most iconic moment or fight on the show

In addition, this project includes:

* Subheadings to describe how to use each functionality
* Links to personal websites


## Technologies Used

* **Webpack** to bundle and transpile the source JavaScript code
* **D3** to render the map and data within it
* **Google Trends** to acquire the data

## Assigning Specific Color to State Based on Data

In order to change the fill of each state, an array was created that stored each housewives' percentage of popularity based on the dataset of the year that was being observed.
```javascript
let arr = [parseInt(dataset[i].Nene), parseInt(dataset[i].Kim), parseInt(dataset[i].Kandi), parseInt(dataset[i].Porsha), parseInt(dataset[i].Kenya)]
let biggest = Math.max(...arr);
dataValue = arr.indexOf(biggest);
```
The index of the biggest percentage was stored in the corresponding state's property within a "cast" key. Using the **d3.selectAll() function** in **D3.js**, the key was used to fill the state with the respective color based on a color array created prior.
```javascript
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
```

## Rendering Second Most Popular Housewife upon Hover
The **d3.select() function** was first used to create a *div* tag that would contain the text for the second most popular housewife. The **d3.selection.on() event listener** was then used to handle the *mouseover* and *mouseout* events by rendering this text upon hover over a specific state.
```javascript
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
```

