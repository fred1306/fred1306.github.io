/* =========================================================
   BulletByte Technologies — Main JS
   Handles navigation, scrolling, back-to-top,
   and form interactions across all pages.
   Packages page has its own JS inside packages.html.
   ========================================================= */

/* ---------- Back to Top Button ---------- */
const backToTopButton = document.getElementById("backToTop");

if (backToTopButton) {
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add("visible");
    } else {
      backToTopButton.classList.remove("visible");
    }
  });
}

/* ---------- Smooth Scrolling for Anchor Links ---------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (!targetId || targetId === "#" || targetId.length < 2) return;

    const target = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();
    window.scrollTo({
      top: target.offsetTop - 80,
      behavior: "smooth"
    });
  });
});

/* ---------- Mobile Navbar Auto Close ---------- */
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
const navbarToggler = document.querySelector(".navbar-toggler");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    const menu = document.querySelector(".navbar-collapse");
    if (menu && menu.classList.contains("show")) {
      navbarToggler.click();
    }
  });
});

/* ---------- Contact Form Submission (General Pages) ---------- */
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    alert("Thank you! Your request has been submitted. We will contact you shortly.");

    // Reset only after alert is closed
    setTimeout(() => {
      contactForm.reset();
    }, 200);
  });
}

/* ---------- Accessibility Enhancement: Focus Outline ---------- */
document.body.addEventListener("keyup", function (e) {
  if (e.key === "Tab") {
    document.body.classList.add("user-tabbing");
  }
});
