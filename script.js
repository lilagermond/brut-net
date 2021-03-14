var tauxApplicable = 0.22;
var nombreMois = 12;
var heuresTravaillees = 39;
var nombreSemaineMois = 52 / 12;
var somme = "";
console.log(nombreSemaineMois);

function nbMois(mois){
    nombreMois = mois;
    var somme = document.getElementById("mensuel-brut").value;
    if (somme != ""){
        mensuelbrut();
    }

}

function selectTaux(taux){
    tauxApplicable = taux;
    var somme = document.getElementById("mensuel-brut").value;
    if (somme != ""){
        mensuelbrut();
    }
}

function hours(){
    heuresTravaillees = document.getElementById("hours").value;
    document.getElementById("hours-number").innerHTML = heuresTravaillees;
    if (somme != ""){
        mensuelbrut();
    }
}


// 151,66    
function mensuelbrut() {
    somme = document.getElementById("mensuel-brut").value;
    
    document.getElementById("horaire-brut").value = (somme / (nombreSemaineMois * heuresTravaillees)).toFixed(2);
    document.getElementById("mensuel-brut").value = (somme*1).toFixed(0);
    document.getElementById("annuel-brut").value = (somme * nombreMois).toFixed(0);
    document.getElementById("horaire-net").value = ((somme / (nombreSemaineMois * heuresTravaillees)) * (1 -tauxApplicable)).toFixed(2);
    document.getElementById("mensuel-net").value = (somme * (1 - tauxApplicable)).toFixed(0);
    document.getElementById("annuel-net").value = (somme * nombreMois * (1 - tauxApplicable)).toFixed(0);
}

function horairebrut() {
    var somme = document.getElementById("horaire-brut").value;
    document.getElementById("mensuel-brut").value = somme * (nombreSemaineMois * heuresTravaillees);
    mensuelbrut();
}   

function annuelbrut() {
    var somme = document.getElementById("annuel-brut").value;
    document.getElementById("mensuel-brut").value = somme / nombreMois;
    mensuelbrut();
}

function horairenet() {
    var somme = document.getElementById("horaire-net").value;
    document.getElementById("mensuel-brut").value = somme * 7 * 20 / (1 - tauxApplicable);
    mensuelbrut();
} 

function mensuelnet() {
    var somme = document.getElementById("mensuel-net").value;
    document.getElementById("mensuel-brut").value = somme / (1 - tauxApplicable);
    mensuelbrut();
} 

function annuelnet() {
    var somme = document.getElementById("annuel-net").value;
    document.getElementById("mensuel-brut").value = somme / nombreMois / (1 - tauxApplicable);
    mensuelbrut();
} 
