import {loadGames, saveGame} from "./rest.js"

console.log("uff...")

const start = async e => {
    const body = document.getElementById("body")
    console.log("body is:", body)

    const games = await loadGames()
    games.forEach(game => {
        const row = body.insertRow()
        row.innerHTML = `
            <td>${game.gameId}</td>
            <td>${game.name}</td>
            <td>${game.description}</td>
        `
        row.addEventListener("click", e => rowSelected(game))
    })
    setupUI()
}
function rowSelected(game) {
    const hidden = document.getElementById("game-id")
    hidden.value = game.gameId
    console.log("bearbeite game", game)
    const dlg = document.getElementById('dlg')
    dlg.style.display="block"
    document.getElementById("header").innerHTML = `${game.description} bearbeiten`
    document.getElementById("game-name").value = `${game.name}`
    document.getElementById("game-description").value = `${game.description}`
//    alert(`bearbeite  ${game.name} ...`)
}
window.onload = start

function setupUI() {
    const saveButton = document.getElementById("save")
    saveButton.addEventListener("click", e => save())
}

async function save() {
    const dlg = document.getElementById('dlg')
    const hidden = document.getElementById("game-id")
    const name = document.getElementById("game-name").value
    const description = document.getElementById("game-description").value
    const game = {
        gameId: hidden.value,
        name,
        description
    }
    const response = await saveGame()
    const json = await response.json()
    console.log("saved...")
}