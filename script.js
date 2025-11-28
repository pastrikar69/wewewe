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


document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
        window.location.href = "question3.html";
    });
});




const themeButton = document.querySelector('#bouton50');

themeButton.addEventListener('click', () => {
  document.body.classList.toggle('mode-claire');
  if (document.body.classList.contains('mode-claire')) {
    themeButton.textContent = "mode-sombre !";
  } else {
    themeButton.textContent = "mode-claire !";
  }
});






const boutons = document.querySelectorAll('.reponse');

boutons.forEach(bouton => {
    bouton.addEventListener('click', () => {
        if (bouton.dataset.correct === "true") {
            bouton.classList.add("bonne-reponse");
        } else {
            bouton.classList.add("mauvaise-reponse");
        }
        boutons.forEach(b => b.disabled = true);
    });
});

