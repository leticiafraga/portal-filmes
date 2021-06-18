const API_KEY = 'f3c16dc5c01af0ef0e68222092a54828';

function getFilmes(url){
    fetch(url).then(res => res.json().then(data =>{
        console.log(data);
        exibeFilmes(data);
    }))
}


function exibeFilmes(dados){
    let divTela = document.getElementById('mainTela');
    let texto = '';
    

    dados.results.length;
    for(i=0;i<dados.results.length; i++){
        let filme = dados.results[i];
        let ano = filme.release_date.substr(0, 4);

        texto = texto + `
            <div class="col-12 box-pesquisa">
                <img class="imgPesquisa" src="https://image.tmdb.org/t/p/w500${filme.poster_path}" alt="">
                <h3>${filme.original_title}</h3>
                <span>${ano}</span>
                <p>Creditos</p>
                <p>
                ${filme.overview}
                </p>
            </div>
        `
    }
    
    //preencher div
    divTela.innerHTML= texto;
}
function executaPesquisa(){
    let query = document.getElementById('txtPesquisa').value;
    getFilmes(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&page=1`);
    
}

function abrirDetalhes(){
    window.open('detalhes.html');
    let det = document.getElementById('detalhes');
    let texto = '';

}


/*function exibeFilmes(){
    let divTela = document.getElementById('mainTela');
    let texto = '';
    //montar texto

    let dados = JSON.parse(this.responseText);
    for(i=0;i<dados.results.length; i++){
        let filme = dados.results[i];

        texto = texto + `
            <div class="col-12 box-pesquisa">
                <img class="imgPesquisa" src="${filme.poster_path}" alt="">
                <h3>${filme.original_title}</h3>
                <span>>${filme.release_date}</span>
                <p>Creditos</p>
                <p>
                    Resumo
                </p>
            </div>
        `
    }
    
    //preencher div
    divTela.innerHTML= texto;
}

function executaPesquisa(){
    let query = document.getElementById('txtPesquisa').value;

    let xhr = new XMLHttpRequest();
    xhr.onload = exibeFilmes();

    xhr.open('GET', `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&page=1`);
    xhr.send();
    
}*/
document.getElementById('btPesquisa').addEventListener('click', executaPesquisa);
document.getElementById('mainTela').addEventListener('click', abrirDetalhes);