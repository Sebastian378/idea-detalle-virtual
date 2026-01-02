const scenes = document.querySelectorAll(".scene");
const botones = document.querySelectorAll(".btn-siguiente");
const card = document.querySelector(".card");

let escenaActual = 0;

botones.forEach(btn => {
  btn.addEventListener("click", () => {
    if (escenaActual < scenes.length - 1) {
      scenes[escenaActual].classList.remove("active");
      escenaActual++;
      scenes[escenaActual].classList.add("active");
    } else {
      scenes.forEach(scene => scene.style.display = "none");
      card.classList.add("active");
    }
  });
});
