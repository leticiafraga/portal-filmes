const API_KEY = 'f3c16dc5c01af0ef0e68222092a54828';

function getFilme(url) {
    fetch(url).then(res => res.json().then(data => {
        console.log(data);
        exibeFilme(data);
    }))
}
function getMovie(){
    let movieId = document.cookie;
    console.log(movieId);
    getFilme(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)
}

getMovie();


function exibeFilme(filme) {
    let divTela = document.getElementById('detalhes');
    let texto = '';

        let ano = filme.release_date.substr(0, 4);

        texto =  `
            <div class="col-12">
            
                <img class="imgDetalhes" src="https://image.tmdb.org/t/p/w500${filme.poster_path}" alt="">
                <h1>${filme.title}</h1>
                <h3>${filme.tagline}</h3>
                <span>${ano}</span>
                <p>Avaliação: ${filme.vote_average}</p>
                <p>
                ${filme.overview}
                </p>
                
            </div>
        `
    
    //var dado = dados;
    //preencher div
    divTela.innerHTML = texto;
    
}
/*
function executaPesquisa() {
    let query = document.getElementById('txtPesquisa').value;
    getFilmes(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&page=1`);

}

function movieSelected(id){
    sessionStorage.setItem('filmeId', id);
    window.location = 'detalhes.html';
    return false;
  }

  function getMovie(){
    let movieId = sessionStorage.getItem('movieId');
  }  


document.getElementById('btPesquisa').addEventListener('click', executaPesquisa);
document.getElementById('txtPesquisa')
    .addEventListener('keyup', function(event) {
        if (event.code === 'Enter')
        {
            event.preventDefault();
            document.querySelector('form').submit();
        }
    });
*/
