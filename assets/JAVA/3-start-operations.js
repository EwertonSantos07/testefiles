import {atualizaIframe} from './1-propriedades-iframe.js';
import {alteraAlturaIframe} from './1-propriedades-iframe.js';
import {showLoadingScreen} from './5-screen-loading.js';
import {abaContato, abaHistorico, abaHome, abaPolitica, abaUpdates, abaSoft} from './4-abas-stilos.js';
import {offLoadingScreen} from './5-screen-loading.js';
import {changeCSSOculto} from './6-menu-oculto.js';
import {closeHideMenu} from './6-menu-oculto.js';
import {retornaCSSOculto} from './6-menu-oculto.js';
import {roteadorURL} from './roteamento-links.js';

export async function scrollScreenTopic(topicScroll) {
    return new Promise(async (resolve) => {
        console.log(topicScroll);
        //Ajustando Scroll Seção Criação de Sites
        if(topicScroll == "sites") {
            const statusAltura = await alteraAlturaIframe();
            let targetSite = statusAltura.querySelector("#criacao-de-sites");
            if(targetSite) {
                targetSite.scrollIntoView({ behavior: 'smooth', block: 'start' });
                resolve(`${topicScroll} Scroll Ajustado`);
            }
        }

        //Ajustando Scroll Seção Clientes
        if(topicScroll == "clientes") {
            const statusAltura = await alteraAlturaIframe();
            let targetSite = statusAltura.querySelector("#section-dos-clientes");
            if(targetSite) {
                targetSite.scrollIntoView({ behavior: 'smooth', block: 'start' });
                resolve(`${topicScroll} Scroll Ajustado`);
            }
        }

        //Ajustando Scroll Seção hospedagem
        if(topicScroll == "hospedagem") {
            const statusAltura = await alteraAlturaIframe();
            let targetSite = statusAltura.querySelector("#section-das-hospedagens");
            if(targetSite) {
                targetSite.scrollIntoView({ behavior: 'smooth', block: 'start' });
                resolve(`${topicScroll} Scroll Ajustado`);
            }
        }

        //Ajustando Scroll Seção sobre
        if(topicScroll == "sobre-mim") {
            const statusAltura = await alteraAlturaIframe();
            let targetSite = statusAltura.querySelector("#section-sobre-mim");
            if(targetSite) {
                targetSite.scrollIntoView({ behavior: 'smooth', block: 'start' });
                resolve(`${topicScroll} Scroll Ajustado`);
            }
        }
        
    })
}

//Funão para abrir página externa ao site Blog
export async function openBlankPage(nameID) {
    return new Promise(async (resolve) => {
        //window.alert(`Link ${nameID} foi clicado`)
        window.open("https://gestao-e-financas.blogspot.com/", "_blank");
        resolve("New Page has been opened!");
    })
}

//Função para ativar ações página home
export async function homeStartActions(Action) {
    return new Promise(async (resolve) => {
        if(Action == "Main") {
            //window.alert(`Botão AÇÃO Main foi acionado!`)
            window.open("https://tinyurl.com/2sunmwe2", "_blank");
            resolve("OK");
        }

        if(Action == "Contato") {
            //window.alert(`Botão AÇÃO Contato foi acionado!`)
            window.open("https://tinyurl.com/2sunmwe2", "_blank");
            resolve("OK");
        }
    })
}

//Funções
export async function startOperations(nameID, X, varsArray) {
    return new Promise(async (resolve) => {

        console.clear();
        console.log(Date());
        
        // Ativa tela temporaria de carregamento...
        if (X === 0 || X === 13 || X === 20) {
            const statusLoading = await showLoadingScreen(nameID);
            if(sessionStorage.getItem("statusConsole") === 'true') {
                console.log(statusLoading, nameID);
            }
        }

        // Alterando propriedades Menu Oculto...
        if(X == 5) {
            const statusLoading = await changeCSSOculto(varsArray);
            if(sessionStorage.getItem("statusConsole") === 'true') {
                console.log(statusLoading, nameID);
            }
        }

        sessionStorage.setItem("nameID", nameID);
        sessionStorage.setItem("X", X);

        //Atualizando stilos CSS
        if(nameID == "home") {
            const statusCSS = await abaHome(varsArray, nameID);
            console.log(statusCSS);
        }

        if(nameID == "historico") {
            const statusCSS = await abaHistorico(varsArray, nameID);
            console.log(statusCSS);
        }

        if(nameID == "contato") {
            const statusCSS = await abaContato(varsArray, nameID);
            console.log(statusCSS);
        }

        if(nameID == "politica") {
            const statusCSS = await abaPolitica(varsArray, nameID);
            console.log(statusCSS);
        }

        if(nameID == "updates") {
            const statusCSS = await abaUpdates(varsArray, nameID);
            console.log(statusCSS);
        }

        if(nameID == "software") {
            console.log("Software registrado...")
            const statusCSS = await abaSoft(varsArray, nameID);
            console.log(statusCSS);
        }

        //Condição Base href Environment
        const currentEnvironment = sessionStorage.getItem("proEnvironment")
        const intproEnvironment = parseInt(currentEnvironment)
        let baseURL = null;
        if (intproEnvironment === -1) {
            baseURL = "/";
        } else if (intproEnvironment === 0) {
            baseURL = "/testefiles/";
        } else if (intproEnvironment === 1) {
            baseURL = "/criacao-de-sites/";
        }

        //Condição para roteamento de links - Live Server
        if(window.location.origin == "http://127.0.0.1:5500") {
            history.pushState({ Page: nameID }, nameID, '');
            if(sessionStorage.getItem("statusConsole") === 'true') {
                console.log(window.history.state, "Internal Pages Live Server");
            } 

        //Condição para roteamento de links - Servidor    
        } else {
            let urlID = `${baseURL}${nameID}`;
            const statusURL = await roteadorURL(1, urlID);
            if(sessionStorage.getItem("statusConsole") === 'true') {
                console.log(statusURL);
            }
        }
        
        //Caminho para atualização DOM
        let SRCiframe = `${baseURL}assets/HTML/${nameID}.html`;
        if (SRCiframe) {
            const statusDOM = await atualizaIframe(SRCiframe);
            if(sessionStorage.getItem("statusConsole") === 'true') {
                console.log(statusDOM, nameID);
            }
            return 
        }
    })
}

// Função principal para operação páginas internas conclusão!
export async function endsOp(nameID, X, varsArray, iframeDoc) {
    return new Promise(async (resolve) => {
        
        if(sessionStorage.getItem("statusConsole") === 'true') {
            console.log(`%cFinalizando Operação páginas internas após sinal DOM ${nameID}`, "text-decoration: underline")
        }

        //Capturando objetos específicos
        if(nameID == "home") {
            let btnMainAction = iframeDoc.querySelector(".main-btn");
            let btnContatoAction = iframeDoc.querySelector(".ctt-btn");
            console.log(btnMainAction);
            console.log(btnContatoAction);
    
            //Capturando event click btn Main ação
            if (btnMainAction) {
                btnMainAction.addEventListener("click", async function() {
                const statusMain = await homeStartActions("Main");
                console.log(statusMain);
                })
            }
    
            //Capturando event click btn Contato ação
            if (btnContatoAction) {
                btnContatoAction.addEventListener("click", async function() {
                const statusContato = await homeStartActions("Contato");
                console.log(statusContato);
                })
            }
        }

        //Capturando objetos específicos
        if(nameID == "historico") {
            let btnHistoricoAction = iframeDoc.querySelector(".hist-btn");
            console.log(btnHistoricoAction);

            //Capturando event click btn ação
            if (btnHistoricoAction) {
                btnHistoricoAction.addEventListener("click", function() {
                //window.alert(`Botão AÇÃO ${nameID} foi acionado!`)
                window.open("https://tinyurl.com/2sunmwe2", "_blank");
                })
            }
        }

        //Capturando objetos específicos
        if(nameID == "updates") {
            let btnUpdatesAction = iframeDoc.querySelector(".up-btn");
            console.log(btnUpdatesAction);

            //Capturando event click btn ação
            if (btnUpdatesAction) {
                btnUpdatesAction.addEventListener("click", function() {
                //window.alert(`Botão AÇÃO ${nameID} foi acionado!`)
                window.open("https://tinyurl.com/2sunmwe2", "_blank");
                })
            }
        }

        //Capturando objetos específicos
        if(nameID == "contato") {
            let btnContatoAction = iframeDoc.querySelector(".sa-btn");
            console.log(btnContatoAction);

            //Capturando event click btn ação
            if (btnContatoAction) {
                btnContatoAction.addEventListener("click", function() {
                //window.alert(`Botão AÇÃO ${nameID} foi acionado!`)
                window.open("https://tinyurl.com/2sunmwe2", "_blank");
                })
            }
        }
        
        // Turn Drop On
        const divDropMenu = document.querySelector(".dropdown-content")
        divDropMenu.style.opacity = "";
        divDropMenu.style.visibility = "";
        if(sessionStorage.getItem("statusConsole") === 'true') {
            console.log("Drop Ativo!")
        }

        // Analisando Scroll Page Status
        if(sessionStorage.getItem("scrollStatus") === 'true') {

            //Ancorando Scroll Page
            setTimeout(async () => {
                const pageStatusScroll = await scrollScreenTopic(sessionStorage.getItem("value"))
                if(sessionStorage.getItem("statusConsole") === 'true') {
                    console.log(pageStatusScroll, nameID);
                    sessionStorage.setItem("scrollStatus", false);
                }
            }, 1200)
        }

        //Atualizando altura do iframe
        const statusAltura = await alteraAlturaIframe();
        if(sessionStorage.getItem("statusConsole") === 'true') {
            console.log(statusAltura, nameID);
        }

        //Encerrando Screen Loading...
        if(X == 0 || X == 13 || X == 20) {
            const statusOff = await offLoadingScreen(nameID);
            if(sessionStorage.getItem("statusConsole") === 'true') {
                console.log(statusOff, nameID);
            }
            if(X == 0) {
                if(sessionStorage.getItem("statusConsole") === 'true') {
                    console.log(`Botão ${nameID} nav bar pronto!`);
                }
            }

            if(X == 13) {
                if(sessionStorage.getItem("statusConsole") === 'true') {
                    console.log(`Botão ${nameID} footer pronto!`)
                }
            }

            if(X == 20) {
                if(sessionStorage.getItem("statusConsole") === 'true') {
                    console.log(`Botão ${nameID} Frame pronto!`)
                }
            }
        }

        //Fechando Menu Oculto após carregamento!
        if(X == 5) {
            const statusOff = await closeHideMenu(varsArray, 800);
            if(sessionStorage.getItem("statusConsole") === 'true') {
                console.log(statusOff, nameID);
            }

            //Alterando propriedades Menu Oculto
            const statusEndOculto = await retornaCSSOculto(varsArray);
            if(sessionStorage.getItem("statusConsole") === 'true') {
                console.log(statusEndOculto, nameID);
            }
        }
        resolve("FIM")
        
    });
}

// Função para tornar invisivel Drop Down Menu
export async function turnOFFDrop() {
    return new Promise(async (resolve) => {
        
        //console.log("Escondendo Drop Down Menu")
        const divDropMenu = document.querySelector(".dropdown-content")
        divDropMenu.style.opacity = 0;
        divDropMenu.style.visibility = "hidden";
        if(sessionStorage.getItem("statusConsole") === 'true') {
            console.log(divDropMenu);
        }
        resolve("Drop OFF Stats")
    })
}


