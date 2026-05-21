const rain = document.querySelector(".rain");

function createRain(){

    for(let i = 0; i < 2; i++){

        const drop = document.createElement("div");

        drop.classList.add("drop");

        drop.style.left =
        Math.random() * window.innerWidth + "px";

        drop.style.animationDuration =
        (Math.random() * 1 + 1) + "s";

        rain.appendChild(drop);

        setTimeout(() => {
            drop.remove();
        }, 3000);
    }
}

setInterval(createRain, 200);
function startReading(){

    window.location.href = "library.html";
}