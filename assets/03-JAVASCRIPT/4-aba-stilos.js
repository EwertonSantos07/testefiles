//Script para aba HOME!
export async function abaHome(listVars) {
    return new Promise((resolve) => {

        //CSS Changes menu nav bar
        listVars[3].style.color = "#d2aa70"; //Link Home Menu
        listVars[4].style.color = "white"; //Link Sobre Menu
        listVars[5].style.color = "white"; //Link Agendamento Menu

        // CSS Changes drop down menu
        listVars[6].style.background = "white"; //Transfer Aeroporto
        listVars[6].style.color = "#05243a"; //Link Transfer
        listVars[7].style.background = "white"; //Link Viagem Executiva
        listVars[7].style.color = "#05243a"; //Link Viagem Executiva
        listVars[8].style.background = "white"; //Link Pacotes Turísticos
        listVars[8].style.color = "#05243a"; //Link Pacotes Turísticos
        listVars[9].style.background = "white"; //Link Passagens Aéreas
        listVars[9].style.color = "#05243a"; //Link Passagens Aéreas

        //CSS changes footer menu
        listVars[11].style.color = "#d2aa70"; //Home
        listVars[12].style.color = "white"; //Sobre
        listVars[13].style.color = "white"; //Agendamento

        //CSS Changes footer serviços
        listVars[14].style.color = "white"; //Transfer
        listVars[15].style.color = "white"; //Viagens
        listVars[16].style.color = "white"; //Pacotes
        listVars[17].style.color = "white"; //Passagens

        //CSS Changes footer política
        listVars[18].style.color = "white";

        //CSS Changes Menu Oculto
        listVars[22].style.color = "#d2aa70";
        listVars[23].style.color = "white";
        listVars[24].style.color = "white";
        listVars[25].style.color = "white";
        listVars[26].style.color = "white";
        listVars[27].style.color = "white";
        listVars[28].style.color = "white";

        let statusText = "Propriedades HOME atualizadas!"
        resolve(statusText);
    })
}

//Script para aba SOBRE!
export async function abaSobre(listVars) {
    return new Promise((resolve) => {

        //CSS Changes menu nav bar
        listVars[3].style.color = "white"; //Link Home Menu
        listVars[4].style.color = "#d2aa70"; //Link Sobre Menu
        listVars[5].style.color = "white"; //Link Agendamento Menu

        // CSS Changes drop down menu
        listVars[6].style.background = "white"; //Transfer Aeroporto
        listVars[6].style.color = "#05243a"; //Link Transfer
        listVars[7].style.background = "white"; //Link Viagem Executiva
        listVars[7].style.color = "#05243a"; //Link Viagem Executiva
        listVars[8].style.background = "white"; //Link Pacotes Turísticos
        listVars[8].style.color = "#05243a"; //Link Pacotes Turísticos
        listVars[9].style.background = "white"; //Link Passagens Aéreas
        listVars[9].style.color = "#05243a"; //Link Passagens Aéreas

        //CSS changes footer menu
        listVars[11].style.color = "white"; //Home
        listVars[12].style.color = "#d2aa70"; //Sobre
        listVars[13].style.color = "white"; //Agendamento

        //CSS Changes footer serviços
        listVars[14].style.color = "white"; //Transfer
        listVars[15].style.color = "white"; //Viagens
        listVars[16].style.color = "white"; //Pacotes
        listVars[17].style.color = "white"; //Passagens

        //CSS Changes footer política
        listVars[18].style.color = "white";

        //CSS Changes Menu Oculto
        listVars[22].style.color = "white";
        listVars[23].style.color = "#d2aa70";
        listVars[24].style.color = "white";
        listVars[25].style.color = "white";
        listVars[26].style.color = "white";
        listVars[27].style.color = "white";
        listVars[28].style.color = "white";
        let statusText = "Propriedades SOBRE atualizadas!"
        resolve(statusText);
    })
}

//Script para aba AGENDAMENTO!
export async function abaAgen(listVars) {
    return new Promise((resolve) => {

        //CSS Changes menu nav bar
        listVars[3].style.color = "white"; //Link Home Menu
        listVars[4].style.color = "white"; //Link Sobre Menu
        listVars[5].style.color = "#d2aa70"; //Link Agendamento Menu

        // CSS Changes drop down menu
        listVars[6].style.background = "white"; //Transfer Aeroporto
        listVars[6].style.color = "#05243a"; //Link Transfer
        listVars[7].style.background = "white"; //Link Viagem Executiva
        listVars[7].style.color = "#05243a"; //Link Viagem Executiva
        listVars[8].style.background = "white"; //Link Pacotes Turísticos
        listVars[8].style.color = "#05243a"; //Link Pacotes Turísticos
        listVars[9].style.background = "white"; //Link Passagens Aéreas
        listVars[9].style.color = "#05243a"; //Link Passagens Aéreas

        //CSS changes footer menu
        listVars[11].style.color = "white"; //Home
        listVars[12].style.color = "white"; //Sobre
        listVars[13].style.color = "#d2aa70"; //Agendamento

        //CSS Changes footer serviços
        listVars[14].style.color = "white"; //Transfer
        listVars[15].style.color = "white"; //Viagens
        listVars[16].style.color = "white"; //Pacotes
        listVars[17].style.color = "white"; //Passagens

        //CSS Changes footer política
        listVars[18].style.color = "white";

        //CSS Changes Menu Oculto
        listVars[22].style.color = "white";
        listVars[23].style.color = "white";
        listVars[24].style.color = "#d2aa70";
        listVars[25].style.color = "white";
        listVars[26].style.color = "white";
        listVars[27].style.color = "white";
        listVars[28].style.color = "white";
        
        let statusText = "Propriedades AGENDAMENTO atualizadas!"
        resolve(statusText);
    })
}

//Script para aba TRANSFER AEROPORTO!
export async function abaTrans(listVars) {
    return new Promise((resolve) => {

        //CSS Changes menu nav bar
        listVars[3].style.color = "white"; //Link Home Menu
        listVars[4].style.color = "white"; //Link Sobre Menu
        listVars[5].style.color = "white"; //Link Agendamento Menu

        // CSS Changes drop down menu
        listVars[6].style.background = "#05243a"; //Transfer Aeroporto
        listVars[6].style.color = "#d2aa70"; //Link Transfer
        listVars[7].style.background = "white"; //Link Viagem Executiva
        listVars[7].style.color = "#05243a"; //Link Viagem Executiva
        listVars[8].style.background = "white"; //Link Pacotes Turísticos
        listVars[8].style.color = "#05243a"; //Link Pacotes Turísticos
        listVars[9].style.background = "white"; //Link Passagens Aéreas
        listVars[9].style.color = "#05243a"; //Link Passagens Aéreas

        //CSS changes footer menu
        listVars[11].style.color = "white"; //Home
        listVars[12].style.color = "white"; //Sobre
        listVars[13].style.color = "white"; //Agendamento

        //CSS Changes footer serviços
        listVars[14].style.color = "#d2aa70"; //Transfer
        listVars[15].style.color = "white"; //Viagens
        listVars[16].style.color = "white"; //Pacotes
        listVars[17].style.color = "white"; //Passagens

        //CSS Changes footer política
        listVars[18].style.color = "white";

        //CSS Changes Menu Oculto
        listVars[22].style.color = "white";
        listVars[23].style.color = "white";
        listVars[24].style.color = "white";
        listVars[25].style.color = "#d2aa70";
        listVars[26].style.color = "white";
        listVars[27].style.color = "white";
        listVars[28].style.color = "white";
        let statusText = "Propriedades TRANSFER atualizadas!"
        resolve(statusText);
    })
}

//Script para aba VIAGENS EXECUTIVAS!
export async function abaViag(listVars) {
    return new Promise((resolve) => {

        //CSS Changes menu nav bar
        listVars[3].style.color = "white"; //Link Home Menu
        listVars[4].style.color = "white"; //Link Sobre Menu
        listVars[5].style.color = "white"; //Link Agendamento Menu

        // CSS Changes drop down menu
        listVars[6].style.background = "white"; //Transfer Aeroporto
        listVars[6].style.color = "#05243a"; //Link Transfer
        listVars[7].style.background = "#05243a"; //Link Viagens Executivas
        listVars[7].style.color = "#d2aa70"; //Link Viagens Executivas
        listVars[8].style.background = "white"; //Link Pacotes Turísticos
        listVars[8].style.color = "#05243a"; //Link Pacotes Turísticos
        listVars[9].style.background = "white"; //Link Passagens Aéreas
        listVars[9].style.color = "#05243a"; //Link Passagens Aéreas

        //CSS changes footer menu
        listVars[11].style.color = "white"; //Home
        listVars[12].style.color = "white"; //Sobre
        listVars[13].style.color = "white"; //Agendamento

        //CSS Changes footer serviços
        listVars[14].style.color = "white"; //Transfer
        listVars[15].style.color = "#d2aa70"; //Viagens
        listVars[16].style.color = "white"; //Pacotes
        listVars[17].style.color = "white"; //Passagens

        //CSS Changes footer política
        listVars[18].style.color = "white";

        //CSS Changes Menu Oculto
        listVars[22].style.color = "white";
        listVars[23].style.color = "white";
        listVars[24].style.color = "white";
        listVars[25].style.color = "white";
        listVars[26].style.color = "#d2aa70";
        listVars[27].style.color = "white";
        listVars[28].style.color = "white";

        let statusText = "Propriedades VIAGENS atualizadas!"
        resolve(statusText);
    })
}

//Script para aba PACOTES TURÍSTICOS!
export async function abaPaco(listVars) {
    return new Promise((resolve) => {

        //CSS Changes menu nav bar
        listVars[3].style.color = "white"; //Link Home Menu
        listVars[4].style.color = "white"; //Link Sobre Menu
        listVars[5].style.color = "white"; //Link Agendamento Menu

        // CSS Changes drop down menu
        listVars[6].style.background = "white"; //Transfer Aeroporto
        listVars[6].style.color = "#05243a"; //Link Transfer
        listVars[7].style.background = "white"; //Link Viagens Executivas
        listVars[7].style.color = "#05243a"; //Link Viagens Executivas
        listVars[8].style.background = "#05243a"; //Link Pacotes Turísticos
        listVars[8].style.color = "#d2aa70"; //Link Pacotes Turísticos
        listVars[9].style.background = "white"; //Link Passagens Aéreas
        listVars[9].style.color = "#05243a"; //Link Passagens Aéreas

        //CSS changes footer menu
        listVars[11].style.color = "white"; //Home
        listVars[12].style.color = "white"; //Sobre
        listVars[13].style.color = "white"; //Agendamento

        //CSS Changes footer serviços
        listVars[14].style.color = "white"; //Transfer
        listVars[15].style.color = "white"; //Viagens
        listVars[16].style.color = "#d2aa70"; //Pacotes
        listVars[17].style.color = "white"; //Passagens

        //CSS Changes footer política
        listVars[18].style.color = "white";

        //CSS Changes Menu Oculto
        listVars[22].style.color = "white";
        listVars[23].style.color = "white";
        listVars[24].style.color = "white";
        listVars[25].style.color = "white";
        listVars[26].style.color = "white";
        listVars[27].style.color = "#d2aa70";
        listVars[28].style.color = "white";
        let statusText = "Propriedades PACOTES atualizadas!"
        resolve(statusText);
    })
}

//Script para aba PASSAGENS AÉREAS!
export async function abaPass(listVars) {
    return new Promise((resolve) => {

        //CSS Changes menu nav bar
        listVars[3].style.color = "white"; //Link Home Menu
        listVars[4].style.color = "white"; //Link Sobre Menu
        listVars[5].style.color = "white"; //Link Agendamento Menu

        // CSS Changes drop down menu
        listVars[6].style.background = "white"; //Transfer Aeroporto
        listVars[6].style.color = "#05243a"; //Link Transfer
        listVars[7].style.background = "white"; //Link Viagens Executivas
        listVars[7].style.color = "#05243a"; //Link Viagens Executivas
        listVars[8].style.background = "white"; //Link Pacotes Turísticos
        listVars[8].style.color = "#05243a"; //Link Pacotes Turísticos
        listVars[9].style.background = "#05243a"; //Link Passagens Aéreas
        listVars[9].style.color = "#d2aa70"; //Link Passagens Aéreas

        //CSS changes footer menu
        listVars[11].style.color = "white"; //Home
        listVars[12].style.color = "white"; //Sobre
        listVars[13].style.color = "white"; //Agendamento

        //CSS Changes footer serviços
        listVars[14].style.color = "white"; //Transfer
        listVars[15].style.color = "white"; //Viagens
        listVars[16].style.color = "white"; //Pacotes
        listVars[17].style.color = "#d2aa70"; //Passagens

        //CSS Changes footer política
        listVars[18].style.color = "white";

        //CSS Changes Menu Oculto
        listVars[22].style.color = "white";
        listVars[23].style.color = "white";
        listVars[24].style.color = "white";
        listVars[25].style.color = "white";
        listVars[26].style.color = "white";
        listVars[27].style.color = "white";
        listVars[28].style.color = "#d2aa70";
        let statusText = "Propriedades PASSAGENS atualizadas!"
        resolve(statusText);
    })
}

//Script para aba POLÍTICA!
export async function abaPol(listVars) {
    return new Promise((resolve) => {

        //CSS Changes menu nav bar
        listVars[3].style.color = "white"; //Link Home Menu
        listVars[4].style.color = "white"; //Link Sobre Menu
        listVars[5].style.color = "white"; //Link Agendamento Menu

        // CSS Changes drop down menu
        listVars[6].style.background = "white"; //Transfer Aeroporto
        listVars[6].style.color = "#05243a"; //Link Transfer
        listVars[7].style.background = "white"; //Link Viagens Executivas
        listVars[7].style.color = "#05243a"; //Link Viagens Executivas
        listVars[8].style.background = "white"; //Link Pacotes Turísticos
        listVars[8].style.color = "#05243a"; //Link Pacotes Turísticos
        listVars[9].style.background = "white"; //Link Passagens Aéreas
        listVars[9].style.color = "#05243a"; //Link Passagens Aéreas

        //CSS changes footer menu
        listVars[11].style.color = "white"; //Home
        listVars[12].style.color = "white"; //Sobre
        listVars[13].style.color = "white"; //Agendamento

        //CSS Changes footer serviços
        listVars[14].style.color = "white"; //Transfer
        listVars[15].style.color = "white"; //Viagens
        listVars[16].style.color = "white"; //Pacotes
        listVars[17].style.color = "white"; //Passagens

        //CSS Changes footer política
        listVars[18].style.color = "#d2aa70";

        //CSS Changes Menu Oculto
        listVars[22].style.color = "white";
        listVars[23].style.color = "white";
        listVars[24].style.color = "white";
        listVars[25].style.color = "white";
        listVars[26].style.color = "white";
        listVars[27].style.color = "white";
        listVars[28].style.color = "white";
        let statusText = "Propriedades POLÍTICA atualizadas!"
        resolve(statusText);
    })
}