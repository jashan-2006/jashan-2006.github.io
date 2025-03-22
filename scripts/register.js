document.addEventListener("DOMContentLoaded", function () {
    let apiKey = "dbd22dd020e7467a99a5c54bd5d2505a";
    const apiUrl = `https://api.rawg.io/api/games?key=${apiKey}&ordering=-rating&page_size=36`;
    const gamesContainer = document.getElementById("games-container");
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");

    async function fetchGames(url) {
        try {
            const response = await fetch(url);
            const data = await response.json();
            displayGames(data.results);
        } catch (error) {
            console.error("Error fetching games:", error);
        }
    }

    function displayGames(games) {
        gamesContainer.innerHTML = "";
        games.forEach(game => {
            const gameCard = document.createElement("div");
            gameCard.classList.add("game-card");
            gameCard.innerHTML = `
                <img src="${game.background_image}" alt="${game.name}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 10px;">
                <h2>${game.name}</h2>
                <p>${game.released ? "Released: " + game.released : "Release date unknown"}</p>
                <a href="https://battlefy.com" class="register-button" target="_blank">Register</a>
            `;
            gamesContainer.appendChild(gameCard);
        });
    }

    searchButton.addEventListener("click", function () {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            const searchUrl = `https://api.rawg.io/api/games?key=${apiKey}&search=${searchTerm}&page_size=12`;
            fetchGames(searchUrl);
        }
    });

    fetchGames(apiUrl);
});
