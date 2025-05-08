import { API_GAMES } from "../../storage/constans.js";
import { headers } from "../../storage/headers.js";

export default class OldGamesApi {
  /**
   * Initializes the OldGamesApi with the API endpoint.
   */
  constructor() {
    this.apiEndpoint = API_GAMES;
  }

  /**
   * Fetches data from the API.
   * @param {string} endpoint - The API endpoint to fetch data from.
   * @param {string} [method="GET"] - The HTTP method to use.
   * @param {Object|null} [body=null] - The request body, if applicable.
   * @returns {Promise<Object>} The JSON response from the API.
   * @throws {Error} If the request fails.
   */
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

  /**
   * Retrieves all games from the API.
   * @returns {Promise<Array>} An array of all games.
   */
  async getAllGames() {
    const res = await this.fetchData(this.apiEndpoint);
    return res.data;
  }

  /**
   * Retrieves a game by its ID.
   * @param {string} id - The ID of the game.
   * @returns {Promise<Object>} The game data.
   */
  async getGameById(id) {
    const res = await this.fetchData(`${this.apiEndpoint}/${id}`);
    return res.data;
  }

  /**
   * Retrieves a random game from the API.
   * @returns {Promise<Object>} The random game data.
   */
  async getRandomGame() {
    const res = await this.fetchData(`${this.apiEndpoint}/random`);
    return res.data;
  }

  /**
   * Retrieves games filtered by genre.
   * @param {string} genre - The genre to filter games by.
   * @returns {Promise<Array>} An array of games matching the genre.
   */
  async getGamesByGenre(genre) {
    const allGames = await this.getAllGames();
    return allGames.filter(game =>
      game.genre?.map(g => g.toLowerCase()).includes(genre.toLowerCase())
    );
  }
}
