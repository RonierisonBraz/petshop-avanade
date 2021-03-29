//  let bancoDados = require('./dadosPet.json');
 let fs = require('fs');

let bancoDados = fs.readFile('bancoDados.json', 'utf-8');

bancoDados =JSON.parse(bancoDados);

bancoDados.pets.push = 
({
    "nome": "Preta",
    "tipo": "cachorro",
    "idade": 3,
    "raca": "Vira-lata",
    "peso": 6 ,
    "tutor": "Thais",
    "conntato": "(81) 98888-8888",
    "vacinado": false,
    "servicos": []
});
 
// console.log(bancoDados);


