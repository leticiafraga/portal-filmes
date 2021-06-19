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
        console.log(data);
        exibeFilmesCartaz(data);
    }))
}


function exibeFilmesCartaz(dados) {
    let divTela = document.getElementById('carousel');
    let texto = '';


    dados.results.length;
    for (i = 0; i < dados.results.length; i++) {
        let filme = dados.results[i];
        let ano = filme.release_date.substr(0, 4);

        texto = texto + `
                                <div >
                                    <div class="row c-itens">
                                        <div class="col-12 col-sm-12 col-md-4 yt1">
                                            <div class="video-container">
                                            <img class="imgCartaz" src="https://image.tmdb.org/t/p/w500${filme.poster_path}" alt="">
                                            </div>
                                        </div>
                                        <div class="col-12 col-sm-12 col-md-8 info">
                                            <h2>${filme.title}</h2>
                                            <p><strong>Sinopse:</strong> ${filme.overview}</p>
                                            <p><strong>Avaliação:</strong> ${filme.vote_average}</p>
                                            <p><strong>Lançamento:</strong> ${filme.release_date}</p>
                                            
                                        </div>

                                    </div>
                                    </div>
           
                                    
        `
    }

    //preencher div
    divTela.innerHTML = texto;
}

function abrirDetalhes() {
    window.open('detalhes.html');
    let det = document.getElementById('detalhes');
    let texto = '';

}
getFilmesCartaz(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&page=1`);
