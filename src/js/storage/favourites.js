import { FAVOURITES_KEY } from "./constans";

export function getFavourites() {
    return JSON.parse(localStorage.getItem(FAVOURITES_KEY)) || [];
  }
  
  export function isFavourited(gameId) {
    return getFavourites().includes(gameId);
  }
  
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