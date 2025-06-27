//Declarando Constantes de Ambiente
export async function varsEnvironment() {
    return new Promise((resolve) => {

        //Declarando constantes de ambiente!!!
        let constArray = [];

        //Capturando obj navbar!!
        let navBar = document.querySelector(".navbar"); //0

        //Capturando links menu navbar
        let navHome = document.querySelector("#navbar-home"); //1
        let navHistorico = document.querySelector("#navbar-historico"); //2
        let navBlog = document.querySelector("#navbar-blog"); //3
        let navContato = document.querySelector("#navbar-contato"); //4

        //Capturando obj Menu Oculto!!
        let menuOculto = document.querySelector(".menu-oculto"); //5

        //Capturando btn open & close Menu Oculto!!
        let openMenu = document.querySelector(".open-menu"); //6
        let closeMenu = document.querySelector(".close-menu"); //7

        //Capturando links Menu Oculto!!
        let ocultoHome = document.querySelector("#menu-oculto-home"); //8
        let ocultoHistorico = document.querySelector("#menu-oculto-historico"); //9
        let ocultoBlog = document.querySelector("#menu-oculto-blog"); //10
        let ocultoContato = document.querySelector("#menu-oculto-contato"); //11
        let ocultoLoading = document.querySelector("#loading-text") //12

        //Capturando obj Footer Menu
        let footerMenu = document.querySelector("#ft-menu"); //13

        //Capturando links Footer Menu!!
        let footerHome = document.querySelector("#ft-home"); //14
        let footerHistorico = document.querySelector("#ft-historico"); //15
        let footerBlog = document.querySelector("#ft-blog"); //16
        let footerContato = document.querySelector("#ft-contato"); //17

        //Capturando obj Footer Política & link Política-e-privacidade
        let footerPol = document.querySelector("#ft-h1-politica"); //18
        let footerPolitica = document.querySelector("#ft-política"); //19

        //Capturando obj tópicos e itens relacionados
        let footerTop = document.querySelector("#ft-topicos"); //20
        let footerSite = document.querySelector("#ft-sites"); //21
        let footerClientes = document.querySelector("#ft-clientes"); //22
        let footerHospedagem = document.querySelector("#ft-hospedagem"); //23
        let footerSobre = document.querySelector("#ft-sobre"); //24

        //Capturando novos objetos após UPDATES!!!
        let navUpdates = document.querySelector("#navbar-updates"); //25
        let ocultoUpdates = document.querySelector("#menu-oculto-updates"); //26
        let footerUpdates = document.querySelector("#ft-updates"); //27

        //Capturando novos objetos após UPDATES - SOFTWARE drop down
        let navSoftware = document.querySelector("#dropdown-software");
        let ocultoSoftware = document.querySelector("#menu-oculto-software");
        let ftSoftware = document.querySelector("#ft-software");

        //Inserindo constantes de ambiente do sistema no array!
        constArray.push(navBar, navHome, navHistorico, navBlog, navContato, menuOculto, openMenu, closeMenu, ocultoHome, ocultoHistorico, ocultoBlog, ocultoContato, ocultoLoading, footerMenu, footerHome, footerHistorico, footerBlog, footerContato, footerPol, footerPolitica, footerTop, footerSite, footerClientes, footerHospedagem, footerSobre, navUpdates, ocultoUpdates, footerUpdates, navSoftware, ocultoSoftware, ftSoftware);
        resolve(constArray);
    });
};