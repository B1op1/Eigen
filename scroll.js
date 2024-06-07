// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    window.scrollTo({
      top: target.offsetTop,
      behavior: "smooth",
    });

    // Close the sidebar if it's active
    const sidebar = document.querySelector(".sidebar");
    if (sidebar.classList.contains("active")) {
      sidebar.classList.remove("active");
    }
  });
});

let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");

btn.onclick = function () {
  sidebar.classList.toggle("active");
};
