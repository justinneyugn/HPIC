import {fn1} from "./scripts/map_render.js";
import {header} from "./scripts/header.js"

document.addEventListener("DOMContentLoaded", () => {
    header();
    fn1();

    // tag for Map Description
    const aboutMap = document.createElement("h1")
    aboutMap.setAttribute("id", "map-description")
    const node = document.createTextNode("Most Popular Atlanta Housewife of Each State")
    aboutMap.appendChild(node);
    const map = document.getElementById("map")
    const child = document.getElementById("positioning")
    map.insertBefore(aboutMap, child)

    const aboutYears = document.createElement("h2")
        aboutYears.setAttribute("id", "years-description")
        const node2 = document.createTextNode("Select a Year for the Map:")
        aboutYears.appendChild(node2);
        const buttons = document.querySelector("#buttons")
        console.log(buttons)
        const childButton = document.getElementById("firstButton")
    // buttons.insertBefore(aboutYears, childButton)
})