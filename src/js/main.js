// import css
import "../css/main.css";

// import 3rd party stuff
import Alpine from "alpinejs";

// import modules
import example from "./modules/example.js";
import modal from "./modules/modal.js";
import accordion from "./modules/accordion.js";
import carousel from "./modules/carousel.js";

// init modules
example();
modal();
accordion();

// init alpine
window.Alpine = Alpine;
Alpine.start();
