//Function IIFE DOM Document
(function(win, doc){
    'use strict';

    console.log("Iniciando JavaScript")

    //Função para rotear links e alterar estados da url
    async function roteadorURL(keyValue, pathURL) {
        return new Promise((resolve) => {

            //Infos de origem, diretórios
            // const origemDir = window.location.origin; //Domínio
            // let pathAtual = window.location.pathname; //Pasta Atual
            // console.log(origemDir, "Domínio");
            // console.log(pathAtual, "Diretório Atual");

            //Redirecionando de acordo com a chave da operação
            if(keyValue == 0) {

                //Atualizando url navegador ao iniciar site ou atualizar página
                if(pathURL == "/testefiles/") {
                    const homeUrl = `${window.location.pathname}home`;
                    const newState = {page: 'home'};
                    const newTitle = 'home';
                    window.history.pushState(newState, newTitle, homeUrl);
                    console.log("Site foi atualizado com url padrão!!!")
                } else {
                    const homeUrl = "/testefiles/home";
                    const newState = {page: 'home'};
                    const newTitle = 'home';
                    window.history.pushState(newState, newTitle, homeUrl);
                    console.log("Site foi atualizado com url diferente do inicial!")
                }

            } else if(keyValue == 1) {
                const targetUrl = pathURL;
                let parts = pathURL.split('/');
                let lastPart = parts.pop() || parts.pop();
                const newState = {page: lastPart};
                const newTitle = lastPart;
                window.history.pushState(newState, newTitle, targetUrl);
                console.log("Operação para páginas internas!!!");
            }

            console.log(keyValue, "Key Value");
            console.log(window.history.state)
            let statusURL = "URL foi atualizada";
            resolve(statusURL);
        })
    }

    //Função para alterar propriedades CSS Menu Oculto em Loading...
    async function changeCSSOculto(listOculto) {
        return new Promise((resolve) => {
            listOculto[0].style.cursor = "wait";
            listOculto[1].style.display = "none";
            listOculto[2].style.display = "none";
            listOculto[3].style.display = "none";
            listOculto[4].style.display = "none";
            listOculto[5].style.display = "none";
            listOculto[6].style.display = "none";
            listOculto[7].style.display = "none";
            listOculto[8].style.display = "none";
            listOculto[9].style.display = "flex";
            listOculto[9].style.cursor = "wait";

            let statusCSSOculto = "Propriedades Menu Oculto Loading alteradas";
            resolve(statusCSSOculto);
        })
    }

    //Função para retornar propriedades CSS Menu Oculto após Loading...
    async function retornaCSSOculto(listOculto) {
        return new Promise((resolve) => {
            listOculto[0].style.cursor = "default";
            listOculto[1].style.display = "";
            listOculto[2].style.display = "";
            listOculto[3].style.display = "";
            listOculto[4].style.display = "";
            listOculto[5].style.display = "";
            listOculto[6].style.display = "";
            listOculto[7].style.display = "";
            listOculto[8].style.display = "";
            listOculto[9].style.display = "none";
            listOculto[9].style.cursor = "";

            let statusCSSOculto = "Propriedades Menu Oculto Loading Default";
            resolve(statusCSSOculto);
        })
    }

    //Função para abrir tela de carregamento
    async function showLoadingScreen(operationID) {
        return new Promise((resolve) => {

            //Exibindo tela de Carregamento...
            const loadingScreen = document.querySelector('.loading-screen');
            loadingScreen.style.cursor = 'wait';
            loadingScreen.style.display = 'flex';

            const handleTransitionEnd = (event) => {
                if (event.propertyName === 'opacity' || event.propertyName === 'left') {
                    loadingScreen.removeEventListener('transitioned', handleTransitionEnd);
                    let statusLoad = "Loading Screen Iniciado e Visível";
                    resolve(statusLoad);
                }
            }

            loadingScreen.addEventListener('transitionend', handleTransitionEnd);

            // Inicia a transição para tornar a tela visível
            setTimeout(() => {
                loadingScreen.style.opacity = '1';
                loadingScreen.style.left = '0';
            }, 1);
        });
    };

    //Função para fechar tela de carregamento
    async function offLoadingScreen(operationID) {
        return new Promise((resolve) => {

            const loadingScreen = document.querySelector('.loading-screen');
            setTimeout(() => {
                loadingScreen.style.opacity = '0';
                loadingScreen.style.left = '100vw';
                window.scrollTo(0, 0);
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                    let statusOff = "Loading Screen Encerrada";
                    resolve(statusOff);
                }, 800);
            }, 800);
        })
    }

    //Função para fechar MENU OCULTO
    async function closeHideMenu(listConst, x) {
        return new Promise((resolve) => {
            setTimeout(()=> {
                listConst[0].style.opacity = '0';
                listConst[0].style.left = '100vw';    
                setTimeout(() => {
                    listConst[0].style.display = 'none';
                    let statusOff = "Menu Oculto Encerrado";
                    resolve(statusOff);
                }, x)
            }, x)
        });
    }

    //Função para ajustar altura do iframe
    async function alteraAlturaIframe() {
        return new Promise((resolve) => {
            let iframe = document.querySelector(".iframe");
            let iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
            console.log(iframeDocument, "ajustando altura")
            try {
                if (iframe && iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.body) {
                    iframe.style.height = iframe.contentWindow.document.body.clientHeight + "px";

                    console.log(iframe, "ajustando altura");
                    console.count("Altura do iFrame ajustada: ");
                    //window.scrollTo(0, 0);
                    resolve(iframeDocument);
                }
            } catch (error) {
                console.log("Erro ao acessar conteúdo do iframe!", error);
            }
            
        })
        
    }

    //Função para atualizar documentação do iframe
    async function atualizaIframe(path) {
        return new Promise((resolve) => {
            let iframe = document.querySelector(".iframe");
            iframe.src = path; 
            console.log(iframe.src);
            if (iframe) {
                iframe.onload = function(){
                    let statusResult = "iFrame foi atualizado";
                    resolve(statusResult);
                }
            }
        })
    }



    //Script para aba HOME!
    async function abaHome(listConst) {
        return new Promise((resolve) => {

            //CSS Changes menu oculto
            listConst[4].style.color = "#d2aa70"; //Link Home
            listConst[5].style.color = "white"; //Link Transfer
            listConst[6].style.color = "white"; //Link Viagem
            listConst[7].style.color = "white"; //Link Pacotes
            listConst[8].style.color = "white"; //Link Passagens
            listConst[9].style.color = "white"; //Link Sobre
            listConst[10].style.color = "white"; //Link Agendamento

            //CSS Changes nav bar
            listConst[11].style.color = "#d2aa70"; //Home
            listConst[12].style.color = "white"; //Sobre
            listConst[13].style.color = "white"; //Agendamento

            //CSS Changes drop down menu
            listConst[14].style.background = "white"; //Transfer Aeroporto
            listConst[14].style.color = "#05243a"; //Transfer Aeroporto
            listConst[15].style.background = "white"; //Viagem Executiva
            listConst[15].style.color = "#05243a"; //Viagem Executiva
            listConst[16].style.background = "white"; //Pacotes Turísticos
            listConst[16].style.color = "#05243a"; //Pacotes Turísticos
            listConst[17].style.background = "white"; //Passagens Aéreas
            listConst[17].style.color = "#05243a"; //Passagens Aéreas

            //CSS changes footer menu
            listConst[19].style.color = "#d2aa70"; //Home
            listConst[20].style.color = "white"; //Sobre
            listConst[21].style.color = "white"; //Agendamento

            //CSS Changes footer serviços
            listConst[22].style.color = "white"; //Transfer
            listConst[23].style.color = "white"; //Viagens
            listConst[24].style.color = "white"; //Pacotes
            listConst[25].style.color = "white"; //Passagens

            //CSS Changes footer política
            listConst[26].style.color = "white";

            let statusText = "Propriedades HOME atualizadas!"
            resolve(statusText);
        })
    }

    //Script para aba SOBRE!
    async function abaSobre(listConst) {
        return new Promise((resolve) => {

            //CSS Changes menu oculto
            listConst[4].style.color = "white"; //Link Home
            listConst[5].style.color = "white"; //Link Transfer
            listConst[6].style.color = "white"; //Link Viagem
            listConst[7].style.color = "white"; //Link Pacotes
            listConst[8].style.color = "white"; //Link Passagens
            listConst[9].style.color = "#d2aa70"; //Link Sobre
            listConst[10].style.color = "white"; //Link Agendamento

            //CSS Changes nav bar
            listConst[11].style.color = "white"; //Link Home
            listConst[12].style.color = "#d2aa70"; //Link Sobre
            listConst[13].style.color = "white"; //Link Agendamento

            //CSS Changes drop down menu
            listConst[14].style.background = "white"; //Transfer Aeroporto
            listConst[14].style.color = "#05243a"; //Transfer Aeroporto
            listConst[15].style.background = "white"; //Viagem Executiva
            listConst[15].style.color = "#05243a"; //Viagem Executiva
            listConst[16].style.background = "white"; //Pacotes Turísticos
            listConst[16].style.color = "#05243a"; //Pacotes Turísticos
            listConst[17].style.background = "white"; //Passagens Aéreas
            listConst[17].style.color = "#05243a"; //Passagens Aéreas

            //CSS changes footer menu
            listConst[19].style.color = "white"; //Home
            listConst[20].style.color = "#d2aa70"; //Sobre
            listConst[21].style.color = "white"; //Agendamento

            //CSS Changes footer serviços
            listConst[22].style.color = "white"; //Transfer
            listConst[23].style.color = "white"; //Viagens
            listConst[24].style.color = "white"; //Pacotes
            listConst[25].style.color = "white"; //Passagens

            //CSS Changes footer política
            listConst[26].style.color = "white";
            let statusText = "Propriedades SOBRE atualizadas!"
            resolve(statusText);
        })
    }

    //Script para aba AGENDAMENTO!
    async function abaAgen(listConst) {
        return new Promise((resolve) => {

            //CSS Changes menu oculto
            listConst[4].style.color = "white"; //Link Home
            listConst[5].style.color = "white"; //Link Transfer
            listConst[6].style.color = "white"; //Link Viagem
            listConst[7].style.color = "white"; //Link Pacotes
            listConst[8].style.color = "white"; //Link Passagens
            listConst[9].style.color = "white"; //Link Sobre
            listConst[10].style.color = "#d2aa70"; //Link Agendamento

            //CSS Changes nav bar
            listConst[11].style.color = "white"; //Link Home
            listConst[12].style.color = "white"; //Link Sobre
            listConst[13].style.color = "#d2aa70"; //Link Agendamento

            //CSS Changes drop down menu
            listConst[14].style.background = "white"; //Transfer Aeroporto
            listConst[14].style.color = "#05243a"; //Transfer Aeroporto
            listConst[15].style.background = "white"; //Viagem Executiva
            listConst[15].style.color = "#05243a"; //Viagem Executiva
            listConst[16].style.background = "white"; //Pacotes Turísticos
            listConst[16].style.color = "#05243a"; //Pacotes Turísticos
            listConst[17].style.background = "white"; //Passagens Aéreas
            listConst[17].style.color = "#05243a"; //Passagens Aéreas

            //CSS changes footer menu
            listConst[19].style.color = "white"; //Home
            listConst[20].style.color = "white"; //Sobre
            listConst[21].style.color = "#d2aa70"; //Agendamento

            //CSS Changes footer serviços
            listConst[22].style.color = "white"; //Transfer
            listConst[23].style.color = "white"; //Viagens
            listConst[24].style.color = "white"; //Pacotes
            listConst[25].style.color = "white"; //Passagens

            //CSS Changes footer política
            listConst[26].style.color = "white";
            let statusText = "Propriedades AGENDAMENTO atualizadas!"
            resolve(statusText);
        })
    }

    //Script para aba TRANSFER AEROPORTO!
    async function abaTrans(listConst) {
        return new Promise((resolve) => {

            //CSS Changes menu oculto
            listConst[4].style.color = "white"; //Link Home
            listConst[5].style.color = "#d2aa70"; //Link Transfer
            listConst[6].style.color = "white"; //Link Viagem
            listConst[7].style.color = "white"; //Link Pacotes
            listConst[8].style.color = "white"; //Link Passagens
            listConst[9].style.color = "white"; //Link Sobre
            listConst[10].style.color = "white"; //Link Agendamento

            //CSS Changes nav bar
            listConst[11].style.color = "white"; //Link Home
            listConst[12].style.color = "white"; //Link Sobre
            listConst[13].style.color = "white"; //Link Agendamento

            //CSS Changes drop down menu
            listConst[14].style.background = "#05243a"; //Transfer Aeroporto
            listConst[14].style.color = "#d2aa70"; //Transfer Aeroporto
            listConst[15].style.background = "white"; //Viagem Executiva
            listConst[15].style.color = "#05243a"; //Viagem Executiva
            listConst[16].style.background = "white"; //Pacotes Turísticos
            listConst[16].style.color = "#05243a"; //Pacotes Turísticos
            listConst[17].style.background = "white"; //Passagens Aéreas
            listConst[17].style.color = "#05243a"; //Passagens Aéreas

            //CSS changes footer menu
            listConst[19].style.color = "white"; //Home
            listConst[20].style.color = "white"; //Sobre
            listConst[21].style.color = "white"; //Agendamento

            //CSS Changes footer serviços
            listConst[22].style.color = "#d2aa70"; //Transfer
            listConst[23].style.color = "white"; //Viagens
            listConst[24].style.color = "white"; //Pacotes
            listConst[25].style.color = "white"; //Passagens

            //CSS Changes footer política
            listConst[26].style.color = "white";

            let statusText = "Propriedades TRANSFER atualizadas!"
            resolve(statusText);
        })

    }

    //Script para aba VIAGENS EXECUTIVAS!
    async function abaViag(listConst) {
        return new Promise((resolve) => {

            //CSS Changes menu oculto
            listConst[4].style.color = "white"; //Link Home
            listConst[5].style.color = "white"; //Link Transfer
            listConst[6].style.color = "#d2aa70"; //Link Viagem
            listConst[7].style.color = "white"; //Link Pacotes
            listConst[8].style.color = "white"; //Link Passagens
            listConst[9].style.color = "white"; //Link Sobre
            listConst[10].style.color = "white"; //Link Agendamento

            //CSS Changes nav bar
            listConst[11].style.color = "white"; //Link Home
            listConst[12].style.color = "white"; //Link Sobre
            listConst[13].style.color = "white"; //Link Agendamento

            //CSS Changes drop down menu
            listConst[14].style.background = "white"; //Transfer Aeroporto
            listConst[14].style.color = "#05243a"; //Transfer Aeroporto
            listConst[15].style.background = "#05243a"; //Viagem Executiva
            listConst[15].style.color = "#d2aa70"; //Viagem Executiva
            listConst[16].style.background = "white"; //Pacotes Turísticos
            listConst[16].style.color = "#05243a"; //Pacotes Turísticos
            listConst[17].style.background = "white"; //Passagens Aéreas
            listConst[17].style.color = "#05243a"; //Passagens Aéreas

            //CSS changes footer menu
            listConst[19].style.color = "white"; //Home
            listConst[20].style.color = "white"; //Sobre
            listConst[21].style.color = "white"; //Agendamento

            //CSS Changes footer serviços
            listConst[22].style.color = "white"; //Transfer
            listConst[23].style.color = "#d2aa70"; //Viagens
            listConst[24].style.color = "white"; //Pacotes
            listConst[25].style.color = "white"; //Passagens

            //CSS Changes footer política
            listConst[26].style.color = "white";

            let statusText = "Propriedades VIAGENS atualizadas!"
            resolve(statusText);
        })

    }

    //Script para aba PACOTES TURÍSTICOS!
    async function abaPaco(listConst) {
        return new Promise((resolve) => {

            //CSS Changes menu oculto
            listConst[4].style.color = "white"; //Link Home
            listConst[5].style.color = "white"; //Link Transfer
            listConst[6].style.color = "white"; //Link Viagem
            listConst[7].style.color = "#d2aa70"; //Link Pacotes
            listConst[8].style.color = "white"; //Link Passagens
            listConst[9].style.color = "white"; //Link Sobre
            listConst[10].style.color = "white"; //Link Agendamento

            //CSS Changes nav bar
            listConst[11].style.color = "white"; //Link Home
            listConst[12].style.color = "white"; //Link Sobre
            listConst[13].style.color = "white"; //Link Agendamento

            //CSS Changes drop down menu
            listConst[14].style.background = "white"; //Transfer Aeroporto
            listConst[14].style.color = "#05243a"; //Transfer Aeroporto
            listConst[15].style.background = "white"; //Viagem Executiva
            listConst[15].style.color = "#05243a"; //Viagem Executiva
            listConst[16].style.background = "#05243a"; //Pacotes Turísticos
            listConst[16].style.color = "#d2aa70"; //Pacotes Turísticos
            listConst[17].style.background = "white"; //Passagens Aéreas
            listConst[17].style.color = "#05243a"; //Passagens Aéreas

            //CSS changes footer menu
            listConst[19].style.color = "white"; //Home
            listConst[20].style.color = "white"; //Sobre
            listConst[21].style.color = "white"; //Agendamento

            //CSS Changes footer serviços
            listConst[22].style.color = "white"; //Transfer
            listConst[23].style.color = "white"; //Viagens
            listConst[24].style.color = "#d2aa70"; //Pacotes
            listConst[25].style.color = "white"; //Passagens

            //CSS Changes footer política
            listConst[26].style.color = "white";

            let statusText = "Propriedades PACOTES atualizadas!"
            resolve(statusText);
        })

    }

    //Script para aba PASSAGENS AÉREAS!
    async function abaPass(listConst) {
        return new Promise((resolve) => {

            //CSS Changes menu oculto
            listConst[4].style.color = "white"; //Link Home
            listConst[5].style.color = "white"; //Link Transfer
            listConst[6].style.color = "white"; //Link Viagem
            listConst[7].style.color = "white"; //Link Pacotes
            listConst[8].style.color = "#d2aa70"; //Link Passagens
            listConst[9].style.color = "white"; //Link Sobre
            listConst[10].style.color = "white"; //Link Agendamento

            //CSS Changes nav bar
            listConst[11].style.color = "white"; //Link Home
            listConst[12].style.color = "white"; //Link Sobre
            listConst[13].style.color = "white"; //Link Agendamento

            //CSS Changes drop down menu
            listConst[14].style.background = "white"; //Transfer Aeroporto
            listConst[14].style.color = "#05243a"; //Transfer Aeroporto
            listConst[15].style.background = "white"; //Viagem Executiva
            listConst[15].style.color = "#05243a"; //Viagem Executiva
            listConst[16].style.background = "white"; //Pacotes Turísticos
            listConst[16].style.color = "#05243a"; //Pacotes Turísticos
            listConst[17].style.background = "#05243a"; //Passagens Aéreas
            listConst[17].style.color = "#d2aa70"; //Passagens Aéreas

            //CSS changes footer menu
            listConst[19].style.color = "white"; //Home
            listConst[20].style.color = "white"; //Sobre
            listConst[21].style.color = "white"; //Agendamento

            //CSS Changes footer serviços
            listConst[22].style.color = "white"; //Transfer
            listConst[23].style.color = "white"; //Viagens
            listConst[24].style.color = "white"; //Pacotes
            listConst[25].style.color = "#d2aa70"; //Passagens

            //CSS Changes footer política
            listConst[26].style.color = "white";

            let statusText = "Propriedades PASSAGENS atualizadas!"
            resolve(statusText);
        })

    }

    //Script para aba POLÍTICA!
    async function abaPol(listConst) {
        return new Promise((resolve) => {

            //CSS Changes menu oculto
            listConst[4].style.color = "white"; //Link Home
            listConst[5].style.color = "white"; //Link Transfer
            listConst[6].style.color = "white"; //Link Viagem
            listConst[7].style.color = "white"; //Link Pacotes
            listConst[8].style.color = "white"; //Link Passagens
            listConst[9].style.color = "white"; //Link Sobre
            listConst[10].style.color = "white"; //Link Agendamento

            //CSS Changes nav bar
            listConst[11].style.color = "white"; //Link Home
            listConst[12].style.color = "white"; //Link Sobre
            listConst[13].style.color = "white"; //Link Agendamento

            //CSS Changes drop down menu
            listConst[14].style.background = "white"; //Transfer Aeroporto
            listConst[14].style.color = "#05243a"; //Transfer Aeroporto
            listConst[15].style.background = "white"; //Viagem Executiva
            listConst[15].style.color = "#05243a"; //Viagem Executiva
            listConst[16].style.background = "white"; //Pacotes Turísticos
            listConst[16].style.color = "#05243a"; //Pacotes Turísticos
            listConst[17].style.background = "white"; //Passagens Aéreas
            listConst[17].style.color = "#05243a"; //Passagens Aéreas

            //CSS changes footer menu
            listConst[19].style.color = "white"; //Home
            listConst[20].style.color = "white"; //Sobre
            listConst[21].style.color = "white"; //Agendamento

            //CSS Changes footer serviços
            listConst[22].style.color = "white"; //Transfer
            listConst[23].style.color = "white"; //Viagens
            listConst[24].style.color = "white"; //Pacotes
            listConst[25].style.color = "white"; //Passagens

            //CSS Changes footer política
            listConst[26].style.color = "#d2aa70";

            let statusText = "Propriedades POLÍTICA atualizadas!"
            resolve(statusText);
        })

    }

    //Iniciando Sistema com tela de carregamento...
    document.addEventListener('DOMContentLoaded', function() {
        const loadingScreen = document.querySelector('.loading-screen');
        loadingScreen.style.cursor = 'wait';
        loadingScreen.style.display = 'flex';
        loadingScreen.style.opacity = '1';
        loadingScreen.style.left = '0';
        console.log("Tela de Carregamento ativo...")
    });

    window.addEventListener("load", async function() {

        //Capturando largura da tela!!!
        const larguraScreen = screen.width;
        console.log("Width Screen Start:", larguraScreen, "px");

        //Iniciando roteador de URL
        let opValue = 0;
        const statusURL = await roteadorURL(opValue, window.location.pathname);
        console.log(statusURL);
        
        alteraAlturaIframe().then((x) => {

            //Declarando constantes de ambiente!!!
            let constArray = [];
            let ocultArray = [];

            //Capturando obj navbar, menu oculto & dropdown!!
            let navMenuOculto = document.querySelector(".menu-oculto");
            let navbarMenus = document.querySelector(".navbar");
            let navBarDrop = document.querySelector(".dropdown-content");

            //Capturando links menu oculto!!
            let homeMenuOculto = document.querySelector("#menu-oculto-home");
            let sobreMenuOculto = document.querySelector("#menu-oculto-sobre");
            let agenMenuOculto = document.querySelector("#menu-oculto-agen");
            let transMenuOculto = document.querySelector("#menu-oculto-trans");
            let viagMenuOculto = document.querySelector("#menu-oculto-viagens");
            let pacoMenuOculto = document.querySelector("#menu-oculto-pacotes");
            let passMenuOculto = document.querySelector("#menu-oculto-passagens");
            let loadMenuOculto = document.querySelector(".menu-oculto-loading");

            //Capturando obj btn open & close menu
            let btnOpenMenu = document.querySelector(".open-menu");
            let btnCloseMenu = document.querySelector(".close-menu");

            //Capturando links menu oculto
            let linkHomeOculto = document.querySelector("#menu-oculto-home");
            let linkTransOculto = document.querySelector("#menu-oculto-trans");
            let linkViagOculto = document.querySelector("#menu-oculto-viagens");
            let linkPacoOculto = document.querySelector("#menu-oculto-pacotes");
            let linkPassOculto = document.querySelector("#menu-oculto-passagens");
            let linkSobreOculto = document.querySelector("#menu-oculto-sobre");
            let linkAgenOculto = document.querySelector("#menu-oculto-agen");

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

            //Inserindo constantes de ambiente do sistema no array!
            constArray.push(navMenuOculto, navbarMenus, btnOpenMenu, btnCloseMenu,linkHomeOculto, linkTransOculto, linkViagOculto, linkPacoOculto, linkPassOculto, linkSobreOculto, linkAgenOculto, nav_home, nav_sobre, nav_agen, ser_trans, ser_viag, ser_paco, ser_pass, btnHeaderAction, fotHome, fotSobre, fotAgen, fotTrans, fotViagem, fotPaco, fotPass, fotPol);

            //Inserindo constantes Menu Oculto no array!
            ocultArray.push(navMenuOculto, btnCloseMenu, homeMenuOculto, sobreMenuOculto, agenMenuOculto, transMenuOculto, viagMenuOculto, pacoMenuOculto, passMenuOculto, loadMenuOculto);

            //Processando Array Vars e exibindo lista
            //for(let i = 0; i < varArray.length; i++) {
                //console.log(i, varArray[i]);
            //}

            //Encerrando tela de loading inicial
            const loadingScreen = document.querySelector('.loading-screen');
            setTimeout(() => {
                loadingScreen.style.opacity = '0';
                loadingScreen.style.left = '100vw';
                window.scrollTo(0, 0);

                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                    
                }, 900);
            }, 900);

            window.addEventListener('popstate', function(event) {
                window.location.reload();
            }, false);


            //Capturando click BTN OPEN MENU - MENU OCULTO
            if (btnOpenMenu) {
                btnOpenMenu.addEventListener('click', ()=> {
                    navMenuOculto.style.display = 'flex';

                    const handleTransitionEnd = (event) => {
                        if (event.propertyName === 'opacity' || event.propertyName === 'left') {
                            navMenuOculto.removeEventListener('transitioned', handleTransitionEnd);
                            console.log("Menu Oculto Iniciado e Visível")
                        }
                    }

                    navMenuOculto.addEventListener('transitionend', handleTransitionEnd);

                    //Inicia a transição para tornar a tela visível
                    setTimeout(() => {
                        navMenuOculto.style.opacity = '1';
                        navMenuOculto.style.left = '0';
                    }, 1);
                })
            }

            //Capturando click BTN CLOSE MENU - MENU OCULTO
            if (btnCloseMenu) {
                btnCloseMenu.addEventListener('click', async () => {
                    let tempo = 300;
                    const statusOff = await closeHideMenu(constArray, tempo);
                    console.log(statusOff, "Botão Close Menu");
                })
            }



            //Capturando click botão HOME menu oculto - OK
            if (linkHomeOculto) {
                linkHomeOculto.addEventListener("click", async function(event) {
                    console.clear();
                    console.log(Date());

                    //Capturando data-link
                    let nameID = linkHomeOculto.dataset.link;
                    console.log("Iniciando Operações", nameID)

                    //Alterando propriedades Menu Oculto
                    const statusMOculto = await changeCSSOculto(ocultArray);
                    console.log(statusMOculto, nameID);

                    //Iniciando roteador de URL
                    let keyValue = 1;
                    let urlID = `/testefiles/${nameID}`;
                    const statusURL = await roteadorURL(keyValue, urlID);
                    console.log(statusURL);

                    //Caminho para atualização DOM
                    let SRCiframe = `assets/${nameID}.html`;
                    console.log(SRCiframe, "Caminho para Atualizar DOM");

                    //Atualizando Documentação iFrame
                    const statusIframe = await atualizaIframe(SRCiframe);
                    console.log(statusIframe, nameID);

                    //Atualizando stilos CSS
                    const statusCSS = await abaHome(constArray);
                    console.log(statusCSS);

                    //Atualizando altura do iframe
                    const statusAltura = await alteraAlturaIframe();
                    console.log(statusAltura, nameID);

                    //Capturando objetos específicos
                    let btnMainAction = statusAltura.querySelector(".main-btn");
                    let btnAgenAction = statusAltura.querySelector(".sa-btn");
                    let linkTransFrame = statusAltura.querySelector(".ps-container-frame-link-01");
                    let linkViagFrame = statusAltura.querySelector(".ps-container-frame-link-02");
                    let linkPacoFrame = statusAltura.querySelector(".ps-container-frame-link-03");
                    let linkPassFrame = statusAltura.querySelector(".ps-container-frame-link-04");

                    console.log(btnMainAction);
                    console.log(btnAgenAction);
                    console.log(linkTransFrame);
                    console.log(linkViagFrame);
                    console.log(linkPacoFrame);
                    console.log(linkPassFrame);

                    //Capturando event click btn main ação
                    if (btnMainAction) {
                        btnMainAction.addEventListener("click", function() {
                        //window.alert(`Botão AÇÃO Main foi acionado!`)
                        window.open("https://tinyurl.com/veckfe3p", "_blank");
                        })
                    }

                    if (btnAgenAction) {
                        btnAgenAction.addEventListener("click", function() {
                        //window.alert(`Botão AÇÃO Agendamento foi acionado!`)
                        window.open("https://tinyurl.com/veckfe3p", "_blank");
                        })
                    }

                    if (linkTransFrame) {
                        linkTransFrame.addEventListener("click", async function(event) {
                            console.clear();
                            console.log(Date());

                            //Capturando data-link
                            let nameID = linkTransFrame.dataset.link;
                            console.log("Iniciando Operações", nameID)

                            //Iniciando tela de carregamento
                            const statusLoading = await showLoadingScreen(nameID);
                            console.log(statusLoading, nameID);

                            //Iniciando roteador de URL
                            let keyValue = 1;
                            let urlID = `/testefiles/${nameID}`;
                            const statusURL = await roteadorURL(keyValue, urlID);
                            console.log(statusURL);

                            //Caminho para atualização DOM
                            let SRCiframe = `assets/${nameID}.html`;
                            console.log(SRCiframe, "Caminho para Atualizar DOM");

                            //Atualizando Documentação iFrame
                            const statusIframe = await atualizaIframe(SRCiframe);
                            console.log(statusIframe, nameID);

                            //Atualizando stilos CSS
                            const statusCSS = await abaTrans(constArray);
                            console.log(statusCSS);

                            //Atualizando altura do iframe
                            const statusAltura = await alteraAlturaIframe();
                            console.log(statusAltura, nameID);

                            //Capturando objetos específicos
                            let btnTransAction = statusAltura.querySelector(".ta-btn");
                            console.log(btnTransAction);

                            //Capturando event click btn ação
                            if (btnTransAction) {
                                btnTransAction.addEventListener("click", function() {
                                //window.alert(`Botão AÇÃO ${nameID} foi acionado!`)
                                window.open("https://tinyurl.com/5bctdz3d", "_blank");
                                })
                            }

                            //Encerrando Screen Loading...
                            const statusOff = await offLoadingScreen();
                            console.log(statusOff, nameID);
                            console.log(`Link frame ${nameID} from home menu oculto pronto!`);
                        })
                    }

                    if (linkViagFrame) {
                        linkViagFrame.addEventListener("click", async function(event) {
                            console.clear();
                            console.log(Date());

                            //Capturando data-link
                            let nameID = linkViagFrame.dataset.link;
                            console.log("Iniciando Operações", nameID)

                            //Iniciando tela de carregamento
                            const statusLoading = await showLoadingScreen(nameID);
                            console.log(statusLoading, nameID);

                            //Iniciando roteador de URL
                            let keyValue = 1;
                            let urlID = `/testefiles/${nameID}`;
                            const statusURL = await roteadorURL(keyValue, urlID);
                            console.log(statusURL);

                            //Caminho para atualização DOM
                            let SRCiframe = `assets/${nameID}.html`;
                            console.log(SRCiframe, "Caminho para Atualizar DOM");

                            //Atualizando Documentação iFrame
                            const statusIframe = await atualizaIframe(SRCiframe);
                            console.log(statusIframe, nameID);

                            //Atualizando stilos CSS
                            const statusCSS = await abaViag(constArray);
                            console.log(statusCSS);

                            //Atualizando altura do iframe
                            const statusAltura = await alteraAlturaIframe();
                            console.log(statusAltura, nameID);

                            //Capturando objetos específicos
                            let btnViagAction = statusAltura.querySelector(".ve-btn");
                            console.log(btnViagAction);

                            //Capturando event click btn ação
                            if (btnViagAction) {
                                btnViagAction.addEventListener("click", function() {
                                //window.alert(`Botão AÇÃO ${nameID} foi acionado!`)
                                window.open("https://tinyurl.com/ycxys5h9", "_blank");
                                })
                            }

                            //Encerrando Screen Loading...
                            const statusOff = await offLoadingScreen();
                            console.log(statusOff, nameID);
                            console.log(`Link frame${nameID} from home menu oculto pronto!`);
                        })
                    }

                    if (linkPacoFrame) {
                        linkPacoFrame.addEventListener("click", async function(event) {
                            console.clear();
                            console.log(Date());

                            //Capturando data-link
                            let nameID = linkPacoFrame.dataset.link;
                            console.log("Iniciando Operações", nameID)

                            //Iniciando tela de carregamento
                            const statusLoading = await showLoadingScreen(nameID);
                            console.log(statusLoading, nameID);

                            //Iniciando roteador de URL
                            let keyValue = 1;
                            let urlID = `/testefiles/${nameID}`;
                            const statusURL = await roteadorURL(keyValue, urlID);
                            console.log(statusURL);

                            //Caminho para atualização DOM
                            let SRCiframe = `assets/${nameID}.html`;
                            console.log(SRCiframe, "Caminho para Atualizar DOM");

                            //Atualizando Documentação iFrame
                            const statusIframe = await atualizaIframe(SRCiframe);
                            console.log(statusIframe, nameID);

                            //Atualizando stilos CSS
                            const statusCSS = await abaPaco(constArray);
                            console.log(statusCSS);

                            //Atualizando altura do iframe
                            const statusAltura = await alteraAlturaIframe();
                            console.log(statusAltura, nameID);

                            //Capturando objetos específicos
                            let btnPaco01Action = statusAltura.querySelector(".pt-btn-01");
                            let btnPaco02Action = statusAltura.querySelector(".pt-btn-02");
                            let btnPaco03Action = statusAltura.querySelector(".pt-btn-03");
                            console.log(btnPaco01Action);
                            console.log(btnPaco02Action);
                            console.log(btnPaco03Action);

                            //Capturando event click btn ação
                            if (btnPaco01Action) {
                                btnPaco01Action.addEventListener("click", function() {
                                //window.alert(`Botão AÇÃO Almoço foi acionado!`)
                                window.open("https://tinyurl.com/2w93hprv", "_blank");
                                })
                            }

                            if (btnPaco02Action) {
                                btnPaco02Action.addEventListener("click", function() {
                                //window.alert(`Botão AÇÃO Jantar foi acionado!`)
                                window.open("https://tinyurl.com/yz29jc83", "_blank");
                                })
                            }

                            if (btnPaco03Action) {
                                btnPaco03Action.addEventListener("click", function() {
                                //window.alert(`Botão AÇÃO Eventos foi acionado!`)
                                window.open("https://tinyurl.com/szd84cmt", "_blank");
                                })
                            }

                            //Encerrando Screen Loading...
                            const statusOff = await offLoadingScreen();
                            console.log(statusOff, nameID);
                            console.log(`Link frame ${nameID} from home menu oculto pronto!`);
                        })
                    }

                    if (linkPassFrame) {
                        linkPassFrame.addEventListener("click", async function(event) {
                            console.clear();
                            console.log(Date());

                            //Capturando data-link
                            let nameID = linkPassFrame.dataset.link;
                            console.log("Iniciando Operações", nameID)

                            //Iniciando tela de carregamento
                            const statusLoading = await showLoadingScreen(nameID);
                            console.log(statusLoading, nameID);

                            //Iniciando roteador de URL
                            let keyValue = 1;
                            let urlID = `/testefiles/${nameID}`;
                            const statusURL = await roteadorURL(keyValue, urlID);
                            console.log(statusURL);

                            //Caminho para atualização DOM
                            let SRCiframe = `assets/${nameID}.html`;
                            console.log(SRCiframe, "Caminho para Atualizar DOM");

                            //Atualizando Documentação iFrame
                            const statusIframe = await atualizaIframe(SRCiframe);
                            console.log(statusIframe, nameID);

                            //Atualizando stilos CSS
                            const statusCSS = await abaPass(constArray);
                            console.log(statusCSS);

                            //Atualizando altura do iframe
                            const statusAltura = await alteraAlturaIframe();
                            console.log(statusAltura, nameID);

                            //Capturando objetos específicos
                            let btnPassAction = statusAltura.querySelector(".pa-btn");
                            console.log(btnPassAction);

                            //Capturando event click btn ação
                            if (btnPassAction) {
                                btnPassAction.addEventListener("click", function() {
                                //window.alert(`Botão AÇÃO ${nameID} foi acionado!`)
                                window.open("https://tinyurl.com/2rjya8sf", "_blank");
                                })
                            }

                            //Encerrando Screen Loading...
                            const statusOff = await offLoadingScreen();
                            console.log(statusOff, nameID);
                            console.log(`Link frame ${nameID} from home menu oculto pronto!`);
                        })
                    }

                    //Fechando Menu Oculto após carregamento!
                    let tempo = 800;
                    const statusOff = await closeHideMenu(constArray, tempo);
                    console.log(statusOff, nameID);
                    
                    //Alterando propriedades Menu Oculto
                    const statusEndOculto = await retornaCSSOculto(ocultArray);
                    console.log(statusEndOculto, nameID);
                    console.log(`Configs ${nameID} menu oculto pronto!`);
                })
            }   
            
            //Capturando click botão SOBRE menu oculto - OK
            if (linkSobreOculto) {
                linkSobreOculto.addEventListener("click", async function(event) {
                    console.clear();
                    console.log(Date());

                    //Capturando data-link
                    let nameID = linkSobreOculto.dataset.link;
                    console.log("Iniciando Operações", nameID)

                    //Alterando propriedades Menu Oculto
                    const statusMOculto = await changeCSSOculto(ocultArray);
                    console.log(statusMOculto, nameID);

                    //Iniciando roteador de URL
                    let keyValue = 1;
                    let urlID = `/testefiles/${nameID}`;
                    const statusURL = await roteadorURL(keyValue, urlID);
                    console.log(statusURL);

                    //Caminho para atualização DOM
                    let SRCiframe = `assets/${nameID}.html`;
                    console.log(SRCiframe, "Caminho para Atualizar DOM");

                    //Atualizando Documentação iFrame
                    const statusIframe = await atualizaIframe(SRCiframe);
                    console.log(statusIframe, nameID);

                    //Atualizando stilos CSS
                    const statusCSS = await abaSobre(constArray);
                    console.log(statusCSS);

                    //Atualizando altura do iframe
                    const statusAltura = await alteraAlturaIframe();
                    console.log(statusAltura, nameID);

                    //Capturando objetos específicos
                    let btnSobreAction = statusAltura.querySelector(".am-btn");
                    console.log(btnSobreAction);

                    //Capturando event click btn ação
                    if (btnSobreAction) {
                        btnSobreAction.addEventListener("click", function() {
                        //window.alert(`Botão AÇÃO ${nameID} foi acionado!`)
                        window.open("https://tinyurl.com/veckfe3p", "_blank");
                        })
                    }

                    //Fechando Menu Oculto após carregamento!
                    let tempo = 800;
                    const statusOff = await closeHideMenu(constArray, tempo);
                    console.log(statusOff, nameID);

                    //Alterando propriedades Menu Oculto
                    const statusEndOculto = await retornaCSSOculto(ocultArray);
                    console.log(statusEndOculto, nameID);
                    console.log(`Configs ${nameID} menu oculto pronto!`);
                })
            } 

            //Capturando click botão AGENDAMENTO menu oculto - OK
            if (linkAgenOculto) {
                linkAgenOculto.addEventListener("click", async function(event) {
                    console.clear();
                    console.log(Date());

                    //Capturando data-link
                    let nameID = linkAgenOculto.dataset.link;
                    console.log("Iniciando Operações", nameID)

                    //Alterando propriedades Menu Oculto
                    const statusMOculto = await changeCSSOculto(ocultArray);
                    console.log(statusMOculto, nameID);

                    //Iniciando roteador de URL
                    let keyValue = 1;
                    let urlID = `/testefiles/${nameID}`;
                    const statusURL = await roteadorURL(keyValue, urlID);
                    console.log(statusURL);

                    //Caminho para atualização DOM
                    let SRCiframe = `assets/${nameID}.html`;
                    console.log(SRCiframe, "Caminho para Atualizar DOM");

                    //Atualizando Documentação iFrame
                    const statusIframe = await atualizaIframe(SRCiframe);
                    console.log(statusIframe, nameID);

                    //Atualizando stilos CSS
                    const statusCSS = await abaAgen(constArray);
                    console.log(statusCSS);

                    //Atualizando altura do iframe
                    const statusAltura = await alteraAlturaIframe();
                    console.log(statusAltura, nameID);

                    //Capturando objetos específicos
                    let btnAgenAction = statusAltura.querySelector(".sa-btn");
                    console.log(btnAgenAction);

                    //Capturando event click btn ação
                    if (btnAgenAction) {
                        btnAgenAction.addEventListener("click", function() {
                        //window.alert(`Botão AÇÃO ${nameID} foi acionado!`)
                        window.open("https://tinyurl.com/veckfe3p", "_blank");
                        })
                    }

                    //Fechando Menu Oculto após carregamento!
                    let tempo = 800;
                    const statusOff = await closeHideMenu(constArray, tempo);
                    console.log(statusOff, nameID);
                    
                    //Alterando propriedades Menu Oculto
                    const statusEndOculto = await retornaCSSOculto(ocultArray);
                    console.log(statusEndOculto, nameID);
                    console.log(`Configs ${nameID} menu oculto pronto!`);
                })
            } 

            //Capturando click botão TRANSFER menu oculto - OK
            if (linkTransOculto) {
                linkTransOculto.addEventListener("click", async function(event) {
                    console.clear();
                    console.log(Date());

                    //Capturando data-link
                    let nameID = linkTransOculto.dataset.link;
                    console.log("Iniciando Operações", nameID)

                    //Alterando propriedades Menu Oculto
                    const statusMOculto = await changeCSSOculto(ocultArray);
                    console.log(statusMOculto, nameID);

                    //Iniciando roteador de URL
                    let keyValue = 1;
                    let urlID = `/testefiles/${nameID}`;
                    const statusURL = await roteadorURL(keyValue, urlID);
                    console.log(statusURL);

                    //Caminho para atualização DOM
                    let SRCiframe = `assets/${nameID}.html`;
                    console.log(SRCiframe, "Caminho para Atualizar DOM");

                    //Atualizando Documentação iFrame
                    const statusIframe = await atualizaIframe(SRCiframe);
                    console.log(statusIframe, nameID);

                    //Atualizando stilos CSS
                    const statusCSS = await abaTrans(constArray);
                    console.log(statusCSS);

                    //Atualizando altura do iframe
                    const statusAltura = await alteraAlturaIframe();
                    console.log(statusAltura, nameID);

                    //Capturando objetos específicos
                    let btnTransAction = statusAltura.querySelector(".ta-btn");
                    console.log(btnTransAction);

                    //Capturando event click btn ação
                    if (btnTransAction) {
                        btnTransAction.addEventListener("click", function() {
                        //window.alert(`Botão AÇÃO ${nameID} foi acionado!`)
                        window.open("https://tinyurl.com/5bctdz3d", "_blank");
                        })
                    }

                    //Fechando Menu Oculto após carregamento!
                    let tempo = 800;
                    const statusOff = await closeHideMenu(constArray, tempo);
                    console.log(statusOff, nameID);
                    
                    //Alterando propriedades Menu Oculto
                    const statusEndOculto = await retornaCSSOculto(ocultArray);
                    console.log(statusEndOculto, nameID);
                    console.log(`Configs ${nameID} menu oculto pronto!`);
                })
            }  
            
            //Capturando click botão VIAGENS menu oculto - OK
            if (linkViagOculto) {
                linkViagOculto.addEventListener("click", async function(event) {
                    console.clear();
                    console.log(Date());

                    //Capturando data-link
                    let nameID = linkViagOculto.dataset.link;
                    console.log("Iniciando Operações", nameID)

                    //Alterando propriedades Menu Oculto
                    const statusMOculto = await changeCSSOculto(ocultArray);
                    console.log(statusMOculto, nameID);

                    //Iniciando roteador de URL
                    let keyValue = 1;
                    let urlID = `/testefiles/${nameID}`;
                    const statusURL = await roteadorURL(keyValue, urlID);
                    console.log(statusURL);

                    //Caminho para atualização DOM
                    let SRCiframe = `assets/${nameID}.html`;
                    console.log(SRCiframe, "Caminho para Atualizar DOM");

                    //Atualizando Documentação iFrame
                    const statusIframe = await atualizaIframe(SRCiframe);
                    console.log(statusIframe, nameID);

                    //Atualizando stilos CSS
                    const statusCSS = await abaViag(constArray);
                    console.log(statusCSS);

                    //Atualizando altura do iframe
                    const statusAltura = await alteraAlturaIframe();
                    console.log(statusAltura, nameID);

                    //Capturando objetos específicos
                    let btnViagAction = statusAltura.querySelector(".ve-btn");
                    console.log(btnViagAction);

                    //Capturando event click btn ação
                    if (btnViagAction) {
                        btnViagAction.addEventListener("click", function() {
                        //window.alert(`Botão AÇÃO ${nameID} foi acionado!`)
                        window.open("https://tinyurl.com/ycxys5h9", "_blank");
                        })
                    }

                    //Fechando Menu Oculto após carregamento!
                    let tempo = 800;
                    const statusOff = await closeHideMenu(constArray, tempo);
                    console.log(statusOff, nameID);
                    
                    //Alterando propriedades Menu Oculto
                    const statusEndOculto = await retornaCSSOculto(ocultArray);
                    console.log(statusEndOculto, nameID);
                    console.log(`Configs ${nameID} menu oculto pronto!`);
                })
            } 

            //Capturando click botão PACOTES menu oculto - OK
            if (linkPacoOculto) {
                linkPacoOculto.addEventListener("click", async function(event) {
                    console.clear();
                    console.log(Date());

                    //Capturando data-link
                    let nameID = linkPacoOculto.dataset.link;
                    console.log("Iniciando Operações", nameID)

                    //Alterando propriedades Menu Oculto
                    const statusMOculto = await changeCSSOculto(ocultArray);
                    console.log(statusMOculto, nameID);

                    //Iniciando roteador de URL
                    let keyValue = 1;
                    let urlID = `/testefiles/${nameID}`;
                    const statusURL = await roteadorURL(keyValue, urlID);
                    console.log(statusURL);

                    //Caminho para atualização DOM
                    let SRCiframe = `assets/${nameID}.html`;
                    console.log(SRCiframe, "Caminho para Atualizar DOM");

                    //Atualizando Documentação iFrame
                    const statusIframe = await atualizaIframe(SRCiframe);
                    console.log(statusIframe, nameID);

                    //Atualizando stilos CSS
                    const statusCSS = await abaPaco(constArray);
                    console.log(statusCSS);

                    //Atualizando altura do iframe
                    const statusAltura = await alteraAlturaIframe();
                    console.log(statusAltura, nameID);

                    //Capturando objetos específicos
                    let btnPaco01Action = statusAltura.querySelector(".pt-btn-01");
                    let btnPaco02Action = statusAltura.querySelector(".pt-btn-02");
                    let btnPaco03Action = statusAltura.querySelector(".pt-btn-03");
                    console.log(btnPaco01Action);
                    console.log(btnPaco02Action);
                    console.log(btnPaco03Action);

                    //Capturando event click btn ação
                    if (btnPaco01Action) {
                        btnPaco01Action.addEventListener("click", function() {
                        //window.alert(`Botão AÇÃO ${nameID} foi acionado!`)
                        window.open("https://tinyurl.com/2w93hprv", "_blank");
                        })
                    }

                    //Capturando event click btn ação
                    if (btnPaco02Action) {
                        btnPaco02Action.addEventListener("click", function() {
                        //window.alert(`Botão AÇÃO ${nameID} foi acionado!`)
                        window.open("https://tinyurl.com/yz29jc83", "_blank");
                        })
                    }

                    //Capturando event click btn ação
                    if (btnPaco03Action) {
                        btnPaco03Action.addEventListener("click", function() {
                        //window.alert(`Botão AÇÃO ${nameID} foi acionado!`)
                        window.open("https://tinyurl.com/szd84cmt", "_blank");
                        })
                    }

                    //Fechando Menu Oculto após carregamento!
                    let tempo = 800;
                    const statusOff = await closeHideMenu(constArray, tempo);
                    console.log(statusOff, nameID);
                    
                    //Alterando propriedades Menu Oculto
                    const statusEndOculto = await retornaCSSOculto(ocultArray);
                    console.log(statusEndOculto, nameID);
                    console.log(`Configs ${nameID} menu oculto pronto!`);
                })
            } 

            //Capturando click botão PASSAGENS menu oculto - OK
            if (linkPassOculto) {
                linkPassOculto.addEventListener("click", async function(event) {
                    console.clear();
                    console.log(Date());

                    //Capturando data-link
                    let nameID = linkPassOculto.dataset.link;
                    console.log("Iniciando Operações", nameID)

                    //Alterando propriedades Menu Oculto
                    const statusMOculto = await changeCSSOculto(ocultArray);
                    console.log(statusMOculto, nameID);

                    //Iniciando roteador de URL
                    let keyValue = 1;
                    let urlID = `/testefiles/${nameID}`;
                    const statusURL = await roteadorURL(keyValue, urlID);
                    console.log(statusURL);

                    //Caminho para atualização DOM
                    let SRCiframe = `assets/${nameID}.html`;
                    console.log(SRCiframe, "Caminho para Atualizar DOM");

                    //Atualizando Documentação iFrame
                    const statusIframe = await atualizaIframe(SRCiframe);
                    console.log(statusIframe, nameID);

                    //Atualizando stilos CSS
                    const statusCSS = await abaPass(constArray);
                    console.log(statusCSS);

                    //Atualizando altura do iframe
                    const statusAltura = await alteraAlturaIframe();
                    console.log(statusAltura, nameID);

                    //Capturando objetos específicos
                    let btnPassAction = statusAltura.querySelector(".pa-btn");
                    console.log(btnPassAction);

                    //Capturando event click btn ação
                    if (btnPassAction) {
                        btnPassAction.addEventListener("click", function() {
                        //window.alert(`Botão AÇÃO ${nameID} foi acionado!`)
                        window.open("https://tinyurl.com/2rjya8sf", "_blank");
                        })
                    }

                    //Fechando Menu Oculto após carregamento!
                    let tempo = 800;
                    const statusOff = await closeHideMenu(constArray, tempo);
                    console.log(statusOff, nameID);
                    
                    //Alterando propriedades Menu Oculto
                    const statusEndOculto = await retornaCSSOculto(ocultArray);
                    console.log(statusEndOculto, nameID);
                    console.log(`Configs ${nameID} menu oculto pronto!`);
                })
            } 



            //Evento click botão HOME nav bar - OK
            if (nav_home) {
                nav_home.addEventListener("click", async function(event) {
                    console.clear();
                    console.log(Date());

                    //Capturando data-link
                    let nameID = nav_home.dataset.link;
                    console.log("Iniciando Operações", nameID)

                    //Iniciando tela de carregamento
                    const statusLoading = await showLoadingScreen(nameID);
                    console.log(statusLoading, nameID);

                    //Iniciando roteador de URL
                    let keyValue = 1;
                    let urlID = `/testefiles/${nameID}`;
                    const statusURL = await roteadorURL(keyValue, urlID);
                    console.log(statusURL);

                    //Caminho para atualização DOM
                    let SRCiframe = `assets/${nameID}.html`;
                    console.log(SRCiframe, "Caminho para Atualizar DOM");

                    //Atualizando Documentação iFrame
                    const statusIframe = await atualizaIframe(SRCiframe);
                    console.log(statusIframe, nameID);

                    //Atualizando stilos CSS
                    const statusCSS = await abaHome(constArray);
                    console.log(statusCSS);

                    //Atualizando altura do iframe
                    const statusAltura = await alteraAlturaIframe();
                    console.log(statusAltura, nameID);

                    //Capturando objetos específicos
                    let btnMainAction = statusAltura.querySelector(".main-btn");
                    let btnAgenAction = statusAltura.querySelector(".sa-btn");
                    let linkTransFrame = statusAltura.querySelector(".ps-container-frame-link-01");
                    let linkViagFrame = statusAltura.querySelector(".ps-container-frame-link-02");
                    let linkPacoFrame = statusAltura.querySelector(".ps-container-frame-link-03");
                    let linkPassFrame = statusAltura.querySelector(".ps-container-frame-link-04");

                    console.log(btnMainAction);
                    console.log(btnAgenAction);
                    console.log(linkTransFrame);
                    console.log(linkViagFrame);
                    console.log(linkPacoFrame);
                    console.log(linkPassFrame);

                    //Capturando event click btn main ação
                    if (btnMainAction) {
                        btnMainAction.addEventListener("click", function() {
                        //window.alert(`Botão AÇÃO Main foi acionado!`)
                        window.open("https://tinyurl.com/veckfe3p", "_blank");
                        })
                    }

                    if (btnAgenAction) {
                        btnAgenAction.addEventListener("click", function() {
                        //window.alert(`Botão AÇÃO Agendamento foi acionado!`)
                        window.open("https://tinyurl.com/veckfe3p", "_blank");
                        })
                    }

                    if (linkTransFrame) {
                        linkTransFrame.addEventListener("click", async function(event) {
                            console.clear();
                            console.log(Date());

                            //Capturando data-link
                            let nameID = linkTransFrame.dataset.link;
                            console.log("Iniciando Operações", nameID)

                            //Iniciando tela de carregamento
                            const statusLoading = await showLoadingScreen(nameID);
                            console.log(statusLoading, nameID);

                            //Iniciando roteador de URL
                            let keyValue = 1;
                            let urlID = `/testefiles/${nameID}`;
                            const statusURL = await roteadorURL(keyValue, urlID);
                            console.log(statusURL);

                            //Caminho para atualização DOM
                            let SRCiframe = `assets/${nameID}.html`;
                            console.log(SRCiframe, "Caminho para Atualizar DOM");

                            //Atualizando Documentação iFrame
                            const statusIframe = await atualizaIframe(SRCiframe);
                            console.log(statusIframe, nameID);

                            //Atualizando stilos CSS
                            const statusCSS = await abaTrans(constArray);
                            console.log(statusCSS);

                            //Atualizando altura do iframe
                            const statusAltura = await alteraAlturaIframe();
                            console.log(statusAltura, nameID);

                            //Capturando objetos específicos
                            let btnTransAction = statusAltura.querySelector(".ta-btn");
                            console.log(btnTransAction);

                            //Capturando event click btn ação
                            if (btnTransAction) {
                                btnTransAction.addEventListener("click", function() {
                                //window.alert(`Botão AÇÃO ${nameID} foi acionado!`)
                                window.open("https://tinyurl.com/5bctdz3d", "_blank");
                                })
                            }

                            //Encerrando Screen Loading...
                            const statusOff = await offLoadingScreen();
                            console.log(statusOff, nameID);
                            console.log(`Link frame ${nameID} from home nav bar pronto!`);
                        })
                    }

                    if (linkViagFrame) {
                        linkViagFrame.addEventListener("click", async function(event) {
                            console.clear();
                            console.log(Date());

                            //Capturando data-link
                            let nameID = linkViagFrame.dataset.link;
                            console.log("Iniciando Operações", nameID)

                            //Iniciando tela de carregamento
                            const statusLoading = await showLoadingScreen(nameID);
                            console.log(statusLoading, nameID);

                            //Iniciando roteador de URL
                            let keyValue = 1;
                            let urlID = `/testefiles/${nameID}`;
                            const statusURL = await roteadorURL(keyValue, urlID);
                            console.log(statusURL);

                            //Caminho para atualização DOM
                            let SRCiframe = `assets/${nameID}.html`;
                            console.log(SRCiframe, "Caminho para Atualizar DOM");

                            //Atualizando Documentação iFrame
                            const statusIframe = await atualizaIframe(SRCiframe);
                            console.log(statusIframe, nameID);

                            //Atualizando stilos CSS
                            const statusCSS = await abaViag(constArray);
                            console.log(statusCSS);

                            //Atualizando altura do iframe
                            const statusAltura = await alteraAlturaIframe();
                            console.log(statusAltura, nameID);

                            //Capturando objetos específicos
                            let btnViagAction = statusAltura.querySelector(".ve-btn");
                            console.log(btnViagAction);

                            //Capturando event click btn ação
                            if (btnViagAction) {
                                btnViagAction.addEventListener("click", function() {
                                //window.alert(`Botão AÇÃO ${nameID} foi acionado!`)
                                window.open("https://tinyurl.com/ycxys5h9", "_blank");
                                })
                            }

                            //Encerrando Screen Loading...
                            const statusOff = await offLoadingScreen();
                            console.log(statusOff, nameID);
                            console.log(`Link frame ${nameID} from home nav bar pronto!`);
                        })
                    }

                    if (linkPacoFrame) {
                        linkPacoFrame.addEventListener("click", async function(event) {
                            console.clear();
                            console.log(Date());

                            //Capturando data-link
                            let nameID = linkPacoFrame.dataset.link;
                            console.log("Iniciando Operações", nameID)

                            //Iniciando tela de carregamento
                            const statusLoading = await showLoadingScreen(nameID);
                            console.log(statusLoading, nameID);

                            //Iniciando roteador de URL
                            let keyValue = 1;
                            let urlID = `/testefiles/${nameID}`;
                            const statusURL = await roteadorURL(keyValue, urlID);
                            console.log(statusURL);

                            //Caminho para atualização DOM
                            let SRCiframe = `assets/${nameID}.html`;
                            console.log(SRCiframe, "Caminho para Atualizar DOM");

                            //Atualizando Documentação iFrame
                            const statusIframe = await atualizaIframe(SRCiframe);
                            console.log(statusIframe, nameID);

                            //Atualizando stilos CSS
                            const statusCSS = await abaPaco(constArray);
                            console.log(statusCSS);

                            //Atualizando altura do iframe
                            const statusAltura = await alteraAlturaIframe();
                            console.log(statusAltura, nameID);

                            //Capturando objetos específicos
                            let btnPaco01Action = statusAltura.querySelector(".pt-btn-01");
                            let btnPaco02Action = statusAltura.querySelector(".pt-btn-02");
                            let btnPaco03Action = statusAltura.querySelector(".pt-btn-03");
                            console.log(btnPaco01Action);
                            console.log(btnPaco02Action);
                            console.log(btnPaco03Action);

                            //Capturando event click btn ação
                            if (btnPaco01Action) {
                                btnPaco01Action.addEventListener("click", function() {
                                //window.alert(`Botão AÇÃO Almoço foi acionado!`)
                                window.open("https://tinyurl.com/2w93hprv", "_blank");
                                })
                            }

                            if (btnPaco02Action) {
                                btnPaco02Action.addEventListener("click", function() {
                                //window.alert(`Botão AÇÃO Jantar foi acionado!`)
                                window.open("https://tinyurl.com/yz29jc83", "_blank");
                                })
                            }

                            if (btnPaco03Action) {
                                btnPaco03Action.addEventListener("click", function() {
                                //window.alert(`Botão AÇÃO Eventos foi acionado!`)
                                window.open("https://tinyurl.com/szd84cmt", "_blank");
                                })
                            }

                            //Encerrando Screen Loading...
                            const statusOff = await offLoadingScreen();
                            console.log(statusOff, nameID);
                            console.log(`Link frame ${nameID} from home nav bar pronto!`);
                        })
                    }

                    if (linkPassFrame) {
                        linkPassFrame.addEventListener("click", async function(event) {
                            console.clear();
                            console.log(Date());

                            //Capturando data-link
                            let nameID = linkPassFrame.dataset.link;
                            console.log("Iniciando Operações", nameID)

                            //Iniciando tela de carregamento
                            const statusLoading = await showLoadingScreen(nameID);
                            console.log(statusLoading, nameID);

                            //Iniciando roteador de URL
                            let keyValue = 1;
                            let urlID = `/testefiles/${nameID}`;
                            const statusURL = await roteadorURL(keyValue, urlID);
                            console.log(statusURL);

                            //Caminho para atualização DOM
                            let SRCiframe = `assets/${nameID}.html`;
                            console.log(SRCiframe, "Caminho para Atualizar DOM");

                            //Atualizando Documentação iFrame
                            const statusIframe = await atualizaIframe(SRCiframe);
                            console.log(statusIframe, nameID);

                            //Atualizando stilos CSS
                            const statusCSS = await abaPass(constArray);
                            console.log(statusCSS);

                            //Atualizando altura do iframe
                            const statusAltura = await alteraAlturaIframe();
                            console.log(statusAltura, nameID);

                            //Capturando objetos específicos
                            let btnPassAction = statusAltura.querySelector(".pa-btn");
                            console.log(btnPassAction);

                            //Capturando event click btn ação
                            if (btnPassAction) {
                                btnPassAction.addEventListener("click", function() {
                                //window.alert(`Botão AÇÃO ${nameID} foi acionado!`)
                                window.open("https://tinyurl.com/2rjya8sf", "_blank");
                                })
                            }

                            //Encerrando Screen Loading...
                            const statusOff = await offLoadingScreen();
                            console.log(statusOff, nameID);
                            console.log(`Link frame ${nameID} from home nav bar pronto!`);
                        })
                    }

                    //Encerrando Screen Loading...
                    const statusOff = await offLoadingScreen();
                    console.log(statusOff, nameID);
                    console.log(`Configs ${nameID} nav bar pronto!`);
                })
            }

            //Evento click botão SOBRE nav bar - OK
            if (nav_sobre) {
                nav_sobre.addEventListener("click", async function(event) {
                    console.clear();
                    console.log(Date());

                    //Capturando data-link
                    let nameID = nav_sobre.dataset.link;
                    console.log("Iniciando Operações", nameID)

                    //Iniciando tela de carregamento
                    const statusLoading = await showLoadingScreen(nameID);
                    console.log(statusLoading, nameID);

                    //Iniciando roteador de URL
                    let keyValue = 1;
                    let urlID = `/testefiles/${nameID}`;
                    const statusURL = await roteadorURL(keyValue, urlID);
                    console.log(statusURL);

                    //Caminho para atualização DOM
                    let SRCiframe = `assets/${nameID}.html`;
                    console.log(SRCiframe, "Caminho para Atualizar DOM");

                    //Atualizando Documentação iFrame
                    const statusIframe = await atualizaIframe(SRCiframe);
                    console.log(statusIframe, nameID);

                    //Atualizando stilos CSS
                    const statusCSS = await abaSobre(constArray);
                    console.log(statusCSS);

                    //Atualizando altura do iframe
                    const statusAltura = await alteraAlturaIframe();
                    console.log(statusAltura, nameID);

                    //Capturando objetos específicos
                    let btnSobreAction = statusAltura.querySelector(".am-btn");
                    console.log(btnSobreAction);

                    //Capturando event click btn ação
                    if (btnSobreAction) {
                        btnSobreAction.addEventListener("click", function() {
                        //window.alert(`Botão AÇÃO ${nameID} foi acionado!`)
                        window.open("https://tinyurl.com/veckfe3p", "_blank");
                        })
                    }

                    //Encerrando Screen Loading...
                    const statusOff = await offLoadingScreen(nameID);
                    console.log(statusOff, nameID);
                    console.log(`Botão ${nameID} nav bar pronto!`);
                })
            }

            //Evento click botão AGENDAMENTO nav bar - OK
            if (nav_agen) {
                nav_agen.addEventListener("click", async function(event) {
                    console.clear();
                    console.log(Date());

                    //Capturando data-link
                    let nameID = nav_agen.dataset.link;
                    console.log("Iniciando Operações", nameID)

                    //Iniciando tela de carregamento
                    const statusLoading = await showLoadingScreen(nameID);
                    console.log(statusLoading, nameID);

                    //Iniciando roteador de URL
                    let keyValue = 1;
                    let urlID = `/testefiles/${nameID}`;
                    const statusURL = await roteadorURL(keyValue, urlID);
                    console.log(statusURL);

                    //Caminho para atualização DOM
                    let SRCiframe = `assets/${nameID}.html`;
                    console.log(SRCiframe, "Caminho para Atualizar DOM");

                    //Atualizando Documentação iFrame
                    const statusIframe = await atualizaIframe(SRCiframe);
                    console.log(statusIframe, nameID);

                    //Atualizando stilos CSS
                    const statusCSS = await abaAgen(constArray);
                    console.log(statusCSS);

                    //Atualizando altura do iframe
                    const statusAltura = await alteraAlturaIframe();
                    console.log(statusAltura, nameID);

                    //Capturando objetos específicos
                    let btnAgenAction = statusAltura.querySelector(".sa-btn");
                    console.log(btnAgenAction);

                    //Capturando event click btn ação
                    if (btnAgenAction) {
                        btnAgenAction.addEventListener("click", function() {
                        //window.alert(`Botão AÇÃO ${nameID} foi acionado!`)
                        window.open("https://tinyurl.com/veckfe3p", "_blank");
                        })
                    }

                    //Encerrando Screen Loading...
                    const statusOff = await offLoadingScreen(nameID);
                    console.log(statusOff, nameID);
                    console.log(`Botão ${nameID} nav bar pronto!`);
                })
            }    
            
            //Evento click botão TRANSFER nav bar dropdown - OK
            if (ser_trans) {
                ser_trans.addEventListener("click", async function(event) {
                    console.clear();
                    navBarDrop.style.display = "none";
                    console.log(Date());

                    //Capturando data-link
                    let nameID = ser_trans.dataset.link;
                    console.log("Iniciando Operações", nameID)

                    //Iniciando tela de carregamento
                    const statusLoading = await showLoadingScreen(nameID);
                    console.log(statusLoading, nameID);

                    //Iniciando roteador de URL
                    let keyValue = 1;
                    let urlID = `/testefiles/${nameID}`;
                    const statusURL = await roteadorURL(keyValue, urlID);
                    console.log(statusURL);

                    //Caminho para atualização DOM
                    let SRCiframe = `assets/${nameID}.html`;
                    console.log(SRCiframe, "Caminho para Atualizar DOM");

                    //Atualizando Documentação iFrame
                    const statusIframe = await atualizaIframe(SRCiframe);
                    console.log(statusIframe, nameID);

                    //Atualizando stilos CSS
                    const statusCSS = await abaTrans(constArray);
                    console.log(statusCSS);

                    //Atualizando altura do iframe
                    const statusAltura = await alteraAlturaIframe();
                    console.log(statusAltura, nameID);

                    //Capturando objetos específicos
                    let btnTransAction = statusAltura.querySelector(".ta-btn");
                    console.log(btnTransAction);

                    //Capturando event click btn ação
                    if (btnTransAction) {
                        btnTransAction.addEventListener("click", function() {
                        //window.alert(`Botão AÇÃO ${nameID} foi acionado!`)
                        window.open("https://tinyurl.com/5bctdz3d", "_blank");
                        })
                    }

                    //Encerrando Screen Loading...
                    const statusOff = await offLoadingScreen();
                    navBarDrop.style.display = "";
                    console.log(statusOff, nameID);
                    console.log(`Botão ${nameID} nav bar pronto!`);
                })
            } 

            //Evento click botão VIAGEM nav bar dropdown - OK
            if (ser_viag) {
                ser_viag.addEventListener("click", async function(event) {
                    console.clear();
                    navBarDrop.style.display = "none";
                    console.log(Date());

                    //Capturando data-link
                    let nameID = ser_viag.dataset.link;
                    console.log("Iniciando Operações", nameID)

                    //Iniciando tela de carregamento
                    const statusLoading = await showLoadingScreen(nameID);
                    console.log(statusLoading, nameID);

                    //Iniciando roteador de URL
                    let keyValue = 1;
                    let urlID = `/testefiles/${nameID}`;
                    const statusURL = await roteadorURL(keyValue, urlID);
                    console.log(statusURL);

                    //Caminho para atualização DOM
                    let SRCiframe = `assets/${nameID}.html`;
                    console.log(SRCiframe, "Caminho para Atualizar DOM");

                    //Atualizando Documentação iFrame
                    const statusIframe = await atualizaIframe(SRCiframe);
                    console.log(statusIframe, nameID);

                    //Atualizando stilos CSS
                    const statusCSS = await abaViag(constArray);
                    console.log(statusCSS);

                    //Atualizando altura do iframe
                    const statusAltura = await alteraAlturaIframe();
                    console.log(statusAltura, nameID);

                    //Capturando objetos específicos
                    let btnViagAction = statusAltura.querySelector(".ve-btn");
                    console.log(btnViagAction);

                    //Capturando event click btn ação
                    if (btnViagAction) {
                        btnViagAction.addEventListener("click", function() {
                        //window.alert(`Botão AÇÃO ${nameID} foi acionado!`)
                        window.open("https://tinyurl.com/ycxys5h9", "_blank");
                        })
                    }

                    //Encerrando Screen Loading...
                    const statusOff = await offLoadingScreen();
                    navBarDrop.style.display = "";
                    console.log(statusOff, nameID);
                    console.log(`Botão ${nameID} nav bar pronto!`);
                })
            } 

            //Evento click botão PACOTES nav bar dropdown - OK
            if (ser_paco) {
                ser_paco.addEventListener("click", async function(event) {
                    console.clear();
                    navBarDrop.style.display = "none";
                    console.log(Date());

                    //Capturando data-link
                    let nameID = ser_paco.dataset.link;
                    console.log("Iniciando Operações", nameID)

                    //Iniciando tela de carregamento
                    const statusLoading = await showLoadingScreen(nameID);
                    console.log(statusLoading, nameID);

                    //Iniciando roteador de URL
                    let keyValue = 1;
                    let urlID = `/testefiles/${nameID}`;
                    const statusURL = await roteadorURL(keyValue, urlID);
                    console.log(statusURL);

                    //Caminho para atualização DOM
                    let SRCiframe = `assets/${nameID}.html`;
                    console.log(SRCiframe, "Caminho para Atualizar DOM");

                    //Atualizando Documentação iFrame
                    const statusIframe = await atualizaIframe(SRCiframe);
                    console.log(statusIframe, nameID);

                    //Atualizando stilos CSS
                    const statusCSS = await abaPaco(constArray);
                    console.log(statusCSS);

                    //Atualizando altura do iframe
                    const statusAltura = await alteraAlturaIframe();
                    console.log(statusAltura, nameID);

                    //Capturando objetos específicos
                    let btnPaco01Action = statusAltura.querySelector(".pt-btn-01");
                    let btnPaco02Action = statusAltura.querySelector(".pt-btn-02");
                    let btnPaco03Action = statusAltura.querySelector(".pt-btn-03");
                    console.log(btnPaco01Action);
                    console.log(btnPaco02Action);
                    console.log(btnPaco03Action);

                    //Capturando event click btn ação
                    if (btnPaco01Action) {
                        btnPaco01Action.addEventListener("click", function() {
                        //window.alert(`Botão AÇÃO Almoço foi acionado!`)
                        window.open("https://tinyurl.com/2w93hprv", "_blank");
                        })
                    }

                    if (btnPaco02Action) {
                        btnPaco02Action.addEventListener("click", function() {
                        //window.alert(`Botão AÇÃO Jantar foi acionado!`)
                        window.open("https://tinyurl.com/yz29jc83", "_blank");
                        })
                    }

                    if (btnPaco03Action) {
                        btnPaco03Action.addEventListener("click", function() {
                        //window.alert(`Botão AÇÃO Eventos foi acionado!`)
                        window.open("https://tinyurl.com/szd84cmt", "_blank");
                        })
                    }

                    //Encerrando Screen Loading...
                    const statusOff = await offLoadingScreen();
                    navBarDrop.style.display = "";
                    console.log(statusOff, nameID);
                    console.log(`Botão ${nameID} nav bar pronto!`);
                })
            } 

            //Evento click botão PASSAGENS nav bar dropdown - OK
            if (ser_pass) {
                ser_pass.addEventListener("click", async function(event) {
                    console.clear();
                    navBarDrop.style.display = "none";
                    console.log(Date());

                    //Capturando data-link
                    let nameID = ser_pass.dataset.link;
                    console.log("Iniciando Operações", nameID)

                    //Iniciando tela de carregamento
                    const statusLoading = await showLoadingScreen(nameID);
                    console.log(statusLoading, nameID);

                    //Iniciando roteador de URL
                    let keyValue = 1;
                    let urlID = `/testefiles/${nameID}`;
                    const statusURL = await roteadorURL(keyValue, urlID);
                    console.log(statusURL);

                    //Caminho para atualização DOM
                    let SRCiframe = `assets/${nameID}.html`;
                    console.log(SRCiframe, "Caminho para Atualizar DOM");

                    //Atualizando Documentação iFrame
                    const statusIframe = await atualizaIframe(SRCiframe);
                    console.log(statusIframe, nameID);

                    //Atualizando stilos CSS
                    const statusCSS = await abaPass(constArray);
                    console.log(statusCSS);

                    //Atualizando altura do iframe
                    const statusAltura = await alteraAlturaIframe();
                    console.log(statusAltura, nameID);

                    //Capturando objetos específicos
                    let btnPassAction = statusAltura.querySelector(".pa-btn");
                    console.log(btnPassAction);

                    //Capturando event click btn ação
                    if (btnPassAction) {
                        btnPassAction.addEventListener("click", function() {
                        //window.alert(`Botão AÇÃO ${nameID} foi acionado!`)
                        window.open("https://tinyurl.com/2rjya8sf", "_blank");
                        })
                    }

                    //Encerrando Screen Loading...
                    const statusOff = await offLoadingScreen();
                    navBarDrop.style.display = "";
                    console.log(statusOff, nameID);
                    console.log(`Botão ${nameID} nav bar pronto!`);
                })
            } 

            //Evento click botão AÇÃO nav bar - OK
            if (btnHeaderAction) {
                btnHeaderAction.addEventListener("click", function() {
                    //window.alert("Botão AÇÃO PRINCIPAL foi acionado!")
                    window.open("https://tinyurl.com/veckfe3p", "_blank");
                })
            }



            //Evento click botão AÇÃO MAIN home.html - DEFAULT INICIAL! - OK
            let btnMainAction = x.querySelector(".main-btn");
            if (btnMainAction) {
                btnMainAction.addEventListener("click", function() {
                    //window.alert("Botão AÇÃO MAIN DEFAULT foi acionado!")
                    window.open("https://tinyurl.com/veckfe3p", "_blank");
                })
            }

            //Evento click link Transfer Principais Serviços home.html - DEFAULT INICIAL! - OK
            let linkTransFrame = x.querySelector(".ps-container-frame-link-01");
            if (linkTransFrame) {
                linkTransFrame.addEventListener("click", async function(event) {
                    console.clear();
                    console.log(Date());

                    //Capturando data-link
                    let nameID = linkTransFrame.dataset.link;
                    console.log("Iniciando Operações", nameID)

                    //Iniciando tela de carregamento
                    const statusLoading = await showLoadingScreen(nameID);
                    console.log(statusLoading, nameID);

                    //Iniciando roteador de URL
                    let keyValue = 1;
                    let urlID = `/testefiles/${nameID}`;
                    const statusURL = await roteadorURL(keyValue, urlID);
                    console.log(statusURL);

                    //Caminho para atualização DOM
                    let SRCiframe = `assets/${nameID}.html`;
                    console.log(SRCiframe, "Caminho para Atualizar DOM");

                    //Atualizando Documentação iFrame
                    const statusIframe = await atualizaIframe(SRCiframe);
                    console.log(statusIframe, nameID);

                    //Atualizando stilos CSS
                    const statusCSS = await abaTrans(constArray);
                    console.log(statusCSS);

                    //Atualizando altura do iframe
                    const statusAltura = await alteraAlturaIframe();
                    console.log(statusAltura, nameID);

                    //Capturando objetos específicos
                    let btnTransAction = statusAltura.querySelector(".ta-btn");
                    console.log(btnTransAction);

                    //Capturando event click btn ação
                    if (btnTransAction) {
                        btnTransAction.addEventListener("click", function() {
                        //window.alert(`Botão AÇÃO ${nameID} foi acionado!`)
                        window.open("https://tinyurl.com/5bctdz3d", "_blank");
                        })
                    }

                    //Encerrando Screen Loading...
                    const statusOff = await offLoadingScreen();
                    console.log(statusOff, nameID);
                    console.log(`Link ${nameID} frame default pronto!`);
                })
            }

            //Evento click link Viagens Principais Serviços home.html - DEFAULT INICIAL! - OK
            let linkViagFrame = x.querySelector(".ps-container-frame-link-02");
            if (linkViagFrame) {
                linkViagFrame.addEventListener("click", async function(event) {
                    console.clear();
                    console.log(Date());

                    //Capturando data-link
                    let nameID = linkViagFrame.dataset.link;
                    console.log("Iniciando Operações", nameID)

                    //Iniciando tela de carregamento
                    const statusLoading = await showLoadingScreen(nameID);
                    console.log(statusLoading, nameID);

                    //Iniciando roteador de URL
                    let keyValue = 1;
                    let urlID = `/testefiles/${nameID}`;
                    const statusURL = await roteadorURL(keyValue, urlID);
                    console.log(statusURL);

                    //Caminho para atualização DOM
                    let SRCiframe = `assets/${nameID}.html`;
                    console.log(SRCiframe, "Caminho para Atualizar DOM");

                    //Atualizando Documentação iFrame
                    const statusIframe = await atualizaIframe(SRCiframe);
                    console.log(statusIframe, nameID);

                    //Atualizando stilos CSS
                    const statusCSS = await abaViag(constArray);
                    console.log(statusCSS);

                    //Atualizando altura do iframe
                    const statusAltura = await alteraAlturaIframe();
                    console.log(statusAltura, nameID);

                    //Capturando objetos específicos
                    let btnViagAction = statusAltura.querySelector(".ve-btn");
                    console.log(btnViagAction);

                    //Capturando event click btn ação
                    if (btnViagAction) {
                        btnViagAction.addEventListener("click", function() {
                        //window.alert(`Botão AÇÃO ${nameID} foi acionado!`)
                        window.open("https://tinyurl.com/ycxys5h9", "_blank");
                        })
                    }

                    //Encerrando Screen Loading...
                    const statusOff = await offLoadingScreen();
                    console.log(statusOff, nameID);
                    console.log(`Link ${nameID} frame default pronto!`);
                })
            }

            //Evento click link PACOTES Principais Serviços home.html - DEFAULT INICIAL! - OK
            let linkPacoFrame = x.querySelector(".ps-container-frame-link-03");
            if (linkPacoFrame) {
                linkPacoFrame.addEventListener("click", async function(event) {
                    console.clear();
                    console.log(Date());

                    //Capturando data-link
                    let nameID = linkPacoFrame.dataset.link;
                    console.log("Iniciando Operações", nameID)

                    //Iniciando tela de carregamento
                    const statusLoading = await showLoadingScreen(nameID);
                    console.log(statusLoading, nameID);

                    //Iniciando roteador de URL
                    let keyValue = 1;
                    let urlID = `/testefiles/${nameID}`;
                    const statusURL = await roteadorURL(keyValue, urlID);
                    console.log(statusURL);

                    //Caminho para atualização DOM
                    let SRCiframe = `assets/${nameID}.html`;
                    console.log(SRCiframe, "Caminho para Atualizar DOM");

                    //Atualizando Documentação iFrame
                    const statusIframe = await atualizaIframe(SRCiframe);
                    console.log(statusIframe, nameID);

                    //Atualizando stilos CSS
                    const statusCSS = await abaPaco(constArray);
                    console.log(statusCSS);

                    //Atualizando altura do iframe
                    const statusAltura = await alteraAlturaIframe();
                    console.log(statusAltura, nameID);

                    //Capturando objetos específicos
                    let btnPaco01Action = statusAltura.querySelector(".pt-btn-01");
                    let btnPaco02Action = statusAltura.querySelector(".pt-btn-02");
                    let btnPaco03Action = statusAltura.querySelector(".pt-btn-03");
                    console.log(btnPaco01Action);
                    console.log(btnPaco02Action);
                    console.log(btnPaco03Action);

                    //Capturando event click btn ação
                    if (btnPaco01Action) {
                        btnPaco01Action.addEventListener("click", function() {
                        //window.alert(`Botão AÇÃO Almoço foi acionado!`)
                        window.open("https://tinyurl.com/2w93hprv", "_blank");
                        })
                    }

                    if (btnPaco02Action) {
                        btnPaco02Action.addEventListener("click", function() {
                        //window.alert(`Botão AÇÃO Jantar foi acionado!`)
                        window.open("https://tinyurl.com/yz29jc83", "_blank");
                        })
                    }

                    if (btnPaco03Action) {
                        btnPaco03Action.addEventListener("click", function() {
                        //window.alert(`Botão AÇÃO Eventos foi acionado!`)
                        window.open("https://tinyurl.com/szd84cmt", "_blank");
                        })
                    }

                    //Encerrando Screen Loading...
                    const statusOff = await offLoadingScreen();
                    console.log(statusOff, nameID);
                    console.log(`Link ${nameID} frame default pronto!`);
                })
            }

            //Evento click link PASSAGENS Principais Serviços home.html - DEFAULT INICIAL! - OK
            let linkPassFrame = x.querySelector(".ps-container-frame-link-04");
            if (linkPassFrame) {
                linkPassFrame.addEventListener("click", async function(event) {
                    console.clear();
                    console.log(Date());

                    //Capturando data-link
                    let nameID = linkPassFrame.dataset.link;
                    console.log("Iniciando Operações", nameID)

                    //Iniciando tela de carregamento
                    const statusLoading = await showLoadingScreen(nameID);
                    console.log(statusLoading, nameID);

                    //Iniciando roteador de URL
                    let keyValue = 1;
                    let urlID = `/testefiles/${nameID}`;
                    const statusURL = await roteadorURL(keyValue, urlID);
                    console.log(statusURL);

                    //Caminho para atualização DOM
                    let SRCiframe = `assets/${nameID}.html`;
                    console.log(SRCiframe, "Caminho para Atualizar DOM");

                    //Atualizando Documentação iFrame
                    const statusIframe = await atualizaIframe(SRCiframe);
                    console.log(statusIframe, nameID);

                    //Atualizando stilos CSS
                    const statusCSS = await abaPass(constArray);
                    console.log(statusCSS);

                    //Atualizando altura do iframe
                    const statusAltura = await alteraAlturaIframe();
                    console.log(statusAltura, nameID);

                    //Capturando objetos específicos
                    let btnPassAction = statusAltura.querySelector(".pa-btn");
                    console.log(btnPassAction);

                    //Capturando event click btn ação
                    if (btnPassAction) {
                        btnPassAction.addEventListener("click", function() {
                        //window.alert(`Botão AÇÃO ${nameID} foi acionado!`)
                        window.open("https://tinyurl.com/2rjya8sf", "_blank");
                        })
                    }

                    //Encerrando Screen Loading...
                    const statusOff = await offLoadingScreen();
                    console.log(statusOff, nameID);
                    console.log(`Link ${nameID} frame default pronto!`);
                })
            }

            //Evento click botão AÇÃO AGENDAMENTO home.html - DEFAULT INICIAL! - OK
            let btnAgenAction = x.querySelector(".sa-btn");
            if (btnAgenAction) {
                btnAgenAction.addEventListener("click", function() {
                    //window.alert("Botão AÇÃO AGENDAMENTO DEFAULT foi acionado!")
                    window.open("https://tinyurl.com/veckfe3p", "_blank");
                })
            }



            //Evento click botão HOME footer - OK
            if (fotHome) {
                fotHome.addEventListener("click", async function(event) {
                    console.clear();
                    console.log(Date());

                    //Capturando data-link
                    let nameID = fotHome.dataset.link;
                    console.log("Iniciando Operações", nameID)

                    //Iniciando tela de carregamento
                    const statusLoading = await showLoadingScreen(nameID);
                    console.log(statusLoading, nameID);

                    //Iniciando roteador de URL
                    let keyValue = 1;
                    let urlID = `/testefiles/${nameID}`;
                    const statusURL = await roteadorURL(keyValue, urlID);
                    console.log(statusURL);

                    //Caminho para atualização DOM
                    let SRCiframe = `assets/${nameID}.html`;
                    console.log(SRCiframe, "Caminho para Atualizar DOM");

                    //Atualizando Documentação iFrame
                    const statusIframe = await atualizaIframe(SRCiframe);
                    console.log(statusIframe, nameID);

                    //Atualizando stilos CSS
                    const statusCSS = await abaHome(constArray);
                    console.log(statusCSS);

                    //Atualizando altura do iframe
                    const statusAltura = await alteraAlturaIframe();
                    console.log(statusAltura, nameID);

                    //Capturando objetos específicos
                    let btnMainAction = statusAltura.querySelector(".main-btn");
                    let btnAgenAction = statusAltura.querySelector(".sa-btn");
                    let linkTransFrame = statusAltura.querySelector(".ps-container-frame-link-01");
                    let linkViagFrame = statusAltura.querySelector(".ps-container-frame-link-02");
                    let linkPacoFrame = statusAltura.querySelector(".ps-container-frame-link-03");
                    let linkPassFrame = statusAltura.querySelector(".ps-container-frame-link-04");

                    console.log(btnMainAction);
                    console.log(btnAgenAction);
                    console.log(linkTransFrame);
                    console.log(linkViagFrame);
                    console.log(linkPacoFrame);
                    console.log(linkPassFrame);

                    //Capturando event click btn main ação
                    if (btnMainAction) {
                        btnMainAction.addEventListener("click", function() {
                        //window.alert(`Botão AÇÃO Main foi acionado!`)
                        window.open("https://tinyurl.com/veckfe3p", "_blank");
                        })
                    }

                    if (btnAgenAction) {
                        btnAgenAction.addEventListener("click", function() {
                        //window.alert(`Botão AÇÃO Agendamento foi acionado!`)
                        window.open("https://tinyurl.com/veckfe3p", "_blank");
                        })
                    }

                    if (linkTransFrame) {
                        linkTransFrame.addEventListener("click", async function(event) {
                            console.clear();
                            console.log(Date());

                            //Capturando data-link
                            let nameID = linkTransFrame.dataset.link;
                            console.log("Iniciando Operações", nameID)

                            //Iniciando tela de carregamento
                            const statusLoading = await showLoadingScreen(nameID);
                            console.log(statusLoading, nameID);

                            //Iniciando roteador de URL
                            let keyValue = 1;
                            let urlID = `/testefiles/${nameID}`;
                            const statusURL = await roteadorURL(keyValue, urlID);
                            console.log(statusURL);

                            //Caminho para atualização DOM
                            let SRCiframe = `assets/${nameID}.html`;
                            console.log(SRCiframe, "Caminho para Atualizar DOM");

                            //Atualizando Documentação iFrame
                            const statusIframe = await atualizaIframe(SRCiframe);
                            console.log(statusIframe, nameID);

                            //Atualizando stilos CSS
                            const statusCSS = await abaTrans(constArray);
                            console.log(statusCSS);

                            //Atualizando altura do iframe
                            const statusAltura = await alteraAlturaIframe();
                            console.log(statusAltura, nameID);

                            //Capturando objetos específicos
                            let btnTransAction = statusAltura.querySelector(".ta-btn");
                            console.log(btnTransAction);

                            //Capturando event click btn ação
                            if (btnTransAction) {
                                btnTransAction.addEventListener("click", function() {
                                //window.alert(`Botão AÇÃO ${nameID} foi acionado!`)
                                window.open("https://tinyurl.com/5bctdz3d", "_blank");
                                })
                            }

                            //Encerrando Screen Loading...
                            const statusOff = await offLoadingScreen();
                            console.log(statusOff, nameID);
                            console.log(`Link frame ${nameID} from home footer pronto!`);
                        })
                    }

                    if (linkViagFrame) {
                        linkViagFrame.addEventListener("click", async function(event) {
                            console.clear();
                            console.log(Date());

                            //Capturando data-link
                            let nameID = linkViagFrame.dataset.link;
                            console.log("Iniciando Operações", nameID)

                            //Iniciando tela de carregamento
                            const statusLoading = await showLoadingScreen(nameID);
                            console.log(statusLoading, nameID);

                            //Iniciando roteador de URL
                            let keyValue = 1;
                            let urlID = `/testefiles/${nameID}`;
                            const statusURL = await roteadorURL(keyValue, urlID);
                            console.log(statusURL);

                            //Caminho para atualização DOM
                            let SRCiframe = `assets/${nameID}.html`;
                            console.log(SRCiframe, "Caminho para Atualizar DOM");

                            //Atualizando Documentação iFrame
                            const statusIframe = await atualizaIframe(SRCiframe);
                            console.log(statusIframe, nameID);

                            //Atualizando stilos CSS
                            const statusCSS = await abaViag(constArray);
                            console.log(statusCSS);

                            //Atualizando altura do iframe
                            const statusAltura = await alteraAlturaIframe();
                            console.log(statusAltura, nameID);

                            //Capturando objetos específicos
                            let btnViagAction = statusAltura.querySelector(".ve-btn");
                            console.log(btnViagAction);

                            //Capturando event click btn ação
                            if (btnViagAction) {
                                btnViagAction.addEventListener("click", function() {
                                //window.alert(`Botão AÇÃO ${nameID} foi acionado!`)
                                window.open("https://tinyurl.com/ycxys5h9", "_blank");
                                })
                            }

                            //Encerrando Screen Loading...
                            const statusOff = await offLoadingScreen();
                            console.log(statusOff, nameID);
                            console.log(`Link frame ${nameID} from home footer pronto!`);
                        })
                    }

                    if (linkPacoFrame) {
                        linkPacoFrame.addEventListener("click", async function(event) {
                            console.clear();
                            console.log(Date());

                            //Capturando data-link
                            let nameID = linkPacoFrame.dataset.link;
                            console.log("Iniciando Operações", nameID)

                            //Iniciando tela de carregamento
                            const statusLoading = await showLoadingScreen(nameID);
                            console.log(statusLoading, nameID);

                            //Iniciando roteador de URL
                            let keyValue = 1;
                            let urlID = `/testefiles/${nameID}`;
                            const statusURL = await roteadorURL(keyValue, urlID);
                            console.log(statusURL);

                            //Caminho para atualização DOM
                            let SRCiframe = `assets/${nameID}.html`;
                            console.log(SRCiframe, "Caminho para Atualizar DOM");

                            //Atualizando Documentação iFrame
                            const statusIframe = await atualizaIframe(SRCiframe);
                            console.log(statusIframe, nameID);

                            //Atualizando stilos CSS
                            const statusCSS = await abaPaco(constArray);
                            console.log(statusCSS);

                            //Atualizando altura do iframe
                            const statusAltura = await alteraAlturaIframe();
                            console.log(statusAltura, nameID);

                            //Capturando objetos específicos
                            let btnPaco01Action = statusAltura.querySelector(".pt-btn-01");
                            let btnPaco02Action = statusAltura.querySelector(".pt-btn-02");
                            let btnPaco03Action = statusAltura.querySelector(".pt-btn-03");
                            console.log(btnPaco01Action);
                            console.log(btnPaco02Action);
                            console.log(btnPaco03Action);

                            //Capturando event click btn ação
                            if (btnPaco01Action) {
                                btnPaco01Action.addEventListener("click", function() {
                                //window.alert(`Botão AÇÃO Almoço foi acionado!`)
                                window.open("https://tinyurl.com/2w93hprv", "_blank");
                                })
                            }

                            if (btnPaco02Action) {
                                btnPaco02Action.addEventListener("click", function() {
                                //window.alert(`Botão AÇÃO Jantar foi acionado!`)
                                window.open("https://tinyurl.com/yz29jc83", "_blank");
                                })
                            }

                            if (btnPaco03Action) {
                                btnPaco03Action.addEventListener("click", function() {
                                //window.alert(`Botão AÇÃO Eventos foi acionado!`)
                                window.open("https://tinyurl.com/szd84cmt", "_blank");
                                })
                            }

                            //Encerrando Screen Loading...
                            const statusOff = await offLoadingScreen();
                            console.log(statusOff, nameID);
                            console.log(`Link frame ${nameID} from home footer pronto!`);
                        })
                    }

                    if (linkPassFrame) {
                        linkPassFrame.addEventListener("click", async function(event) {
                            console.clear();
                            console.log(Date());

                            //Capturando data-link
                            let nameID = linkPassFrame.dataset.link;
                            console.log("Iniciando Operações", nameID)

                            //Iniciando tela de carregamento
                            const statusLoading = await showLoadingScreen(nameID);
                            console.log(statusLoading, nameID);

                            //Iniciando roteador de URL
                            let keyValue = 1;
                            let urlID = `/testefiles/${nameID}`;
                            const statusURL = await roteadorURL(keyValue, urlID);
                            console.log(statusURL);

                            //Caminho para atualização DOM
                            let SRCiframe = `assets/${nameID}.html`;
                            console.log(SRCiframe, "Caminho para Atualizar DOM");

                            //Atualizando Documentação iFrame
                            const statusIframe = await atualizaIframe(SRCiframe);
                            console.log(statusIframe, nameID);

                            //Atualizando stilos CSS
                            const statusCSS = await abaPass(constArray);
                            console.log(statusCSS);

                            //Atualizando altura do iframe
                            const statusAltura = await alteraAlturaIframe();
                            console.log(statusAltura, nameID);

                            //Capturando objetos específicos
                            let btnPassAction = statusAltura.querySelector(".pa-btn");
                            console.log(btnPassAction);

                            //Capturando event click btn ação
                            if (btnPassAction) {
                                btnPassAction.addEventListener("click", function() {
                                //window.alert(`Botão AÇÃO ${nameID} foi acionado!`)
                                window.open("https://tinyurl.com/2rjya8sf", "_blank");
                                })
                            }

                            //Encerrando Screen Loading...
                            const statusOff = await offLoadingScreen();
                            console.log(statusOff, nameID);
                            console.log(`Link frame ${nameID} from home footer pronto!`);
                        })
                    }

                    //Encerrando Screen Loading...
                    const statusOff = await offLoadingScreen();
                    console.log(statusOff, nameID);
                    console.log(`Configs ${nameID} footer pronto!`);
                })
            }

            //Evento click botão SOBRE footer - OK
            if (fotSobre) {
                fotSobre.addEventListener("click", async function(event) {
                    console.clear();
                    console.log(Date());

                    //Capturando data-link
                    let nameID = fotSobre.dataset.link;
                    console.log("Iniciando Operações", nameID)

                    //Iniciando tela de carregamento
                    const statusLoading = await showLoadingScreen(nameID);
                    console.log(statusLoading, nameID);

                    //Iniciando roteador de URL
                    let keyValue = 1;
                    let urlID = `/testefiles/${nameID}`;
                    const statusURL = await roteadorURL(keyValue, urlID);
                    console.log(statusURL);

                    //Caminho para atualização DOM
                    let SRCiframe = `assets/${nameID}.html`;
                    console.log(SRCiframe, "Caminho para Atualizar DOM");

                    //Atualizando Documentação iFrame
                    const statusIframe = await atualizaIframe(SRCiframe);
                    console.log(statusIframe, nameID);

                    //Atualizando stilos CSS
                    const statusCSS = await abaSobre(constArray);
                    console.log(statusCSS);

                    //Atualizando altura do iframe
                    const statusAltura = await alteraAlturaIframe();
                    console.log(statusAltura, nameID);

                    //Capturando objetos específicos
                    let btnSobreAction = statusAltura.querySelector(".am-btn");
                    console.log(btnSobreAction);

                    //Capturando event click btn ação
                    if (btnSobreAction) {
                        btnSobreAction.addEventListener("click", function() {
                        //window.alert(`Botão AÇÃO ${nameID} foi acionado!`)
                        window.open("https://tinyurl.com/veckfe3p", "_blank");
                        })
                    }

                    //Encerrando Screen Loading...
                    const statusOff = await offLoadingScreen();
                    console.log(statusOff, nameID);
                    console.log(`Botão ${nameID} footer pronto!`);
                })
            }

            //Evento click botão AGENDAMENTO footer - OK
            if (fotAgen) {
                fotAgen.addEventListener("click", async function(event) {
                    console.clear();
                    console.log(Date());

                    //Capturando data-link
                    let nameID = fotAgen.dataset.link;
                    console.log("Iniciando Operações", nameID)

                    //Iniciando tela de carregamento
                    const statusLoading = await showLoadingScreen(nameID);
                    console.log(statusLoading, nameID);

                    //Iniciando roteador de URL
                    let keyValue = 1;
                    let urlID = `/testefiles/${nameID}`;
                    const statusURL = await roteadorURL(keyValue, urlID);
                    console.log(statusURL);

                    //Caminho para atualização DOM
                    let SRCiframe = `assets/${nameID}.html`;
                    console.log(SRCiframe, "Caminho para Atualizar DOM");

                    //Atualizando Documentação iFrame
                    const statusIframe = await atualizaIframe(SRCiframe);
                    console.log(statusIframe, nameID);

                    //Atualizando stilos CSS
                    const statusCSS = await abaAgen(constArray);
                    console.log(statusCSS);

                    //Atualizando altura do iframe
                    const statusAltura = await alteraAlturaIframe();
                    console.log(statusAltura, nameID);

                    //Capturando objetos específicos
                    let btnAgenAction = statusAltura.querySelector(".sa-btn");
                    console.log(btnAgenAction);

                    //Capturando event click btn ação
                    if (btnAgenAction) {
                        btnAgenAction.addEventListener("click", function() {
                        //window.alert(`Botão AÇÃO ${nameID} foi acionado!`)
                        window.open("https://tinyurl.com/veckfe3p", "_blank");
                        })
                    }

                    //Encerrando Screen Loading...
                    const statusOff = await offLoadingScreen();
                    console.log(statusOff, nameID);
                    console.log(`Botão ${nameID} footer pronto!`);
                })
            }

            //Evento click botão TRANSFER footer - OK
            if (fotTrans) {
                fotTrans.addEventListener("click", async function(event) {
                    console.clear();
                    console.log(Date());

                    //Capturando data-link
                    let nameID = fotTrans.dataset.link;
                    console.log("Iniciando Operações", nameID)

                    //Iniciando tela de carregamento
                    const statusLoading = await showLoadingScreen(nameID);
                    console.log(statusLoading, nameID);

                    //Iniciando roteador de URL
                    let keyValue = 1;
                    let urlID = `/testefiles/${nameID}`;
                    const statusURL = await roteadorURL(keyValue, urlID);
                    console.log(statusURL);

                    //Caminho para atualização DOM
                    let SRCiframe = `assets/${nameID}.html`;
                    console.log(SRCiframe, "Caminho para Atualizar DOM");

                    //Atualizando Documentação iFrame
                    const statusIframe = await atualizaIframe(SRCiframe);
                    console.log(statusIframe, nameID);

                    //Atualizando stilos CSS
                    const statusCSS = await abaTrans(constArray);
                    console.log(statusCSS);

                    //Atualizando altura do iframe
                    const statusAltura = await alteraAlturaIframe();
                    console.log(statusAltura, nameID);

                    //Capturando objetos específicos
                    let btnTransAction = statusAltura.querySelector(".ta-btn");
                    console.log(btnTransAction);

                    //Capturando event click btn ação
                    if (btnTransAction) {
                        btnTransAction.addEventListener("click", function() {
                        //window.alert(`Botão AÇÃO ${nameID} foi acionado!`)
                        window.open("https://tinyurl.com/5bctdz3d", "_blank");
                        })
                    }

                    //Encerrando Screen Loading...
                    const statusOff = await offLoadingScreen();
                    console.log(statusOff, nameID);
                    console.log(`Botão ${nameID} footer pronto!`);
                })
            }

            //Evento click botão VIAGENS footer - OK
            if (fotViagem) {
                fotViagem.addEventListener("click", async function(event) {
                    console.clear();
                    console.log(Date());

                    //Capturando data-link
                    let nameID = fotViagem.dataset.link;
                    console.log("Iniciando Operações", nameID)

                    //Iniciando tela de carregamento
                    const statusLoading = await showLoadingScreen(nameID);
                    console.log(statusLoading, nameID);

                    //Iniciando roteador de URL
                    let keyValue = 1;
                    let urlID = `/testefiles/${nameID}`;
                    const statusURL = await roteadorURL(keyValue, urlID);
                    console.log(statusURL);

                    //Caminho para atualização DOM
                    let SRCiframe = `assets/${nameID}.html`;
                    console.log(SRCiframe, "Caminho para Atualizar DOM");

                    //Atualizando Documentação iFrame
                    const statusIframe = await atualizaIframe(SRCiframe);
                    console.log(statusIframe, nameID);

                    //Atualizando stilos CSS
                    const statusCSS = await abaViag(constArray);
                    console.log(statusCSS);

                    //Atualizando altura do iframe
                    const statusAltura = await alteraAlturaIframe();
                    console.log(statusAltura, nameID);

                    //Capturando objetos específicos
                    let btnViagAction = statusAltura.querySelector(".ve-btn");
                    console.log(btnViagAction);

                    //Capturando event click btn ação
                    if (btnViagAction) {
                        btnViagAction.addEventListener("click", function() {
                        //window.alert(`Botão AÇÃO ${nameID} foi acionado!`)
                        window.open("https://tinyurl.com/ycxys5h9", "_blank");
                        })
                    }

                    //Encerrando Screen Loading...
                    const statusOff = await offLoadingScreen();
                    console.log(statusOff, nameID);
                    console.log(`Configs ${nameID} footer pronto!`);
                })
            }

            //Evento click botão PACOTES footer - OK
            if (fotPaco) {
                fotPaco.addEventListener("click", async function(event) {
                    console.clear();
                    console.log(Date());

                    //Capturando data-link
                    let nameID = fotPaco.dataset.link;
                    console.log("Iniciando Operações", nameID)

                    //Iniciando tela de carregamento
                    const statusLoading = await showLoadingScreen(nameID);
                    console.log(statusLoading, nameID);

                    //Iniciando roteador de URL
                    let keyValue = 1;
                    let urlID = `/testefiles/${nameID}`;
                    const statusURL = await roteadorURL(keyValue, urlID);
                    console.log(statusURL);

                    //Caminho para atualização DOM
                    let SRCiframe = `assets/${nameID}.html`;
                    console.log(SRCiframe, "Caminho para Atualizar DOM");

                    //Atualizando Documentação iFrame
                    const statusIframe = await atualizaIframe(SRCiframe);
                    console.log(statusIframe, nameID);

                    //Atualizando stilos CSS
                    const statusCSS = await abaPaco(constArray);
                    console.log(statusCSS);

                    //Atualizando altura do iframe
                    const statusAltura = await alteraAlturaIframe();
                    console.log(statusAltura, nameID);

                    //Capturando objetos específicos
                    let btnPaco01Action = statusAltura.querySelector(".pt-btn-01");
                    let btnPaco02Action = statusAltura.querySelector(".pt-btn-02");
                    let btnPaco03Action = statusAltura.querySelector(".pt-btn-03");
                    console.log(btnPaco01Action);
                    console.log(btnPaco02Action);
                    console.log(btnPaco03Action);

                    //Capturando event click btn ação
                    if (btnPaco01Action) {
                        btnPaco01Action.addEventListener("click", function() {
                        //window.alert(`Botão AÇÃO Almoço foi acionado!`)
                        window.open("https://tinyurl.com/2w93hprv", "_blank");
                        })
                    }

                    if (btnPaco02Action) {
                        btnPaco02Action.addEventListener("click", function() {
                        //window.alert(`Botão AÇÃO Jantar foi acionado!`)
                        window.open("https://tinyurl.com/yz29jc83", "_blank");
                        })
                    }

                    if (btnPaco03Action) {
                        btnPaco03Action.addEventListener("click", function() {
                        //window.alert(`Botão AÇÃO Eventos foi acionado!`)
                        window.open("https://tinyurl.com/szd84cmt", "_blank");
                        })
                    }

                    //Encerrando Screen Loading...
                    const statusOff = await offLoadingScreen();
                    console.log(statusOff, nameID);
                    console.log(`Configs ${nameID} footer pronto!`);
                })
            }

            //Evento click botão PASSAGENS footer - OK
            if (fotPass) {
                fotPass.addEventListener("click", async function(event) {
                    console.clear();
                    console.log(Date());

                    //Capturando data-link
                    let nameID = fotPass.dataset.link;
                    console.log("Iniciando Operações", nameID)

                    //Iniciando tela de carregamento
                    const statusLoading = await showLoadingScreen(nameID);
                    console.log(statusLoading, nameID);

                    //Iniciando roteador de URL
                    let keyValue = 1;
                    let urlID = `/testefiles/${nameID}`;
                    const statusURL = await roteadorURL(keyValue, urlID);
                    console.log(statusURL);

                    //Caminho para atualização DOM
                    let SRCiframe = `assets/${nameID}.html`;
                    console.log(SRCiframe, "Caminho para Atualizar DOM");

                    //Atualizando Documentação iFrame
                    const statusIframe = await atualizaIframe(SRCiframe);
                    console.log(statusIframe, nameID);

                    //Atualizando stilos CSS
                    const statusCSS = await abaPass(constArray);
                    console.log(statusCSS);

                    //Atualizando altura do iframe
                    const statusAltura = await alteraAlturaIframe();
                    console.log(statusAltura, nameID);

                    //Capturando objetos específicos
                    let btnPassAction = statusAltura.querySelector(".pa-btn");
                    console.log(btnPassAction);

                    //Capturando event click btn ação
                    if (btnPassAction) {
                        btnPassAction.addEventListener("click", function() {
                        //window.alert(`Botão AÇÃO ${nameID} foi acionado!`)
                        window.open("https://tinyurl.com/2rjya8sf", "_blank");
                        })
                    }

                    //Encerrando Screen Loading...
                    const statusOff = await offLoadingScreen();
                    console.log(statusOff, nameID);
                    console.log(`Configs ${nameID} footer pronto!`);
                })
            }

            //Evento click botão POLÍTICA footer
            if (fotPol) {
                fotPol.addEventListener("click", async function(event) {
                    console.clear();
                    console.log(Date());

                    //Capturando data-link
                    let nameID = fotPol.dataset.link;
                    console.log("Iniciando Operações", nameID)

                    //Iniciando tela de carregamento
                    const statusLoading = await showLoadingScreen(nameID);
                    console.log(statusLoading, nameID);

                    //Iniciando roteador de URL
                    let keyValue = 1;
                    let urlID = `/testefiles/${nameID}`;
                    const statusURL = await roteadorURL(keyValue, urlID);
                    console.log(statusURL);

                    //Caminho para atualização DOM
                    let SRCiframe = `assets/${nameID}.html`;
                    console.log(SRCiframe, "Caminho para Atualizar DOM");

                    //Atualizando Documentação iFrame
                    const statusIframe = await atualizaIframe(SRCiframe);
                    console.log(statusIframe, nameID);

                    //Atualizando stilos CSS
                    const statusCSS = await abaPol(constArray);
                    console.log(statusCSS);

                    //Atualizando altura do iframe
                    const statusAltura = await alteraAlturaIframe();
                    console.log(statusAltura, nameID);

                    //Encerrando Screen Loading...
                    const statusOff = await offLoadingScreen();
                    console.log(statusOff, nameID);
                    console.log(`Configs ${nameID} footer pronto!`);
                })
            }

            // window.addEventListener('popstate', function(event) {
            //     console.log("Voltando estado anterior url")
            // })

            console.log("RT Transporte Executivo - v.1.0.2");
            console.log(Date()); 

        })
    });

    window.addEventListener("resize", function() {
        alteraAlturaIframe();
        console.log("Altura iframe redefinida sem carregamento!"); 
    });

    //window.history.back()
})()