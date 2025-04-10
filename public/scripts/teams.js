document.addEventListener("DOMContentLoaded", function () {
    const teamsContainer = document.getElementById("teams-container");
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");

    // Mock data for teams
    const teams = [
        {
            name: "Team Falcons",
            image: "https://esportsworldcup.com/assets/free_fire_cb532f4cd8.jpg?w=3840",
            players: ["Ratta Poom", "Phulipat Yosit", "Thanakorn Choompurad", "Yiw Natthapong" , "Rachata Wanaphurksasilp"],
            prizeMoney: "$300,000",
            description: " Team Falcons Free Fire #1 team (formerly Falcons Esports[3]) is a Saudi esports organization. Founded in 2017, the organization fields rosters in multiple esports. The org has garnered a reputation for pursuing high-profile players and coaches, being able to successfully construct superteams in the process.",
            history: `Team Falcons was co-founded in 2017 by Mossad Msdossary Al-Dossary, the winner of the 2018 FIFA eWorld Cup.[4] Msdossary also serves as the CEO of Team Falcons.[1] In August 2022, Grant Rousseau joined Falcons, serving as their Global Director of Esports.[4] Rousseau has stated that Msdossary's goal when founding Falcons was to develop an esports world for gamers in MENA. Indeed, being a Saudi organization, the team plays in MENA, EMEA, and Asian regions."`,
            readMoreLink: "https://www.falcons.sa/"
        },
        {
            name: "EVOS DIVINE",
            image: "https://assets.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/lombokpost/2022/03/F-EVOS.jpeg",
            players: ["Muhammad Akbar Mustafa", "Rasyah Rasyid", "Aji Apri Wicaksono", "Rayandra Eka"],
            prizeMoney: "$175,000",
            description: "EVOS Esports is a professional esports organization based in Jakarta, Indonesia. They have competitive teams in games like Mobile Legends: Bang Bang, Free Fire, and Pokemon Unite. EVOS Esports is known for their strategic excellence and championship wins",
            history:`"EVOS Esports was founded and operated by Ivan "ToxiCEO" Yeo, Wesley Yiu, Michael "Mike" Wijaya, and Hartman Harris.
            In December 2019, team rebranded to EVOS Esports."`,
            readMoreLink: "https://www.evos.gg/"
        },
        {
            name: "Twisted Minds",
            image: "https://wstatic-prod-boc.krafton.com/common/news/20231023/3G8auBCf.jpg",
            players: ["	Ibrahem Alali", "Ahmad Alyoubi", "Daniel Hathaway", "Hadi Daniel Bleinagel","Kim Hyeong-woo","Maximilian Otter","Abdualziz Altmimi"],
            prizeMoney: "$55,000",
            description: "Twisted Minds is a Saudi Arabian esports team that competes in PUBG. They are known for winning the PUBG Global Series 4, 5, and 6, and are considered legends in the PUBG Esports world. ",
            history:`In September 2022, Saudi Arabia presented the National Gaming and Esports Strategy (NGES), which aims to make the country a global center for the video game industry by 2030 in accordance to Saudi Vision 2030, a strategic plan led by Crown Prince Mohammed bin Salman to diversify the Saudi economy, create job opportunities, and reduce reliance on oil.[2][3] The NGES encompasses 86 initiatives spanning eight focus areas: Technology and hardware development, game production, e-sports, additional services, infrastructure, regulations, education and talent acquisition.`,
            readMoreLink: "https://pubgesports.com/en/teams/257"
        },
        {
            name: "17Gaming",
            image: "https://i.ytimg.com/vi/-epmFLhmMYM/maxresdefault.jpg",
            players: ["Luo Shengjun", "Tu Zhanya", "Wu Bo", "Wang Kang","Yang Yuxuan"],
            prizeMoney: "$2,431,753",
            description: `"In 2022, 17 Gaming achieved a remarkable 2nd place finish at the PUBG Global Championship, solidifying their status as a top-tier team in the international arena. ​
            PUBG: BATTLEGROUNDS."`,
            history:`If we look back at 17shou's team building history, when his team won the championship, there would always be an excellent info-scouting player in the team. 47gamer was one (won 4 tours with shou), 067 was another (won PCPI2 Champion and finished Top#3 in the PUBG Asia Invitational 2019). After going through the dark period of SMG, 17shou, who was on the verge of depression and wanting to commit suicide, finally bought LilGhost (500,000 Chinese RMB) from COC with his own money, even though he was still in the official suspension period at that time. Since then, 17 Gaming has gained a new lease of life, while SMG, founded by Singaporean Mandarin singer JJ Lin, announced the disbandment of the PUBG division.`,
            readMoreLink: "https://pubgesports.com/en/teams/24"
        },
    ];

    // Function to display teams
    function displayTeams(teams) {
        teamsContainer.innerHTML = "";

        teams.forEach(team => {
            const teamCard = document.createElement("div");
            teamCard.classList.add("team-card");

            teamCard.innerHTML = `
                <img src="${team.image}" alt="${team.name}">
                <h2>${team.name}</h2>
                <p><strong>Players:</strong> ${team.players.join(", ")}</p>
                <p><strong>Description:</strong> ${team.description}</p>
                <p><strong>History:</strong> ${team.history}</p>
                <p><strong>Prize Money:</strong> ${team.prizeMoney}</p>
                <a href="${team.readMoreLink}" class="read-more-button" target="_blank">Read More</a>
            `;

            teamsContainer.appendChild(teamCard);
        });
    }

    // Function to filter teams by keyword
    function filterTeams(keyword) {
        const filteredTeams = teams.filter(team => {
            return (
                team.name.toLowerCase().includes(keyword.toLowerCase()) ||
                team.players.some(player => player.toLowerCase().includes(keyword.toLowerCase())) ||
                team.description.toLowerCase().includes(keyword.toLowerCase())
            );
        });
        displayTeams(filteredTeams);
    }

    // Display all teams on page load
    displayTeams(teams);

    // Google Custom Search API integration
    const API_KEY = "AIzaSyDNTCGGCbzrmR35bM9FFD0CTr00v2HdVuA"; 
    const ENGINE_ID = "c61b11ea645ac499f"; 

    // Function to fetch web search results
    async function fetchWebSearchResults(query) {
        const url = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&key=${API_KEY}&cx=${ENGINE_ID}`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            return data.items || []; 
        } catch (error) {
            console.error("Error fetching search results:", error);
            return [];
        }
    }

// Function to display web search results
function displayWebResults(results) {
    teamsContainer.innerHTML = "";

    if (results.length === 0) {
        teamsContainer.innerHTML = `<p class="no-results">No results found.</p>`;
        return;
    }

    results.forEach(result => {
        const resultItem = document.createElement("div");
        resultItem.classList.add("result-item");

        // Extract image URL from page map 
        let imageUrl = "";
        if (result.pagemap && result.pagemap.cse_thumbnail) {
            imageUrl = result.pagemap.cse_thumbnail[0].src; 
        } else if (result.pagemap && result.pagemap.metatags && result.pagemap.metatags[0]["og:image"]) {
            imageUrl = result.pagemap.metatags[0]["og:image"]; 
        }

        resultItem.innerHTML = `
            ${imageUrl ? `<img src="${imageUrl}" alt="${result.title}">` : ""}
            <h2>${result.title}</h2>
            <p>${result.snippet}</p>
            <a href="${result.link}" target="_blank">Visit Page</a>
        `;

        teamsContainer.appendChild(resultItem);
    });
}// Function to fetch web search results
async function fetchWebSearchResults(query) {
    const url = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&key=${API_KEY}&cx=${ENGINE_ID}&num=9`; 

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.items || []; 
    } catch (error) {
        console.error("Error fetching search results:", error);
        return [];
    }
}

    // Event listener for search button
    searchButton.addEventListener("click", async () => {
        const keyword = searchInput.value.trim();
        if (keyword) {
            const webResults = await fetchWebSearchResults(keyword);
            displayWebResults(webResults);
        }
    });

    // Event listener for Enter key
    searchInput.addEventListener("keypress", async (event) => {
        if (event.key === "Enter") {
            const keyword = searchInput.value.trim();
            if (keyword) {
                const webResults = await fetchWebSearchResults(keyword);
                displayWebResults(webResults);
            }
        }
    });
});