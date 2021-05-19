import {loadGames} from "./rest.js"

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
}
function rowSelected(game) {
    console.log("row gelickt:", game)
}
window.onload = start

/*
function start() {
    const body = document.getElementById("body")
    console.log("body is:", body)
}
*/


