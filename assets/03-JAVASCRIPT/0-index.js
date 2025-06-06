//Importando Funções
import { alteraAlturaIframe } from './1-iframe-propriedades.js';
import { varsEnvironment } from './2-variaveis-de-ambiente.js';
import { goTochat, turnOFFDrop } from './3-starts-op.js';
import { startsOp, endsOp } from './3-starts-op.js';
import { closeHideMenu } from './6-menu-oculto.js';
import { roteadorURL } from './7-roteamento-urls.js';

//Function IIFE DOM Document
(function(win, doc){
    'use strict';

    window.addEventListener('message', async function(event) {

        //Definindo Domínio Atual
        const currentDomain = sessionStorage.getItem("currentDomain")
        console.log(currentDomain)

        //Corrigindo Domínio
        const newDomain = `${event.origin}/`
        console.log(newDomain)

        // Permited Origins
        const allowedOrigins = [
            newDomain
        ];

        // Verifica se a ORIGEM da mensagem recebida (event.origin) está na lista de origens permitidas.
        if (!allowedOrigins.includes(newDomain)) {
            console.warn(`%cMensagem bloqueada de origem desconhecida: ${newDomain}`, "color: orange; font-weight: bold;");
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
            console.log(statusOp) // FIM
        }
    })

    window.addEventListener('popstate', function(event) {
        window.location.reload();
    }, false);

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
        console.log("Altura iframe redefinida sem carregamento!"); 
    });

    //Iniciando Sistema com tela de carregamento...
    document.addEventListener('DOMContentLoaded', async function() {
        console.log("\n")
        console.log("%cIniciando JavaScript após DOM", "color: white")

        //Capturando largura da tela!!!
        const larguraScreen = screen.width;
        console.log(`%cWidth Screen Start: ${larguraScreen} px`, "color: white");

        // Ativando tela de carregamento...
        const loadingScreen0 = document.querySelector('.loading-screen');
        loadingScreen0.style.cursor = 'wait';
        loadingScreen0.style.display = 'flex';
        loadingScreen0.style.opacity = '1';
        loadingScreen0.style.left = '0';
        console.log("%cTela de Carregamento ativo...", "color: white")

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
        console.log(window.location.origin, "Origem");
        console.log(window.location.pathname, "Repositório Atual")
        if(window.location.origin == "http://127.0.0.1:5500" || window.location.origin == "http://robertog") {
            history.pushState({ Page: 'home' }, 'Home', `${window.location.origin}/`);
            console.log(window.history.state, "Localhost")
        } else {
            const statusURL = await roteadorURL(0, window.location.pathname);
            console.log(statusURL);
        }
        
    });

    window.addEventListener("load", async function() {
        console.log("\n")
        console.log("%cIniciando JavaScript após Loading Completo", "color: white")    

        const iframe = document.querySelector('.main-iframe');
        const iframeDoc = iframe.contentWindow.document
        
        //Chamando Função Variáveis de Ambientes
        const varsArray = await varsEnvironment();

        for (let i = 0; i < varsArray.length; i++) {
            console.log(i, varsArray[i]);
        }

        // Evento Click Frame TRANSFER AEROPORTO - DEFAULT HOME
        const frameTransSer = iframeDoc.querySelector(".ps-container-frame-link-01")
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
        const frameViagSer = iframeDoc.querySelector(".ps-container-frame-link-02")
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
        const framePacoSer = iframeDoc.querySelector(".ps-container-frame-link-03")
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
        const framePassSer = iframeDoc.querySelector(".ps-container-frame-link-04")
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

        //Evento click botão AÇÃO HEADER - DEFAULT
        if (varsArray[10]) {
            varsArray[10].addEventListener('click', async function() {
                let nameID = varsArray[10].dataset.link;
                const statusOp = await goTochat(nameID);
                console.log(statusOp)
            })
        }

        // Evento click botão AÇÃO MAIN - DEFAULT
        let btnMainAction = iframeDoc.querySelector(".main-btn")
        if (btnMainAction) {
            btnMainAction.addEventListener('click', async function() {
                let nameID = btnMainAction.dataset.link;
                const statusOp = await goTochat(nameID);
                console.log(statusOp)
            })
        }

        // Evento click botão AÇÃO SECTION AGENDAMENTO HOME - DEFAULT
        let btnSAHAction = iframeDoc.querySelector(".sa-btn")
        if (btnSAHAction) {
            btnSAHAction.addEventListener('click', async function() {
                let nameID = btnSAHAction.dataset.link;
                const statusOp = await goTochat(nameID);
                console.log(statusOp);
            })
        }

        // Evento click link AÇÃO Footer icon zap - DEFAULT
        if (varsArray[19]) {
            varsArray[19].addEventListener('click', async function() {
                let nameID = varsArray[19].dataset.link;
                const statusOp = await goTochat(nameID);
                console.log(statusOp)
            })
        }

        //Evento click link HOME nav bar - 
        if (varsArray[3]) {
            varsArray[3].addEventListener('click', async function() {
                console.clear();
                console.log(Date());

                sessionStorage.setItem("statusHome", "true");

                //Capturando data-link
                let nameID = varsArray[3].dataset.link;
                const statusOp = await startsOp(nameID, 0, varsArray)
                console.log(statusOp) // FIM
            })
        }

        //Evento click link SOBRE nav bar - ok
        if (varsArray[4]) {
            varsArray[4].addEventListener('click', async function() {
                console.clear();
                console.log(Date());

                //Capturando data-link
                let nameID = varsArray[4].dataset.link;
                const statusOp = await startsOp(nameID, 0, varsArray)
                console.log(statusOp) // FIM
            })
        }

        //Evento click link AGENDAMENTO nav bar - ok
        if (varsArray[5]) {
            varsArray[5].addEventListener('click', async function() {
                console.clear();
                console.log(Date());

                //Capturando data-link
                let nameID = varsArray[5].dataset.link;
                const statusOp = await startsOp(nameID, 0, varsArray)
                console.log(statusOp) // FIM
            })
        }

        //Evento click link TRANSFER AEROPORTO nav bar drop down - ok
        if (varsArray[6]) {
            varsArray[6].addEventListener('click', async function() {

                // Capturando Drop Down Menu Div
                const statusDrop = await turnOFFDrop();
                console.log(statusDrop);

                console.clear();
                console.log(Date());

                //Capturando data-link
                let nameID = varsArray[6].dataset.link;
                const statusOp = await startsOp(nameID, 0, varsArray)
                console.log(statusOp) // FIM
            })
        }

        //Evento click link VIAGENS EXECUTIVAS nav bar drop down - ok
        if (varsArray[7]) {
            varsArray[7].addEventListener('click', async function() {

                // Capturando Drop Down Menu Div
                const statusDrop = await turnOFFDrop();
                console.log(statusDrop);

                console.clear();
                console.log(Date());

                //Capturando data-link
                let nameID = varsArray[7].dataset.link;
                const statusOp = await startsOp(nameID, 0, varsArray)
                console.log(statusOp) // FIM
            })
        }

        //Evento click link PACOTES TURÍSTICOS nav bar drop down - ok
        if (varsArray[8]) {
            varsArray[8].addEventListener('click', async function() {

                // Capturando Drop Down Menu Div
                const statusDrop = await turnOFFDrop();
                console.log(statusDrop);

                console.clear();
                console.log(Date());

                //Capturando data-link
                let nameID = varsArray[8].dataset.link;
                const statusOp = await startsOp(nameID, 0, varsArray)
                console.log(statusOp) // FIM
            })
        }

        //Evento click link PASSAGENS AÉREAS nav bar drop down - ok
        if (varsArray[9]) {
            varsArray[9].addEventListener('click', async function() {

                // Capturando Drop Down Menu Div
                const statusDrop = await turnOFFDrop();
                console.log(statusDrop);

                console.clear();
                console.log(Date());

                //Capturando data-link
                let nameID = varsArray[9].dataset.link;
                const statusOp = await startsOp(nameID, 0, varsArray)
                console.log(statusOp) // FIM
            })
        }

        //Evento click link HOME footer - ok
        if (varsArray[11]) {
            varsArray[11].addEventListener('click', async function() {
                console.clear();
                console.log(Date());

                sessionStorage.setItem("statusHome", "true");

                //Capturando data-link
                let nameID = varsArray[11].dataset.link;
                const statusOp = await startsOp(nameID, 13, varsArray)
                console.log(statusOp) // FIM
            })
        }

        //Evento click link SOBRE footer - ok
        if (varsArray[12]) {
            varsArray[12].addEventListener('click', async function() {
                console.clear();
                console.log(Date());

                //Capturando data-link
                let nameID = varsArray[12].dataset.link;
                const statusOp = await startsOp(nameID, 13, varsArray)
                console.log(statusOp) // FIM
            })
        }

        //Evento click link AGENDAMENTO footer - ok
        if (varsArray[13]) {
            varsArray[13].addEventListener('click', async function() {
                console.clear();
                console.log(Date());

                //Capturando data-link
                let nameID = varsArray[13].dataset.link;
                const statusOp = await startsOp(nameID, 13, varsArray)
                console.log(statusOp) // FIM
            })
        }

        //Evento click link TRANSFER AEROPORTO footer - ok
        if (varsArray[14]) {
            varsArray[14].addEventListener('click', async function() {
                console.clear();
                console.log(Date());

                //Capturando data-link
                let nameID = varsArray[14].dataset.link;
                const statusOp = await startsOp(nameID, 13, varsArray)
                console.log(statusOp) // FIM
            })
        }

        //Evento click link VIAGENS EXECUTIVAS footer - ok
        if (varsArray[15]) {
            varsArray[15].addEventListener('click', async function() {
                console.clear();
                console.log(Date());

                //Capturando data-link
                let nameID = varsArray[15].dataset.link;
                const statusOp = await startsOp(nameID, 13, varsArray)
                console.log(statusOp) // FIM
            })
        }

        //Evento click link PACOTES TURÍSTICOS footer - ok
        if (varsArray[16]) {
            varsArray[16].addEventListener('click', async function() {
                console.clear();
                console.log(Date());

                //Capturando data-link
                let nameID = varsArray[16].dataset.link;
                const statusOp = await startsOp(nameID, 13, varsArray)
                console.log(statusOp) // FIM
            })
        }

        //Evento click link PASSAGENS AÉREAS footer - ok
        if (varsArray[17]) {
            varsArray[17].addEventListener('click', async function() {
                console.clear();
                console.log(Date());

                //Capturando data-link
                let nameID = varsArray[17].dataset.link;
                const statusOp = await startsOp(nameID, 13, varsArray)
                console.log(statusOp) // FIM
            })
        }

        //Evento click link POLÍTICA footer - ok
        if (varsArray[18]) {
            varsArray[18].addEventListener('click', async function() {
                console.clear();
                console.log(Date());

                //Capturando data-link
                let nameID = varsArray[18].dataset.link;
                const statusOp = await startsOp(nameID, 13, varsArray)
                console.log(statusOp) // FIM
            })
        }

        // Evento click BTN OPEN MENU OCULTO
        if (varsArray[20]) {
            varsArray[20].addEventListener('click', async function() {
                varsArray[2].style.display = 'flex';
                const handleTransitionEnd = (event) => {
                    if (event.propertyName === 'opacity' || event.propertyName === 'left') {
                        varsArray[2].removeEventListener('transitioned', handleTransitionEnd);
                        console.log("Menu Oculto Iniciado e Visível");
                    }
                }

                varsArray[2].addEventListener('transitionend', handleTransitionEnd);

                //Inicia a Transição para Tornar a Tela Visível
                setTimeout(() => {
                    varsArray[2].style.opacity = '1';
                    varsArray[2].style.left = '0';
                }, 1)
            })
        }

        //Capturando click BTN CLOSE MENU - MENU OCULTO
        if (varsArray[21]) {
            varsArray[21].addEventListener('click', async () => {
                const statusOff = await closeHideMenu(varsArray, 300);
                console.log(statusOff, "Botão Close Menu");
            })
        }

        //Evento click link HOME menu oculto - ok
        if (varsArray[22]) {
            varsArray[22].addEventListener('click', async function() {
                console.clear();
                console.log(Date());

                sessionStorage.setItem("statusHome", "true");

                //Capturando data-link
                let nameID = varsArray[22].dataset.link;
                const statusOp = await startsOp(nameID, 5, varsArray)
                console.log(statusOp) // FIM
            })
        }

        //Evento click link SOBRE menu oculto - ok
        if (varsArray[23]) {
            varsArray[23].addEventListener('click', async function() {
                console.clear();
                console.log(Date());

                //Capturando data-link
                let nameID = varsArray[23].dataset.link;
                const statusOp = await startsOp(nameID, 5, varsArray)
                console.log(statusOp) // FIM
            })
        }

        //Evento click link AGENDAMENTO menu oculto - ok
        if (varsArray[24]) {
            varsArray[24].addEventListener('click', async function() {
                console.clear();
                console.log(Date());

                //Capturando data-link
                let nameID = varsArray[24].dataset.link;
                const statusOp = await startsOp(nameID, 5, varsArray)
                console.log(statusOp) // FIM
            })
        }

        //Evento click link TRANSFER AEROPORTO menu oculto - ok
        if (varsArray[25]) {
            varsArray[25].addEventListener('click', async function() {
                console.clear();
                console.log(Date());

                //Capturando data-link
                let nameID = varsArray[25].dataset.link;
                const statusOp = await startsOp(nameID, 5, varsArray)
                console.log(statusOp) // FIM
            })
        }

        //Evento click link VIAGENS EXECUTIVAS menu oculto - ok
        if (varsArray[26]) {
            varsArray[26].addEventListener('click', async function() {
                console.clear();
                console.log(Date());

                //Capturando data-link
                let nameID = varsArray[26].dataset.link;
                const statusOp = await startsOp(nameID, 5, varsArray)
                console.log(statusOp) // FIM
            })
        }

        //Evento click link PACOTES TURÍSTICOS menu oculto - ok
        if (varsArray[27]) {
            varsArray[27].addEventListener('click', async function() {
                console.clear();
                console.log(Date());

                //Capturando data-link
                let nameID = varsArray[27].dataset.link;
                const statusOp = await startsOp(nameID, 5, varsArray)
                console.log(statusOp) // FIM
            })
        }

        //Evento click link PASSAGENS AÉREAS menu oculto - ok
        if (varsArray[28]) {
            varsArray[28].addEventListener('click', async function() {
                console.clear();
                console.log(Date());

                //Capturando data-link
                let nameID = varsArray[28].dataset.link;
                const statusOp = await startsOp(nameID, 5, varsArray)
                console.log(statusOp) // FIM
            })
        }

        //Alterando altura iframe
        const statusIframe = await alteraAlturaIframe();
        console.log(statusIframe, "Altura Inicial Iframe Ajustada");
    
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
    });

    

    

    

    //window.history.back()
})()