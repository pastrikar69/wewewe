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









const nextBtn = document.createElement("button");
nextBtn.textContent = "Question suivante";
nextBtn.style.display = "none"; 
document.body.appendChild(nextBtn);
nextBtn.addEventListener("click", () => {
    window.location.href = "2question1.html";  
});
const btn3 = document.getElementById("btn3");
if (btn3) {
    btn3.addEventListener("click", () => {
        nextBtn.style.display = "inline-block";
    });
}




const nextBtn1 = document.createElement("button");
nextBtn1.textContent = "Question Suivante";
nextBtn1.style.display = "none"; 
document.body.appendChild(nextBtn1);
nextBtn1.addEventListener("click", () => {
    window.location.href = "2question1.html";  
});
const btn2 = document.getElementById("btn2");
if (btn2) {
    btn2.addEventListener("click", () => {
        nextBtn1.style.display = "inline-block";
    });
}




const nextBtn2 = document.createElement("button");
nextBtn2.textContent = "Question Suivante";
nextBtn2.style.display = "none"; 
document.body.appendChild(nextBtn2);
nextBtn2.addEventListener("click", () => {
    window.location.href = "2question1.html";  
});
const btn1 = document.getElementById("btn1");
if (btn1) {
    btn1.addEventListener("click", () => {
        nextBtn2.style.display = "inline-block";
    });
}




const nextBtn3 = document.createElement("button");
nextBtn3.textContent = "Question Suivante";
nextBtn3.style.display = "none"; 
document.body.appendChild(nextBtn3);
nextBtn3.addEventListener("click", () => {
    window.location.href = "3question1.html";  
});
const btn10 = document.getElementById("btn10");
if (btn10) {
    btn10.addEventListener("click", () => {
        nextBtn3.style.display = "inline-block";
    });
}




const nextBtn4 = document.createElement("button");
nextBtn4.textContent = "Question Suivante";
nextBtn4.style.display = "none"; 
document.body.appendChild(nextBtn4);
nextBtn4.addEventListener("click", () => {
    window.location.href = "3question1.html";  
});
const btn11 = document.getElementById("btn11");
if (btn11) {
    btn11.addEventListener("click", () => {
        nextBtn4.style.display = "inline-block";
    });
}



const nextBtn5 = document.createElement("button");
nextBtn5.textContent = "Question Suivante";
nextBtn5.style.display = "none"; 
document.body.appendChild(nextBtn5);
nextBtn5.addEventListener("click", () => {
    window.location.href = "3question1.html";  
});
const btn12 = document.getElementById("btn12");
if (btn12) {
    btn12.addEventListener("click", () => {
        nextBtn5.style.display = "inline-block";
    });
}



const nextBtn6 = document.createElement("button");
nextBtn6.textContent = "Voir le resultat";
nextBtn6.style.display = "none"; 
document.body.appendChild(nextBtn6);
nextBtn6.addEventListener("click", () => {
    window.location.href = "fin.html";  
});
const btn19 = document.getElementById("btn19");
if (btn19) {
    btn19.addEventListener("click", () => {
        nextBtn6.style.display = "inline-block";
    });
}



const nextBtn7 = document.createElement("button");
nextBtn7.textContent = "Voir le resultat";
nextBtn7.style.display = "none"; 
document.body.appendChild(nextBtn7);
nextBtn7.addEventListener("click", () => {
    window.location.href = "fin.html";  
});
const btn20 = document.getElementById("btn20");
if (btn20) {
    btn20.addEventListener("click", () => {
        nextBtn7.style.display = "inline-block";
    });
}



const nextBtn8 = document.createElement("button");
nextBtn8.textContent = "Voir le resultat";
nextBtn8.style.display = "none"; 
document.body.appendChild(nextBtn8);
nextBtn8.addEventListener("click", () => {
    window.location.href = "fin.html";  
});
const btn21 = document.getElementById("btn21");
if (btn21) {
    btn21.addEventListener("click", () => {
        nextBtn8.style.display = "inline-block";
    });
}











































const nextBtn9 = document.createElement("button");
nextBtn9.textContent = "Question Suivante";
nextBtn9.style.display = "none"; 
document.body.appendChild(nextBtn9);
nextBtn3.addEventListener("click", () => {
    window.location.href = "2question2.html";  
});
const btn4 = document.getElementById("btn4");
if (btn4) {
    btn4.addEventListener("click", () => {
        nextBtn9.style.display = "inline-block";
    });
}




const nextBtn10 = document.createElement("button");
nextBtn10.textContent = "Question Suivante";
nextBtn10.style.display = "none"; 
document.body.appendChild(nextBtn10);
nextBtn10.addEventListener("click", () => {
    window.location.href = "2question2.html";  
});
const btn5 = document.getElementById("btn5");
if (btn5) {
    btn5.addEventListener("click", () => {
        nextBtn10.style.display = "inline-block";
    });
}



const nextBtn11 = document.createElement("button");
nextBtn11.textContent = "Question Suivante";
nextBtn11.style.display = "none"; 
document.body.appendChild(nextBtn11);
nextBtn11.addEventListener("click", () => {
    window.location.href = "2question2.html";  
});
const btn6 = document.getElementById("btn6");
if (btn6) {
    btn6.addEventListener("click", () => {
        nextBtn11.style.display = "inline-block";
    });
}


const nextBtn15 = document.createElement("button");
nextBtn15.textContent = "Question Suivante";
nextBtn15.style.display = "none"; 
document.body.appendChild(nextBtn15);
nextBtn15.addEventListener("click", () => {
    window.location.href = "3question2.html";  
});
const btn16 = document.getElementById("btn16");
if (btn16) {
    btn16.addEventListener("click", () => {
        nextBtn15.style.display = "inline-block";
    });
}



const nextBtn16 = document.createElement("button");
nextBtn16.textContent = "Question Suivante";
nextBtn16.style.display = "none"; 
document.body.appendChild(nextBtn16);
nextBtn16.addEventListener("click", () => {
    window.location.href = "3question2.html";  
});
const btn17 = document.getElementById("btn17");
if (btn17) {
    btn17.addEventListener("click", () => {
        nextBtn16.style.display = "inline-block";
    });
}



const nextBtn17 = document.createElement("button");
nextBtn17.textContent = "Question Suivante";
nextBtn17.style.display = "none"; 
document.body.appendChild(nextBtn17);
nextBtn17.addEventListener("click", () => {
    window.location.href = "3question2.html";  
});
const btn18 = document.getElementById("btn18");
if (btn18) {
    btn18.addEventListener("click", () => {
        nextBtn17.style.display = "inline-block";
    });
}
