const API_KEY = 'f3c16dc5c01af0ef0e68222092a54828';

function getFilmes(url) {
    fetch(url).then(res => res.json().then(data => {
        console.log(data);
        exibeFilmes(data);
    }))
}


function exibeFilmes(dados) {
    let divTela = document.getElementById('mainTela');
    let texto = '';


    for (i = 0; i < dados.results.length; i++) {
        let filme = dados.results[i];
        let ano = filme.release_date.substr(0, 4);

        texto = texto + `
            <div class="col-12 box-pesquisa">
            <a onclick="movieSelected('${filme.id}')" class="btn btn-primary bt-det" href="#">
                <img class="imgPesquisa" src="https://image.tmdb.org/t/p/w500${filme.poster_path}" alt="">
                <h3>${filme.title}</h3>
                <span>${ano}</span>
                <p><strong>Avaliação:</strong> ${filme.vote_average} <i class="fas fa-star"> </i></p>
                <p>
                ${filme.overview}
                </p>
                </a>
            </div>
        `
    }
    //var dado = dados;
    //preencher div
    divTela.innerHTML = texto;
    /*for (i = 0; i < len; i++) {
        let boxPesquisa = document.getElementById(`box${i}`)
    boxPesquisa.addEventListener('click', function(){
        abrirDetalhes(i, dado);
    });

    }*/
}
function executaPesquisa() {
    let query = document.getElementById('txtPesquisa').value;
    getFilmes(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&page=1`);

}

function movieSelected(id){
    document.cookie.split(';').forEach(function(c) {
        document.cookie = c.trim().split('=')[0] + '=;' + 'expires=Thu, 01 Jan 1970 00:00:00 UTC;';
      });
    document.cookie= id;
    window.location = 'detalhes.html';
    return false;
  }

  function getMovie(){
    let movieId = document.cookie= movieId;
  }  

/*function abrirDetalhes(i, dados) 
{
    console.log(dados.results[i]);
    let id = dados.results[i].id;
    console.log(id);
    let idfilme = id;
    //window.open(`detalhes.html?id=${id}`);

}*/

document.getElementById('btPesquisa').addEventListener('click', executaPesquisa);
document.getElementById('txtPesquisa')
    .addEventListener('keyup', function(event) {
        if (event.code === 'Enter')
        {
            event.preventDefault();
            document.querySelector('form').submit();
        }
    });

