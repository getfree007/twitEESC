var botaoMenu = document.querySelector(".menu");

botaoMenu.addEventListener("click",function(){
    console.log("ba");
});


!function(n,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t:n.apollo=t()}(this,function(){"use strict";var n,t,s,e,o={},c=function(n,t){"[object Array]"!==Object.prototype.toString.call(n)&&(n=n.split(" "));for(var s=0;s<n.length;s++)t(n[s],s)};return"classList"in document.documentElement?(n=function(n,t){return n.classList.contains(t)},t=function(n,t){n.classList.add(t)},s=function(n,t){n.classList.remove(t)},e=function(n,t){n.classList.toggle(t)}):(n=function(n,t){return new RegExp("(^|\\s)"+t+"(\\s|$)").test(n.className)},t=function(t,s){n(t,s)||(t.className+=(t.className?" ":"")+s)},s=function(t,s){n(t,s)&&(t.className=t.className.replace(new RegExp("(^|\\s)*"+s+"(\\s|$)*","g"),""))},e=function(e,o){(n(e,o)?s:t)(e,o)}),o.hasClass=function(t,s){return n(t,s)},o.addClass=function(n,s){c(s,function(s){t(n,s)})},o.removeClass=function(n,t){c(t,function(t){s(n,t)})},o.toggleClass=function(n,t){c(t,function(t){e(n,t)})},o});

(function () {

    // cria um novo elemento
    var mobile = document.createElement('div');

    document.querySelector('.nav').appendChild(mobile);


    var mobileNav = document.querySelector('.menu');

    // seleciona o nav-list
    var toggle = document.querySelector('.nav-list');

    mobileNav.onclick = function() {
        apollo.toggleClass(toggle, 'nav-active');
    }

})();

var botaoFeed = document.querySelector("#bFeed");
var botaoPerfil = document.querySelector("#bPerfil");
var botaoLogout = document.querySelector("#bLogout");

var botaoPesquisar = document.querySelector(".Bpesquisa");

botaoFeed.addEventListener("click",function(){
    location.href="feed.html"
});
var botaoPesquisar = document.querySelector(".Bpesquisa");

botaoPerfil.addEventListener("click",function(){
    location.href="perfil.html"
});
var botaoPesquisar = document.querySelector(".Bpesquisa");

botaoLogout.addEventListener("click",function(){
    location.href="pesquisar.html"
});


