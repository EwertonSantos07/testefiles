//Função para alterar propriedades CSS Menu Oculto em Loading...
export async function changeCSSOculto(listOculto) {
    return new Promise((resolve) => {
        listOculto[5].style.cursor = "wait";
        listOculto[8].style.display = "none"; //Home
        listOculto[9].style.display = "none"; //Histórico
        listOculto[10].style.display = "none"; //Blog
        listOculto[26].style.display = "none"; //Updates
        listOculto[11].style.display = "none"; //Contato
        listOculto[29].style.display = "none";//Software Dropdown
        listOculto[12].style.display = "flex"; //Loading...
        listOculto[12].style.cursor = "wait";

        let statusCSSOculto = "Propriedades Menu Oculto Loading alteradas";
        resolve(statusCSSOculto);
    })
}

//Função para retornar propriedades CSS Menu Oculto após Loading...
export async function retornaCSSOculto(listOculto) {
    return new Promise((resolve) => {
        listOculto[5].style.cursor = "default";
        listOculto[8].style.display = ""; //Home
        listOculto[9].style.display = ""; //Histórico
        listOculto[10].style.display = ""; //Blog
        listOculto[26].style.display = ""; //Updates
        listOculto[11].style.display = ""; //Contato
        listOculto[29].style.display = "";//Software Dropdown
        listOculto[12].style.display = "none"; //Loading...
        listOculto[12].style.cursor = "";

        let statusCSSOculto = "Propriedades Menu Oculto Loading Default";
        resolve(statusCSSOculto);
    })
}

//Função para fechar MENU OCULTO
export async function closeHideMenu(listConst, x) {
    return new Promise((resolve) => {
        setTimeout(()=> {
            listConst[5].style.opacity = '0';
            listConst[5].style.left = '100vw';    
            setTimeout(() => {
                listConst[5].style.display = 'none';
                let statusOff = "Menu Oculto Encerrado";
                resolve(statusOff);
            }, x)
        }, x)
    });
}