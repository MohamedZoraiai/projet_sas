var prompt = require('prompt-sync')();
let candidats = [{
    cin: "AB123456",
    nom: "Boushaba",
    prenom: "Soufiane",
    partiPolitique: "Indépendant",
    age: 40,
    electeurs: []
},
{
    cin: "AB123421",
    nom: "rochdi",
    prenom: "amine",
    partiPolitique: "Indépendant",
    age: 20,
    electeurs: []
},
{
    cin: "KW123421",
    nom: "zitoni",
    prenom: "hafida",
    partiPolitique: "Indépendant",
    age: 63,
    electeurs: []
},
{
    cin: "AC334455",
    nom: "hamid",
    prenom: "bouchta",
    partiPolitique: "nakhla",
    age: 45,
    electeurs: ["KW123421"]
},
{
    cin: "KW234566",
    nom: "nohaila",
    prenom: "sabah",
    partiPolitique: "PAM",
    age: 35,
    electeurs: ["AB123421", "AB123456"]
},
{
    cin: "AC22111",
    nom: "adam",
    prenom: "karim",
    partiPolitique: "Indépendant",
    age: 22,
    electeurs: []
},
{
    cin: "BW99077",
    nom: "hassan",
    prenom: "biga",
    partiPolitique: "Indépendant",
    age: 23,
    electeurs: []
},
{
    cin: "BD334418",
    nom: "ayoub",
    prenom: "loza",
    partiPolitique: "nakhla",
    age: 33,
    electeurs: ["BW99077", "AC22111"]
},
{
    cin: "KD445454",
    nom: "sara",
    prenom: "wazani",
    partiPolitique: "PAM",
    age: 27,
    electeurs: ["SA2323232"]
},
{
    cin: "SA2323232",
    nom: "kamal",
    prenom: "karimi",
    partiPolitique: "Indépendant",
    age: 26,
    electeurs: []
}];
function ajouterCandidat() {
    console.log("\n Info de nouveau candidat : \n");
    let cin = prompt("entrer cin :")
    let nom = prompt("entrer nom :")
    let prenom = prompt("entrer prenom :")
    let partiPolitique = prompt("entrer partipolitique :")
    let age = Number(prompt("entrer age :"))

    let dejaInscrit = candidats.find(c => c.cin === cin);
    if (dejaInscrit) {
        console.log("\n candidat deja inscrit\n");

    } else {
        let nouveau = {
            cin,
            nom,
            prenom,
            partiPolitique,
            age
        };
        candidats.push(nouveau)
        console.log("\n Nouveau candidat est ajoute \n");


    }

}


function ajouterPlusieursCandidats() {
    console.log(" Ajouter plusieurs candidats à la fois ");
    let n = Number(prompt(" combien de candidats ?"))
    for (let i = 0; i < n; i++) {


        let cin = prompt("entrer cin :")
        let nom = prompt("entrer nom :")
        let prenom = prompt("entrer prenom :")
        let partiPolitique = prompt(" entrer partipolitique :")
        let age = Number(prompt("entrer age :"))

        let nouveauCandidat = {
            cin,
            nom,
            prenom,
            partiPolitique,
            age,
            electeurs: []
        };
        candidats.push(nouveauCandidat)
        console.log("  ✓ Nouveau candidats sont ajoutes");
    }

}
function afficherLaListeDesCandidats() {

    console.log("1 : Trier les candidats par nombre de votes");
    console.log("2 : Filtrer et afficher uniquement les candidats d'un parti politique spécifique");
    let choix = Number(prompt("choix :"))
    if (choix === 1) {
        for (let i = 0; i < candidats.length; i++) {
            for (let j = 0; j < candidats.length - i - 1; j++) {
                if (candidats[j].electeurs.length < candidats[j + 1].electeurs.length) {
                    let temp = candidats[j];
                    candidats[j] = candidats[j + 1];
                    candidats[j + 1] = temp;
                }
            }
        }
        for (let i = 0; i < candidats.length; i++) {
            console.log("\n Candidat " + (i + 1) + " :");
            console.log("  CIN   : " + candidats[i].cin);
            console.log("  Nom   : " + candidats[i].nom);
            console.log("  Votes : " + candidats[i].electeurs.length);
        }
    } else if (choix === 2) {
        let parti = prompt("Entrez le parti : ");
        let filtres = [];
        for (let i = 0; i < candidats.length; i++) {
            if (candidats[i].partiPolitique.toLowerCase() === parti.toLowerCase()) {
                filtres.push(candidats[i]);
            }
        }

        if (filtres.length === 0) {
            console.log("Aucun candidat pour ce parti.");
        } else {
            for (let i = 0; i < filtres.length; i++) {
                console.log("\n# Candidat " + (i + 1) + " :");
                console.log("  Nom   : " + filtres[i].nom);
                console.log("  Parti : " + filtres[i].partiPolitique);
                console.log("  Votes : " + filtres[i].electeurs.length);
            }
        }
    }
}
function voter() {
    console.log("\n=== Voter pour un candidat ===");
    let cin = prompt("Entrez votre CIN : ");
    let dejaVote = false;
    for (let i = 0; i < candidats.length; i++) {
        for (let j = 0; j < candidats[i].electeurs.length; j++) {
            if (candidats[i].electeurs[j] === cin) {
                dejaVote = true;
            }
        }
    }
    if (dejaVote) {
        console.log("Vous avez déjà voté et vous n'avez pas le droit de modifier votre vote ni de voter à nouveau.");
        return;
    }
    let cinCandidat = prompt("Entrez le CIN du candidat : ");
    let candidat = "";
    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].cin === cinCandidat) {
            candidat = candidats[i];
        }
    }
    if (!candidat) {
        console.log("Candidat introuvable.");
        return;
    }
    candidat.electeurs.push(cinElecteur);
    console.log("Vote enregistré pour " + candidat.prenom + " " + candidat.nom + " !");
}
function modifierCandidat() {
    console.log("\n=== Modifier un candidat ===\n");
    let cin = prompt("Entrez le CIN du candidat : ");
    let candidat = "";
    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].cin === cin) {
            candidat = candidats[i];
        }
    }

    if (!candidat) {
        console.log("Candidat introuvable.");
        return;
    }

    console.log("Candidat trouve : " + candidat.prenom + " " + candidat.nom);
    console.log("1. Modifier le parti politique");
    console.log("2. Modifier l'age");
    let choix = Number(prompt("choix : "));

    if (choix === 1) {
        candidat.partiPolitique = prompt("Nouveau parti : ");
        console.log("Parti modifie avec succes.");
    } else if (choix === 2) {
        candidat.age = Number(prompt("Nouvel age : "));
        console.log("Age modifie avec succes.");
    } else {
        console.log("Choix invalide.");
    }
}
 function supprimerCandidat() {
     let cin = prompt("entrer le cin :")
     for (let i=0;i<candidats.length;i++){
         if (candidats[i].cin===cin){
             let nom= candidats[i].prenom + " "+ candidats[i].nom
             candidats.splice(i, 1);
             console.log(nom + " suprime.");
             return;
         }
     }
     console.log("candidats introuvable");
     
 }
function rechercherCandidat() {
    let nom = prompt("Nom a rechercher : ");

    let resultats = [];
    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].nom.toLowerCase().includes(nom.toLowerCase())) {
            resultats.push(candidats[i]);
        }
    }

    if (resultats.length === 0) {
        console.log("Aucun candidat trouve.");
    } else {
        for (let i = 0; i < resultats.length; i++) {
            console.log("\n# Candidat " + (i+1) + " :");
            console.log("  CIN  : " + resultats[i].cin);
            console.log("  Nom  : " + resultats[i].nom);
        }
    }
} 

let b=false
while(!b){ 
console.log("1 : Ajouter un nouveau candidat\n",
    "2 : Ajouter plusieurs candidats à la fois\n",
    "3 : Afficher la liste des candidats\n",
    "4 :  Voter pour un candidat\n",
    "5 : Modifier les informations d'un candidat\n",
    "6 : Supprimer un candidat\n",
    "7 : Rechercher des candidats\n",
    "8 : Statistiques de l'élection\n",
    "0 : Quitter")

let choix = Number(prompt("choix :"))
switch (choix) {
    case 1:
        ajouterCandidat();
        break;
    case 2:
        ajouterPlusieursCandidats()
        break;
    case 3:
        afficherLaListeDesCandidats()
        break;
    case 4:
        voter()
        break;
    case 5:
        modifierCandidat()
        break;
    case 6:
        supprimerCandidat()
        break;
    case 7:
         rechercherCandidat()
        break;
    case 8:

    case 0:
        b=true
        break;
    default:
        "choix invalide"
        console.log("choix invalide");
}
}