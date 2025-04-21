document.addEventListener("DOMContentLoaded", () => {
    const navItems = document.querySelectorAll(".nav-item");
    const sections = document.querySelectorAll(".section");

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
});