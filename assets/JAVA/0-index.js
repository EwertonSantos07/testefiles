//Importando Funções
//import {alteraAlturaIframe} from './1-propriedades-iframe.js';
//import {varsEnvironment} from './2-variaveis-ambientes.js';
//import {startOperations, scrollScreenTopic, openBlankPage, homeStartActions, endsOp, turnOFFDrop} from './3-start-operations.js';
//import {abaHome} from './4-abas-stilos.js';
//import {roteadorURL} from './roteamento-links.js';
//import {closeHideMenu} from './6-menu-oculto.js';


//Function IIFE DOM Document
(function(win, doc){
    'use strict';

    //Habilitando prints no console;
    const statusConsole = sessionStorage.getItem("statusConsole") === 'true';

    // Ativa Botões INDEX;
    async function declaraBtnsINDEX() {

        // Click Botão Header Start
        let btnHeaderStart = document.querySelector(".header-btn-start");
        console.log(btnHeaderStart)
        if (btnHeaderStart) {
            btnHeaderStart.addEventListener("click", function (event) {
                event.preventDefault(); // Evita qualquer comportamento padrão do HTML

                // Busca a Seção do Instagram pelo ID que está lá no arquivo HOME
                let targetFirstSection = document.querySelector("#Engenharia-da-conversao");
                
                if (targetFirstSection) {
                    // Executa o scroll suave que você já validou nas versões antigas!
                    //const headerHeight = -225;
                    //const elementPosition = targetFirstSection.getBoundingClientRect().top + window.pageYOffset;
                    //const offsetPosition = elementPosition - headerHeight;

                    targetFirstSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                    console.log("Scroll ajustado com offset do Header executado.");
                } else {
                    console.log("Seção #secao-instagram não encontrada dentro do container.");
                }
            });
        }

        //Footer Click Topo
        let FootClickTopo = document.querySelector(".footer-btn-topo");
        console.log(FootClickTopo);
        if(FootClickTopo) {
            FootClickTopo.addEventListener("click", async function (event) {
                event.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                console.log("Página retornada ao topo!")
            })
        }

        //Click Link Política - Footer;
        let FooterClickPol = document.querySelector(".footer-btn-politica");
        console.log(FooterClickPol)
        //const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
        if (FooterClickPol) {
            FooterClickPol.addEventListener("click", async function (event) {
                event.preventDefault();
                
                // Pega o href do próprio elemento ou define a URL diretamente
                const targetUrl = "https://docs.google.com/document/d/1BJ07Xd0wGR3mPj4EQF-_rDuoa4ZGYqAIFNtdwCPJcok/edit?usp=sharing"

                // Abrindo link da política & privacidade, cookies
                window.open(targetUrl, "_blank", "noopener,noreferrer");

            });
        }

        //Click Link Feedback - Footer
        let FooterClickFeed = document.querySelector(".footer-btn-feedback");
        console.log(FooterClickFeed)
        //const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
        if (FooterClickFeed) {
            FooterClickFeed.addEventListener("click", async function (event) {
                event.preventDefault();
                
                // Pega o href do próprio elemento ou define a URL diretamente
                const targetUrl = ""

                window.alert("</> Página em construção </>")

                // Abrindo link da política & privacidade, cookies
                //window.open(targetUrl, "_blank", "noopener,noreferrer");

            });
        }

        // Output operação em fila
        console.log("Botões INDEX ativados!")
    }

    // Função para Injetar conteúdo HTML na div INDEX;
    async function carregarPagina(url) {
        const container = document.getElementById('main-content');
        try {
            const response = await fetch(url);
            const html = await response.text();
            container.innerHTML = html;
            console.log("Página Home Carregada!!!");
        } catch (error) {
            container.innerHTML = "<p>Erro ao carregar conteúdo.</p>";
        }
    }

    // Ativa Botões página HOME;
    async function declaraBtnsHOME() {

        //Click botão Main CTA
        let btnMain = document.querySelector(".btn-main")
        console.log(btnMain)
        if(btnMain) {
            btnMain.addEventListener("click", async function(event) {
                event.preventDefault()

                // Define a URL diretamente
                const targetUrl = "https://wa.me/5541998266060"

                // Abrindo link whatsapp
                window.open(targetUrl, "_blank", "noopener,noreferrer");
            })
        }

        // Click Botão avançar seção four
        let btnAvancar = document.querySelector(".btn-sec-four");
        console.log(btnAvancar)
        if (btnAvancar) {
            btnAvancar.addEventListener("click", function (event) {
                event.preventDefault();
                
                let targetSection = document.querySelector(".conversion-section");
                
                if (targetSection) {
                    // Rola suavemente centralizando a seção de conversão na tela
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });
                }
            });
        }

        //Click botão Orçamento
        let btnOrc = document.querySelector(".btn-orc")
        console.log(btnOrc)
        if(btnOrc) {
            btnOrc.addEventListener("click", async function(event) {
                event.preventDefault()

                // Define a URL diretamente
                const targetUrl = "https://wa.me/5541998266060?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20meu%20site"

                // Abrindo link whatsapp
                window.open(targetUrl, "_blank", "noopener,noreferrer");
            })
        }


        console.log("Botões HOME ativados!")
    }

    //Iniciando DOM - Primeira coisa que deve ser carregado após INDEX.html
    document.addEventListener('DOMContentLoaded', async () => {

        // Full Path;
        console.log("\nFull Path", `${window.location.origin}${baseURL}`)

        // Apache Variável para Roteador - Atualizar após o desenvolvimento, se necessário
        const patternApache = /^http:\/\/(businesscoding\.local|bc\.local)\/.*/;
        
        //Roteador
        if(sessionStorage.getItem("statusConsole") === 'true') {
            history.pushState({ Page: 'home' }, 'Home', `${window.location.origin}${baseURL}#home`);
            if(window.location.origin == "http://127.0.0.1:5500") {
                console.log("LiveServer Environment", window.history.state);
            } else if(patternApache.test(`${window.location.origin}${window.location.pathname}`)) {
                console.log("Apache Environment", window.history.state);
            } else {
                console.log("Produção Environment", window.history.state);
            }
        }

        // Declarando Botões INDEX;
        await declaraBtnsINDEX();

        // A PRIMEIRA COISA: Injetar conteúdo HTML na div INDEX;
        await carregarPagina('assets/HTML/home.html');

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

    // Função para rodar scripts em segundo plano
    const executarTarefasPosCarregamento = async () => {
        console.log("⚙️ Loading tasks: Iniciando processamento em segundo plano...");

        const header = document.querySelector('header');
        const targetSection = document.querySelector('.conversion-section');

        if (!header || !targetSection) return;

        // Configuração do Observador de Interseção
        const observerOptions = {
            root: null,          // Monitora em relação à tela (viewport)
            rootMargin: '0px',
            threshold: 0.66      // Gatilho: Quando 35% da seção de conversão estiver visível na tela
        };

        const headerObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // Se a seção de conversão entrar no centro/área visível da tela
                if (entry.isIntersecting) {
                    header.classList.add('header-hidden');
                } else {
                    header.classList.remove('header-hidden');
                }
            });
        }, observerOptions);

        // Inicia o monitoramento da seção final
        headerObserver.observe(targetSection);
        console.log("Observação HEADER ativo")
        // Coloque aqui o que deve rodar por último, como Analytics extras ou animações de entrada
    };

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

    // Botão VOLTAR do navegador
    window.addEventListener('popstate', (event) => {
        // 1. Log visual para confirmar a intercepção
        console.log("↩️ Navegação detectada: Sincronizando sistema via Reload...");

        // 2. O comando que simula o F5
        // O parâmetro 'true' (opcional) força o recarregamento do servidor, não do cache.
        window.location.reload();
    });

    

})()


// OBS: Código para animação da barra de loading, quando necessário
//let textoAtual = linkFooterPol.innerText.trim().toUpperCase();
                //let destino = (textoAtual === "POLÍTICA DE PRIVACIDADE") ? 'assets/HTML/politica.html' : 'assets/HTML/home.html';
                //let pathUrl = (textoAtual === "POLÍTICA DE PRIVACIDADE") ? "politica" : "home";
                //let novoTexto = (textoAtual === "POLÍTICA DE PRIVACIDADE") ? "Voltar para Home" : "Política de Privacidade";

                //try {
                    // --- INÍCIO DA MÁGICA ---
                    //await animarBarraProgresso('start');
                    
                    // O "Level de Espera" artificial para o usuário apreciar o sistema
                    //await delay(400); 

                    // AÇÃO PRINCIPAL: Busca e injeta o conteúdo
                    //console.log("\n")
                    //await carregarPagina(destino);
                    
                    //if (destino === 'assets/HTML/home.html') {
                        //await declaraBtnsHOME();
                    //}

                    // --- FINALIZAÇÃO DA BARRA ---
                    //await animarBarraProgresso('end');

                    // Atualiza UI e Roteador
                    //linkFooterPol.innerText = novoTexto;
                    //const env = sessionStorage.getItem("proEnvironment");
                    //let finalUrl = env === "-1" ? `#${pathUrl}` : (env === "0" ? pathUrl : `?p=${pathUrl}`);
                    
                    //window.history.pushState({ pagina: pathUrl }, pathUrl.charAt(0).toUpperCase() + pathUrl.slice(1), finalUrl);
                    //window.scrollTo({ top: 0, behavior: 'smooth' });

                    //console.log(`Navegação concluída para: ${pathUrl}`);
                    //console.log("Page:", window.history.state);

                //} catch (error) {
                    //await animarBarraProgresso('end'); // Fecha a barra mesmo em erro
                    //console.error("Erro na transição:", error);
                //}



 // Controle da Barra de Progresso Superior
    // async function animarBarraProgresso(status) {
    //     const barContainer = document.getElementById('progress-bar-container');
    //     const bar = document.getElementById('progress-bar');

    //     if (status === 'start') {
    //         barContainer.style.display = 'block'; // Garante que o trilho apareça
    //         bar.style.opacity = '1';
    //         bar.style.width = '0%';
            
    //         // Pulo inicial para dar sensação de resposta imediata
    //         setTimeout(() => { bar.style.width = '35%'; }, 10);
            
    //         // Caminhada lenta (simulando carregamento em background)
    //         setTimeout(() => { bar.style.width = '70%'; }, 200);
            
    //     } else if (status === 'end') {
    //         // Dispara para o final
    //         bar.style.width = '100%';
            
    //         // Aguarda a transição do CSS terminar e limpa a barra
    //         await delay(400); 
    //         bar.style.opacity = '0';
            
    //         await delay(300); // Tempo para o fade-out
    //         bar.style.width = '0%';
    //     }
    // }