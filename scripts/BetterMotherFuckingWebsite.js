
function displayConfirmPopUp () {
    result = window.confirm("Coucou mon coquain, tu veux aller sur un site super chaud :) ?");
    if (result) {
        window.open("https://pixabay.com/en/photos/chatons/","_blank");
    }
}


setTimeout(displayConfirmPopUp, 5000);
