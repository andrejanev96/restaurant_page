function createContactPage() {
  const contactDiv = document.createElement("div");
  contactDiv.classList.add("contact-page");

  const contactHeader = document.createElement("h1");
  contactHeader.textContent = "Contact Us";

  const addressHeader = document.createElement("h2");
  addressHeader.textContent = "Address";
  const addressText = document.createElement("p");
  addressText.textContent = "123 Main St, Anytown, USA";

  const phoneHeader = document.createElement("h2");
  phoneHeader.textContent = "Phone";
  const phoneText = document.createElement("p");
  phoneText.textContent = "(123) 456-7890";

  const hoursHeader = document.createElement("h2");
  hoursHeader.textContent = "Hours";
  const hoursText = document.createElement("p");
  hoursText.textContent =
    "Monday - Friday: 11 AM - 10 PM\nSaturday - Sunday: 10 AM - 11 PM";

  contactDiv.appendChild(contactHeader);
  contactDiv.appendChild(addressHeader);
  contactDiv.appendChild(addressText);
  contactDiv.appendChild(phoneHeader);
  contactDiv.appendChild(phoneText);
  contactDiv.appendChild(hoursHeader);
  contactDiv.appendChild(hoursText);

  return contactDiv;
}

export { createContactPage };
