import {init} from "xpresser";
import config from "./config";

// Start Xpresser
const $ = init(config);

//Initialize Typescript for this project.
$.initializeTypescript(__filename);

// Boot
$.boot();