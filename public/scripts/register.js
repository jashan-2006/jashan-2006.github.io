document.addEventListener("DOMContentLoaded", function () {
    let apiKey = "dbd22dd020e7467a99a5c54bd5d2505a"; 
    const gamesContainer = document.getElementById("games-container");
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    const loadingSpinner = document.getElementById("loading-spinner");

    // List of games available on Battlefy
    const battlefyGames = [
        "PUBG: Battlegrounds",
        "Free Fire",
        "Fortnite",
        "Valorant",
        "Apex Legends",
        "Call of Duty: Warzone",
        "Rocket League",
        "League of Legends",
        "Dota 2",
        "CS:GO",
        "Overwatch",
        "Rainbow Six Siege",
        "Hearthstone",
        "Teamfight Tactics",
        "Wild Rift",
        "Clash Royale",
        "Clash of Clans",
        "Brawl Stars",
        "Arena of Valor",
        "Mobile Legends: Bang Bang",
    ];

    // Function to fetch specific game details by name
    async function fetchGameDetails(gameName) {
        try {
            const response = await fetch(`https://api.rawg.io/api/games?key=${apiKey}&search=${encodeURIComponent(gameName)}&page_size=1`);
            if (!response.ok) {
                throw new Error(`Failed to fetch details for ${gameName}: ${response.statusText}`);
            }
            const data = await response.json();
            if (data.results.length === 0) {
                console.warn(`No results found for game: ${gameName}`);
                return null;
            }
            return data.results[0]; // Return the first result
        } catch (error) {
            console.error(`Error fetching ${gameName} details:`, error);
            return null;
        }
    }

    // Function to get the Battlefy registration link for a game
    function getBattlefyRegistrationLink(gameName) {
        // Map game names to their respective Battlefy registration pages
        const battlefyLinks = {
            "PUBG: Battlegrounds": "https://battlefy.com/p/pubg-mobile",
            "Free Fire": "https://battlefy.com/p/free-fire",
            "Fortnite": "https://battlefy.com/p/fortnite",
            "Valorant": "https://battlefy.com/p/valorant",
            "Apex Legends": "https://battlefy.com/p/apex-legends",
            "Call of Duty: Warzone": "https://battlefy.com/p/call-of-duty-warzone",
            "Rocket League": "https://battlefy.com/p/rocket-league",
            "League of Legends": "https://battlefy.com/p/league-of-legends",
            "Dota 2": "https://battlefy.com/p/dota-2",
            "CS:GO": "https://battlefy.com/p/csgo",
            "Overwatch": "https://battlefy.com/p/overwatch",
            "Rainbow Six Siege": "https://battlefy.com/p/rainbow-six-siege",
            "Hearthstone": "https://battlefy.com/p/hearthstone",
            "Teamfight Tactics": "https://battlefy.com/p/teamfight-tactics",
            "Wild Rift": "https://battlefy.com/p/wild-rift",
            "Clash Royale": "https://battlefy.com/p/clash-royale",
            "Clash of Clans": "https://battlefy.com/p/clash-of-clans",
            "Brawl Stars": "https://battlefy.com/p/brawl-stars",
            "Arena of Valor": "https://battlefy.com/p/arena-of-valor",
            "Mobile Legends: Bang Bang": "https://battlefy.com/p/mobile-legends-bang-bang",
        };

        // Return the Battlefy link if the game exists in the map, otherwise return the Battlefy homepage
        return battlefyLinks[gameName] || "https://battlefy.com";
    }

    // Function to fetch games based on a search term
    async function fetchSearchResults(searchTerm) {
        try {
            const response = await fetch(`https://api.rawg.io/api/games?key=${apiKey}&search=${encodeURIComponent(searchTerm)}&page_size=10`);
            if (!response.ok) {
                throw new Error(`Failed to fetch search results: ${response.statusText}`);
            }
            const data = await response.json();
            return data.results;
        } catch (error) {
            console.error("Error fetching search results:", error);
            return [];
        }
    }

    // Function to display games
    function displayGames(games) {
        gamesContainer.innerHTML = ""; // Clear the container before displaying new games

        if (games.length === 0) {
            gamesContainer.innerHTML = "<p>No games found.</p>";
            return;
        }

        games.forEach(game => {
            const gameCard = document.createElement("div");
            gameCard.classList.add("game-card");
            const registrationLink = getBattlefyRegistrationLink(game.name);
            gameCard.innerHTML = `
                <img src="${game.background_image}" alt="${game.name}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 10px;">
                <h2>${game.name}</h2>
                <p>${game.released ? "Released: " + game.released : "Release date unknown"}</p>
                <a href="${registrationLink}" class="register-button" target="_blank">Register</a>
            `;
            gamesContainer.appendChild(gameCard);
        });
    }

    // Function to handle search
    async function performSearch() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            loadingSpinner.style.display = "block"; // Show spinner
            const searchResults = await fetchSearchResults(searchTerm);
            displayGames(searchResults);
            loadingSpinner.style.display = "none"; // Hide spinner
        } else {
            // If the search term is empty, reload the initial games
            fetchInitialGames();
        }
    }

    // Function to fetch initial games (Battlefy games)
    async function fetchInitialGames() {
        try {
            loadingSpinner.style.display = "block"; // Show spinner
            // Fetch details for games available on Battlefy
            const games = [];
            for (const gameName of battlefyGames) {
                const gameDetails = await fetchGameDetails(gameName);
                if (gameDetails) {
                    games.push(gameDetails);
                }
            }

            // Display the games (limit to 36)
            displayGames(games.slice(0, 36));
            loadingSpinner.style.display = "none"; // Hide spinner
        } catch (error) {
            console.error("Error fetching initial games:", error);
            loadingSpinner.style.display = "none"; // Hide spinner
        }
    }

    // Search when the button is clicked
    searchButton.addEventListener("click", performSearch);

    // Search when the Enter key is pressed
    searchInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            performSearch();
        }
    });

    // Fetch initial games on page load
    fetchInitialGames();
});