const BASE_URL = "http://localhost:8080"
const url = BASE_URL + "/game"

export async function loadGames() {
    const response = await fetch(url)
    const games = await response.json()
    console.log("Spiele:", games)
    return games
}
export async function saveGame(game) {
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(game)
      })
}
