const fs = require ('fs');
let bancoDados = fs.readFileSync('./bancoDados.json');

const nomePetshop = " PETSHOP AVANADE" ;

bancoDados = JSON.parse(bancoDados);

const atualizarBanco = () => {
    //conversão de objeto javascript para Json
    let petsAtualizado = JSON.stringify(bancoDados,null, 2);

    fs.writeFileSync('bancoDados.json', petsAtualizado, 'utf-8');
}

function listarPets() {
    for (let pet of bancoDados.pets) {
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
    for(let pet of bancoDados.pets){
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
    
    bancoDados.pets.push(novoPet);
    atualizarBanco();
    

}

const darBanhoPet = (pet) => {
    pet.servicos.push('banho');
    atualizarBanco();
    console.log(`O pet ${pet.nome} foi realizado o banho`);
}

const tosarPet = (pet) => {
    pet.servicos.push('tosa');
    atualizarBanco();
    console.log(`O pet ${pet.nome} esta com o cabelinho na régua`);
}

const apararUnhasPet = (pet) => {
    pet.servicos.push('aparar unhas');
    atualizarBanco();
    console.log(`O pet ${pet.nome} esta com com as unhas cortadas`);
}

//  adicionarPet('salen', 'gato', 7, 'bruxo', 7, 'thamires','81 88999-9999', true, []);
 adicionarPet('Coragem-2', 'cachorro', 7, 'desenho', 7, 'thamires','81 88999-9999', true, []);
// darBanhoPet(bancoDados.pets[3]);
// tosarPet(bancoDados.pets[3]);
// apararUnhasPet(bancoDados.pets[3]);

listarPets();

// vacinarPet(pets[2]);
// vacinacaoPets(pets);
