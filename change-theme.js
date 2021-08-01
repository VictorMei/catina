document.getElementById("miami-theme").onclick = function(){
    document.getElementById("word").removeAttribute("class")
    document.getElementById("word2").removeAttribute("class")
    document.getElementById("catina").removeAttribute("class")
    document.body.removeAttribute("class")
    

    document.getElementById("word").classList.add("miamihover");
    document.getElementById("word2").classList.add("miamihover");
    document.getElementById("catina").classList.add("miamicatina");
    document.body.classList.add("miami");
    setCookie("bodyClass", "miami");
    setCookie("wordClass", "miamihover");
    setCookie("catinaClass", "miamicatina");

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

    setCookie("bodyClass", "olivia");
    setCookie("wordClass", "oliviahover");
    setCookie("catinaClass", "oliviacatina");

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

    setCookie("bodyClass", "samurai");
    setCookie("wordClass", "samuraihover");
    setCookie("catinaClass", "samuraicatina");
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

    setCookie("bodyClass", "nights");
    setCookie("wordClass", "nightshover");
    setCookie("catinaClass", "nightscatina");
}



