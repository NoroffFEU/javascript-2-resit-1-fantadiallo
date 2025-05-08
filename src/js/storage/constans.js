/**
 * Base URL for the API.
 * @constant {string}
 */
export const API_BASE = 'https://v2.api.noroff.dev';

/**
 * Key for storing the access token in local storage.
 * @constant {string}
 */
export const ACCESS_TOKEN_KEY = 'accessToken';

/**
 * Key for storing the user data in local storage.
 * @constant {string}
 */
export const USER_KEY = 'user';

/**
 * Key for storing the user's favourite games in local storage.
 * @constant {string}
 */
export const FAVOURITES_KEY = 'favourites';

/**
 * API key for authentication.
 * @constant {string}
 */
export const API_KEY = 'eee2984b-02cd-4800-82cb-79cab62424af';

/**
 * Base URL for authentication-related API endpoints.
 * @constant {string}
 */
export const API_AUTH = `${API_BASE}/auth`;

/**
 * URL for the login API endpoint.
 * @constant {string}
 */
export const API_AUTH_LOGIN = `${API_AUTH}/login`;

/**
 * URL for the registration API endpoint.
 * @constant {string}
 */
export const API_AUTH_REGISTER = `${API_AUTH}/register`;

/**
 * URL for the old games API endpoint.
 * @constant {string}
 */
export const API_GAMES = `${API_BASE}/old-games`;

/**
 * URLSearchParams object for parsing query parameters from the current URL.
 * @constant {URLSearchParams}
 */
export const params = new URLSearchParams(window.location.search);

/**
 * Routes used in the application.
 * @constant {Object}
 * @property {string} LOGIN - Path to the login page.
 * @property {string} REGISTER - Path to the registration page.
 * @property {string} HOME - Path to the home page (list all games).
 * @property {string} GAME_DETAILS - Path to the individual game details page.
 * @property {string} GENRE_LIST - Path to the genre-based listing page (optional).
 * @property {string} PROFILE - Path to the user profile page.
 * @property {string} NOT_FOUND - Path to the 404 not found page.
 */
export const ROUTES = {
  LOGIN: '/auth/login.html',
  REGISTER: '/auth/register.html',
  HOME: '/',                             // List all games
  GAME_DETAILS: '/game/index.html',      // Show individual game
  GENRE_LIST: '/genre/index.html',       // Optional: Genre-based listing
  PROFILE: '/profile/index.html',        // Show user profile
  NOT_FOUND: '/NotFound/index.html',
};
