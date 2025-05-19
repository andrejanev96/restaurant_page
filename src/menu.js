function createMenuPage() {
  const menuDiv = document.createElement("div");

  const menuHeader = document.createElement("h1");
  menuHeader.textContent = "Janev's Menu";

  const appetizers = document.createElement("h2");
  appetizers.textContent = "Appetizers";

  const appetizerList = document.createElement("ul");
  const appetizer1 = document.createElement("li");
  appetizer1.textContent = "Bruschetta - $8";
  const appetizer2 = document.createElement("li");
  appetizer2.textContent = "Stuffed Mushrooms - $10";
  appetizerList.appendChild(appetizer1);
  appetizerList.appendChild(appetizer2);

  const mains = document.createElement("h2");
  mains.textContent = "Main Courses";

  const mainList = document.createElement("ul");
  const main1 = document.createElement("li");
  main1.textContent = "Grilled Salmon - $20";
  const main2 = document.createElement("li");
  main2.textContent = "Pasta Carbonara = $22";
  mainList.appendChild(main1);
  mainList.appendChild(main2);

  menuDiv.appendChild(menuHeader);
  menuDiv.appendChild(appetizers);
  menuDiv.appendChild(appetizerList);
  menuDiv.appendChild(mains);
  menuDiv.appendChild(mainList);

  return menuDiv;
}

// This function creates a menu page for the restaurant website.
export { createMenuPage };
