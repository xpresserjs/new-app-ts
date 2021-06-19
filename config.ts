/**
 * Your App Configuration
 */
export = {
    /**
     * Set Application Environment.
     */
    env: "development",
    /**
     * Set Name of Application.
     */
    name: "Xpresser App",

    /**
     * Project Settings.
     */
    project: {
        theme: "bulma"
    },


    /**
     * Path settings..
     */
    paths: {

        /**
         * Base Folder
         * Where this app is called from.
         *
         * Best value for this is: __dirname
         */
        base: __dirname,


        /**
         * Xpresser has special string paths
         * and base:// simply means xpresser should
         * use base path.
         *
         * See file: xpresser/src/config.ts
         * For all default Config options.
         */
        backend: 'base://backend',

        /**
         * By default if not set xjs will use base://backend/routes.js
         * Since this is not a framework app..
         */
        routesFile: 'backend://routes.ts'
    },

    /**
     * By default xjs sets this for you.
     */
    server: {
        baseUrl: '/',

        // Server Port
        port: 3000,

        /**
         * By default port is excluded if its [80, 443]
         * You can also decide to exclude port in url
         * by setting this to false
         */
        includePortInUrl: true,
    },
};