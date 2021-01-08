import xpresser = require("xpresser");
import config = require("./config");

// Start Xpresser
const $ = xpresser.init(config, {exposeDollarSign: false});

//Initialize Typescript for this project.
$.initializeTypescript(__filename);

// Boot
$.boot();