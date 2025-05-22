document.addEventListener("DOMContentLoaded", () => {
    const navItems = document.querySelectorAll(".nav-item");
    const sections = document.querySelectorAll(".section");
    const modalButtons = document.querySelectorAll(".open-modal");
    const closeButtons = document.querySelectorAll(".close");

    navItems.forEach((item, index) => {
        item.addEventListener("click", () => {
            // Hide all sections
            navItems.forEach((elem, i) =>{
                elem.style.color = "white"; 
                elem.style.fontWeight = "normal";
                sections[i].style.display = "none";
            });
            item.style.color = "red";
            item.style.fontWeight = "bold";
            // Show the corresponding section
            sections[index].style.display = "block";
        });
    });
    // Trigger click on the first nav item to show the first section by default
    navItems[0].click();

    modalButtons.forEach(button => {
        button.addEventListener("click", () => {
            const modalId = button.getAttribute("data-modal");
            document.getElementById(modalId).style.display = "block";
        });
    });

    closeButtons.forEach(close => {
        close.addEventListener("click", () => {
            close.closest(".modal").style.display = "none";
        });
    });

    window.addEventListener("click", event => {
        if (event.target.classList.contains("modal")) {
            event.target.style.display = "none";
        }
    });
});

function toggleMenu() {
    var menu = document.querySelector(".nav-menu");
    menu.classList.toggle("show");
}