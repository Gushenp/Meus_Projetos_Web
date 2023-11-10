document.addEventListener('DOMContentLoaded', function(){
    var conteudo = document.getElementById('conteudo')
    var btnlermais = document.getElementById('lermais');

    btnlermais.addEventListener('click', function(){
        if (conteudo.style.maxHeight){
            conteudo.style.maxHeight = null;
            btnlermais.innerHTML = 'Ler mais'; // Corrigir a palavra aqui
        } else {
            conteudo.style.maxHeight = conteudo.scrollHeight + 'px';
            btnlermais.innerHTML = 'Mostrar menos';
        }
    });
});
