import { API_GAMES } from "../../storage/constans";
import { headers } from "../../storage/headers";


export default class OldGamesApi {
  constructor() {
    this.apiEndpoint = API_GAMES;
  }

  async fetchData(endpoint, method = "GET", body = null) {
    try {
      const response = await fetch(endpoint, {
        method,
        headers: headers(), // Optional: use if required by API
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

  // Get all old games
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
