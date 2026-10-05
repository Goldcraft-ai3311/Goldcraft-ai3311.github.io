/* =========================================================
   GOLDCRAFT WEB STUDIO
   Main JavaScript
========================================================= */


/* =========================================================
   CURRENT YEAR
========================================================= */

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


/* =========================================================
   MOBILE MENU
========================================================= */

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


    document.querySelectorAll("nav a").forEach(link => {

        link.addEventListener("click", () => {

            if (window.innerWidth <= 900) {

                nav.classList.remove("mobile-open");
                nav.style.display = "";

            }

        });

    });

}


/* =========================================================
   PACKAGE SELECTION
========================================================= */

const packageButtons = document.querySelectorAll(".package-btn");

packageButtons.forEach(button => {

    button.addEventListener("click", () => {

        const selectedPackage =
            button.getAttribute("data-package");

        const messageField =
            document.querySelector('textarea[name="message"]');

        if (messageField && selectedPackage) {

            messageField.value =
                `I am interested in the ${selectedPackage} package. ` +
                `Please tell me more about the package and the next steps.`;

        }

    });

});


/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm =
    document.getElementById("contactForm");

const formMsg =
    document.getElementById("formMsg");


if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name =
            this.elements["name"].value.trim();

        const email =
            this.elements["email"].value.trim();

        const business =
            this.elements["business"].value.trim();

        const message =
            this.elements["message"].value.trim();


        /* Basic validation */

        if (!name || !email || !business || !message) {

            formMsg.textContent =
                "Please complete all fields.";

            formMsg.className = "form-error";

            return;

        }


        /* Email validation */

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            formMsg.textContent =
                "Please enter a valid email address.";

            formMsg.className = "form-error";

            return;

        }


        /* =================================================
           WHATSAPP MESSAGE
        ================================================= */

        const whatsappMessage =
`Hello GoldCraft Web Studio!

I would like to discuss a website project.

Name: ${name}

Email: ${email}

Business / Website Type:
${business}

Project Details:
${message}

I would like to know the price and next steps.`;


        const whatsappURL =
            "https://wa.me/923260936969?text=" +
            encodeURIComponent(whatsappMessage);


        /* =================================================
           EMAIL MESSAGE
        ================================================= */

        const emailSubject =
            `New Website Project Request - ${business}`;

        const emailBody =
`Hello GoldCraft Web Studio,

I would like to discuss a website project.

Name: ${name}
Email: ${email}
Business / Website Type: ${business}

Project Details:
${message}

Please let me know the price and next steps.

Thank you.`;


        const emailURL =
            "mailto:goldcraftweb@gmail.com" +
            "?subject=" +
            encodeURIComponent(emailSubject) +
            "&body=" +
            encodeURIComponent(emailBody);


        /* =================================================
           SHOW OPTIONS
        ================================================= */

        formMsg.innerHTML =
            `Your project details are ready.<br>
            <a href="${whatsappURL}"
               target="_blank"
               rel="noopener noreferrer"
               style="color:#25d366;font-weight:700;">
               → Send through WhatsApp
            </a>
            &nbsp;&nbsp;
            <a href="${emailURL}"
               style="color:#d7b56a;font-weight:700;">
               → Send by Email
            </a>`;

        formMsg.className = "form-success";


        /*
         * We intentionally do NOT reset the form here.
         * This allows the customer to check their details
         * before sending them.
         */

    });

}


/* =========================================================
   CLOSE MOBILE MENU WHEN RESIZING
========================================================= */

window.addEventListener("resize", () => {

    if (window.innerWidth > 900 && nav) {

        nav.style.display = "";
        nav.classList.remove("mobile-open");

    }

});
