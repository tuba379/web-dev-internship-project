// Dark mode toggle
const toggleBtn = document.createElement("button");
toggleBtn.textContent = "Toggle Dark Mode";
toggleBtn.style.margin = "1rem";
document.querySelector("header").appendChild(toggleBtn);

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Dark mode styles
const style = document.createElement("style");
style.textContent = `
  .dark {
    background: #121212;
    color: #f1f1f1;
  }
  .dark header {
    background: #333;
    color: #f1f1f1;
  }
  .dark a {
    color: #80b3ff;
  }
`;
document.head.appendChild(style);

// Simple form validation example
document.addEventListener("DOMContentLoaded", () => {
  const contact = document.querySelector("#contact");
  if (contact) {
    const form = document.createElement("form");
    form.innerHTML = `
      <label>
        Your Email:
        <input type="email" required placeholder="name@example.com" />
      </label>
      <button type="submit">Submit</button>
    `;
    contact.appendChild(form);

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Form submitted successfully!");
    });
  }
});
