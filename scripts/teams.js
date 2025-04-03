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
            history: `Team Falcons was co-founded in 2017 by Mossad Msdossary Al-Dossary, the winner of the 2018 FIFA eWorld Cup.[4] Msdossary also serves as the CEO of Team Falcons.[1] In August 2022, Grant Rousseau joined Falcons, serving as their Global Director of Esports.[4] Rousseau has stated that Msdossary's goal when founding Falcons was to develop an esports world for gamers in MENA. Indeed, being a Saudi organization, the team plays in MENA, EMEA, and Asian regions. Since its founding, a lot of Falcons' branding work has been focused on achieving popularity in MENA and Europe, in a similar fashion to the American FaZe Clan.[4] The organization's financial backers have not been formally announced, though Nicholas Taifalos of Dot Esports wrote that it is believed [the org has] connections with the Saudi royal family.
            In July 2022, Gamers8 (a tournament organized by the Saudi Esports Federation), announced that Team Falcons would have their own dedicated spaces at an event in Riyadh.[1] These two spaces were Falcons Arena and Falcons District; the former featured gaming tournaments, meet-and-greet events, and a live cooking show.[1] The latter space featured merchandise, a museum showcasing the team's accomplishments, a gaming PC center, the "Learn to be a PRO" academy, and a streaming area.[1] "Gamers8: The Land of Heroes", another esports festival was held in 2023 at Boulevard Riyadh City.[10] The festival included an attraction dubbed Falcons HQ, where visitors could play against gaming influencers.
            Falcons has been documented targeting high-profile players and coaches who have considerable past success in professional esports, in hopes of signing them.[11] The org has been successful in their courting of these players and coaches, developing a reputation of forming what esports media writers have referred to as "superteams" in various different esports.[8][9][12] Some players, however, have turned down joining Falcons,[13] with Canadian Counter-Strike player "Twistzz" even stating "obviously, if I wanted the bag and I didn't care about my career, then I would go to Falcons. But I do care about my career. I have morals and it's not about the money."[14] In 2023 and 2024, the organization made a push to form rosters across multiple esports. Taifalos wrote that "Many gaming fans and pundits have likened Falcons' push into esports to sportswashing."`,
            readMoreLink: "https://www.falcons.sa/"
        },
        {
            name: "EVOS DIVINE",
            image: "https://assets.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/lombokpost/2022/03/F-EVOS.jpeg",
            players: ["Muhammad Akbar Mustafa", "Rasyah Rasyid", "Aji Apri Wicaksono", "Rayandra Eka"],
            prizeMoney: "$175,000",
            description: "EVOS Esports is a professional esports organization based in Jakarta, Indonesia. They have competitive teams in games like Mobile Legends: Bang Bang, Free Fire, and Pokemon Unite. EVOS Esports is known for their strategic excellence and championship wins",
            history:`"EVOS Esports was founded and operated by Ivan "ToxiCEO" Yeo, Wesley Yiu, Michael "Mike" Wijaya, and Hartman Harris. The organization started in 2016 as a newly formed Dota 2 team. The team has achieved many title wins and successful title defenses, earning great respect and success in a very short span of time. As time passed, the Dota 2 and Point Blank teams were disbanded and newer divisions start to appear in different games such as Mobile Legends, Free Fire, and PUBG Mobile.
            2019 was the culmination of EVOS Esports' glory because they won a global-scale tournament in 2 different titles - that is the Free Fire division which managed to win the Free Fire World Cup 2019 in Thailand Bangkok, and the Mobile Legends division which won the M1 World Championship 2019 in Malaysia Kuala Lumpur.
            In April 2019, they entered Free Fire by acquiring Capital Esports's roster and became EVOS Capital.
            In December 2019, team rebranded to EVOS Esports."`,
            readMoreLink: "https://www.evos.gg/"
        },
        {
            name: "Twisted Minds",
            image: "https://wstatic-prod-boc.krafton.com/common/news/20231023/3G8auBCf.jpg",
            players: ["	Ibrahem Alali", "Ahmad Alyoubi", "Daniel Hathaway", "Hadi Daniel Bleinagel","Kim Hyeong-woo","Maximilian Otter","Abdualziz Altmimi"],
            prizeMoney: "$55,000",
            description: "Twisted Minds is a Saudi Arabian esports team that competes in PUBG. They are known for winning the PUBG Global Series 4, 5, and 6, and are considered legends in the PUBG Esports world. ",
            history:`In September 2022, Saudi Arabia presented the National Gaming and Esports Strategy (NGES), which aims to make the country a global center for the video game industry by 2030 in accordance to Saudi Vision 2030, a strategic plan led by Crown Prince Mohammed bin Salman to diversify the Saudi economy, create job opportunities, and reduce reliance on oil.[2][3] The NGES encompasses 86 initiatives spanning eight focus areas: Technology and hardware development, game production, e-sports, additional services, infrastructure, regulations, education and talent acquisition.[3] The Saudi government's goals include producing more than 30 competitive games in domestic studios, creating more than 39,000 new jobs in the sector, and becoming one of the top three countries by number professional esports players.[3]
            Pursuant to the NGES, in October 2023, Saudi Arabia announced the inaugural Esports World Cup as the successor of Gamers8, the Saudi Esports Federation's previously existing esports festival, which would be held annually in Riyadh starting in summer 2024.[4] During the announcement—which came during the "New Global Sport Conference" hosted by the Kingdom and attended by both senior government officials and leading figures in the sports, gaming, and esports sectors—Crown Prince Mohammad stated that: "The Esports World Cup is the natural next step in Saudi Arabia’s journey to become the premier global hub for gaming and esports, offering an unmatched esports experience that pushes the boundaries of the industry. The competition will enhance our progress towards realizing the Vision 2030 objectives of diversifying the economy, growing the tourism sector, creating new jobs in various industries, and providing world-class entertainment for citizens, residents, and visitors alike."[5]
            The initial five game titles were announced on February 20, 2024, with additional events being added over the course of the next four months; the final initial titles—the 20th being Call of Duty: Warzone and the 21st being Modern Warfare III—were added on June 12.[6][7] Strinova was added as an additional title on August 1, 2024. In an article published in April 2024, American news channel CNN described the EWC as potentially being a "pivotal moment in the industry" following large scale layoffs by game developers and declining revenues for professional esports leagues; the article also noted that the event was part of Saudi Arabia's broader investment into sports, media, and entertainment amid allegations of sportswashing.[8]
            The eight-week event took place in a 645,000 square foot (59,900 m2) venue in Riyadh's Boulevard City that featured four separate esports arenas: the SEF Arena (known as the Qiddiya Arena for sponsorship purposes), the 5V5 Arena (known as the Amazon Arena for sponsorship purposes), the BR Arena (known as the stc Arena for sponsorship purposes) and the Riyadh Festival. The stc Play Gaming Hall, also in Boulevard City, hosted last chance qualifiers for some games as well as the Strinova tournament.[9]`,
            readMoreLink: "https://pubgesports.com/en/teams/257"
        },
        {
            name: "17Gaming",
            image: "https://i.ytimg.com/vi/-epmFLhmMYM/maxresdefault.jpg",
            players: ["Luo Shengjun", "Tu Zhanya", "Wu Bo", "Wang Kang","Yang Yuxuan"],
            prizeMoney: "$2,431,753",
            description: `"In 2022, 17 Gaming achieved a remarkable 2nd place finish at the PUBG Global Championship, solidifying their status as a top-tier team in the international arena. ​
            PUBG: BATTLEGROUNDS
            The team's success is bolstered by the strategic prowess of players like LilGhost, who serves as the tactical core of 17 Gaming. His focus on information-based combat has been instrumental in the team's achievements."`,
            history:`If we look back at 17shou's team building history, when his team won the championship, there would always be an excellent info-scouting player in the team. 47gamer was one (won 4 tours with shou), 067 was another (won PCPI2 Champion and finished Top#3 in the PUBG Asia Invitational 2019). After going through the dark period of SMG, 17shou, who was on the verge of depression and wanting to commit suicide, finally bought LilGhost (500,000 Chinese RMB) from COC with his own money, even though he was still in the official suspension period at that time. Since then, 17 Gaming has gained a new lease of life, while SMG, founded by Singaporean Mandarin singer JJ Lin, announced the disbandment of the PUBG division.`,
            readMoreLink: "https://pubgesports.com/en/teams/24"
        },
    ];

    // Function to display teams
    function displayTeams(teams) {
        teamsContainer.innerHTML = ""; // Clear existing content

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
    const API_KEY = "AIzaSyDNTCGGCbzrmR35bM9FFD0CTr00v2HdVuA"; // Your API Key
    const ENGINE_ID = "c61b11ea645ac499f"; // Your Search Engine ID

    // Function to fetch web search results
    async function fetchWebSearchResults(query) {
        const url = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&key=${API_KEY}&cx=${ENGINE_ID}`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            return data.items || []; // Return search results or an empty array
        } catch (error) {
            console.error("Error fetching search results:", error);
            return [];
        }
    }

// Function to display web search results
function displayWebResults(results) {
    teamsContainer.innerHTML = ""; // Clear existing content

    if (results.length === 0) {
        teamsContainer.innerHTML = `<p class="no-results">No results found.</p>`;
        return;
    }

    results.forEach(result => {
        const resultItem = document.createElement("div");
        resultItem.classList.add("result-item");

        // Extract image URL from pagemap (if available)
        let imageUrl = "";
        if (result.pagemap && result.pagemap.cse_thumbnail) {
            imageUrl = result.pagemap.cse_thumbnail[0].src; // Use thumbnail image
        } else if (result.pagemap && result.pagemap.metatags && result.pagemap.metatags[0]["og:image"]) {
            imageUrl = result.pagemap.metatags[0]["og:image"]; // Use Open Graph image
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
    const url = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&key=${API_KEY}&cx=${ENGINE_ID}&num=9`; // Limit to 9 results

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.items || []; // Return search results or an empty array
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