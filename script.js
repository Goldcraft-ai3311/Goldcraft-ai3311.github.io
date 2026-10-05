const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


/* MOBILE MENU */

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


/* PACKAGE BUTTONS */

const packageButtons =
    document.querySelectorAll(".package-btn");

packageButtons.forEach(button => {

    button.addEventListener("click", () => {

        const selectedPackage =
            button.getAttribute("data-package");

        const messageField =
            document.querySelector('textarea[name="message"]');

        if (messageField) {

            messageField.value =
                `I am interested in the ${selectedPackage} package. Please tell me more about the package and the next steps.`;

        }

    });

});


/* CONTACT FORM */

const contactForm =
    document.getElementById("contactForm");

const formMsg =
    document.getElementById("formMsg");


if (contactForm) {

    contactForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const submitButton =
            this.querySelector('button[type="submit"]');

        const originalText =
            submitButton.textContent;

        submitButton.disabled = true;
        submitButton.textContent = "Sending...";

        formMsg.textContent = "";
        formMsg.className = "";


        try {

            const formData =
                new FormData(this);


            const response =
                await fetch("https://api.web3forms.com/submit", {

                    method: "POST",

                    body: formData

                });


            const result =
                await response.json();


            if (result.success) {

                formMsg.textContent =
                    "✓ Thank you! Your project request has been sent successfully. We will contact you soon.";

                formMsg.className =
                    "form-success";

                this.reset();

            } else {

                throw new Error(
                    result.message ||
                    "Something went wrong."
                );

            }


        } catch (error) {

            console.error(error);

            formMsg.textContent =
                "Sorry, your request could not be sent. Please contact us on WhatsApp or email.";

            formMsg.className =
                "form-error";

        }


        submitButton.disabled = false;
        submitButton.textContent = originalText;

    });

}


/* MOBILE MENU RESET */

window.addEventListener("resize", () => {

    if (window.innerWidth > 900 && nav) {

        nav.style.display = "";
        nav.classList.remove("mobile-open");

    }

});
