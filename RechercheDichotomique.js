let table = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let nombreCherche = 12;
let trouve = false;

let Bi = 0;
let Bs = table.length - 1;

while (!trouve && Bi <= Bs) {
    let milieu = Math.floor((Bi + Bs) / 2);  

    if (table[milieu] === nombreCherche) {  
        trouve = true;
    } else if (nombreCherche < table[milieu]) {
        Bs = milieu - 1;
    } else {
        Bi = milieu + 1;
    }
}

if (trouve) {
    console.log('Nombre trouvé' );
} else {
    console.log('Nombre non trouvé');
}



