// import css
import "../css/main.css";

// import 3rd party stuff
import Alpine from "alpinejs";
import Glide from "@glidejs/glide";

// import modules
import example from "./modules/example.js";
import modal from "./modules/modal.js";
import accordion from "./modules/accordion.js";

// Lazy image loading
import "lazysizes";

// init modules
example();
modal();
accordion();

// init alpine
window.Alpine = Alpine;
window.Glide = Glide;
Alpine.start();
