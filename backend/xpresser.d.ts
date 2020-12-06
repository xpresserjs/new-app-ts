/**
 * All Xpresser related types should be modified here.
 */
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