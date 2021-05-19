import {loadGames, saveGame} from "./rest.js"

console.log("uff...")

const start = async e => {
    console.log("body is:", body)

    setupUI()
    render()
}
async function render() {
    const games = await loadGames()
    const body = document.getElementById("body")
    body.innerHTML = ""
    games.forEach(game => {
        const row = body.insertRow()
        row.innerHTML = `
            <td>${game.gameId}</td>
            <td>${game.name}</td>
            <td>${game.description}</td>
            <td>${game.publisher.name}</td>
        `
        row.addEventListener("click", e => rowSelected(game))
    })
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
        description,
        publisher: {
            name: "fake",
            publisherId: 10001
        }
    }
    await saveGame(game)
    dlg.style = "display:none"
    console.log("saved...")
    render()
}