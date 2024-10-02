//const angkaPertama = 0
//const operator = "*";
//const angkakedua = 5;

//const hasil = angkaPertama + operator + angkakedua;

//console.log(hasil);

const readline = require("readline-sync");

const angkaPertama = parseFloat(readline.question("Masukan Angka Pertama: "));
const operator = readline.question("Masukan Operator (+, -, *, /): ");
const angkaKedua = parseFloat(readline.question("Masukan Angka Kedua: "));

if (isNaN(angkaPertama) || isNaN(angkaKedua)) {
    console.log("Input tidak sesuai !!!!!!");
} else {
    const hasil = execute(angkaPertama, angkaKedua, operator);
    if (hasil !== null) {
        console.log(`Hasilnya adalah ${hasil}`);
    }
}

function execute(angkaPertama, angkaKedua, operator) {
    switch (operator) {
        case "+":
            return angkaPertama + angkaKedua;
        case "-":
            return angkaPertama - angkaKedua;
        case "*":
            return angkaPertama * angkaKedua;
        case "/":
            if (angkaKedua === 0) {
                console.log("Error: Tidak bisa dibagi nol");
                return null;
            }
            return angkaPertama / angkaKedua;
        default:
            console.log("Input tidak valid");
            return null;
    }
}
