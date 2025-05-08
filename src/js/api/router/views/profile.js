import { authGuard } from "../../../storage/authGuard";
import { getUserName } from "../../../storage/user";

authGuard()


const profileNameEl = document.getElementById('profile-name');

if (profileNameEl) {
  profileNameEl.textContent = getUserName();
}