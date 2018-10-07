function szamol() { // eslint-disable-line no-unused-vars
    var a = parseFloat(document.getElementById("a").value);
    var b = parseFloat(document.getElementById("b").value);
    var c = parseFloat(document.getElementById("c").value);
    var gysz; //gyökök száma
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        gysz = "hiba";
    } else {
        var D = b * b - 4 * a * c;
        gysz = Math.sign(D) + 1;
    }
    document.getElementById("gysz").innerHTML = gysz;
    return false;
}