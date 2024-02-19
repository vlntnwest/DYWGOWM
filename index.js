function nextPage() {
    window.location.href = "yes.html";
  }

  function moveButton() {
    var x =
      Math.floor(Math.random() *
      (window.innerWidth - document.getElementById("noButton").offsetWidth - 150));
    var y =
      Math.floor(Math.random() *
      (window.innerHeight -
        document.getElementById("noButton").offsetHeight));

    document.getElementById("noButton").style.left = `${x}px`;
    document.getElementById("noButton").style.top = `${y}px`;
  }

   // Fonction pour détecter si l'appareil est un appareil mobile
   function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  }

   // Fonction pour gérer l'événement en fonction de l'appareil
   document.addEventListener('DOMContentLoaded', function () {
    var yesButton = document.getElementById('yesButton');
    var noButton = document.getElementById('noButton');
    
    if (isMobileDevice()) {
      // Si c'est un appareil mobile, utiliser onclick pour le bouton "No"
      noButton.onclick = moveButton;
    } else {
      // Sinon, utiliser onmouseover pour le bouton "No"
      noButton.onmouseover = moveButton;
    }
  });