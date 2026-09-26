var prompt = require('prompt-sync')();
let candidats = [{
    cin : "AB123456",
    nom : "Boushaba",
    prenom : "Soufiane",
    partiPolitique : "Indépendant",
    age: 40,
    electeurs: []
},
{
   cin : "AB123421",
    nom : "rochdi",
    prenom : "amine",
    partiPolitique : "Indépendant",
    age: 20,
    electeurs: [] 
},
{
    cin : "KW123421",
    nom : "zitoni",
    prenom : "hafida",
    partiPolitique : "Indépendant",
    age: 63,
    electeurs: [] 
},
{
   cin :"AC334455" ,
    nom :"hamid" ,
    prenom :"bouchta" ,
    partiPolitique :"nakhla" ,
    age:45 ,
    electeurs: ["KW123421"] 
},
{
    cin : "KW234566",
    nom : "nohaila",
    prenom : "sabah",
    partiPolitique : "PAM",
    age: 35,
    electeurs: ["AB123421","AB123456"] 
},
{
    cin :"AC22111" ,
    nom : "adam",
    prenom : "karim",
    partiPolitique : "Indépendant",
    age: 22,
    electeurs: [] 
},
{
    cin : "BW99077",
    nom : "hassan",
    prenom : "biga",
    partiPolitique : "Indépendant",
    age: 23,
    electeurs: [] 
},
{
    cin : "soufian",
    nom : "ayoub",
    prenom : "loza",
    partiPolitique : "nakhla",
    age:33,
    electeurs: ["BW99077","AC22111"] 
},
{
    cin : "KD445454",
    nom : "sara",
    prenom : "wazani",
    partiPolitique : "PAM",
    age:27 ,
    electeurs: ["SA2323232"] 
},
{
    cin : "SA2323232",
    nom : "kamal",
    prenom : "karimi",
    partiPolitique : "Indépendant",
    age:26 ,
    electeurs: [] 
}];
function ajouterCandidat(){
    console.log("\n Info de nouveau candidat : \n");
    let cin= prompt("entrer cin :")
    let nom= prompt("entrer nom :")
    let prenom = prompt("entrer prenom :")
    let partiPolitique = prompt("entrer partipolitique :")
    let age = Number(prompt("entrer age :"))

    let dejaInscrit = candidats.find(c=>c.cin===cin);
    if (dejaInscrit){
        console.log("\n candidat deja inscrit\n");
        
    }else{
        let nouveau={
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

ajouterCandidat();
function ajouterPlusieursCandidats(){
    console.log(" Ajouter plusieurs candidats à la fois ");
    let n = Number(prompt("\n combien de candidats ?\n"))   
    for(let i=0; i<n;i++){
  
        
    let cin= prompt("entrer cin :")
    let nom= prompt("entrer nom :")
    let prenom = prompt("entrer prenom :")
    let partiPolitique = prompt(" entrer partipolitique :")
    let age = Number(prompt("entrer age :"))
    
    let nouveauCandidat={
        cin,
        nom,
        prenom,
        partiPolitique,
        age,
        electeurs:[]
    };
    candidats.push(nouveauCandidat)
    console.log("\n Nouveau candidats sont ajoutes");
    }
    
} 

 ajouterPlusieursCandidats()














    








