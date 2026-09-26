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
    cin: "soufian",
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
        console.log("\n Nouveau candidats sont ajoutes");
    }

}
function afficherLaListeDesCandidats() {

    console.log("1 : Trier les candidats par nombre de votes");
    console.log("2 : Filtrer et afficher uniquement les candidats d'un parti politique spécifique");
    let choix = Number(prompt("choix :"))

    if (choix=== 1) {
        candidats.sort((a, b) => b.electeurs.length - a.electeurs.length);
        console.log(candidats)
    if (choix===2) {
      

        }
    } else {
        
    }

    }
   

}




















console.log("1 : Ajouter un nouveau candidat\n",
    "2 : Ajouter plusieurs candidats à la fois\n",
    "3 : Afficher la liste des candidats\n",
    "4 :  Voter pour un candidat\n",
    "5 : Modifier les informations d'un candidat\n",
    "6 : Supprimer un candidat\n",
    "7 : Rechercher des candidats\n",
    "8 : Statistiques de l'élection\n",);
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
        
        break;
    case 4:
        
        break;
    case 5:
        
        break;
    case 6:
        
        break;
    case 7:
        
        break;
    case 8:
        
    default:
        "choix invalide"
        console.log("choix invalide");
}