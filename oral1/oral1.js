const words = ["IPCA", "João", "Joana", "Rui", "Pereira", "Uma árvore", "Programação Web"]
const text = document.getElementById("word")

function showWord() {
  const index = Math.floor(Math.random() * words.length)
  text.style.display = "block"
  document.getElementById("word").innerText = words[index]
}