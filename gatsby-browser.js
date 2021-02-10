const addScript = url => {
  const script = document.createElement("script")
  script.src = url
  script.async = true
  document.body.appendChild(script)
}

export const onClientEntry = () => {
  window.onload = () => {
    addScript("./static/orb.js")
    addScript(
      "https://unpkg.com/aframe-environment-component@1.1.0/dist/aframe-environment-component.min.js"
    )
    addScript(
      "https://unpkg.com/aframe-layout-component@5.3.0/dist/aframe-layout-component.min.js"
    )
    addScript(
      "https://unpkg.com/aframe-troika-text/dist/aframe-troika-text.min.js"
    )
  }
}
