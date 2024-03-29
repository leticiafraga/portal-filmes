const API_KEY = 'f3c16dc5c01af0ef0e68222092a54828';

function getFilme(url) {
    fetch(url).then(res => res.json().then(data => {
        exibeFilme(data);
    }))
}
function getMovie(){
    let movieId = document.cookie;
    getFilme(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=pt-BR`)
}

getMovie();


function exibeFilme(filme) {
    let divTela = document.getElementById('detalhes');
    let texto = '';

        let ano = filme.release_date.substr(0, 4);

        texto =  `
    <div class="col-12 col-md-4">
        <img class="imgDetalhes" src="https://image.tmdb.org/t/p/w500${filme.poster_path}" alt="">
    </div>
    <div class="col-12 col-md-8">
        <h1 class="h-det">${filme.title}</h1>
        <h3 class="h-det">${filme.tagline}</h3>
        <span><strong>${ano}</strong></span>
        <p><strong>Avaliação:</strong> ${filme.vote_average} <i class="fas fa-star"></i> </p>
        <p>
            ${filme.overview}
        </p>
    </div>
        `

    divTela.innerHTML = texto;
    
}