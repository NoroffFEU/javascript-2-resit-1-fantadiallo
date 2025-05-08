import { FAVOURITES_KEY } from "./constans";

/**
 * Retrieves the list of favourite games from local storage.
 * @returns {Array<string>} An array of game IDs marked as favourites.
 */
export function getFavourites() {
  return JSON.parse(localStorage.getItem(FAVOURITES_KEY)) || [];
}

/**
 * Checks if a game is marked as a favourite.
 * @param {string} gameId - The ID of the game to check.
 * @returns {boolean} True if the game is a favourite, false otherwise.
 */
export function isFavourited(gameId) {
  return getFavourites().includes(gameId);
}

/**
 * Toggles the favourite status of a game.
 * If the game is already a favourite, it will be removed. Otherwise, it will be added.
 * @param {string} gameId - The ID of the game to toggle.
 */
export function toggleFavourite(gameId) {
  const favourites = getFavourites();
  const index = favourites.indexOf(gameId);

  if (index > -1) {
    favourites.splice(index, 1);
  } else {
    favourites.push(gameId);
  }

  localStorage.setItem(FAVOURITES_KEY, JSON.stringify(favourites));
}