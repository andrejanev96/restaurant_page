function createAboutPage() {
  const aboutDiv = document.createElement("div");

  const aboutHeader = document.createElement("h1");
  aboutHeader.textContent = "About Janev's Restaurant";

  const aboutText = document.createElement("p");
  aboutText.textContent =
    "Janev's Restaurant is a family-owned establishment that has been serving delicious food for over 20 years. Our chefs are passionate about creating mouth-watering dishes using only the freshest ingredients. We believe in providing our customers with an unforgettable dining experience, and we strive to make every visit special. Whether you're here for a special occasion or just a casual meal, we have something for everyone. Come and enjoy our warm hospitality and delicious food!";

  const historyHeader = document.createElement("h2");
  historyHeader.textContent = "Our History";

  const historyText = document.createElement("p");
  historyText.textContent =
    "Founded in 2003, Janev's Restaurant started as a small family business with a passion for food. Over the years, we have grown into a beloved local establishment, known for our commitment to quality and service. Our menu has evolved, but our dedication to providing the best dining experience remains unchanged.";

  aboutDiv.appendChild(aboutHeader);
  aboutDiv.appendChild(aboutText);
  aboutDiv.appendChild(historyHeader);
  aboutDiv.appendChild(historyText);

  return aboutDiv;
}

export { createAboutPage };
