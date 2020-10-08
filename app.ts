import xpresser from "xpresser";
import config from "./config"

const $ = xpresser(config);
/**
 * Initialize Typescript for this project.
 */
$.initializeTypescript(__filename);



// Boot
$.boot();