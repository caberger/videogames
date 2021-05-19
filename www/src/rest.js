const BASE_URL = "http://localhost:8080"

export async function loadGames() {
    const url = BASE_URL + "/game"
    const response = await fetch(url)
    const games = await response.json()
    console.log("Spiele:", games)
    return games
}
