// =======================
// Navbar Toggle
// =======================
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links a');
const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild(overlay);

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  overlay.classList.toggle('show');

  // Swap ☰ and ✖
  if (menuToggle.textContent === "☰") {
    menuToggle.textContent = "✖";
  } else {
    menuToggle.textContent = "☰";
  }
});

// Close nav on link click
links.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    overlay.classList.remove('show');
    menuToggle.textContent = "☰"; // reset hamburger
  });
});

// Close nav on overlay click
overlay.addEventListener('click', () => {
  navLinks.classList.remove('active');
  overlay.classList.remove('show');
  menuToggle.textContent = "☰"; // reset hamburger
});


// =======================
// Contact Form Submission
// =======================
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = new FormData(form);
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        form.reset(); // ✅ clear form fields
        status.style.display = "block";
        status.style.color = "green";
        status.style.background = "#8b9b8bff";
        status.style.padding = "10px";
        status.style.borderRadius = "6px";
        status.innerText = "Message sent successfully! I will get back to you soon.";

        // Hide after 5 seconds
        setTimeout(() => {
          status.style.display = "none";
        }, 5000);

      } else {
        status.style.display = "block";
        status.style.color = "red";
        status.style.background = "#ffe6e6";
        status.style.padding = "10px";
        status.style.borderRadius = "6px";
        status.innerText = "Oops! Something went wrong. Please try again.";
      }
    } catch (error) {
      status.style.display = "block";
      status.style.color = "red";
      status.style.background = "#ffe6e6";
      status.style.padding = "10px";
      status.style.borderRadius = "6px";
      status.innerText = "Network error. Please try again.";
    }
  });
}

// skill Section 

document.addEventListener("DOMContentLoaded", () => {
  // Animate linear progress bars
  document.querySelectorAll(".skill-progress").forEach((bar) => {
    const width = bar.getAttribute("data-width");
    setTimeout(() => {
      bar.style.width = width + "%";
    }, 200);
  });

  // Animate circular progress
  document.querySelectorAll(".circular-progress").forEach((circle) => {
    const percent = circle.getAttribute("data-percentage");
    circle.style.setProperty("--progress", percent + "%");
  });
});


// typing-effect

const words = ["Aspiring frontend Developer"];
let i = 0; // current word
let j = 0; // current letter
let isDeleting = false;
const typingElement = document.querySelector('.hero-content p');

function type() {
  const currentWord = words[i];
  typingElement.textContent = currentWord.substring(0, j);

  // Smooth speed: random variation for natural feel
  let speed = isDeleting ? 40 + Math.random() * 30 : 120 + Math.random() * 50;

  if (!isDeleting && j === currentWord.length + 1) {
    // Pause before deleting
    isDeleting = true;
    setTimeout(type, 800);
  } else if (isDeleting && j === 0) {
    // Pause before typing next word
    isDeleting = false;
    i = (i + 1) % words.length;
    setTimeout(type, 500);
  } else {
    // Move one letter forward/backward
    j = isDeleting ? j - 1 : j + 1;
    setTimeout(type, speed);
  }
}

// Start the typing animation
type();

// back to top button

const backToTop = document.getElementById("backToTop");

// Show button when scrolling down 100px
window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 100 ? "block" : "none";
});

// Smooth scroll to top on click
backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


