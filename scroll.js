// Variable to track animation progress
let animationInProgress = false;

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    // Prevent default behavior if animation is in progress
    if (animationInProgress) {
      e.preventDefault();
      return;
    }

    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    const targetId = target.getAttribute("id");

    // Set animation in progress
    animationInProgress = true;

    // Scroll to target
    target.scrollIntoView({
      behavior: "smooth",
    });

    // Add glowing effect to text elements within target section
    target.querySelectorAll("h1, h2, h3, h4, h5, h6, p").forEach((element) => {
      element.classList.add("glow");
    });

    // Remove glowing effect after 1 second
    setTimeout(() => {
      target
        .querySelectorAll("h1, h2, h3, h4, h5, h6, p")
        .forEach((element) => {
          element.classList.remove("glow");
        });

      // Set animation complete
      animationInProgress = false;
    }, 1000);
  });
});
