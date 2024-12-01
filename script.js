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
