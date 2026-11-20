
// Shopping bag counter
let bagCount = 0;

const bagLinks = document.querySelectorAll(".nav-actions a");

document.querySelectorAll(".add-button").forEach(button => {
  button.addEventListener("click", () => {
    bagCount++;

    const bagLink = bagLinks[bagLinks.length - 1];
    bagLink.textContent = `Bag (${bagCount})`;

    button.textContent = "Added to bag ✓";

    setTimeout(() => {
      button.textContent = "Add to bag +";
    }, 1500);
  });
});

// Newsletter form
const newsletterForm = document.querySelector(".newsletter-form");

newsletterForm.addEventListener("submit", event => {
  event.preventDefault();

  const email = newsletterForm.querySelector("input").value;

  alert(`Thank you for subscribing, ${email}! Welcome to Pretty Little Things.`);

  newsletterForm.reset();
});
