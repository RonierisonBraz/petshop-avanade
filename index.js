const fs = require ('fs');
const moment = require('moment');//biblioteco para apresentar a hora.

let bancoDados = fs.readFileSync('./bancoDados.json');

const nomePetshop = " PETSHOP AVANADE" ;

bancoDados = JSON.parse(bancoDados);

const atualizarBanco = () => {
    //conversão de objeto javascript para Json
    let petsAtualizado = JSON.stringify(bancoDados, null, 2);

    fs.writeFileSync('bancoDados.json', petsAtualizado, 'utf-8');
}

function listarPets() {
    for (let pet of bancoDados.pets) {
        console.log(`${pet.nome},${pet.idade + " anos"},${pet.tipo},${pet.raca}, ${pet.peso + " Kg"}`);

        (pet.vacinado) ? console.log("vacinado;\n") : console.log("não vacinado;\n");
        //(parametro a ser estudado) ? alternativa_se_verdadeiro : altervativa_se_falso;

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

const apararUnhasPet = (pet) => {
    pet.servicos.push({ 
        tipoServ: 'corte de unhas',
        data: moment().format('DD-MM-YYYY')    
    });
     atualizarBanco();  
    console.log(`${pet.servicos.data} : ${pet.nome} está de unhas aparadas!`);
}

const atenderCliente = (pet, funcao) => {
    console.log(`\nAtendendo ${pet.nome}`)
    funcao(pet);
    console.log("Fim do atendimento");
}


const vacinacaoPets = () => {
    totalVacinados = 0;

    
    bancoDados.pets = bancoDados.pets.map((pet) => {
        if (!pet.vacinado) {
            vacinarPet(pet);
            petVacinadosCampanha++;
        }

        return pet;
    });
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

const filtrarTipoPet = (tipoPet) => {
    // && E - AND
    // || OU - OR
    // == verifica valores iguais
    // === verifica valores e tipos iguais
    let petsEncontrados = bancoDados.pets.filter((pet) => {
        return pet.tipo == tipoPet;
    });

    return petsEncontrados;
}

const clientePremium = (pet) => {
    let nServicos = pet.servicos.length;

    if (nServicos > 5) {
        console.log(`Olá, ${pet.nome}! Você é um cliente especial e ganhou um descontão!`);
    } else {
        console.log(`Olá, ${pet.nome}! Você ainda não tem descontos disponiveis!`);
    }
}

// darBanhoPet(bancoDados.pets[4]);
// darBanhoPet(bancoDados.pets[4]);
// darBanhoPet(bancoDados.pets[4]);
// darBanhoPet(bancoDados.pets[4]);
// darBanhoPet(bancoDados.pets[4]);
// darBanhoPet(bancoDados.pets[4]);
// clientePremium(bancoDados.pets[4])
// console.log(buscarPet('Bidu'));
// console.log(clientePremium(bancoDados.pets[2]));

// campanhaVacina();

// console.log("-----------")
// listarPets();
// adicionarPet({
//     "nome": "Romarinho",
//     "tipo": "cachorro",
//     "idade": 3,
//     "raca": "American",
//     "peso": 28,
//     "tutor": "Bruno",
//     "contato": "(11) 99999-9999",
//     "vacinado": true,
//     "servicos": []
// });

// atenderCliente(bancoDados.pets[4], apararUnhasPet);
// console.log(bancoDados.pets[4].servicos);
//  adicionarPet('salen', 'gato', 7, 'bruxo', 7, 'thamires','81 88999-9999', true, []);
//  adicionarPet('Coragem-2', 'cachorro', 7, 'desenho', 7, 'thamires','81 88999-9999', true, []);
//  darBanhoPet(bancoDados.pets[3]);
// tosarPet(bancoDados.pets[5]);
//apararUnhasPet(bancoDados.pets[5]);

listarPets();

// vacinarPet(pets[2]);
// vacinacaoPets(pets);
