document.addEventListener("DOMContentLoaded", () => {
  let isMobile = AFRAME.utils.device.isMobile()
  if (isMobile) {
    let home_text = document.getElementById("home_text")
    home_text.setAttribute("style", "display: none")

    let click_drag = document.getElementById("click_drag")
    click_drag.innerText = "click + drag to rotate"
  }
})
