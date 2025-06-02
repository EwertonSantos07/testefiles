//Função para alterar propriedades CSS Menu Oculto em Loading...
export async function changeCSSOculto(varsArray) {
    return new Promise((resolve) => {
        varsArray[2].style.cursor = "wait";
        varsArray[22].style.display = "none";
        varsArray[25].style.display = "none";
        varsArray[26].style.display = "none";
        varsArray[27].style.display = "none";
        varsArray[28].style.display = "none";
        varsArray[23].style.display = "none";
        varsArray[24].style.display = "none";
        varsArray[29].style.display = "flex";
        varsArray[29].style.cursor = "wait";

        let statusCSSOculto = "Propriedades Menu Oculto Loading alteradas";
        resolve(statusCSSOculto);
    })
}

//Função para retornar propriedades CSS Menu Oculto após Loading...
export async function retornaCSSOculto(varsArray) {
    return new Promise((resolve) => {
        varsArray[2].style.cursor = "default";
        varsArray[22].style.display = "";
        varsArray[25].style.display = "";
        varsArray[26].style.display = "";
        varsArray[27].style.display = "";
        varsArray[28].style.display = "";
        varsArray[23].style.display = "";
        varsArray[24].style.display = "";
        varsArray[29].style.display = "none";
        varsArray[29].style.cursor = "";

        let statusCSSOculto = "Propriedades Menu Oculto Loading Default";
        resolve(statusCSSOculto);
    })
}

//Função para fechar MENU OCULTO
export async function closeHideMenu(listVars, x) {
    return new Promise((resolve) => {
        setTimeout(()=> {
            listVars[2].style.opacity = '0';
            listVars[2].style.left = '100vw';    
            setTimeout(() => {
                listVars[2].style.display = 'none';
                let statusOff = "Menu Oculto Encerrado";
                resolve(statusOff);
            }, x)
        }, x)
    });
}