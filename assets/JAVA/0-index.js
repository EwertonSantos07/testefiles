//Importando Funções
import {alteraAlturaIframe} from './1-propriedades-iframe.js';
import {varsEnvironment} from './2-constantes-ambientes.js';
import {startOperations, scrollScreenTopic, openBlankPage, homeStartActions, endsOp, turnOFFDrop} from './3-start-operations.js';
import {abaHome} from './4-abas-stilos.js';
import {roteadorURL} from './roteamento-links.js';
import {closeHideMenu} from './6-menu-oculto.js';


//Function IIFE DOM Document
(function(win, doc){
    'use strict';

    window.addEventListener('message', async function(event) {

        //Definindo Domínio Atual
        const currentDomain = sessionStorage.getItem("currentDomain")
        if(sessionStorage.getItem("statusConsole") === 'true') {
            console.log(currentDomain)
        } 
        
        //Corrigindo Domínio
        const newDomain = `${event.origin}/`
        if(sessionStorage.getItem("statusConsole") === 'true') {
            console.log(newDomain)
        } 

        // Permited Origins
        const allowedOrigins = [
            newDomain
        ];

        // Verifica se a ORIGEM da mensagem recebida (event.origin) está na lista de origens permitidas.
        if (!allowedOrigins.includes(newDomain)) {
            if(sessionStorage.getItem("statusConsole") === 'true') {
                console.warn(`%cMensagem bloqueada de origem desconhecida: ${newDomain}`, "color: orange; font-weight: bold;");
            } 
            return; // Ignora e não processa mensagens de origens não confiáveis.
        }

        // Se a origem é confiável, processa a mensagem.
        if (event.data === 'iframeContentReady') {
            const nameID = sessionStorage.getItem('nameID')
            let X = sessionStorage.getItem('X')
            const iframe = document.querySelector(".main-iframe")
            let iframeDoc = iframe.contentWindow.document
            const varsArray = await varsEnvironment();
            const statusOp = await endsOp(nameID, X, varsArray, iframeDoc)
            if(sessionStorage.getItem("statusConsole") === 'true') {
                console.log(statusOp) // FIM
            }
        }
    })

    window.addEventListener('popstate', (event) => {
        window.location.reload();
        // console.log('Evento popstate disparado:', event);
        // if (event.state && event.state.iframePage) {
        //     const pagina = event.state.iframePage;
        //     console.log('Voltando para o estado:', pagina);
        //     atualizarCSS(pagina);
        //     // O iframe já voltou para o conteúdo anterior automaticamente
        // } else {
        //     atualizarCSS('home');
        // }
        window.location.reload();
    });

    window.addEventListener("resize", function() {
        let iframe = document.querySelector(".main-iframe");
        let iframeDoc = iframe.contentWindow.document
        const statusIframeLoad = iframe.contentWindow.document.readyState === 'complete';
        if(statusIframeLoad === true) {
            const contentHeight = iframeDoc.documentElement.scrollHeight;
            const contentHeight2 = iframe.contentWindow.document.body.clientHeight;
            iframe.style.height = contentHeight2 + "px";
        }
        void iframe.offsetHeight;
        if(sessionStorage.getItem("statusConsole") === 'true') {
            console.log("Altura iframe redefinida sem carregamento!"); 
        }
    });

    //Iniciando DOM
    document.addEventListener('DOMContentLoaded', async () => {

        // Início
        if(sessionStorage.getItem("statusConsole") === 'true') {
            console.log("\n")
            console.log("%cIniciando JavaScript após DOM", "color: white")
        }

        //Capturando largura da tela!!!
        const larguraScreen = screen.width;
        console.log("Width Screen Start:", larguraScreen, "px");


        // Ativando tela de carregamento!!!
        const loadingScreen = document.querySelector('.loading-screen');
        loadingScreen.style.cursor = 'wait';
        loadingScreen.style.display = 'flex';
        loadingScreen.style.opacity = '1';
        loadingScreen.style.left = '0';
        if(sessionStorage.getItem("statusConsole") === 'true') {
            console.log("%cTela de Carregamento ativo...", "color: white")
        }

        //Capturando elementos index!!!
        const headerLayout = document.querySelector('header');
        const iframeLayout = document.querySelector('.main-iframe');
        const iframeDoc = iframeLayout.contentWindow.document
        const footerLayout = document.querySelector('footer');

        //Alterando display none para flex!!!
        headerLayout.style.display = "flex";
        iframeLayout.style.display = "flex";
        footerLayout.style.display = "block";

        //Condição para roteamento de links
        const patternApache = /^http:\/\/ewersites\/.*/;
        if(window.location.origin == "http://127.0.0.1:5500") {
            history.pushState({ Page: 'home' }, 'Home', `${window.location.origin}/`);
            if(sessionStorage.getItem("statusConsole") === 'true') {
                console.log(window.history.state, "Localhost")
            }

        } else if(patternApache.test(`${window.location.origin}${window.location.pathname}`) === true) {
            history.pushState({ Page: 'home' }, 'Home', `${window.location.origin}/criacao-de-sites/home`);
            if(sessionStorage.getItem("statusConsole") === 'true') {
                console.log(window.history.state, "Apache")
            }

        } else {
            const statusURL = await roteadorURL(0, window.location.pathname);
            if(sessionStorage.getItem("statusConsole") === 'true') {
                console.log(statusURL);
            }
        }

        if(sessionStorage.getItem("statusConsole") === 'true') {
            console.log(window.location.origin, "Origem");
            console.log(window.location.pathname, "Repositório Atual")
        }
    })

    //Iniciando carregamento após DOM ser carregado
    window.addEventListener("load", async function() {

        // Início
        if(sessionStorage.getItem("statusConsole") === 'true') {
            console.log("\n")
            console.log("%cIniciando JavaScript após Loading Completo", "color: white")  
        }

        // Declarando iFrame atual e Doc
        const iframe = document.querySelector('.main-iframe');
        const iframeDoc = iframe.contentWindow.document

        //Chamando Função Variaveis de Ambiente
        const varsArray = await varsEnvironment();

        if(sessionStorage.getItem("statusConsole") === 'true') {
            for (let i = 0; i < varsArray.length; i++) {
                console.log(i, varsArray[i]);
            }
        }

        //Click botão Main DEFAULT
        let btnMainAction = iframeDoc.querySelector(".main-btn");
        if(btnMainAction) {
            btnMainAction.addEventListener("click", async function(event) {
                const statusMain = await homeStartActions("Main");
                console.log(statusMain);
            })
        }

        //Click botão Contato DEFAULT
        let btnContatoAction = iframeDoc.querySelector(".ctt-btn");
        if(btnContatoAction) {
            btnContatoAction.addEventListener("click", async function(event) {
                const statusContato = await homeStartActions("Contato");
                console.log(statusContato);
            })
        }


        //Evento click botão HOME nav bar
        if(varsArray[1]) {
            varsArray[1].addEventListener("click", async function(event) {

                //Capturando data-link
                let nameID = varsArray[1].dataset.link;
                const statusOperations = await startOperations(nameID, 0, varsArray);
                console.log(statusOperations)
                
            })
        }

        //Evento click botão HISTÓRICO nav bar
        if(varsArray[2]) {
            varsArray[2].addEventListener("click", async function(event) {
                
                //Capturando data-link
                let nameID = varsArray[2].dataset.link;
                const statusOperations = await startOperations(nameID, 0, varsArray);
                console.log(statusOperations)

            })
        }

        //Evento click botão BLOG nav bar
        if (varsArray[3]) {
            varsArray[3].addEventListener("click", async function() {

                //Capturando data-link
                let nameID = varsArray[16].dataset.link;
                const statusOperations = await openBlankPage(nameID);
                console.log(statusOperations);
            })
        }

        //Evento click botão SOFTWARE nav bar - Dropdown Menu
        if (varsArray[28]) {
            varsArray[28].addEventListener("click", async function() {

                // Capturando Drop Down Menu Div
                const statusDrop = await turnOFFDrop();
                if(sessionStorage.getItem("statusConsole") === 'true') {
                    console.log(statusDrop);
                }

                //Capturando data-link
                let nameID = varsArray[28].dataset.link;
                const statusOperations = await startOperations(nameID, 0, varsArray);
                console.log(statusOperations)
            })
        }

        //Evento click botão UPDATES nav bar
        if(varsArray[25]) {
            varsArray[25].addEventListener("click", async function(event) {
                
                //Capturando data-link
                let nameID = varsArray[25].dataset.link;
                const statusOperations = await startOperations(nameID, 0, varsArray);
                console.log(statusOperations)

            })
        }

        //Evento click botão CONTATO nav bar
        if(varsArray[4]) {
            varsArray[4].addEventListener("click", async function(event) {

                //Capturando data-link
                let nameID = varsArray[4].dataset.link;
                const statusOperations = await startOperations(nameID, 0, varsArray);
                console.log(statusOperations)
                
            })
        }


        //Evento click botão Open Menu Oculto
        if (varsArray[6]) {
            varsArray[6].addEventListener('click', ()=> {
                varsArray[5].style.display = 'flex';

                const handleTransitionEnd = (event) => {
                    if (event.propertyName === 'opacity' || event.propertyName === 'left') {
                        varsArray[5].removeEventListener('transitioned', handleTransitionEnd);
                        console.log("Menu Oculto Iniciado e Visível")
                    }
                }

                varsArray[5].addEventListener('transitionend', handleTransitionEnd);

                //Inicia a transição para tornar a tela visível
                setTimeout(() => {
                    varsArray[5].style.opacity = '1';
                    varsArray[5].style.left = '0';
                }, 1);
            })
        }

        //Evento click BTN CLOSE MENU OCULTO
        if (varsArray[7]) {
            varsArray[7].addEventListener('click', async () => {
                const statusOff = await closeHideMenu(varsArray, 300);
                console.log(statusOff, "Botão Close Menu");
            })
        }


        //Capturando click botão HOME menu oculto - OK
        if (varsArray[8]) {
            varsArray[8].addEventListener("click", async function(event) {

                //Capturando data-link
                let nameID = varsArray[8].dataset.link;
                const statusOperations = await startOperations(nameID, 5, varsArray);
                console.log(statusOperations)
            })
        } 

        //Capturando click botão HISTORICO menu oculto - OK
        if (varsArray[9]) {
            varsArray[9].addEventListener("click", async function(event) {

                //Capturando data-link
                let nameID = varsArray[9].dataset.link;
                const statusOperations = await startOperations(nameID, 5, varsArray);
                console.log(statusOperations)
            })
        } 

        //Evento click botão BLOG menu oculto
        if (varsArray[10]) {
            varsArray[10].addEventListener("click", async function() {

                //Capturando data-link
                let nameID = varsArray[16].dataset.link;
                const statusOperations = await openBlankPage(nameID);
                console.log(statusOperations);
            })
        }

        //Evento click botão SOFTWARE menu oculto - Dropdown Menu
        if (varsArray[29]) {
            varsArray[29].addEventListener("click", async function() {

                //Capturando data-link
                let nameID = varsArray[29].dataset.link;
                const statusOperations = await startOperations(nameID, 5, varsArray);
                console.log(statusOperations)
            })
        }

        //Capturando click botão UPDATES menu oculto - OK
        if (varsArray[26]) {
            varsArray[26].addEventListener("click", async function(event) {

                //Capturando data-link
                let nameID = varsArray[26].dataset.link;
                const statusOperations = await startOperations(nameID, 5, varsArray);
                console.log(statusOperations)
            })
        }

        //Capturando click botão CONTATO menu oculto - OK
        if (varsArray[11]) {
            varsArray[11].addEventListener("click", async function(event) {

                //Capturando data-link
                let nameID = varsArray[11].dataset.link;
                const statusOperations = await startOperations(nameID, 5, varsArray);
                console.log(statusOperations)
            })
        }

        //Capturando click botão HOME footer - OK
        if (varsArray[14]) {
            varsArray[14].addEventListener("click", async function(event) {

                //Capturando data-link
                let nameID = varsArray[14].dataset.link;
                const statusOperations = await startOperations(nameID, 13, varsArray);
                console.log(statusOperations);
            })
        } 

        //Capturando click botão HISTORICO footer - OK
        if (varsArray[15]) {
            varsArray[15].addEventListener("click", async function(event) {

                //Capturando data-link
                let nameID = varsArray[15].dataset.link;
                const statusOperations = await startOperations(nameID, 13, varsArray);
                console.log(statusOperations);
            })
        } 

        //Evento click botão BLOG footer
        if (varsArray[16]) {
            varsArray[16].addEventListener("click", async function() {

                //Capturando data-link
                let nameID = varsArray[16].dataset.link;
                const statusOperations = await openBlankPage(nameID);
                console.log(statusOperations);
            })
        }

        //Capturando click botão UPDATES footer - OK
        if (varsArray[27]) {
            varsArray[27].addEventListener("click", async function(event) {

                //Capturando data-link
                let nameID = varsArray[27].dataset.link;
                const statusOperations = await startOperations(nameID, 13, varsArray);
                console.log(statusOperations);
            })
        } 

        //Capturando click botão CONTATO footer - OK
        if (varsArray[17]) {
            varsArray[17].addEventListener("click", async function(event) {

                //Capturando data-link
                let nameID = varsArray[17].dataset.link;
                const statusOperations = await startOperations(nameID, 13, varsArray);
                console.log(statusOperations);
            })
        } 

        //Evento click botão POLÍTICA footer
        if (varsArray[19]) {
            varsArray[19].addEventListener("click", async function(event) {

                //Capturando data-link
                let nameID = varsArray[19].dataset.link;
                const statusOperations = await startOperations(nameID, 13, varsArray);
                console.log(statusOperations);
            })
        }


        //Evento ancora link SITES footer
        if(varsArray[21]) {
            varsArray[21].addEventListener("click", async function(event) {

                const paginaState = window.history.state;
                if(paginaState && paginaState.Page !== "home") {

                    //Capturando data-link HOME
                    sessionStorage.setItem("scrollStatus", true)
                    sessionStorage.setItem("value", varsArray[21].dataset.link)
                    let nameID = varsArray[1].dataset.link;
                    const statusOperations = await startOperations(nameID, 20, varsArray);
                    console.log(statusOperations)
                }
            })
        }

        //Evento ancora link CLIENTES footer
        if(varsArray[22]) {
            varsArray[22].addEventListener("click", async function(event) {

                const paginaState = window.history.state;
                if(paginaState && paginaState.Page !== "home") {

                    //Capturando data-link HOME
                    sessionStorage.setItem("scrollStatus", true)
                    sessionStorage.setItem("value", varsArray[22].dataset.link)
                    let nameID = varsArray[1].dataset.link;
                    const statusOperations = await startOperations(nameID, 20, varsArray);
                    console.log(statusOperations)
                }
                
            })
        }

        //Evento ancora link HOSPEDAGEM footer
        if(varsArray[23]) {
            varsArray[23].addEventListener("click", async function(event) {

                const paginaState = window.history.state;
                if(paginaState && paginaState.Page !== "home") {

                    //Capturando data-link HOME
                    sessionStorage.setItem("scrollStatus", true)
                    sessionStorage.setItem("value", varsArray[23].dataset.link)
                    let nameID = varsArray[1].dataset.link;
                    const statusOperations = await startOperations(nameID, 20, varsArray);
                    console.log(statusOperations)
                }
                
            })
        }

        //Evento ancora link Sobre mim footer
        if(varsArray[24]) {
            varsArray[24].addEventListener("click", async function(event) {

                const paginaState = window.history.state;
                if(paginaState && paginaState.Page !== "home") {

                    //Capturando data-link HOME
                    sessionStorage.setItem("scrollStatus", true)
                    sessionStorage.setItem("value", varsArray[24].dataset.link)
                    let nameID = varsArray[1].dataset.link;
                    const statusOperations = await startOperations(nameID, 20, varsArray);
                    console.log(statusOperations)
                }
                
            })
        }

        //Evento click botão SOFTWARE footer - Dropdown Menu
        if (varsArray[30]) {
            varsArray[30].addEventListener("click", async function() {

                //Capturando data-link
                let nameID = varsArray[30].dataset.link;
                const statusOperations = await startOperations(nameID, 13, varsArray);
                console.log(statusOperations)
            })
        }

        //Alterando altura iframe
        const statusIframe = await alteraAlturaIframe();
        if(sessionStorage.getItem("statusConsole") === 'true') {
            console.log(statusIframe, "Altura Inicial Iframe Ajustada");
        }

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

        // Verificando ADM session
        const statusADM = sessionStorage.getItem('ADMstatus')
        const resultADM = (statusADM === 'true');
        if (resultADM === true) {
            setTimeout(() => {
                alert("ADM Ativo!!!")
            }, 2300)
        }

    });

})()