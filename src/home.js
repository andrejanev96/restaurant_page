// Creates and returns the home page content

function createHomePage() {
  // Container for all home page content
  const homeDiv = document.createElement("div");

  // Creating the elements for the home page

  const welcomeHeader = document.createElement("h1");
  const restaurantImage = document.createElement("img");
  const welcomeText = document.createElement("p");
  const descriptionText = document.createElement("p");

  // Adding content to the elements
  welcomeHeader.textContent = "Welcome to Janev's Restaurant!";

  restaurantImage.src =
    "https://images.unsplash.com/photo-1546195643-70f48f9c5b87?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  restaurantImage.alt = "An image of Janev's Restaurant!";

  welcomeText.textContent =
    "Welcome to our restaurant, where we serve delicious food!";
  descriptionText.textContent =
    "We are committed to providing you with the best dining experience possible. Our chefs use only the freshest ingredients to create mouth-watering dishes that will leave you wanting more. Whether you're here for a special occasion or just a casual meal, we have something for everyone. Come and enjoy our warm hospitality and delicious food!";

  // Appending the elements to the homepage div
  homeDiv.appendChild(welcomeHeader);
  homeDiv.appendChild(restaurantImage);
  homeDiv.appendChild(welcomeText);
  homeDiv.appendChild(descriptionText);

  // Return the home page content
  return homeDiv;
}

// Export the function so that it can be used in other modules
// This allows us to import this function in other files
export { createHomePage };
