var nome = window.prompt("Inserisci il tuo nome: ");

document.getElementById("titolo").innerHTML = "Benvenuto " + nome;

var sceltaU;

function Carta(){
    sceltaU = "carta";
}

function Forbici(){
    sceltaU = "forbici";
}

function Sasso(){
    sceltaU = "sasso";
}
function verdetto(){
    document.getElementById("carta").style.display = 'none';
    document.getElementById("forbici").style.display = 'none';
    document.getElementById("sasso").style.display = 'none';
    document.getElementById("pulsante").style.display = 'none';
    var sceltaC;
    if(sceltaU == "forbici"){
        sceltaC = "sasso";
    }
    else if(sceltaU == "carta"){
        sceltaC = "forbici";
    }

    else if(sceltaU == "sasso"){
        sceltaC = "carta";
    }
    document.getElementById("titolo").innerHTML = "hai perso.";
    document.getElementById("informazioni").innerHTML = "tu hai scelto " + sceltaU + " il computer ha scelto " + sceltaC;
}