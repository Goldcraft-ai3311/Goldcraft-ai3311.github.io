// Current year
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// Mobile menu
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {

        const isOpen = nav.classList.toggle("mobile-open");

        if (isOpen) {
            nav.style.display = "flex";
            nav.style.position = "absolute";
            nav.style.top = "78px";
            nav.style.left = "0";
            nav.style.right = "0";
            nav.style.padding = "22px 7%";
            nav.style.background = "#0b0b0b";
            nav.style.flexDirection = "column";
            nav.style.alignItems = "flex-start";
            nav.style.gap = "18px";
        } else {
            nav.style.display = "";
        }
    });
}


// Close mobile menu when link is clicked
document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        if (window.innerWidth <= 900) {
            nav.style.display = "";
            nav.classList.remove("mobile-open");
        }

    });

});


// Contact form
const contactForm = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

if (contactForm) {

    contactForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const submitButton = contactForm.querySelector(
            'button[type="submit"]'
        );

        const originalText = submitButton.textContent;

        submitButton.disabled = true;
        submitButton.textContent = "Sending...";

        formMsg.textContent = "Sending your request...";
        formMsg.className = "form-sending";

        try {

            const formData = new FormData(contactForm);

            const object = Object.fromEntries(formData.entries());

            const json = JSON.stringify(object);

            const response = await fetch(
                "https://api.web3forms.com/submit",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: json
                }
            );

            const result = await response.json();

            console.log("Web3Forms response:", result);

            if (response.ok && result.success) {

                formMsg.textContent =
                    "✓ Request sent successfully! We will contact you soon.";

                formMsg.className = "form-success";

                contactForm.reset();

            } else {

                formMsg.textContent =
                    "✕ " +
                    (result.message ||
                    "Your request could not be sent. Please try again.");

                formMsg.className = "form-error";

            }

        } catch (error) {

            console.error("Form error:", error);

            formMsg.textContent =
                "✕ Connection error. Please try again or contact us on WhatsApp.";

            formMsg.className = "form-error";

        }

        submitButton.disabled = false;
        submitButton.textContent = originalText;

    });

}


// Keep desktop navigation normal after resizing
window.addEventListener("resize", () => {

    if (window.innerWidth > 900 && nav) {

        nav.style.display = "";
        nav.classList.remove("mobile-open");

    }

});
