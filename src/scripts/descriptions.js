export function descriptions(){
    // tag for Map Description
    const aboutMap = document.createElement("h1");
    aboutMap.setAttribute("id", "map-description");
    const node = document.createTextNode("Most Popular Real Housewife of Atlanta of Each State");
    aboutMap.appendChild(node);
    const map = document.getElementById("map");
    const child = document.getElementById("positioning");
    map.insertBefore(aboutMap, child);

    // tag for Years Description
    const aboutYears = document.createElement("h2");
    aboutYears.setAttribute("id", "years-description");
    const node2 = document.createTextNode("Select a Year:");
    aboutYears.appendChild(node2);
    map.insertBefore(aboutYears, child)

        
    // tag for Legend Description
    const aboutLegend = document.createElement("h3");
    aboutLegend.setAttribute("id", "legend-description");
    const node3 = document.createTextNode("(Click on a Housewife for their Best Moments)");
    aboutLegend.appendChild(node3);
    map.insertBefore(aboutLegend, child);

    // tag for Legend Title
    const legendTitle = document.createElement("h2");
    legendTitle.setAttribute("id", "legend-title");
    const node4 = document.createTextNode("Legend");
    legendTitle.appendChild(node4);
    map.insertBefore(legendTitle, child);

    // tag for horizontal line
    const line = document.createElement("div")
    line.setAttribute("id", "horizontal-line")
    map.insertBefore(line, child)
}