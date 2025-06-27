//Script para aba HOME!
export async function abaHome(listConst) {
    return new Promise((resolve) => {

        //CSS Changes nav bar
        listConst[1].style.color = "yellowgreen"; //Link Home
        listConst[2].style.color = "white"; //Link Histórico
        listConst[3].style.color = "white"; //Link Blog
        listConst[25].style.color = "white"; //Link Updates
        listConst[4].style.color = "white"; //Link Contato

        //CSS Changes Itens DropDown Menu NavBar
        listConst[28].style.background = "hsl(249, 80%, 60%)";
        listConst[28].style.color = "white"; //Link Software Dropdown

        //CSS Changes Menu Oculto
        listConst[8].style.color = "yellowgreen"; //Link Home
        listConst[9].style.color = "white"; //Link Histórico
        listConst[10].style.color = "white"; //Link Blog
        listConst[26].style.color = "white"; //Link Updates
        listConst[11].style.color = "white"; //Link Contato
        listConst[29].style.color = "white"; //Link Software Dropdown

        //CSS Changes Menu Footer
        listConst[14].style.color = "yellowgreen"; //Link Home
        listConst[15].style.color = "white"; //Link Histórico
        listConst[16].style.color = "white"; //Link Blog
        listConst[27].style.color = "white"; //Link Updates
        listConst[17].style.color = "white"; //Link Contato
        listConst[30].style.color = "white"; //Link Software Dropdown

        //CSS Changes Menu Política
        listConst[19].style.color = "white"; //Link Política

        let statusText = "Propriedades HOME atualizadas!"
        resolve(statusText);
    })
}

//Script para aba HISTÓRICO!
export async function abaHistorico(listConst, pagina) {
    return new Promise((resolve) => {

        // if (pagina === 'historico') {
        //     document.body.classList.add('historico-ativo');
        //     document.body.classList.remove('contato-ativo');
        // } else if (pagina === 'contato') {
        //     document.body.classList.add('contato-ativo');
        //     document.body.classList.remove('historico-ativo');
        // } else {
        //     document.body.classList.remove('historico-ativo');
        //     document.body.classList.remove('contato-ativo');
        //     // Estilos padrão para a página inicial
        // }

        //CSS Changes nav bar
        listConst[1].style.color = "white"; //Link Home
        listConst[2].style.color = "yellowgreen"; //Link Histórico
        listConst[3].style.color = "white"; //Link Blog
        listConst[25].style.color = "white"; //Link Updates
        listConst[4].style.color = "white"; //Link Contato

        //CSS Changes Itens DropDown Menu NavBar
        listConst[28].style.background = "hsl(249, 80%, 60%)";
        listConst[28].style.color = "white"; //Link Software Dropdown

        //CSS Changes Menu Oculto
        listConst[8].style.color = "white"; //Link Home
        listConst[9].style.color = "yellowgreen"; //Link Histórico
        listConst[10].style.color = "white"; //Link Blog
        listConst[26].style.color = "white"; //Link Updates
        listConst[11].style.color = "white"; //Link Contato
        listConst[29].style.color = "white"; //Link Software Dropdown

        //CSS Changes Menu Footer
        listConst[14].style.color = "white"; //Link Home
        listConst[15].style.color = "yellowgreen"; //Link Histórico
        listConst[16].style.color = "white"; //Link Blog
        listConst[27].style.color = "white"; //Link Updates
        listConst[17].style.color = "white"; //Link Contato
        listConst[30].style.color = "white"; //Link Software Dropdown

        //CSS Changes Menu Política
        listConst[19].style.color = "white"; //Link Política

        let statusText = "Propriedades HISTÓRICO atualizadas!"
        resolve(statusText);
    })
}

//Script para aba CONTATO!
export async function abaContato(listConst) {
    return new Promise((resolve) => {

        //CSS Changes nav bar
        listConst[1].style.color = "white"; //Link Home
        listConst[2].style.color = "white"; //Link Histórico
        listConst[3].style.color = "white"; //Link Blog
        listConst[25].style.color = "white"; //Link Updates
        listConst[4].style.color = "yellowgreen"; //Link Contato

        //CSS Changes Itens DropDown Menu NavBar
        listConst[28].style.background = "hsl(249, 80%, 60%)";
        listConst[28].style.color = "white"; //Link Software Dropdown

        //CSS Changes Menu Oculto
        listConst[8].style.color = "white"; //Link Home
        listConst[9].style.color = "white"; //Link Histórico
        listConst[10].style.color = "white"; //Link Blog
        listConst[26].style.color = "white"; //Link Updates
        listConst[11].style.color = "yellowgreen"; //Link Contato 
        listConst[29].style.color = "white"; //Link Software Dropdown
        
        //CSS Changes Menu Footer
        listConst[14].style.color = "white"; //Link Home
        listConst[15].style.color = "white"; //Link Histórico
        listConst[16].style.color = "white"; //Link Blog
        listConst[27].style.color = "white"; //Link Updates
        listConst[17].style.color = "yellowgreen"; //Link Contato
        listConst[30].style.color = "white"; //Link Software Dropdown

        //CSS Changes Menu Política
        listConst[19].style.color = "white"; //Link Política

        let statusText = "Propriedades CONTATO atualizadas!"
        resolve(statusText);
    })
}

//Script para aba POLÍTICA!
export async function abaPolitica(listConst) {
    return new Promise((resolve) => {

        //CSS Changes nav bar
        listConst[1].style.color = "white"; //Link Home
        listConst[2].style.color = "white"; //Link Histórico
        listConst[3].style.color = "white"; //Link Blog
        listConst[25].style.color = "white"; //Link Updates
        listConst[4].style.color = "white"; //Link Contato

        //CSS Changes Itens DropDown Menu NavBar
        listConst[28].style.background = "hsl(249, 80%, 60%)";
        listConst[28].style.color = "white"; //Link Software Dropdown

        //CSS Changes Menu Oculto
        listConst[8].style.color = "white"; //Link Home
        listConst[9].style.color = "white"; //Link Histórico
        listConst[10].style.color = "white"; //Link Blog
        listConst[26].style.color = "white"; //Link Updates
        listConst[11].style.color = "white"; //Link Contato
        listConst[29].style.color = "white"; //Link Software Dropdown

        //CSS Changes Menu Footer
        listConst[14].style.color = "white"; //Link Home
        listConst[15].style.color = "white"; //Link Histórico
        listConst[16].style.color = "white"; //Link Blog
        listConst[27].style.color = "white"; //Link Updates
        listConst[17].style.color = "white"; //Link Contato
        listConst[30].style.color = "white"; //Link Software Dropdown

        //CSS Changes Menu Política
        listConst[19].style.color = "yellowgreen"; //Link Política

        let statusText = "Propriedades HOME atualizadas!"
        resolve(statusText);
    })
}

//Script para aba UPDATES!
export async function abaUpdates(listConst) {
    return new Promise((resolve) => {

        //CSS Changes nav bar
        listConst[1].style.color = "white"; //Link Home
        listConst[2].style.color = "white"; //Link Histórico
        listConst[3].style.color = "white"; //Link Blog
        listConst[25].style.color = "yellowgreen"; //Link Updates
        listConst[4].style.color = "white"; //Link Contato

        //CSS Changes Itens DropDown Menu NavBar
        listConst[28].style.background = "hsl(249, 80%, 60%)";
        listConst[28].style.color = "white"; //Link Software Dropdown

        //CSS Changes Menu Oculto
        listConst[8].style.color = "white"; //Link Home
        listConst[9].style.color = "white"; //Link Histórico
        listConst[10].style.color = "white"; //Link Blog
        listConst[26].style.color = "yellowgreen"; //Link Updates
        listConst[11].style.color = "white"; //Link Contato
        listConst[29].style.color = "white"; //Link Software Dropdown

        //CSS Changes Menu Footer
        listConst[14].style.color = "white"; //Link Home
        listConst[15].style.color = "white"; //Link Histórico
        listConst[16].style.color = "white"; //Link Blog
        listConst[27].style.color = "yellowgreen"; //Link Updates
        listConst[17].style.color = "white"; //Link Contato
        listConst[30].style.color = "white"; //Link Software Dropdown

        //CSS Changes Menu Política
        listConst[19].style.color = "white"; //Link Política

        let statusText = "Propriedades UPDATES atualizadas!"
        resolve(statusText);
    })
}

export async function abaSoft(listConst) {
    return new Promise((resolve) => {

        //CSS Changes nav bar
        listConst[1].style.color = "white"; //Link Home
        listConst[2].style.color = "white"; //Link Histórico
        listConst[3].style.color = "white"; //Link Blog
        listConst[25].style.color = "white"; //Link Updates
        listConst[4].style.color = "white"; //Link Contato

        //CSS Changes Itens DropDown Menu NavBar
        listConst[28].style.background = "hsl(249, 80%, 60%)";
        listConst[28].style.color = "yellowgreen"; //Link Software Dropdown

        //CSS Changes Menu Oculto
        listConst[8].style.color = "white"; //Link Home
        listConst[9].style.color = "white"; //Link Histórico
        listConst[10].style.color = "white"; //Link Blog
        listConst[26].style.color = "white"; //Link Updates
        listConst[11].style.color = "white"; //Link Contato
        listConst[29].style.color = "yellowgreen"; //Link Software Dropdown

        //CSS Changes Menu Footer
        listConst[14].style.color = "white"; //Link Home
        listConst[15].style.color = "white"; //Link Histórico
        listConst[16].style.color = "white"; //Link Blog
        listConst[27].style.color = "white"; //Link Updates
        listConst[17].style.color = "white"; //Link Contato
        listConst[30].style.color = "yellowgreen"; //Link Software Dropdown

        //CSS Changes Menu Política
        listConst[19].style.color = "white"; //Link Política

        let statusText = "Propriedades SOFTWARE atualizadas!"
        resolve(statusText);
    })
}