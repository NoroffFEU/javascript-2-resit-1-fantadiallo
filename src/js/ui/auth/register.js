import AuthAPI from "../../api/auth";
const api = new AuthAPI();

/**
 * Handles the registration form submission.
 * Collects user input, sends the registration request, and redirects on success.
 * @param {Event} event - The form submission event.
 */
export async function onRegister(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  const user = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  };

  try {
    // Send registration request
    const result = await api.auth.register(user);
    console.log("Registration successful", result);

    alert("🎉 Registration successful! Please log in.");

    // Redirect to login page after a short delay
    setTimeout(() => {
      window.location.href = "/auth/login/index.html";
    }, 1500);
  } catch (error) {
    console.error("Error during registration:", error);
    alert("Registration failed. Please try again.");
  }
}