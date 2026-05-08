function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Matheus Sobreiro Machado sorrindo, em uma foto com filtro vermelho e um fundo desfocado.",
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Matheus Sobreiro Machado à frente do sol e uma bela paisagem de um vale ao fundo, agachado em cima de uma pedra.",
    )
  }
}
