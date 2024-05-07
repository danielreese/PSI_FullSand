const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open")
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
};

// Header Container
ScrollReveal().reveal(".header-content p", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".header-content h1", {
    ...scrollRevealOption,
    delay:500
});

ScrollReveal().reveal(".header-content .header-btn", {
    ...scrollRevealOption,
    delay: 1000,
});

// About Container
ScrollReveal().reveal(".about-container .section-header", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".about-container .section-description", {
    ...scrollRevealOption,
    delay: 500,
});

// Blog Container
ScrollReveal().reveal(".blog-card", {
    ...scrollRevealOption,
    interval:500,
});

// Web Form to Google Sheets
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzcC5u_2xxmv9Tg7QJwTNICtw8K2Rw0O8y4dSVasWIkMqL3SHXBcNIT4LMr7LLra8sSdA/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("subscribe-msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Thank you for subscribing!"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  });
