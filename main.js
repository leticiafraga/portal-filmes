const API_KEY = 'f3c16dc5c01af0ef0e68222092a54828';


function executaPesquisa() {
    let query = document.getElementById('txtPesquisa').value;
    getFilmes(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&page=1`);

}

function abrirDetalhes() {
    window.open('detalhes.html');
    let det = document.getElementById('detalhes');
    let texto = '';

}


function getFilmesCartaz(url) {
    fetch(url).then(res => res.json().then(data => {
        exibeFilmesCartaz(data);
    }))
}


function exibeFilmesCartaz(dados) {
    let divTela = document.getElementById('destaques');
    let texto = '';


    dados.results.length;
    for (i = 0; i < dados.results.length; i++) {
        let filme = dados.results[i];
        let ano = filme.release_date.substr(0, 4);

        texto = texto + `
        <a onclick="movieSelected('${filme.id}')" class="btn btn-primary bt-det" href="#">

            <div class="row cartaz-itens">

                <div class="col-12 col-sm-12 col-md-3">
                    <div class="video-container">
                        <img class="imgCartaz" src="https://image.tmdb.org/t/p/w500${filme.poster_path}" alt="">
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-9 info">
                    <h2 class="h-main">${filme.title}</h2>
                    <p><strong>Sinopse:</strong> ${filme.overview}</p>
                    <p><strong>Avaliação:</strong> ${filme.vote_average} <i class="fas fa-star"> </i></p>
                    <p><strong>Lançamento:</strong> ${filme.release_date}</p>
                </div>
            </div>

        </a>
           
                                    
        `
    }

    //preencher div
    divTela.innerHTML = texto;
}

function movieSelected(id){
    document.cookie.split(';').forEach(function(c) {
        document.cookie = c.trim().split('=')[0] + '=;' + 'expires=Thu, 01 Jan 1970 00:00:00 UTC;';
      });
    document.cookie= id;
    window.location = 'detalhes.html';
    return false;
}

function abrirDetalhes() {
    window.open('detalhes.html');
    let det = document.getElementById('detalhes');
    let texto = '';

}
getFilmesCartaz(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&page=1&language=pt-BR`);
