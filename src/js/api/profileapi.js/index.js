
import { API_PROFILES } from "../storage/constans.js";
import { headers } from "../storage/headers.js";
import { hideLoader, showLoader } from "../../utils/loader.js";

export default class ProfileAPI {
  constructor() {
    this.apiProfile = API_PROFILES;
  }
  

  fetchData = async (endpoint) => {
    try {
      showLoader();
      const res = await fetch(endpoint, { headers: headers() });
      return res.ok ? await res.json() : null;
    } catch (error) {
      console.error("API Error:", error);
      return null;
    } finally {
      hideLoader();
    }
  };

  profile = {
    read: async (username) => {
      const endpoint = `${this.apiProfile}/${username}`;
      return await this.fetchData(endpoint);
    },
    update: async (username, data) => {
        const endpoint = `${this.apiProfile}/${username}`;
        return await this.fetchData(endpoint, "PUT", data);
      }
  };
}
