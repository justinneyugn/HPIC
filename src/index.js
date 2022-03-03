import {fn1} from "./scripts/map_render.js";
import {header} from "./scripts/header.js"
import {descriptions} from "./scripts/descriptions.js"

document.addEventListener("DOMContentLoaded", () => {
    header();
    fn1();
    descriptions();
})