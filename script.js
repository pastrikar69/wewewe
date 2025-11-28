console.log("bonjours a toute et a tous")


const titre = document.querySelector('#bouton27')
if (titre) {
  titre.addEventListener('click', () => {
    window.location.href = "niveau1.html";
  });
}

const titre2 = document.querySelector('#bouton28')
if (titre2) {
  titre2.addEventListener('click', () => {
    window.location.href = "niveau2.html";
  });
}

const titre3 = document.querySelector('#bouton29')
if (titre3) {
  titre3.addEventListener('click', () => {
    window.location.href = "niveau3.html";
  });
}


const titre4 = document.querySelector('#bouton')
if (titre4) {
  titre4.addEventListener('click', () => {
    window.location.href = "1question1.html";
  });
}

const titre5 = document.querySelector('#bouton30')
if (titre5) {
  titre5.addEventListener('click', () => {
    window.location.href = "1question2.html";
  });
}

const titre6 = document.querySelector('#bouton32')
if (titre6) {
  titre6.addEventListener('click', () => {
    window.location.href = "1question3.html";
  });
}

const titre7 = document.querySelector('#bouton29')
if (titre7) {
  titre7.addEventListener('click', () => {
    open("niveau3.html");
  });
}

const titre8 = document.querySelector('#bouton29')
if (titre8) {
  titre8.addEventListener('click', () => {
    open("niveau3.html");
  });
}

const titre9 = document.querySelector('#bouton29')
if (titre9) {
  titre9.addEventListener('click', () => {
    open("niveau3.html");
  });
}

const titre10 = document.querySelector('#bouton29')
if (titre10) {
  titre10.addEventListener('click', () => {
    open("niveau3.html");
  });
}



const titre11= document.querySelector('#bouton29')
if (titre11) {
  titre11.addEventListener('click', () => {
    open("niveau3.html");
  });
}




const themeButton = document.querySelector('#bouton50');

themeButton.addEventListener('click', () => {
  document.body.classList.toggle('mode-claire');
  if (document.body.classList.contains('mode-claire')) {
    themeButton.textContent = "mode-sombre !";
  } else {
    themeButton.textContent = "mode-claire !";
  }
});