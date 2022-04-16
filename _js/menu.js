var menu = document.querySelector(".menu");
var btnToggle = document.querySelector(".btn-toggle");

var btnsResumo = document.querySelectorAll(".btn-resumo");
var verMais = document.getElementById("btnvermais");

var resumoExpandido = document.querySelector(".resumo-expandido");
var btnCriarTopico = document.querySelector(".button-criar-topico");
var sectionCriarTopico = document.querySelector(".section-topico");

var btnTopico = document.querySelectorAll(".btnTopico");
var sectionDiscussoes = document.querySelector('.section-discussoes');

var btnEnviar = document.querySelector(".btn-enviar");

var btnCriarNovoTopico = document.getElementById('criarNovoTopico');
var sectionTopicoEnviado = document.querySelector("#topicoEnviado");

var sectionRespostas = document.getElementById("sectionRespostas");
var btnResposta = document.querySelector('#resposta');

btnToggle.addEventListener('click', function(){
    menu.classList.toggle('menu-show');
});

btnEnviar.addEventListener('click', function(){
    sectionTopicoEnviado.style.display = "block";
    sectionCriarTopico.style.display = "none";
});

btnCriarNovoTopico.addEventListener('click', function(){
    sectionTopicoEnviado.style.display = "none";
});

btnsResumo.forEach(item =>{
    item.addEventListener("click", btnresumo);
});

btnResposta.addEventListener('click', function(){
    sectionRespostas.classList.toggle("show-sectionResposta");
})    
    
    

function btnresumo(){
    if(resumoExpandido.style.display ==="block"){
        resumoExpandido.style.display = "none";
        verMais.style.display = "inline-block";        
    }else{
        resumoExpandido.style.display = "block";       
        verMais.style.display = "none";        
    }
}

btnTopico.forEach(item => {
    item.addEventListener('click', btnsTopico)
});
function btnsTopico(){
    if(sectionCriarTopico.style.display ==="block"){
        sectionCriarTopico.style.display = "none";
    }else{
        sectionCriarTopico.style.display = "block"
        sectionDiscussoes.style.display = "none";
    }
}
