document.addEventListener('DOMContentLoaded', function() {
    // Recupera os valores do localStorage
    const teams = JSON.parse(localStorage.getItem('teams'));

    if (teams && teams.length > 0) {
        // Função para embaralhar um array
        function embaralhar(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }

        // Embaralha os times
        const shuffledTeams = embaralhar(teams);

        // Substitui o texto das divs aleatoriamente
        const teamDivs = document.querySelectorAll('.team1, .team2, .team3');
        teamDivs.forEach((div, index) => {
            if (index < shuffledTeams.length) {
                div.childNodes[0].nodeValue = shuffledTeams[index] + ' ';
            }
        });
    }
});