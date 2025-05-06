API_GAMES
import { API_GAMES } from "../../storage/constans.js";
import { headers } from "../storage/headers.js";

export default class OldGamesApi {
  constructor() {
    this.apiEndpoint =  API_GAMES ;
  }

  async fetchData(endpoint, method = "GET", body = null) {
    try {
      const response = await fetch(endpoint, {
        method,
        headers: headers(), 
        body: body ? JSON.stringify(body) : undefined,
      });

      if (!response.ok) {
        throw new Error(`Failed to ${method}: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Old Games API error:", error);
      throw error;
    }
  }

  async getAllGames() {
    const res = await this.fetchData(this.apiEndpoint);
    return res.data;
  }

  // Get game by ID
  async getGameById(id) {
    const res = await this.fetchData(`${this.apiEndpoint}/${id}`);
    return res.data;
  }

  // Get a random game
  async getRandomGame() {
    const res = await this.fetchData(`${this.apiEndpoint}/random`);
    return res.data;
  }
  // Get games filtered by genre
async getGamesByGenre(genre) {
    const allGames = await this.getAllGames();
    return allGames.filter(game =>
      game.genre?.map(g => g.toLowerCase()).includes(genre.toLowerCase())
    );
  }
  
}
