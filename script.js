document.getElementById("year").textContent = new Date().getFullYear();

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");
menuBtn?.addEventListener("click", () => {
  nav.style.display = nav.style.display === "flex" ? "" : "flex";
  if (nav.style.display === "flex") {
    nav.style.position = "absolute";
    nav.style.top = "78px";
    nav.style.left = "0";
    nav.style.right = "0";
    nav.style.padding = "22px 7%";
    nav.style.background = "#0b0b0b";
    nav.style.flexDirection = "column";
    nav.style.alignItems = "flex-start";
  }
});

document.querySelectorAll("nav a").forEach(a => {
  a.addEventListener("click", () => {
    if (window.innerWidth <= 900) nav.style.display = "";
  });
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const msg = document.getElementById("formMsg");
  msg.textContent = "Thanks! Your request is ready to send. Connect this form to your email/WhatsApp before going live.";
  this.reset();
});
