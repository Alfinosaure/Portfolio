window.addEventListener('load', setup);

var popup;

function setup() {
    const loadingScreen = document.getElementById('loading-screen');
    const minimumTime = 500; // Minimum de 1 seconde

    // Transition douce pour l'opacité
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        loadingScreen.style.transition = 'opacity 0.5s ease';
    }, minimumTime);

    // Suppression complète après la transition
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, minimumTime + 500); // Temps minimum + durée de la transition

    popup = document.getElementById("pop-up");
    const close = document.getElementById("close");

    close.addEventListener("click", closePopup);

    // Vérifie si la pop-up a déjà été vue dans la session
    if (!sessionStorage.getItem('popupSeen')) {
        // Si non, affiche la pop-up
        popup.style.display = "block";

        // Enregistre dans le sessionStorage que la pop-up a été vue
        sessionStorage.setItem('popupSeen', 'true');
    }
}

function closePopup() {
    popup.style.display = "none";
}


// caroussel 
document.addEventListener("DOMContentLoaded", function() {
    const carousels = document.querySelectorAll(".carousel");

    carousels.forEach(carousel => {
        let index = 0;
        const images = carousel.querySelectorAll(".carousel-container img");
        const totalImages = images.length;
        const prevBtn = carousel.querySelector(".prev");
        const nextBtn = carousel.querySelector(".next");

        function showImage(i) {
            index = (i + totalImages) % totalImages;
            const translateX = -index * 100;
            carousel.querySelector(".carousel-container").style.transform = `translateX(${translateX}%)`;
        }

        prevBtn.addEventListener("click", () => showImage(index - 1));
        nextBtn.addEventListener("click", () => showImage(index + 1));
    });
});



