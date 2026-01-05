const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

// Toggle menu open/close
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// Close menu when nav link clicked
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });

    navLinks.classList.remove("active");
    hamburger.classList.remove("active");
  });
});
// Scroll reveal for timeline
const timelineItems = document.querySelectorAll(".timeline-item");

function revealTimeline() {
  const windowHeight = window.innerHeight;
  timelineItems.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;
    if (itemTop < windowHeight - 100) {
      item.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealTimeline);
window.addEventListener("load", revealTimeline);

// const bot = document.getElementById("bot");
// const botContainer = document.getElementById("bot-container");

// document.addEventListener("mousemove", (e) => {
//   // Bot position
//   const botRect = botContainer.getBoundingClientRect();
//   const botX = botRect.left + botRect.width / 2;
//   const botY = botRect.top + botRect.height / 2;

//   // Cursor position
//   const cursorX = e.clientX;
//   const cursorY = e.clientY;

//   // Calculate angle between bot center and cursor
//   const dx = cursorX - botX;
//   const dy = cursorY - botY;
//   const angle = Math.atan2(dy, dx) * (180 / Math.PI); // convert to degrees

//   // Rotate the bot toward cursor
//   bot.style.transform = `rotate(${angle}deg)`;
// });


// Smooth scroll for hero buttons
document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
  });
});

// Scroll arrow
function scrollToSection(id) {
  document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
}

// Highlight active section in nav
const sections = document.querySelectorAll("section, header");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 70;
    if (scrollY >= sectionTop) current = section.getAttribute("id");
  });

  navItems.forEach(a => {
    a.classList.remove("active-link");
    if (a.getAttribute("href") === "#" + current) {
      a.classList.add("active-link");
    }
  });
});
