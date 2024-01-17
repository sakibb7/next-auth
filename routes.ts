/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = [
    "/",
]

/**
 * An array of routes that are used for authentication
 * These routes will redirect to login page
 * @type {string[]}
 */
export const authRoutes = [
    "/auth/login", 
    "/auth/registration", 
    "/auth/error"
]

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication process
 * @type {string}
 */

export const apiAuthPrefix = "/api/auth";

/**
 * default redirect path after login
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT = "/settings";