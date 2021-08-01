var setCookie = function (n, val) {
    var exdays = 30;
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = n + "=" + val + "; " + expires;
};

var getCookie = function (n) {
    var name = n + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
};


window.onload = function () {
    var bodyClass = getCookie('bodyClass');
    if (bodyClass !== '') {
        document.body.removeAttribute("class");

        document.body.classList.add(bodyClass);
    } 
    var wordClass = getCookie('wordClass');
    if (wordClass !== '') {
        document.getElementById("word").removeAttribute("class")
        document.getElementById("word2").removeAttribute("class")

        document.getElementById("word").classList.add(wordClass);
        document.getElementById("word2").classList.add(wordClass);
    }
    var catinaClass = getCookie('catinaClass');
    if (catinaClass !== '') {
        document.getElementById("catina").removeAttribute("class")

        document.getElementById("catina").classList.add(catinaClass);
    }

    
};