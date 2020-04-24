var barraPesquisa = document.querySelector("#pesquisar-usuario");

barraPesquisa.addEventListener("input",function(){
    var lista = document.querySelectorAll(".listas");
    if(this.value.length > 0){
        for(var i=0 ; i<lista.length ; i++){
            var nome = lista[i];
            var expressao= new RegExp(this.value,"i");
            if(expressao.test(nome.textContent)){
                nome.classList.add("visivel");
            }
            else{
                nome.classList.remove("visivel");
            }
        }
    }
    else{
        for(var i=0 ; i<lista.length ; i++){
            var nome = lista[i];
            nome.classList.remove("visivel");
        }
    }
});