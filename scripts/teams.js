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
            readMoreLink: "https://en.wikipedia.org/wiki/Team_Falcons"
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
            readMoreLink: "https://www.fnatic.com"
        },
        {
            name: "Twisted Minds",
            image: "https://example.com/g2-esports.png",
            players: ["	Ibrahem Alali", "Ahmad Alyoubi", "Daniel Hathaway", "Hadi Daniel Bleinagel","Kim Hyeong-woo","Maximilian Otter","Abdualziz Altmimi"],
            prizeMoney: "$55,000",
            description: "G2 Esports is known for their aggressive playstyle and strong roster.",
            readMoreLink: "https://www.g2esports.com"
        },
        {
            name: "17Gaming",
            image: "https://example.com/t1.png",
            players: ["Player Alpha", "Player Beta", "Player Gamma", "Player Delta"],
            prizeMoney: "$20,000,000",
            description: "T1 is a powerhouse in esports, especially in games like League of Legends.",
            readMoreLink: "https://www.t1.gg"
        },
        {
            name: "17Gaming",
            image: "https://example.com/cloud9.png",
            players: ["Player One", "Player Two", "Player Three", "Player Four"],
            prizeMoney: "$20,000,000",
            description: "Cloud9 is a top-tier North American esports organization.",
            readMoreLink: "https://www.cloud9.gg"
        },
        {
            name: "Natus Vincere (Na'Vi)",
            image: "https://example.com/navi.png",
            players: ["Player Uno", "Player Dos", "Player Tres", "Player Cuatro"],
            prizeMoney: "$20,000,000",
            description: "Na'Vi is a dominant force in the CIS region, especially in CS:GO.",
            readMoreLink: "https://www.naviesports.com"
        },
        {
            name: "Evil Geniuses",
            image: "https://example.com/evil-geniuses.png",
            players: ["Player A1", "Player B2", "Player C3", "Player D4"],
            prizeMoney: "$20,000,000",
            description: "Evil Geniuses is one of the oldest and most respected esports organizations.",
            readMoreLink: "https://www.evilgeniuses.gg"
        },
        {
            name: "100 Thieves",
            image: "https://example.com/100-thieves.png",
            players: ["Player Red", "Player Blue", "Player Green", "Player Yellow"],
            prizeMoney: "$20,000,000",
            description: "100 Thieves is a popular esports team with a strong fanbase.",
            readMoreLink: "https://www.100thieves.com"
        }
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

    // Search when the button is clicked
    searchButton.addEventListener("click", () => {
        const keyword = searchInput.value.trim();
        filterTeams(keyword);
    });

    // Search when the Enter key is pressed
    searchInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            const keyword = searchInput.value.trim();
            filterTeams(keyword);
        }
    });
});