//Importando Funções
import {alteraAlturaIframe} from './1-propriedades-iframe.js';
import {varsEnvironment} from './2-variaveis-ambientes.js';
//import {startOperations, scrollScreenTopic, openBlankPage, homeStartActions, endsOp, turnOFFDrop} from './3-start-operations.js';
//import {abaHome} from './4-abas-stilos.js';
//import {roteadorURL} from './roteamento-links.js';
//import {closeHideMenu} from './6-menu-oculto.js';


//Function IIFE DOM Document
(function(win, doc){
    'use strict';

    //Versão Atual de desenvolvimento do Site!!!
    console.log("\nIniciando JavaScript Versão 1.3:")
    const statusConsole = sessionStorage.getItem("statusConsole") === 'true';

    //Iniciando DOM - Primeira coisa que deve ser carregado junto com INDEX.html
    document.addEventListener('DOMContentLoaded', async () => {
        if(statusConsole) console.log("🏗️ DOM pronto. Iniciando roteamento inicial...");

        // A PRIMEIRA COISA: Garantir que o Loading está visível (se não estiver no HTML por padrão)
        const loadingScreen = document.querySelector('.loading-screen');

        // 1. Capturamos o final da URL (o que vem depois da última barra)
        //const rotaAtual = window.location.pathname.split('/').pop();
        let fullPath = window.location.origin;
        console.log("aqui", fullPath)

        //Roteador
        // Ação única para todos os ambientes, pois a baseURL já está calibrada
        history.pushState({ Page: 'home' }, 'Home', `${window.location.origin}${baseURL}`);

        // Definição do padrão para identificar o servidor Apache Local
        const patternApache = /^http:\/\/(businesscoding\.local|bc\.local)\/.*/;

        // Logs apenas para seu controle de P&D
        if(sessionStorage.getItem("statusConsole") === 'true') {
            if(window.location.origin == "http://127.0.0.1:5500") {
                console.log("LiveServer", window.history.state);
            } else if(patternApache.test(`${window.location.origin}${window.location.pathname}`)) {
                console.log("Apache", window.history.state);
            } else {
                console.log("Produção", window.history.state);
            }
        }

        // Click Botão Header Contato
        let btnHeaderContato = document.querySelector(".header-link-insta");

        if (btnHeaderContato) {
            btnHeaderContato.addEventListener("click", function (event) {
                event.preventDefault(); // Evita qualquer comportamento padrão do HTML

                // 1. Captura o Iframe (ajuste o seletor se ele tiver um ID ou classe específica)
                let meuIframe = document.querySelector("iframe");

                if (meuIframe) {
                    // 2. Acessa o documento interno do Iframe
                    let docIframe = meuIframe.contentDocument || meuIframe.contentWindow.document;
                    
                    // 3. Busca a Seção do Instagram pelo ID que está lá no arquivo HOME
                    let targetInstagram = docIframe.querySelector("#secao-instagram");
                    
                    if (targetInstagram) {
                        // 4. Executa o scroll suave que você já validou nas versões antigas!
                        targetInstagram.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        console.log("Scroll executado com sucesso para o Instagram.");
                    } else {
                        console.log("Seção #secao-instagram não encontrada dentro do iframe.");
                    }
                } else {
                    console.log("Iframe não encontrado na página principal.");
                }
            });
}

        //Click Link A - Footer
        let linkFooterA = document.querySelector(".footer-link-a");
        if(linkFooterA) {
            linkFooterA.addEventListener("click", async function (event) {
                event.preventDefault();
                window.alert("BlogSpot Business Coding está sendo preparado, volte mais tarde...")
            })
        }

        //Click Link B - Footer
        let linkFooterB = document.querySelector(".footer-link-b");
        if(linkFooterB) {
            linkFooterB.addEventListener("click", async function (event) {
                event.preventDefault();
                window.alert("YouTube Business Coding está sendo preparado, volte mais tarde...")
            })
        }

        // Click Link Pol - Footer (Ouvinte Inteligente)
        const iframe = document.querySelector('.main-iframe');
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document
        let linkFooterPol = document.querySelector(".footer-link-pol");
        if(linkFooterPol) {
            linkFooterPol.addEventListener("click", async function (event) {
                event.preventDefault(); // Não está funcionando...

                // 1. Verificamos qual o "estado" atual do link pelo texto dele
                // Usamos .trim() para evitar problemas com espaços vazios
                let textoAtual = linkFooterPol.innerText.trim().toUpperCase();

                if (textoAtual === "POLÍTICA DE PRIVACIDADE") {
                    // AÇÃO: Ir para Política

                    //Declarando Loading Abertura...
                    const loading = document.getElementById('loading-screen').classList.remove('loading-hidden');
                    if (loading) {
                        loading.classList.remove('loading-hidden');
                    }

                    setTimeout(() => {
                        iframe.src = "assets/HTML/politica.html";
                        linkFooterPol.innerText = "Voltar para Home"; // O link se transforma

                        // 2. O ROTEADOR: Atualiza a URL no navegador
                        // history.pushState(estado, titulo, url_exibida)
                        if(sessionStorage.getItem("proEnvironment") === "-1") {
                            window.history.pushState({ pagina: "politica" }, "Política", "#politica");
                        } else if(sessionStorage.getItem("proEnvironment") === "0") {
                            window.history.pushState({ pagina: "" }, "", "politica");
                        } else {
                            // Produção GitHub: URL fica .../testefiles/?p=politica
                            window.history.pushState({ pagina: "politica" }, "Política", "?p=politica");
                        }
                        console.log("Navegando para: Política de Privacidade");
                    }, 600)
                    
                } else {
                    // AÇÃO: Voltar para Home
                    const loading = document.getElementById('loading-screen').classList.remove('loading-hidden');
                    if (loading) {
                        loading.classList.remove('loading-hidden');
                    }

                    setTimeout(() => {
                        iframe.src = "assets/HTML/home.html"; 
                        linkFooterPol.innerText = "Política de Privacidade"; // O link restaura
                        console.log("Retornando para: Home");

                        // 2. O ROTEADOR: Atualiza a URL no navegador
                        // history.pushState(estado, titulo, url_exibida)
                        if(sessionStorage.getItem("proEnvironment") === "-1") {
                            window.history.pushState({ pagina: "home" }, "Home", "#home");
                        } else if(sessionStorage.getItem("proEnvironment") === "0") {
                            window.history.pushState({ pagina: "" }, "", "home");
                        } else {
                            // Produção GitHub: URL fica .../testefiles/?p=politica
                            window.history.pushState({ pagina: "home" }, "Política", "?p=home");
                        }
                    }, 600)
                }
            });
        }

        if(sessionStorage.getItem("statusConsole") === 'true') {
            console.log("Origem", window.location.origin);
            console.log("Repositório Atual", window.location.pathname)
        }
    })

    //Carregando elementos após coleta inicial...
    window.addEventListener("load", async function() {
        if(statusConsole) console.log("🎭 Todos os recursos carregados. Finalizando palco...");

        // 2. O ROTEADOR: Atualiza a URL no navegador
        const environment = sessionStorage.getItem("proEnvironment");

        if (environment === "-1") {
            // LiveServer: Usa a hashtag (F5 funciona nativamente)
            window.history.pushState({ pagina: "#" }, "#", "#home");
        } else if (environment === "0") {
            // Apache Local: O .htaccess cuida do F5, então podemos usar "home" limpo
            window.history.pushState({ pagina: "home" }, "Home", "home");
        } else {
            // Produção (GitHub): ATENÇÃO! 
            // Se usarmos apenas "home", o F5 vai dar 404. 
            // Recomendação: Deixe a URL limpa ou use um parâmetro de busca (?page=home)
            // Para manter a segurança do seu deploy agora, vamos deixar a raiz:
            window.history.pushState({ pagina: "home" }, "Home", `${baseURL}`); 
        }
            
        //Declarando elementos index (Header - Iframe - Footer)
        const headerLayout = document.querySelector('header');
        const iframe = document.querySelector('.main-iframe');
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document
        const footerLayout = document.querySelector('footer');

        //Exibindo elementos index - Debugging...
        if(sessionStorage.getItem("statusConsole") === 'true') {
            console.log(headerLayout)
            console.log(iframeDoc)
            console.log(footerLayout)
        }

        //Capturando largura da tela!!!
        const larguraScreen = screen.width;
        if(sessionStorage.getItem("statusConsole") === 'true') {
            console.log("Width Screen Start:", larguraScreen, "px");
        }

        // Verificando ADM session
        //const statusADM = sessionStorage.getItem('ADMstatus')
        //const resultADM = (statusADM === 'true');
        //if (resultADM === true) {
            //setTimeout(() => {
                //alert("ADM Ativo!!!")
            //}, 2300)
        //}

    });

    //Recebe sinal quando o HTML filho está pronto no IFRAME...
    window.addEventListener('message', async function(event) {

        //Definindo Domínio Atual
        const currentDomain = sessionStorage.getItem("currentDomain")
        
        //Corrigindo Domínio
        const newDomain = `${event.origin}/`

        // Permited Origins
        const allowedOrigins = [
            newDomain
        ];

        // Bloqueador de origens desconhecidas!
        if (!allowedOrigins.includes(newDomain)) {
            console.warn(`%cMensagem bloqueada de origem desconhecida: ${newDomain}`, "color: orange; font-weight: bold;");

            return; // Ignora e não processa mensagens de origens não confiáveis.
        }

        //Zerando height do iframe para calcular o novo valor...
        const iframe = document.querySelector(".main-iframe");
        if (iframe) {
            iframe.style.height = "0px"; // Ou "auto"
        }

        //Alterando altura iframe
        const statusIframe = await alteraAlturaIframe();
        console.log(statusIframe, "Altura Inicial Iframe Ajustada");

        // 1. Verificamos qual o "estado" atual do link pelo texto dele
        // Usamos .trim() para evitar problemas com espaços vazios
        let linkFooterPol = document.querySelector(".footer-link-pol");
        let textoAtual = linkFooterPol.innerText.trim().toUpperCase();
        console.log(textoAtual)

        if (textoAtual === "POLÍTICA DE PRIVACIDADE") {
            declaraBtnsHOME();
        } else {
            console.log("Nada a fazer...")
        }
        
        // 2. Dica de Ouro: Scroll para o topo ao trocar de página
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // 🚀 O CHECKMATE: Abrir as Cortinas!
        // Usamos um pequeno timeout opcional de 200ms apenas para garantir que o 
        // motor de renderização terminou de pintar tudo antes de esmaecer.
        setTimeout(() => {
            const loadingScreen = document.getElementById('loading-screen');
            if (loadingScreen) {
                loadingScreen.classList.add('loading-hidden');
                console.log("✨ Palco pronto! Cortinas abertas.");
            }
        }, 200);
    })

    function declaraBtnsHOME() {
        console.log("Declarando botões HOME...")

        //Declarando iframe e Doc para interação com HTML do iframe...
        const iframe = document.querySelector('.main-iframe');
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document

        //Click botão Main CTA
        let btnMainCta = iframeDoc.querySelector(".btn-main-cta")
        if(btnMainCta) {
            btnMainCta.addEventListener("click", async function(event) {
                window.alert("Página para eBooks está sendo preparada, volte mais tarde...")
            })
        }

        //Click Botão Apresentação Info
        let btnApInfo = iframeDoc.querySelector(".an-btn-info");
        if(btnApInfo) {
            btnApInfo.addEventListener("click", async function(event) {
                window.alert("BlogSpot Business Coding está sendo preparado, volte mais tarde...");
            })
        }

        //Click Botão Contato Info
        let btnCttInfo = iframeDoc.querySelector(".cb-btn-info");
        if(btnCttInfo) {
            btnCttInfo.addEventListener("click", async function(event) {
                window.alert("Instagram Soft Coding está sendo preparado, volte mais tarde...");
            })
        }

        //Click Botão Feedback Info
        let btnFeedInfo = iframeDoc.querySelector(".sf-btn-info");
        if(btnFeedInfo) {
            btnFeedInfo.addEventListener("click", async function(event) {
                window.alert("Formulário está sendo preparado, volte mais tarde...");
            })
        }
    }

    // 1. Criamos uma variável para guardar a largura inicial da tela
    let ultimaLarguraConhecida = window.innerWidth;
    let timeoutIframeResize;

    window.addEventListener("resize", function() {
        
        // 2. PEGADA DE ÁGUIA: Verificamos se a largura REAL mudou
        // Se a largura for a mesma, ignoramos o evento (evita bug da barra de URL no mobile)
        if (window.innerWidth === ultimaLarguraConhecida) {
            return; 
        }

        // Se chegou aqui, a largura mudou (ex: girou o celular ou redimensionou janela no PC)
        ultimaLarguraConhecida = window.innerWidth;

        clearTimeout(timeoutIframeResize);

        timeoutIframeResize = setTimeout(async function() {
            let iframe = document.querySelector(".main-iframe");
            
            if (!iframe) return;

            try {
                const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
                const statusIframeLoad = iframeDoc.readyState === 'complete';

                if (statusIframeLoad) {
                    // Removemos o "0px" que causava o pulo para o topo
                    // Em vez de zerar, apenas chamamos a função que ajusta a altura
                    const statusIframe = await alteraAlturaIframe();
                    
                    if(sessionStorage.getItem("statusConsole") === 'true') {
                        console.log(statusIframe, "Iframe recalibrado após resize de largura!");
                    }
                }
            } catch (error) {
                console.error("Erro ao tentar recalcular a altura do Iframe:", error);
            }
        }, 250); // Aumentei para 250ms para dar mais estabilidade no mobile
    });

    //window.addEventListener('popstate', (event) => {
        //window.location.reload();
        // console.log('Evento popstate disparado:', event);
        // if (event.state && event.state.iframePage) {
        //     const pagina = event.state.iframePage;
        //     console.log('Voltando para o estado:', pagina);
        //     atualizarCSS(pagina);
        //     // O iframe já voltou para o conteúdo anterior automaticamente
        // } else {
        //     atualizarCSS('home');
        // }
        //window.location.reload();
    //});

})()