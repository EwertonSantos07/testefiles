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

    //Habilitando prints no console;
    const statusConsole = sessionStorage.getItem("statusConsole") === 'true';

    //Iniciando DOM - Primeira coisa que deve ser carregado após INDEX.html
    document.addEventListener('DOMContentLoaded', async () => {

        // Full Path;
        console.log("\nFull Path", `${window.location.origin}${baseURL}`)

        // Apache Variável para Roteador;
        const patternApache = /^http:\/\/(businesscoding\.local|bc\.local)\/.*/;

        // 1. Capturamos o final da URL (o que vem depois da última barra)
        //const rotaAtual = window.location.pathname.split('/').pop();
        
        //let fullPath = window.location.origin;
        

        //Roteador
        if(sessionStorage.getItem("statusConsole") === 'true') {
            if(window.location.origin == "http://127.0.0.1:5500") {
                history.pushState({ Page: 'home' }, 'Home', `${window.location.origin}${baseURL}#home`);
                console.log("LiveServer Environment", window.history.state);
            } else if(patternApache.test(`${window.location.origin}${window.location.pathname}`)) {
                console.log("Apache Environment", window.history.state);
            } else {
                console.log("Produção Environment", window.history.state);
            }
        }
        
        // Sincronizar este código com o de cima na hora de testar o APACHE!!!
        //if (environment === "-1") {
            // LiveServer: Usa a hashtag (F5 funciona nativamente)
            //history.pushState({ pagina: "home" }, "Home", "#home");
        //} else if (environment === "0") {
            // Apache Local: O .htaccess cuida do F5, então podemos usar "home" limpo
            //window.history.pushState({ pagina: "home" }, "Home", "home");
        //} else {
            // Produção (GitHub): ATENÇÃO! 
            // Se usarmos apenas "home", o F5 vai dar 404. 
            // Recomendação: Deixe a URL limpa ou use um parâmetro de busca (?page=home)
            // Para manter a segurança do seu deploy agora, vamos deixar a raiz:
            //window.history.pushState({ pagina: "home" }, "Home", `${baseURL}#home`); 
        //}

        // A PRIMEIRA COISA: Injetar conteúdo HTML na div INDEX;
        await carregarPagina('assets/HTML/home.html');

        // Declarando Botões INDEX;
        await declaraBtnsINDEX();

        // Declarando Botões HOME;
        await declaraBtnsHOME();

        //Declarando elementos index (Header - Div_Container - Footer)
        const headerLayout = document.querySelector('header');
        const div_container = document.querySelector('.main-iframe');
        const footerLayout = document.querySelector('footer');

        //Exibindo elementos index - Debugging...
        if(sessionStorage.getItem("statusConsole") === 'true') {
            console.log(headerLayout)
            console.log(div_container)
            console.log(footerLayout)
        }

        //Capturando largura da tela!!!
        const larguraScreen = screen.width;
        if(sessionStorage.getItem("statusConsole") === 'true') {
            console.log("Width Screen Start:", larguraScreen, "px");
        }

        // End
        console.log("\n🏗️ DOM pronto. Sistema Versão 1.3 iniciado.");

        // 2. A MÁGICA: Verifica se o navegador já deu o sinal verde
        if (document.readyState === 'complete') {
            // Se por acaso o await demorou tanto que já carregou tudo, executa direto
            await executarTarefasPosCarregamento();
        } else {
            // Se ainda não carregou, aí sim ouvimos o evento uma única vez
            window.addEventListener('load', executarTarefasPosCarregamento, { once: true });
        }

    })

    // 1. Criamos a função de Segundo Plano (Background Tasks)
    const executarTarefasPosCarregamento = async () => {
        console.log("⚙️ Loading tasks: Iniciando processamento em segundo plano...");
        // Coloque aqui o que deve rodar por último, como Analytics extras ou animações de entrada
    };

    // Função para Injetar conteúdo HTML na div INDEX;
    async function carregarPagina(url) {
        const container = document.getElementById('main-content');
        try {
            const response = await fetch(url);
            const html = await response.text();
            container.innerHTML = html;
            console.log("Página Carregada!!!");
        } catch (error) {
            container.innerHTML = "<p>Erro ao carregar conteúdo.</p>";
        }
    }

    // Ativa Botões INDEX;
    async function declaraBtnsINDEX() {

        // Click Botão Header Instagram
        let btnHeaderContato = document.querySelector(".header-link-insta");
        if (btnHeaderContato) {
            btnHeaderContato.addEventListener("click", function (event) {
                event.preventDefault(); // Evita qualquer comportamento padrão do HTML

                // Busca a Seção do Instagram pelo ID que está lá no arquivo HOME
                let targetInstagram = document.querySelector("#secao-instagram");
                
                if (targetInstagram) {
                    // Executa o scroll suave que você já validou nas versões antigas!
                    const headerHeight = -225;
                    const elementPosition = targetInstagram.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - headerHeight;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });

                    console.log("Scroll ajustado com offset do Header executado.");
                } else {
                    console.log("Seção #secao-instagram não encontrada dentro do container.");
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
                window.alert("Business Store está sendo preparado, volte mais tarde...")
            })
        }

        //Click Link Política - Footer;
        let linkFooterPol = document.querySelector(".footer-link-pol");
        const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
        if (linkFooterPol) {
            linkFooterPol.addEventListener("click", async function (event) {
                event.preventDefault();

                let textoAtual = linkFooterPol.innerText.trim().toUpperCase();
                let destino = (textoAtual === "POLÍTICA DE PRIVACIDADE") ? 'assets/HTML/politica.html' : 'assets/HTML/home.html';
                let pathUrl = (textoAtual === "POLÍTICA DE PRIVACIDADE") ? "politica" : "home";
                let novoTexto = (textoAtual === "POLÍTICA DE PRIVACIDADE") ? "Voltar para Home" : "Política de Privacidade";

                try {
                    // --- INÍCIO DA MÁGICA ---
                    await animarBarraProgresso('start');
                    
                    // O "Level de Espera" artificial para o usuário apreciar o sistema
                    await delay(400); 

                    // AÇÃO PRINCIPAL: Busca e injeta o conteúdo
                    console.log("\n")
                    await carregarPagina(destino);
                    
                    if (destino === 'assets/HTML/home.html') {
                        await declaraBtnsHOME();
                    }

                    // --- FINALIZAÇÃO DA BARRA ---
                    await animarBarraProgresso('end');

                    // Atualiza UI e Roteador
                    linkFooterPol.innerText = novoTexto;
                    const env = sessionStorage.getItem("proEnvironment");
                    let finalUrl = env === "-1" ? `#${pathUrl}` : (env === "0" ? pathUrl : `?p=${pathUrl}`);
                    
                    window.history.pushState({ pagina: pathUrl }, pathUrl.charAt(0).toUpperCase() + pathUrl.slice(1), finalUrl);
                    window.scrollTo({ top: 0, behavior: 'smooth' });

                    console.log(`Navegação concluída para: ${pathUrl}`);
                    console.log("Page:", window.history.state);

                } catch (error) {
                    await animarBarraProgresso('end'); // Fecha a barra mesmo em erro
                    console.error("Erro na transição:", error);
                }
            });
        }
        console.log("Botões INDEX ativados!")
    }

    // Ativa Botões quando for página HOME;
    async function declaraBtnsHOME() {

        //Click botão Main CTA
        let btnMainCta = document.querySelector(".btn-main-cta")
        if(btnMainCta) {
            btnMainCta.addEventListener("click", async function(event) {
                window.alert("Página para eBooks está sendo preparada, volte mais tarde...")
            })
        }

        //Click Botão Apresentação Info
        let btnApInfo = document.querySelector(".an-btn-info");
        if(btnApInfo) {
            btnApInfo.addEventListener("click", async function(event) {
                window.alert("BlogSpot Business Coding está sendo preparado, volte mais tarde...");
            })
        }

        //Click Botão Contato Info
        let btnCttInfo = document.querySelector(".cb-btn-info");
        if(btnCttInfo) {
            btnCttInfo.addEventListener("click", async function(event) {
                window.alert("Instagram Soft Coding está sendo preparado, volte mais tarde...");
            })
        }

        //Click Botão Feedback Info
        let btnFeedInfo = document.querySelector(".sf-btn-info");
        if(btnFeedInfo) {
            btnFeedInfo.addEventListener("click", async function(event) {
                window.alert("Formulário está sendo preparado, volte mais tarde...");
            })
        }
        console.log("Botões HOME ativados!")
    }

    // 1. Criamos uma variável para guardar a largura inicial da tela
    let ultimaLarguraConhecida = window.innerWidth;
    let timeoutIframeResize;

    // 1. FERRAMENTAS GLOBAIS (Sempre no topo)
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    // Controle da Barra de Progresso Superior
    async function animarBarraProgresso(status) {
        const barContainer = document.getElementById('progress-bar-container');
        const bar = document.getElementById('progress-bar');

        if (status === 'start') {
            barContainer.style.display = 'block'; // Garante que o trilho apareça
            bar.style.opacity = '1';
            bar.style.width = '0%';
            
            // Pulo inicial para dar sensação de resposta imediata
            setTimeout(() => { bar.style.width = '35%'; }, 10);
            
            // Caminhada lenta (simulando carregamento em background)
            setTimeout(() => { bar.style.width = '70%'; }, 200);
            
        } else if (status === 'end') {
            // Dispara para o final
            bar.style.width = '100%';
            
            // Aguarda a transição do CSS terminar e limpa a barra
            await delay(400); 
            bar.style.opacity = '0';
            
            await delay(300); // Tempo para o fade-out
            bar.style.width = '0%';
        }
    }

    //Recebe sinal do HTML quando houver algum EVENTO definido...
    window.addEventListener('message', async function(event) {

        // Permited Origins
        const allowedOrigins = [
            newDomain
        ];

        // Bloqueador de origens desconhecidas!
        if (!allowedOrigins.includes(newDomain)) {
            console.warn(`%cMensagem bloqueada de origem desconhecida: ${newDomain}`, "color: orange; font-weight: bold;");

            return; // Ignora e não processa mensagens de origens não confiáveis.
        }   

        // Console
        console.log("Recebendo Mensagens...")
    })

    // Resize da tela, update...
    window.addEventListener("resize", function() {
        console.log("Resize foi disparado...")
    });

    window.addEventListener('popstate', (event) => {
        // 1. Log visual para confirmar a intercepção
        console.log("↩️ Navegação detectada: Sincronizando sistema via Reload...");

        // 2. O comando que simula o F5
        // O parâmetro 'true' (opcional) força o recarregamento do servidor, não do cache.
        window.location.reload();
    });

})()