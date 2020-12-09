/**
 * Xpresser Extension Declaration file.
 * All Xpresser related types should be modified here.
 *
 * See: http://xpresserjs.com/typescript/initialize.html#xpresser-d-ts
 */

/**
 * Uncomment to Extend DollarSign Interface.
 */
/*
import "xpresser/types";

declare module "xpresser/types" {
    interface DollarSign {
        key: value
    }
}*/

import "@xpresser/session/custom-types";

/**
 * Extend Session Custom Data
 */
declare module "@xpresser/session/custom-types" {
    // New session keys can be added here.
    interface XSessionCustomData {
        theme?: string
    }
}
