import xpresser = require("xpresser");
import config = require("./config");

// Start Xpresser
const $ = xpresser.init(config);

//Initialize Typescript for this project.
$.initializeTypescript(__filename);

// Boot
$.boot();