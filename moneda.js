//Establecemos una constante de algunas funciones id y class
let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");

//Ahora cogemos el valor de la cara y la cruz para que sean cero
let heads = 0;
let tails = 0;

flipBtn.addEventListener("click", () => {
  // Todos los valores guardados en i
  // Math.random es un método que establece aleatoriamente un valor
  let i = Math.floor(Math.random() * 2);

    coin.style.animation = "none";

    if (i) {
    setTimeout(function () {
        coin.style.animation = "spin-heads 3s forwards";
    }, 100);
    heads++;
    } else {
    setTimeout(function () {
        coin.style.animation = "spin-tails 3s forwards";
    }, 100);
    tails++;
    }
  setTimeout(updateStats, 3000); // 1 segundo = 1000 milisegundos
    disableButton();
});

// Hemos activado el contador
function updateStats() {
    document.querySelector("#heads-count").textContent = `Heads: ${heads}`;
    document.querySelector("#tails-count").textContent = `Tails: ${tails}`;
}

//Hemos activado los botones de desactivación
//Cuando la moneda gira, el "Flip button" entra en modo deshabilitado
function disableButton() {
    flipBtn.disabled = true;
    setTimeout(function () {
    flipBtn.disabled = false;
    }, 3000);
}

//Tenemos activados los botones de reiniciar
resetBtn.addEventListener("click", () => {
    coin.style.animation = "none";
    heads = 0;
    tails = 0;
    updateStats();
});

