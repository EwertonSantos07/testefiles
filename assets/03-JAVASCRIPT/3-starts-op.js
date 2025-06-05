import { showLoadingScreen, offLoadingScreen } from './5-screen-loading.js';
import { atualizaIframe, alteraAlturaIframe } from './1-iframe-propriedades.js';
import { abaSobre, abaAgen, abaHome, abaTrans, abaViag, abaPaco, abaPass, abaPol } from './4-aba-stilos.js';
import { changeCSSOculto, retornaCSSOculto, closeHideMenu } from './6-menu-oculto.js';
import { roteadorURL } from './7-roteamento-urls.js';

// Função para tornar invisivel Drop Down Menu
export async function turnOFFDrop() {
    return new Promise(async (resolve) => {
        //console.log("Escondendo Drop Down Menu")
        const divDropMenu = document.querySelector(".dropdown-content")
        console.log(divDropMenu);
        divDropMenu.style.opacity = 0;
        divDropMenu.style.visibility = "hidden";
        resolve("Drop OFF Stats")
    })
}

// Função para redirecionar para o atendimento, forma simples!
export async function goTochat(keyID) {
    return new Promise(async (resolve) => {
        if (keyID === "header-ação" || keyID === "main-ação" || keyID === "sa-home-ação" || keyID === "icon-zap-link" || keyID === "am-btn" || keyID === "aba-sa-btn") {
            window.open("https://tinyurl.com/veckfe3p", "_blank");
            const statusFc = `New Simply Chat has been opened, ${keyID}`
            resolve(statusFc)
        }

        if (keyID === "ta-btn") {
            window.open("https://tinyurl.com/5bctdz3d", "_blank");
            const statusFc = `New Transfer Chat has been opened, ${keyID}`
            resolve(statusFc)
        }

        if (keyID === "ve-btn") {
            window.open("https://tinyurl.com/ycxys5h9", "_blank");
            const statusFc = `New Viagens Chat has been opened, ${keyID}`
            resolve(statusFc)
        }

        if (keyID === "pt-btn-01") {
            window.open("https://tinyurl.com/2w93hprv", "_blank");
            const statusFc = `New Pacotes Almoço Chat has been opened, ${keyID}`
            resolve(statusFc)
        }

        if (keyID === "pt-btn-02") {
            window.open("https://tinyurl.com/yz29jc83", "_blank");
            const statusFc = `New Pacotes Jantar Chat has been opened, ${keyID}`
            resolve(statusFc)
        }

        if (keyID === "pt-btn-03") {
            window.open("https://tinyurl.com/szd84cmt", "_blank");
            const statusFc = `New Pacotes Show Chat has been opened, ${keyID}`
            resolve(statusFc)
        }

        if (keyID === "pa-btn") {
            window.open("https://tinyurl.com/2rjya8sf", "_blank");
            const statusFc = `New Passagens Chat has been opened, ${keyID}`
            resolve(statusFc)
        }
        
    })
}

// Função para declarar botões aba HOME
// Continuando, padronização fluxo para ativar os botões da aba home...

// Função principal para operaçao páginas internas!
export async function startsOp(nameID, X, varsArray) {
    return new Promise(async (resolve) => {
        
        // Ativa tela temporaria de carregamento...
        if (X === 0 || X === 13 || X === 20) {
            const statusLoading = await showLoadingScreen(nameID);
            console.log(statusLoading, nameID);
        }

        // Alterando propriedades Menu Oculto...
        if(X == 5) {
            const statusLoading = await changeCSSOculto(varsArray);
            console.log(statusLoading, nameID);
        }

        sessionStorage.setItem("nameID", nameID);
        sessionStorage.setItem("X", X);

        // Atualizando propriedades CSS HOME
        if (nameID === "home") {
            const statusCSS = await abaHome(varsArray);
            console.log(statusCSS, nameID);
        }

        // Atualizando propriedades CSS SOBRE
        if (nameID === "sobre") {
            const statusCSS = await abaSobre(varsArray);
            console.log(statusCSS, nameID);
        }

        // Atualizando propriedades CSS AGENDAMENTO
        if (nameID === "agendamento") {
            const statusCSS = await abaAgen(varsArray);
            console.log(statusCSS, nameID);
        }

        // Atualizando Propriedades CSS TRANSFER AEROPORTO
        if (nameID === "transfer-aeroporto") {
            const statusCSS = await abaTrans(varsArray);
            console.log(statusCSS, nameID);
        }

        // Atualizando Propriedades CSS VIAGENS EXECUTIVAS
        if (nameID === "viagens-executivas") {
            const statusCSS = await abaViag(varsArray);
            console.log(statusCSS, nameID);
        }

        // Atualizando Propriedades CSS PACOTES TURÍSTICOS
        if (nameID === "pacotes-turisticos") {
            const statusCSS = await abaPaco(varsArray);
            console.log(statusCSS, nameID);
        }

        // Atualizando Propriedades CSS PASSAGENS AÉREAS
        if (nameID === "passagens-aereas") {
            const statusCSS = await abaPass(varsArray);
            console.log(statusCSS, nameID);
        }

        // Atualizando Propriedades CSS PASSAGENS AÉREAS
        if (nameID === "politica") {
            const statusCSS = await abaPol(varsArray);
            console.log(statusCSS, nameID);
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
            baseURL = "/rg-transporte-executivo/";
        }

        //Condição para roteamento de links - Live Server
        if(window.location.origin == "http://127.0.0.1:5500" || window.location.origin == "http://robertog") {
            history.pushState({ Page: nameID }, nameID, '');
            console.log(window.history.state, "Internal Pages");

        //Condição para roteamento de links - Servidor    
        } else {
            let urlID = `${baseURL}${nameID}`;
            const statusURL = await roteadorURL(1, urlID);
            console.log(statusURL);
        }

        //Caminho para atualização DOM
        let SRCiframe = `${baseURL}assets/01-HTML/${nameID}.html`;
        if (SRCiframe) {
            const statusDOM = await atualizaIframe(SRCiframe);
            console.log(statusDOM, nameID);
            return 
        }
    })
}
        
// Função principal para operação páginas internas conclusão!
export async function endsOp(nameID, X, varsArray, iframeDoc) {
    return new Promise(async (resolve) => {

        // Capturando Objetos Específicos
        if (nameID === "home") {
            let btnMainAction = iframeDoc.querySelector(".main-btn");
            console.log(btnMainAction, nameID);
            if (btnMainAction) {
                btnMainAction.addEventListener('click', async function() {
                    //window.alert(`Botão AÇÃO ${nameID} Main foi acionado!`)
                    let name2ID = btnMainAction.dataset.link;
                    const statusOp = await goTochat(name2ID);
                    console.log(statusOp)
                })
            }

            let btnAgenHAction = iframeDoc.querySelector(".sa-btn");
            console.log(btnAgenHAction, nameID);
            if (btnAgenHAction) {
                btnAgenHAction.addEventListener('click', async function() {
                    //window.alert(`Botão AÇÃO ${nameID} Agendamento foi acionado!`)
                    let name2ID = btnAgenHAction.dataset.link;
                    const statusOp = await goTochat(name2ID);
                    console.log(statusOp)
                })
            }

            // Evento Click Frame TRANSFER AEROPORTO - DEFAULT HOME
            let frameTransSer = iframeDoc.querySelector(".ps-container-frame-link-01");
            console.log(frameTransSer, nameID);
            if (frameTransSer) {
                frameTransSer.addEventListener('click', async function() {
                    console.clear();
                    console.log(Date());

                    //Capturando data-link
                    let nameID = frameTransSer.dataset.link;
                    const statusOp = await startsOp(nameID, 20, varsArray)
                    console.log(statusOp) // FIM
                })
            }

            // Evento Click Frame VIAGENS EXECUTIVAS - DEFAULT HOME
            let frameViagSer = iframeDoc.querySelector(".ps-container-frame-link-02")
            console.log(frameViagSer, nameID);
            if (frameViagSer) {
                frameViagSer.addEventListener('click', async function() {
                    console.clear();
                    console.log(Date());

                    //Capturando data-link
                    let nameID = frameViagSer.dataset.link;
                    const statusOp = await startsOp(nameID, 20, varsArray)
                    console.log(statusOp) // FIM
                })
            }

            // Evento Click Frame PACOTES TURÍSTICOS - DEFAULT HOME
            let framePacoSer = iframeDoc.querySelector(".ps-container-frame-link-03")
            console.log(framePacoSer, nameID);
            if (framePacoSer) {
                framePacoSer.addEventListener('click', async function() {
                    console.clear();
                    console.log(Date());

                    //Capturando data-link
                    let nameID = framePacoSer.dataset.link;
                    const statusOp = await startsOp(nameID, 20, varsArray)
                    console.log(statusOp) // FIM
                })
            }

            // Evento Click Frame PASSAGENS AÉREAS - DEFAULT HOME
            let framePassSer = iframeDoc.querySelector(".ps-container-frame-link-04")
            console.log(framePassSer, nameID);
            if (framePassSer) {
                framePassSer.addEventListener('click', async function() {
                    console.clear();
                    console.log(Date());

                    //Capturando data-link
                    let nameID = framePassSer.dataset.link;
                    const statusOp = await startsOp(nameID, 20, varsArray)
                    console.log(statusOp) // FIM
                })
            }
        }

        // Capturando Objetos Específicos
        if (nameID === "sobre") {
            let btnSobreAction = iframeDoc.querySelector(".am-btn");
            console.log(btnSobreAction, nameID);
            if (btnSobreAction) {
                btnSobreAction.addEventListener('click', async function() {
                    //window.alert(`Botão AÇÃO ${nameID} foi acionado!`)
                    let name2ID = btnSobreAction.dataset.link;
                    const statusOp = await goTochat(name2ID);
                    console.log(statusOp);
                })
            }
        }

        // Capturando Objetos Específicos
        if (nameID === "agendamento") {
            let btnAgenAction = iframeDoc.querySelector(".aba-sa-btn");
            console.log(btnAgenAction, nameID);
            if (btnAgenAction) {
                btnAgenAction.addEventListener('click', async function() {
                    //window.alert(`Botão AÇÃO ${nameID} foi acionado!`)
                    let name2ID = btnAgenAction.dataset.link;
                    const statusOp = await goTochat(name2ID);
                    console.log(statusOp)
                })
            }
        }

        // Capturando Objetos Específicos
        if (nameID === "transfer-aeroporto") {
            let btnTransAction = iframeDoc.querySelector(".ta-btn")
            console.log(btnTransAction, nameID);
            if (btnTransAction) {
                btnTransAction.addEventListener('click', async function() {
                    //window.alert(`Botão AÇÃO ${nameID} foi acionado!`)
                    let name2ID = btnTransAction.dataset.link;
                    const statusOp = await goTochat(name2ID);
                    console.log(statusOp)
                })
            }
        }

        // Capturando Objetos Específicos
        if (nameID === "viagens-executivas") {
            let btnViagAction = iframeDoc.querySelector(".ve-btn")
            console.log(btnViagAction, nameID);
            if (btnViagAction) {
                btnViagAction.addEventListener('click', async function() {
                    //window.alert(`Botão AÇÃO ${nameID} foi acionado!`)
                    let name2ID = btnViagAction.dataset.link;
                    const statusOp = await goTochat(name2ID);
                    console.log(statusOp)
                })
            }
        }

        // Capturando Objetos Específicos
        if (nameID === "pacotes-turisticos") {
            let btnPaco01Action = iframeDoc.querySelector(".pt-btn-01")
            console.log(btnPaco01Action, nameID);
            if (btnPaco01Action) {
                btnPaco01Action.addEventListener('click', async function() {
                    //window.alert(`Botão AÇÃO ${nameID} 01 foi acionado!`)
                    let name2ID = btnPaco01Action.dataset.link;
                    const statusOp = await goTochat(name2ID);
                    console.log(statusOp)
                })
            }

            let btnPaco02Action = iframeDoc.querySelector(".pt-btn-02")
            console.log(btnPaco02Action, nameID);
            if (btnPaco02Action) {
                btnPaco02Action.addEventListener('click', async function() {
                    //window.alert(`Botão AÇÃO ${nameID} 02 foi acionado!`)
                    let name2ID = btnPaco02Action.dataset.link;
                    const statusOp = await goTochat(name2ID);
                    console.log(statusOp)
                })
            }

            let btnPaco03Action = iframeDoc.querySelector(".pt-btn-03")
            console.log(btnPaco03Action, nameID);
            if (btnPaco03Action) {
                btnPaco03Action.addEventListener('click', async function() {
                    //window.alert(`Botão AÇÃO ${nameID} 03 foi acionado!`)
                    let name2ID = btnPaco03Action.dataset.link;
                    const statusOp = await goTochat(name2ID);
                    console.log(statusOp)
                })
            }
        }

        // Capturando Objetos Específicos
        if (nameID === "passagens-aereas") {
            let btnPassAction = iframeDoc.querySelector(".pa-btn")
            console.log(btnPassAction, nameID);
            if (btnPassAction) {
                btnPassAction.addEventListener('click', async function() {
                    //window.alert(`Botão AÇÃO ${nameID} foi acionado!`)
                    let name2ID = btnPassAction.dataset.link;
                    const statusOp = await goTochat(name2ID);
                    console.log(statusOp)
                })
            }
        }

        // Turn Drop On
        const divDropMenu = document.querySelector(".dropdown-content")
        divDropMenu.style.opacity = "";
        divDropMenu.style.visibility = "";
        console.log("Drop Ativo!")

        //Atualizando altura do iframe
        const statusAltura = await alteraAlturaIframe();
        console.log(statusAltura, nameID);

        //Encerrando Screen Loading...
        if(X == 0 || X == 13 || X == 20) {
            const statusOff = await offLoadingScreen(nameID);
            console.log(statusOff, nameID);
            if(X == 0) {
                console.log(`Botão ${nameID} nav bar pronto!`);
            }

            if(X == 13) {
                console.log(`Botão ${nameID} footer pronto!`)
            }

            if(X == 20) {
                console.log(`Botão ${nameID} Frame pronto!`)
            }
        }

        //Fechando Menu Oculto após carregamento!
        if(X == 5) {
            const statusOff = await closeHideMenu(varsArray, 800);
            console.log(statusOff, nameID);

            //Alterando propriedades Menu Oculto
            const statusEndOculto = await retornaCSSOculto(varsArray);
            console.log(statusEndOculto, nameID);
        }
        resolve("FIM")
    })
}