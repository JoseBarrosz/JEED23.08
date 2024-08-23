document.addEventListener('DOMContentLoaded', () => {
    const modalidades = document.querySelectorAll('.modalidade');

    modalidades.forEach(modalidade => {
        modalidade.addEventListener('click', () => {
            // Remove a classe 'selected' de todas as modalidades
            modalidades.forEach(mod => mod.classList.remove('selected'));
            // Adiciona a classe 'selected' à modalidade clicada
            modalidade.classList.add('selected');
        });
    });

    document.getElementById('criar-campeonato').addEventListener('click', function() {
        // Verificar se todos os campos do formulário foram preenchidos
        var nomeCampeonato = document.getElementById('nome-campeonato').value;
        var dataHorario = document.getElementById('data-horario').value;
        var horaHorario = document.getElementById('hora-horario').value;
        var numeroEquipes = document.getElementById('numero-equipes').value;
        numeroEquipes = parseInt(numeroEquipes);
        
        // Verificar se uma modalidade foi selecionada
        var modalidadeSelecionada = document.querySelector('.modalidade.selected');

        if (!nomeCampeonato || !dataHorario || !horaHorario || isNaN(numeroEquipes) || numeroEquipes < 1 || numeroEquipes > 8) {
            alert('Por favor, preencha todos os campos do formulário corretamente.');
            return;
        }

        if (!modalidadeSelecionada) {
            alert('Por favor, selecione uma modalidade.');
            return;
        }

        var url;
        switch (numeroEquipes) {
            case 2:
                url = 'http://127.0.0.1:5500/equipes2.html';
                break;
            case 3:
                url = 'http://127.0.0.1:5500/equipes3.html';
                break;
            case 4:
                url = 'http://127.0.0.1:5500/equipes4.html';
                break;
            case 5:
                url = 'http://127.0.0.1:5500/equipes5.html';
                break;
            case 6:
                url = 'http://127.0.0.1:5500/equipes6.html';
                break;
            case 7:
                url = 'http://127.0.0.1:5500/equipes7.html';
                break;
            case 8:
                url = 'http://127.0.0.1:5500/equipes8.html';
                break;
            default:
                alert('Número de equipes fora do intervalo permitido.');
                return;
        }

        window.location.href = url;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('criar-campeonato').addEventListener('click', function() {
        // Obtém o valor do campo número de equipes
        var numeroEquipes = document.getElementById('numero-equipes').value;

        // Define o mapeamento de número de equipes para páginas
        var paginas = {
            2: 'equipes2.html',
            3: 'equipes3.html',
            4: 'equipes4.html',
            5: 'equipes5.html',
            6: 'equipes6.html',
            7: 'equipes7.html',
            8: 'equipes8.html'
            // Adicione mais entradas conforme necessário
        };

        // Verifica se o número está no objeto páginas
        if (paginas[numeroEquipes]) {
            // Redireciona para a página correspondente
            window.location.href = paginas[numeroEquipes];
        } else {
            // Se o número não estiver listado, mostra um alerta
            alert('Número de equipes não encontrado ou não suportado!');
        }
    });
});
