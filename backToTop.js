//Wait for DOM
document.addEventListener("DOMContentLoaded", function() {
    //Create the button
    const backToTopButton = document.createElement("button");
    backToTopButton.innerHTML = "↑";
    backToTopButton.id = "backToTop";
    document.body.appendChild(backToTopButton);

    //Style
    backToTopButton.style.position = "fixed";
    backToTopButton.style.bottom = "40px";
    backToTopButton.style.right = "40px";
    backToTopButton.style.padding = "10px 15px";
    backToTopButton.style.fontSize = "16px";
    backToTopButton.style.backgroundColor = "#1d2b44";
    backToTopButton.style.color = "white";
    backToTopButton.style.border = "none";
    backToTopButton.style.borderRadius = "5px";
    backToTopButton.style.cursor = "pointer";
    backToTopButton.style.display = "none";
    backToTopButton.style.zIndex = "1000";
    backToTopButton.style.boxShadow = "0 2px 8px rgba(0,0,0,0.3)";
    backToTopButton.style.transition = "opacity 0.3s ease";

    window.addEventListener("scroll", function() {
        if (window.scrollY > 200) {
        backToTopButton.style.display = "block";
        backToTopButton.style.opacity = "1";
        } else {
        backToTopButton.style.opacity = "0";
        backToTopButton.style.display = "none";
        }
    });


    backToTopButton.addEventListener("click", function() {
        window.scrollTo({
        top: 0,
        behavior: "smooth"
        });
    });
});
