//Declarando Variáveis de Ambiente!!!
export async function varsEnvironment() {
    return new Promise((resolve) => {

        let varsArray = [];

        //Capturando obj navbar, menu oculto & dropdown!!
        let navbarMenus = document.querySelector(".navbar");
        let navBarDrop = document.querySelector(".dropdown-content");
        let navMenuOculto = document.querySelector(".menu-oculto");

        //Capturando links menu navbar
        let nav_home = document.querySelector("#navbar-home");
        let nav_sobre = document.querySelector("#navbar-sobre");
        let nav_agen = document.querySelector("#navbar-agen");

        //Capturando links menu flutuante navbar
        let ser_trans = document.querySelector("#dropdown-transfer");
        let ser_viag = document.querySelector("#dropdown-viagem");
        let ser_paco = document.querySelector("#dropdown-pacotes");
        let ser_pass = document.querySelector("#dropdown-passagens");   

        //Capturando link botão ação header
        let btnHeaderAction = document.querySelector(".header-btn-ação");

        //Capturando LINKS footer!!!
        let fotHome = document.querySelector("#ft-home");
        let fotSobre = document.querySelector("#ft-sobre");
        let fotAgen = document.querySelector("#ft-agen");
        let fotTrans = document.querySelector("#ft-trans");
        let fotViagem = document.querySelector("#ft-viag");
        let fotPaco = document.querySelector("#ft-pacotes");
        let fotPass = document.querySelector("#ft-passagens");
        let fotPol = document.querySelector("#ft-política");

        // Capturando Links footer ICONS!!!
        let iconZap = document.querySelector(".icon-zap-link");

        //Capturando obj btn open & close menu
        let btnOpenMenu = document.querySelector(".open-menu");
        let btnCloseMenu = document.querySelector(".close-menu");

        //Capturando links menu oculto!!
        let homeMenuOculto = document.querySelector("#menu-oculto-home");
        let sobreMenuOculto = document.querySelector("#menu-oculto-sobre");
        let agenMenuOculto = document.querySelector("#menu-oculto-agen");
        let transMenuOculto = document.querySelector("#menu-oculto-trans");
        let viagMenuOculto = document.querySelector("#menu-oculto-viagens");
        let pacoMenuOculto = document.querySelector("#menu-oculto-pacotes");
        let passMenuOculto = document.querySelector("#menu-oculto-passagens");
        let loadMenuOculto = document.querySelector(".menu-oculto-loading");

        //Inserindo Variáveis de ambiente do sistema no array!
        varsArray.push(navbarMenus, navBarDrop, navMenuOculto, nav_home, nav_sobre, nav_agen, ser_trans, ser_viag, ser_paco, ser_pass, btnHeaderAction, fotHome, fotSobre, fotAgen, fotTrans, fotViagem, fotPaco, fotPass, fotPol, iconZap, btnOpenMenu, btnCloseMenu, homeMenuOculto, sobreMenuOculto, agenMenuOculto, transMenuOculto, viagMenuOculto, pacoMenuOculto, passMenuOculto, loadMenuOculto)
        
        resolve(varsArray)
    })

}
