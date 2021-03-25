const nomePetshop = " PETSHOP AVANADE" ;

let pets = [{
    nome: 'Melissa',
    tipo: 'cachorro',
    idade: 4,
    raca: 'Vira-lata',
    peso: 6,
    tutor: 'Thais',
    conntato: '(81) 98888-8888',
    vacinado: false,
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
    vacinado: false,
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
    vacinado: false,
    serviços: ['banho', 'tosa']
}
];

const listarPets = () => {
     for(let pet of pets){
        console.log(`${pet.nome},${pet.idade},${pet.tipo},${pet.raca}`); 
     }
}

listarPets();

const vacinarPet = (pet) => {
    if (pet.vacinado === true){
        console.log(`${pet.nome} já está vacinado`);
    }else{
        pet.vacinado = true;
        console.log(`${pet.nome} foi vacinado com sucesso. `);
    }
}

const vacinacaoPets = () => {
    totalVacinados = 0;
    for(let pet of pets){
        if (pet.vacinado === false){
            pet.vacinado = true;
            totalVacinados++;
        }
    }
    console.log(`${totalVacinados} animais foram vacinados nessa campannha.`)
}

const adicionarPet = (nomepet, tipoPet, idadePet, racaPet, pesoPet, tutorPeT, vacinadoPet, servircosPet ) => {
    novoPet = {
        nomepet, 
        tipoPet, 
        idadePet, 
        racaPet, 
        pesoPet, 
        tutorPeT, 
        vacinadoPet, 
        servircosPet 
    }
    pets.push(novoPet);
    console.log(pets);

}

adicionarPet('salen', 'gato', 7, 'bruxo', 7, 'thamires', '81 9999-9999', true, '');


// const adicionarPet = () => {
//     novoPet = {
//         nome: 'salen',
//         tipo: 'gato',
//         idade: 7,
//         raca: 'Vira-lata',
//         peso: 6,
//         tutor: 'Thais',
//         conntato: '(81) 98888-8888',
//         vacinado: false,
//         serviços: ['banho', 'tosa']
//     };
//     pets.push(novoPet);
//     console.log(pets);
// }

// vacinarPet(pets[2]);
// vacinacaoPets(pets);