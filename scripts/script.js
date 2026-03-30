const seemoreBtn = document.getElementById("btn");
const moreServices = document.querySelectorAll(".more-services");

seemoreBtn.addEventListener("click", () => {
    moreServices.forEach(service => {
        service.classList.toggle("active");
    });

    seemoreBtn.textContent =
        seemoreBtn.textContent === "See More"
            ? "See Less"
            : "See More";
});