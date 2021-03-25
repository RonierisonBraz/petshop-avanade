const nomePetshop = " PETSHOP AVANADE" ;

let pet = [{
    nome: 'Melissa',
    tipo: 'cachorro',
    idade: 4,
    raca: 'Vira-lata',
    peso: 6,
    tutor: 'Thais',
    conntato: '(81) 98888-8888',
    vacinado: true,
    serviços: ['banho', 'tosa']
},
{
    nome: 'Preta',
    tipo: 'cachorro',
    idade: 3,
    raca: 'Vira-lata',
    peso: 6,
    tutor: 'Thais',
    conntato: '(81) 98888-8888',
    vacinado: true,
    serviços: ['banho', 'tosa']
},
{
    nome: 'Fany',
    tipo: 'cachorro',
    idade: 7,
    raca: 'Vira-lata',
    peso: 6,
    tutor: 'Thais',
    conntato: '(81) 98888-8888',
    vacinado: true,
    serviços: ['banho', 'tosa']
}
];

const listarPets = () => {
     for(let pets of pet){
        console.log(`${pets.nome},${pets.idade},${pets.tipo},${pets.raca}`); 
     }
}

listarPets();

// console.log(pet);

