

    function salvarEquipes(event) {
        event.preventDefault(); // Evita o envio do formulário

        const teams = [
            document.getElementById('team1').value,
            document.getElementById('team2').value,
            document.getElementById('team3').value,
            document.getElementById('team4').value,
            document.getElementById('team5').value,
            document.getElementById('team6').value,
            document.getElementById('team7').value,
            document.getElementById('team8').value
        ];

        // Salvando no localStorage
        localStorage.setItem('teams', JSON.stringify(teams));

        // Redireciona para a página de chaveamento
        window.location.href = 'chaveamento8.html';
    }

