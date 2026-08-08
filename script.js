/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.querySelector(".menu-toggle");

const mobileMenu = document.querySelector(".mobile-menu");

menuToggle.addEventListener("click", () => {

    mobileMenu.classList.toggle("open");

});


document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("open");

    });

});



/* =========================
   SCROLL ANIMATIONS
========================= */

const revealElements =
    document.querySelectorAll(".reveal");


const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(element => {

    observer.observe(element);

});



/* =========================
   MENU FILTER
========================= */

const categories =
    document.querySelectorAll(".category");


const products =
    document.querySelectorAll(".product-card");


categories.forEach(category => {

    category.addEventListener("click", () => {


        categories.forEach(button => {

            button.classList.remove("active");

        });


        category.classList.add("active");


        const selectedCategory =
            category.dataset.category;


        products.forEach(product => {


            const productCategory =
                product.dataset.category;


            if (
                selectedCategory === "todos" ||
                selectedCategory === productCategory
            ) {

                product.style.display = "block";

            } else {

                product.style.display = "none";

            }

        });

    });

});