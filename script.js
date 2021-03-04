var tauxApplicable = 0.22;
var nombreMois = 12;

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

function mensuelbrut() {
    var somme = document.getElementById("mensuel-brut").value;

    document.getElementById("horaire-brut").value = (somme / 151.6).toFixed(2);
    document.getElementById("mensuel-brut").value = (somme*1).toFixed(0);
    document.getElementById("annuel-brut").value = (somme * nombreMois).toFixed(0);
    document.getElementById("horaire-net").value = (somme / 151.6 * (1 -tauxApplicable)).toFixed(2);
    document.getElementById("mensuel-net").value = (somme * (1 - tauxApplicable)).toFixed(0);
    document.getElementById("annuel-net").value = (somme * nombreMois * (1 - tauxApplicable)).toFixed(0);
}

function horairebrut() {
    var somme = document.getElementById("horaire-brut").value;
    document.getElementById("mensuel-brut").value = somme * 151.6;
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
