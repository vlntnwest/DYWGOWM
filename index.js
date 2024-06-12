const mainTitle = document.querySelector("h1");
const imgContainer = document.querySelector(".img-container");
const buttons = document.querySelector(".buttons");

const utils = {
  pageContent: function (title, img, btns) {
    mainTitle.innerHTML = title;
    imgContainer.innerHTML = img;
    buttons.innerHTML = btns;
  },
};

const page = {
  home: function () {
    utils.pageContent(
      "Do you want to go on a date with me?",
      "<img src='./img/love_gif.webp' alt='Cute animated illustration' />",
      "<button class='btn' id='yesButton'>Yes</button><button class='btn' id='noButton'>No</button>"
    );
    yesButton.addEventListener("click", () => this.yesPage());
  },

  yesPage: function () {
    utils.pageContent(
      "Congratulation, you earned a special time with me",
      "<img src='./img/yes_gif.webp' alt='' />",
      null
    );
  },
};

page.home();

function moveButton() {
  var x = Math.floor(
    Math.random() *
      (window.innerWidth -
        document.getElementById("noButton").offsetWidth -
        150)
  );
  var y = Math.floor(
    Math.random() *
      (window.innerHeight - document.getElementById("noButton").offsetHeight)
  );

  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
}

// Fonction pour gérer l'événement en fonction de l'appareil
function isMobile() {
  if (window.innerWidth < 700) {
    // Sinon, utiliser onmouseover pour le bouton "No"
    noButton.onclick = moveButton;
  } else {
    // Si c'est un appareil mobile, utiliser onclick pour le bouton "No"
    noButton.onmouseover = moveButton;
  }
}
isMobile();
