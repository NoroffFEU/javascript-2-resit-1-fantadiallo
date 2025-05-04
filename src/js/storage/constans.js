export const API_BASE = 'https://v2.api.noroff.dev';

export const ACCESS_TOKEN_KEY = 'accessToken';
export const USER_KEY = 'user';
export const FAVOURITES_KEY = 'favourites';

export const API_AUTH = `${API_BASE}/auth`;
export const API_AUTH_LOGIN = `${API_AUTH}/login`;
export const API_AUTH_REGISTER = `${API_AUTH}/register`;

export const API_GAMES = `${API_BASE}/old-games`;

export const params = new URLSearchParams(window.location.search);

export const ROUTES = {
  LOGIN: '/auth/login.html',
  REGISTER: '/auth/register.html',
  HOME: '/', // List all games
  GAME_DETAILS: '/game/index.html', // Show individual game
  GENRE_LIST: '/genre/index.html', // Optional: Genre-based listing
  PROFILE: '/profile/index.html', // Show user profile
  NOT_FOUND: '/NotFound/index.html',
};
