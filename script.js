// --------------------
// Navbar, Scroll, Fade-in, and Menu
// --------------------
const navbar = document.getElementById("navbar");
const links = navbar ? navbar.querySelectorAll("a") : [];
const heroVideo = document.querySelector(".hero-video");
const sections = document.querySelectorAll(".fade-in");
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

// Scroll events
window.addEventListener("scroll", () => {
  const y = window.scrollY;

  // Navbar scroll effect
  if (navbar) {
    if (y > 50) {
      navbar.classList.add("navbar-scrolled");
      links.forEach(link => {
        if (link.classList.contains("text-white")) {
          link.classList.replace("text-white", "text-green-600");
        }
      });
    } else {
      navbar.classList.remove("navbar-scrolled");
      links.forEach(link => {
        if (link.classList.contains("text-green-600")) {
          link.classList.replace("text-green-600", "text-white");
        }
      });
    }
  }

  // Parallax hero image
  if (heroVideo) {
    heroVideo.style.transform = `translateY(${y * 0.2}px)`;
  }

  // Fade-in sections
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });
});

// Initial fade-in on load
window.addEventListener("load", () => {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });
});

// Mobile menu toggle
if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navLinks.classList.toggle("open");
  });
}

// --------------------
// Tabs & Carousel Logic
// --------------------
const tabDeep = document.getElementById("tab-deep");
const tabML = document.getElementById("tab-ml");
const deepCards = document.querySelectorAll(".deep-card");
const mlCards = document.querySelectorAll(".ml-card");
const carousel = document.getElementById("carousel");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

// Run only if featured section exists
if (tabDeep && tabML && carousel && nextBtn && prevBtn) {
  // Tab switching
  tabDeep.addEventListener("click", () => {
    tabDeep.classList.add("text-green-400", "border-b-2", "border-green-400");
    tabML.classList.remove("text-green-400", "border-b-2", "border-green-400");
    tabML.classList.add("text-gray-400");

    deepCards.forEach(c => c.classList.remove("hidden"));
    mlCards.forEach(c => c.classList.add("hidden"));
  });

  tabML.addEventListener("click", () => {
    tabML.classList.add("text-green-400", "border-b-2", "border-green-400");
    tabDeep.classList.remove("text-green-400", "border-b-2", "border-green-400");
    tabDeep.classList.add("text-gray-400");

    deepCards.forEach(c => c.classList.add("hidden"));
    mlCards.forEach(c => c.classList.remove("hidden"));
  });

  // Carousel navigation
  nextBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: 300, behavior: "smooth" });
  });

  prevBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: -300, behavior: "smooth" });
  });
}
