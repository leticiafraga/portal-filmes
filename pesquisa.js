const API_KEY = 'f3c16dc5c01af0ef0e68222092a54828';

function getFilmes(url) {
    fetch(url).then(res => res.json().then(data => {
        
        exibeFilmes(data);
    }))
}


function exibeFilmes(dados) {
    let divTela = document.getElementById('mainTela');
    let texto = '';

    for (i = 0; i < dados.results.length; i++) {
        let filme = dados.results[i];
        let ano = 0;

        texto = texto + `
        <div class="col-12 box-pesquisa">
        <a class="btn btn-primary bt-det" href="https://www.themoviedb.org/movie/${filme.id}" target="_blank">
            <div class="row">
                <div class="col-12 col-md-3 card-pesquisa">
                    <img class="imgPesquisa" src="https://image.tmdb.org/t/p/w500${filme.poster_path}" alt="">
                </div>
                <div class="col-12 col-md-9 card-pesquisa">
                    <h3>${filme.title}</h3>
                `
        if (filme.release_date) {
            ano = filme.release_date.substr(0, 4);
            texto += `<span>${ano}</span>`;

        }
        if (filme.vote_average != 0) {
            texto += `<p><strong>Avaliação:</strong> ${filme.vote_average} <i class="fas fa-star"> </i></p>`;
        }
        texto += `
                    
                    <p>
                        ${filme.overview}
                    </p>
                </div>
            </div>
        </a>
    </div>
        `
    }

    if (dados.results.length == 0) {
        texto = `<div class="col-12 box-pesquisa"><h3>Nenhum resultado encontrado!<h3></div>`
    }
    
    divTela.innerHTML = texto;

}
function executaPesquisa() {
    let query = document.getElementById('txtPesquisa').value;
    getFilmes(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&page=1&language=pt-BR`);

}

document.getElementById('btPesquisa').addEventListener('click', executaPesquisa);
document.getElementById('txtPesquisa')
    .addEventListener('keypress', function (event) {
        if (event.code === 'Enter') {
            event.preventDefault();
            document.getElementById('btPesquisa').click();
        }
    });