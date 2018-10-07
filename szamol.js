function szamol() { // eslint-disable-line no-unused-vars
    var sa = document.getElementById("a").value;
    var sb = document.getElementById("b").value;
    var sc = document.getElementById("c").value;
    var gysz; //gyökök száma
    if (isNaN(sa) || isNaN(sb) || isNaN(sc) || sa == "" || sb == "" || sc == "") {
        gysz = "hiba";
    }
    else {
        var a = parseFloat(sa);
        var b = parseFloat(sb);
        var c = parseFloat(sc);
        var D = b * b - 4 * a * c;
        gysz = Math.sign(D) + 1;
    }
    document.getElementById("gysz").innerHTML = gysz;
    return false;
}