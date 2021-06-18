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
                                            <h2>${filme.original_title}</h2>
                                            <p><strong>Sinopse:</strong> ${filme.overview}</p>
                                            <div class="row">
                                                <div class="col-12 col-sm-12 col-md-12 col-lg-4">
                                                    <strong>Diretor:</strong> Don Hall
                                                </div>
                                                <div class="col-12 col-sm-12 col-md-12 col-lg-4">
                                                    <strong>Roteiro:</strong> Paul
                                                    Briggs
                                                </div>
                                                <div class="col-12 col-sm-12 col-md-12 col-lg-4">
                                                    <strong>Estreia:</strong> 2021
                                                </div>
                                                <div>
                                                    <strong>Elenco:</strong>

                                                    <ul class="elenco">
                                                        <li><a href="#">Kelly Marie Tran</a></li> |
                                                        <li><a href="#">Awkwafina</a></li>|
                                                        <li><a href="">Gemma Chan</a></li>|
                                                        <li><a href="">Alan Tudyk</a></li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <strong>Avaliação:</strong><br>
                                                    <i class="fas fa-star"></i> <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i> <i class="fas fa-star"></i>
                                                    <i class="far fa-star"></i>
                                                </div>
                                            </div>
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
