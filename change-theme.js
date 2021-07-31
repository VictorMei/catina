document.getElementsByClassName("miami").onmouseover = function(){
    document.getElementById("word").style.color = '#e2dad0';
}

document.getElementById("miami-theme").onclick = function(){
    document.getElementById("word").removeAttribute("class")
    document.getElementById("word2").removeAttribute("class")
    document.getElementById("catina").removeAttribute("class")
    document.body.removeAttribute("class")
    

    document.getElementById("word").classList.add("miamihover");
    document.getElementById("word2").classList.add("miamihover");
    document.getElementById("catina").classList.add("miamicatina");
    document.body.classList.add("miami");
    setCookie("bgcolor", "miami");
}

document.getElementById("olivia-theme").onclick = function(){
    document.getElementById("word").removeAttribute("class")
    document.getElementById("word2").removeAttribute("class")
    document.getElementById("catina").removeAttribute("class")
    document.body.removeAttribute("class")

	document.getElementById("word").classList.add("oliviahover");
    document.getElementById("word2").classList.add("oliviahover");
    document.getElementById("catina").classList.add("oliviacatina");
    document.body.classList.add("olivia");

}

document.getElementById("samurai-theme").onclick = function(){
    document.getElementById("word").removeAttribute("class")
    document.getElementById("word2").removeAttribute("class")
    document.getElementById("catina").removeAttribute("class")
    document.body.removeAttribute("class")

	document.getElementById("word").classList.add("samuraihover");
    document.getElementById("word2").classList.add("samuraihover");
    document.getElementById("catina").classList.add("samuraicatina");
    document.body.classList.add("samurai");
}

document.getElementById("miaminights-theme").onclick = function(){
    document.getElementById("word").removeAttribute("class")
    document.getElementById("word2").removeAttribute("class")
    document.getElementById("catina").removeAttribute("class")
    document.body.removeAttribute("class")

	document.getElementById("word").classList.add("nightshover");
    document.getElementById("word2").classList.add("nightshover");
    document.getElementById("catina").classList.add("nightscatina");
    document.body.classList.add("nights");
}



