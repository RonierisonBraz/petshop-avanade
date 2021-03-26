const nomePetshop = " PETSHOP AVANADE" ;

let pets = [{
    nome: 'Melissa',
    tipo: 'cachorro',
    idade: 4,
    raca: 'Vira-lata',
    peso: 6 ,
    tutor: 'Thais',
    conntato: '(81) 98888-8888',
    vacinado: false,
    servicos: ['banho', 'tosa']
},
{
    nome: 'Preta',
    tipo: 'cachorro',
    idade: 3,
    raca: 'Vira-lata',
    peso: 6 ,
    tutor: 'Thais',
    conntato: '(81) 98888-8888',
    vacinado: false,
    servicos: ['banho', 'tosa']
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
    servicos: ['banho', 'tosa']
}
];

const listarPets = () => {
     for(let pet of pets){
        console.log(`${pet.nome},${pet.idade + " anos"},${pet.tipo},${pet.raca}, ${pet.peso + " Kg"}`); 
     }
}

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

const adicionarPet = (nome, tipo, idade, raca, peso, tutor, contato, vacinado, servicos ) => {
    novoPet = {
        nome, 
        tipo, 
        idade, 
        raca, 
        peso , 
        tutor,
        contato, 
        vacinado, 
        servicos
    }
    pets.push(novoPet);
    console.log(pets);

}

const darBanhoPet = (pet) => {
    pet.servicos.push('banho');
    console.log(`O pet ${pet.nome} foi realizado o banho`);
}

const tosarPet = (pet) => {
    pet.servicos.push('tosa');
    console.log(`O pet ${pet.nome} esta com o cabelinho na régua`);
}

const apararUnhasPet = (pet) => {
    pet.servicos.push('aparar unhas');
    console.log(`O pet ${pet.nome} esta com com as unhas cortadas`);
}

adicionarPet('salen', 'gato', 7, 'bruxo', 7, 'thamires','81 88999-9999', true, []);
darBanhoPet(pets[3]);
tosarPet(pets[3]);
apararUnhasPet(pets[3]);
listarPets();

// vacinarPet(pets[2]);
// vacinacaoPets(pets);
