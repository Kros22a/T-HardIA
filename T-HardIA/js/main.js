// Ejemplo de animación de entrada
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".card").forEach((card, i) => {
    card.style.opacity = "0"
    setTimeout(() => {
      card.style.transition = "opacity 1s"
      card.style.opacity = "1"
    }, 200 * i)
  })
})
