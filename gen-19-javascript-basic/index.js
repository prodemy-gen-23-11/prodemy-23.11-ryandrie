function luasPersegi(s) {
    return "Hasil perhitungan luas persegi adalah " + s * s;
}

function luasPersegiPanjang(p, l) {
    return "Hasil perhitungan luas persegi panjang adalah " + p * l;
}

function luasLingkaran(r) {
    return "Hasil perhitungan luas lingkaran adalah " + Math.PI * r * r;
}

function luasSegitiga(a, t) {
    return "Hasil perhitungan luas segitiga adalah " + (a * t) / 2;
}

function luasTrapesium(a, b, t) {
    return "Hasil perhitungan luas trapesium adalah " + ((a + b) / 2) * t;
}

console.log(luasPersegi(4));
console.log(luasPersegiPanjang(3, 6));
console.log(luasLingkaran(5));
console.log(luasSegitiga(4, 7));
console.log(luasTrapesium(5, 7, 3));
