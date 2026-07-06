//Importando Funções
//import { alteraAlturaIframe } from './1-iframe-propriedades.js';
//import { varsEnvironment } from './2-variaveis-de-ambiente.js';
//import { goTochat, turnOFFDrop } from './3-starts-op.js';
//import { startsOp, endsOp } from './3-starts-op.js';
//import { closeHideMenu } from './6-menu-oculto.js';
//import { roteadorURL } from './7-roteamento-urls.js';

//Function IIFE DOM Document
(function(win, doc){
    'use strict';

    //Habilitando prints no console;
    const statusConsole = sessionStorage.getItem("statusConsole") === 'true';

    // Permite pausar a execução do código de forma assíncrona (Excelente para efeitos de Loading/UX)
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
    async function declaraBtnsINDEX(stats) {

        // Declarando Botão OpenMenu
        let btnOpenMenu = document.querySelector(".open-menu")

        // Declarando Botões Principais HEADER com Menu Oculto
        let btnOcultoHOME = document.querySelector("#menu-oculto-home")
        let btnOcultoTRANSFER = document.querySelector("#menu-oculto-trans")
        let btnOcultoVIAGENS = document.querySelector("#menu-oculto-viagens")
        let btnOcultoPACOTES = document.querySelector("#menu-oculto-pacotes")
        let btnOcultoPASSAGENS = document.querySelector("#menu-oculto-passagens")
        let btnCloseMenu = document.querySelector("#btn-close-menu");

        // Declarando Botões Principais HEADER com NavBar
        let btnHeaderHOME = document.querySelector(".navbar-link-home")
        let btnHeaderTRANSFER = document.querySelector(".navbar-link-transfer")
        let btnHeaderVIAGENS = document.querySelector(".navbar-link-viagens")
        let btnHeaderPACOTES = document.querySelector(".navbar-link-pacotes")
        let btnHeaderPASSAGENS = document.querySelector(".navbar-link-passagens")
        let btnHeaderContato = document.querySelector(".header-link-whats");

        // Verificando se foi iniciado com botão OpenMenu ou NavBar
        let isOpenMenuVisible = window.getComputedStyle(btnOpenMenu).display !== "none";
        if (isOpenMenuVisible) {
            console.log("Botão Open Menu Visible")

            // Declarando Menu Oculto
            let menuMobileContainer = document.querySelector("#menu-mobile-container");
            menuMobileContainer.inert = true;

            // 🛡️ TRAVA DE SEGURANÇA INTERNA:
            if (stats === 'start') {
                btnOcultoHOME.classList.add("disabled-link");
            }

            // HOME, link ancora página de conteúdo principal
            if(btnOcultoHOME) {
                btnOcultoHOME.addEventListener("click", async function (event) {
                    event.preventDefault();

                    console.log("Botão Oculto Home ativado...")

                    // Remove o estado ativo (Painel desliza para fora da tela)
                    menuMobileContainer.classList.remove("active");
                    
                    // 🔒 ACESSIBILIDADE MODERNA: Devolve o inert (tranca o foco e esconde o elemento)
                    menuMobileContainer.inert = true;

                    // 🎯 UX SÊNIOR: Devolve o foco para o botão hambúrguer que originou o clique
                    btnOpenMenu.focus();

                    // Caminho fixo do arquivo e a identificação da rota
                    const destino = 'assets/01-HTML/home.html';
                    const pathUrl = 'home';

                    try {
                        // 1. Inicia o feedback visual premium de carregamento
                        await animarBarraProgresso('start');
                        
                        // O "Level de Espera" artificial para manter a identidade visual fluida
                        await delay(300); 

                        // 2. AÇÃO PRINCIPAL: Busca e reinjeta o conteúdo da HOME no container principal
                        console.log(`\nIniciando injeção assíncrona de: ${destino}`);
                        await carregarPagina(destino);

                        // Declarando Botões HOME;
                        await declaraBtnsHOME();

                        // Executa o reset de coordenadas instantaneamente assim que o DOM estiver pronto
                        window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "instant" // Usa "instant" para evitar aquele deslize visual feio no reload
                        });
                        
                        // 3. Finaliza a animação da barra com sucesso
                        await animarBarraProgresso('end');

                        // 🔒 ATIVA A TRAVA NA HOME: Trava todos os botões da Home para evitar cliques redundantes
                        let btnFooterHOME = document.querySelector(".footer-link-home")
                        let linkFooterPol = document.querySelector(".footer-link-politica");
                        btnHeaderHOME.classList.add("disabled-link");
                        btnOcultoHOME.classList.add("disabled-link");
                        btnFooterHOME.classList.add("disabled-link");
                        linkFooterPol.classList.remove("disabled-link");

                        // 4. Gerenciamento inteligente de Roteamento / Histórico da URL
                        const env = sessionStorage.getItem("proEnvironment");
                        let finalUrl = env === "-1" ? `#${pathUrl}` : (env === "0" ? pathUrl : `?p=${pathUrl}`);
                        
                        window.history.pushState(
                            { pagina: pathUrl }, 
                            pathUrl.charAt(0).toUpperCase() + pathUrl.slice(1), 
                            finalUrl
                        );
                        
                        // 5. Blindagem e Reset Absoluto do Scroll no Topo
                        if ('scrollRestoration' in history) {
                            history.scrollRestoration = 'manual';
                        }

                        console.log(`Navegação concluída com sucesso para: ${pathUrl}`);

                    } catch (error) {
                        // Em caso de falha, encerra a barra de progresso para não travar a UI
                        await animarBarraProgresso('end'); 
                        console.error("Erro crítico na transição para a Home:", error);
                    }
                })
            }

            if (btnOpenMenu) {
                btnOpenMenu.addEventListener("click", async function (event) {
                    
                    // Ativa o visual e libera os cliques (CSS Switch)
                    menuMobileContainer.classList.add("active");

                    // 🔓 ACESSIBILIDADE MODERNA: Remove o inert para liberar o foco e a leitura
                    menuMobileContainer.inert = false;

                    // 🎯 UX SÊNIOR: Joga o foco automaticamente para o botão de fechar ao abrir
                    if (btnCloseMenu) btnCloseMenu.focus();
                })
            }

            // 🎛️ GATILHO 2: FECHAR O MENU (Se o botão de fechar existir)
            if (btnCloseMenu) {
                btnCloseMenu.addEventListener("click", function () {
                    
                    // Remove o estado ativo (Painel desliza para fora da tela)
                    menuMobileContainer.classList.remove("active");
                    
                    // 🔒 ACESSIBILIDADE MODERNA: Devolve o inert (tranca o foco e esconde o elemento)
                    menuMobileContainer.inert = true;

                    // 🎯 UX SÊNIOR: Devolve o foco para o botão hambúrguer que originou o clique
                    btnOpenMenu.focus();
                });
            }

            // TRANSFER, link página de serviço
            if(btnOcultoTRANSFER) {
                btnOcultoTRANSFER.addEventListener("click", async function (event) {
                    event.preventDefault();
                    window.alert("Transfer Aeroporto, página está sendo preparada, vote mais tarde...")
                })
            }

            // VIAGENS, link página de serviço
            if(btnOcultoVIAGENS) {
                btnOcultoVIAGENS.addEventListener("click", async function (event) {
                    event.preventDefault();
                    window.alert("Viagens Executivas, página está sendo preparada, volte mais tarde...")
                })
            }

            // PACOTES, link página de serviço
            if(btnOcultoPACOTES) {
                btnOcultoPACOTES.addEventListener("click", async function (event) {
                    event.preventDefault();
                    window.alert("Pacotes Turísticos, página está sendo preparada, volte mais tarde...")
                })
            }

            // PASSAGENS, link página de serviço
            if(btnOcultoPASSAGENS) {
                btnOcultoPASSAGENS.addEventListener("click", async function (event) {
                    event.preventDefault();
                    window.alert("Passagens Aéreas, página está sendo preparada, volte mais tarde...")
                })
            }

        } else {
            console.log("NavBar Visible")

            // 🛡️ TRAVA DE SEGURANÇA INTERNA:
            if (stats === 'start') {
                btnHeaderHOME.classList.add("disabled-link");
                //btnFooterHOME.classList.add("disabled-link");
            }

            // HOME, link ancora página de conteúdo principal
            if(btnHeaderHOME) {
                btnHeaderHOME.addEventListener("click", async function (event) {
                    event.preventDefault();

                    // Caminho fixo do arquivo e a identificação da rota
                    const destino = 'assets/01-HTML/home.html';
                    const pathUrl = 'home';

                    try {
                        // 1. Inicia o feedback visual premium de carregamento
                        await animarBarraProgresso('start');
                        
                        // O "Level de Espera" artificial para manter a identidade visual fluida
                        await delay(300); 

                        // 2. AÇÃO PRINCIPAL: Busca e reinjeta o conteúdo da HOME no container principal
                        console.log(`\nIniciando injeção assíncrona de: ${destino}`);
                        await carregarPagina(destino);

                        // Declarando Botões HOME;
                        await declaraBtnsHOME();

                        // Executa o reset de coordenadas instantaneamente assim que o DOM estiver pronto
                        window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "instant" // Usa "instant" para evitar aquele deslize visual feio no reload
                        });
                        
                        // 3. Finaliza a animação da barra com sucesso
                        await animarBarraProgresso('end');

                        // 🔒 ATIVA A TRAVA NA HOME: Trava todos os botões da Home para evitar cliques redundantes
                        let btnFooterHOME = document.querySelector(".footer-link-home")
                        let linkFooterPol = document.querySelector(".footer-link-politica");
                        btnHeaderHOME.classList.add("disabled-link");
                        btnFooterHOME.classList.add("disabled-link");
                        linkFooterPol.classList.remove("disabled-link");

                        // 4. Gerenciamento inteligente de Roteamento / Histórico da URL
                        const env = sessionStorage.getItem("proEnvironment");
                        let finalUrl = env === "-1" ? `#${pathUrl}` : (env === "0" ? pathUrl : `?p=${pathUrl}`);
                        
                        window.history.pushState(
                            { pagina: pathUrl }, 
                            pathUrl.charAt(0).toUpperCase() + pathUrl.slice(1), 
                            finalUrl
                        );
                        
                        // 5. Blindagem e Reset Absoluto do Scroll no Topo
                        if ('scrollRestoration' in history) {
                            history.scrollRestoration = 'manual';
                        }

                        console.log(`Navegação concluída com sucesso para: ${pathUrl}`);

                    } catch (error) {
                        // Em caso de falha, encerra a barra de progresso para não travar a UI
                        await animarBarraProgresso('end'); 
                        console.error("Erro crítico na transição para a Home:", error);
                    }
                })
            }

            // TRANSFER, link página de serviço
            if(btnHeaderTRANSFER) {
                btnHeaderTRANSFER.addEventListener("click", async function (event) {
                    event.preventDefault();
                    window.alert("Transfer Aeroporto, página está sendo preparada, vote mais tarde...")
                })
            }

            // VIAGENS, link página de serviço
            if(btnHeaderVIAGENS) {
                btnHeaderVIAGENS.addEventListener("click", async function (event) {
                    event.preventDefault();
                    window.alert("Viagens Executivas, página está sendo preparada, volte mais tarde...")
                })
            }

            // PACOTES, link página de serviço
            if(btnHeaderPACOTES) {
                btnHeaderPACOTES.addEventListener("click", async function (event) {
                    event.preventDefault();
                    window.alert("Pacotes Turísticos, página está sendo preparada, volte mais tarde...")
                })
            }

            // PASSAGENS, link página de serviço
            if(btnHeaderPASSAGENS) {
                btnHeaderPASSAGENS.addEventListener("click", async function (event) {
                    event.preventDefault();
                    window.alert("Passagens Aéreas, página está sendo preparada, volte mais tarde...")
                })
            }

            // Click Botão Header Whatsapp
            if (btnHeaderContato) {
                btnHeaderContato.addEventListener("click", function (event) {
                    event.preventDefault(); // Evita qualquer comportamento padrão do HTML

                    // Busca a Seção do Instagram pelo ID que está lá no arquivo HOME
                    let targetAgendamento = document.querySelector("#section-agendamento");
                    
                    if (targetAgendamento) {
                        // Executa o scroll suave que você já validou nas versões antigas!
                        const headerHeight = 110;
                        const elementPosition = targetAgendamento.getBoundingClientRect().top + window.pageYOffset;
                        const offsetPosition = elementPosition - headerHeight;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: "smooth"
                        });

                        console.log("Scroll ajustado com offset do Header executado.");
                    } else {
                        console.log("Seção #section-agendamento não encontrada dentro do container.");
                    }
                });
            }
        }
    }

    // Ativa Botões quando for página HOME;
    async function declaraBtnsHOME() {
        
        //Click botão Main CTA
        let btnMainCta = document.querySelector(".main-btn")
        if(btnMainCta) {
            btnMainCta.addEventListener("click", async function(event) {
                //window.alert("Botão Main CTA, redirecionar para whats...")

                // Link oficial da API do WhatsApp com o número e mensagem padrão do cliente
                // Substitua pelo número e texto real configurado na produção!
                const whatsappUrl = "https://wa.me/5541991495750?text=Seja%20bem-vindo(a)%20a%20RG%20Transporte%20Executivo.%20Fa%C3%A7a%20suas%20cota%C3%A7%C3%B5es";

                // Abre em uma nova aba garantindo a segurança do navegador contra invasão de contexto
                window.open(whatsappUrl, "_blank", "noopener,noreferrer");
            })
        }

        //Click botão AGENDAMENTO
        let btnAGENDAMENTO = document.querySelector(".sa-btn")
        if(btnAGENDAMENTO) {
            btnAGENDAMENTO.addEventListener("click", async function(event) {
                //window.alert("Botão Agendamento, redirecionar para whats...")

                // Link oficial da API do WhatsApp com o número e mensagem padrão do cliente
                // Substitua pelo número e texto real configurado na produção!
                const whatsappUrl = "https://wa.me/5541991495750?text=Seja%20bem-vindo(a)%20a%20RG%20Transporte%20Executivo.%20Fa%C3%A7a%20suas%20cota%C3%A7%C3%B5es";

                // Abre em uma nova aba garantindo a segurança do navegador contra invasão de contexto
                window.open(whatsappUrl, "_blank", "noopener,noreferrer");
            })
        }
    }

    // Ativa Botões FOOTER
    async function declaraBtnsFOOTER(stats) {
        // Ativando Recursos FOOTER
        // Declarando Botões Principais FOOTER
        let btnFooterHOME = document.querySelector(".footer-link-home")
        let btnFooterAGENDAMENTO = document.querySelector(".footer-link-agendamento")
        let btnFooterTRANSFER = document.querySelector(".footer-link-transfer")
        let btnFooterVIAGENS = document.querySelector(".footer-link-viagens")
        let btnFooterPACOTES = document.querySelector(".footer-link-pacotes")
        let btnFooterPASSAGENS = document.querySelector(".footer-link-passagens")
        let linkFooterPol = document.querySelector(".footer-link-politica");

        // 🛡️ TRAVA DE SEGURANÇA INTERNA:
            if (stats === 'start') {
                btnFooterHOME.classList.add("disabled-link");
            }

        // HOME, link ancora página de conteúdo principal
        if(btnFooterHOME) {
            btnFooterHOME.addEventListener("click", async function (event) {
                event.preventDefault();
                
                // 🛡️ TRAVA DE SEGURANÇA INTERNA: Se um dos botões estiver travado, assume que o usuário já está na Home
                if (btnFooterHOME.classList.contains("disabled-home-link")) {
                    console.log("Ação bloqueada: O usuário já está visualizando a página Home.");
                    return; // Mata a execução do script imediatamente aqui
                }

                // Caminho fixo do arquivo e a identificação da rota
                const destino = 'assets/01-HTML/home.html';
                const pathUrl = 'home';

                try {
                    // 1. Inicia o feedback visual premium de carregamento
                    await animarBarraProgresso('start');
                    
                    // O "Level de Espera" artificial para manter a identidade visual fluida
                    await delay(300); 

                    // 2. AÇÃO PRINCIPAL: Busca e reinjeta o conteúdo da HOME no container principal
                    console.log(`\nIniciando injeção assíncrona de: ${destino}`);
                    await carregarPagina(destino);

                    // Declarando Botões HOME;
                    await declaraBtnsHOME();

                    // Executa o reset de coordenadas instantaneamente assim que o DOM estiver pronto
                    window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "instant" // Usa "instant" para evitar aquele deslize visual feio no reload
                    });
                    
                    // 3. Finaliza a animação da barra com sucesso
                    await animarBarraProgresso('end');

                    // 🔒 ATIVA A TRAVA NA HOME: Trava todos os botões da Home para evitar cliques redundantes
                    let btnOcultoHOME = document.querySelector("#menu-oculto-home")
                    let btnHeaderHOME = document.querySelector(".navbar-link-home")
                    btnHeaderHOME.classList.add("disabled-link");
                    btnOcultoHOME.classList.add("disabled-link");
                    btnFooterHOME.classList.add("disabled-link");
                    linkFooterPol.classList.remove("disabled-link");

                    // 4. Gerenciamento inteligente de Roteamento / Histórico da URL
                    const env = sessionStorage.getItem("proEnvironment");
                    let finalUrl = env === "-1" ? `#${pathUrl}` : (env === "0" ? pathUrl : `?p=${pathUrl}`);
                    
                    window.history.pushState(
                        { pagina: pathUrl }, 
                        pathUrl.charAt(0).toUpperCase() + pathUrl.slice(1), 
                        finalUrl
                    );
                    
                    // 5. Blindagem e Reset Absoluto do Scroll no Topo
                    if ('scrollRestoration' in history) {
                        history.scrollRestoration = 'manual';
                    }

                    console.log(`Navegação concluída com sucesso para: ${pathUrl}`);

                } catch (error) {
                    // Em caso de falha, encerra a barra de progresso para não travar a UI
                    await animarBarraProgresso('end'); 
                    console.error("Erro crítico na transição para a Home:", error);
                }
            })
        }

        // AGENDAMENTO, link ancora página de informação
        if(btnFooterAGENDAMENTO) {
            btnFooterAGENDAMENTO.addEventListener("click", async function (event) {
                event.preventDefault();
                window.alert("Agendamento, página está sendo preparada, volte mais tarde...")
            })
        }

        // TRANSFER, link ancora página de informação
        if(btnFooterTRANSFER) {
            btnFooterTRANSFER.addEventListener("click", async function (event) {
                event.preventDefault();
                window.alert("Transfer Aeroporto, página está sendo preparada, volte mais tarde...")
            })
        }

        // VIAGENS, link ancora página de informação
        if(btnFooterVIAGENS) {
            btnFooterVIAGENS.addEventListener("click", async function (event) {
                event.preventDefault();
                window.alert("Viagens Executivas, página está sendo preparada, volte mais tarde...")
            })
        }

        // PACOTES, link ancora página de informação
        if(btnFooterPACOTES) {
            btnFooterPACOTES.addEventListener("click", async function (event) {
                event.preventDefault();
                window.alert("Pacotes Turísticos, página está sendo preparada, volte mais tarde...")
            })
        }

        // PASSAGENS, link ancora página de informação
        if(btnFooterPASSAGENS) {
            btnFooterPASSAGENS.addEventListener("click", async function (event) {
                event.preventDefault();
                window.alert("Passagens Aéreas, página está sendo preparada, volte mais tarde...")
            })
        }

        // Ativa Link de Política e Privacidade no INDEX 
        const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
        if (linkFooterPol) {
            linkFooterPol.addEventListener("click", async function (event) {
                event.preventDefault(); // Evita que o navegador recarregue a página inteira

                // Caminho fixo do arquivo e a identificação da rota
                const destino = 'assets/01-HTML/politica.html';
                const pathUrl = 'politica';

                try {
                    // 1. Inicia o feedback visual premium de carregamento
                    await animarBarraProgresso('start');
                    
                    // O "Level de Espera" artificial para o usuário apreciar o sistema fluir
                    await delay(300); 

                    // 2. AÇÃO PRINCIPAL: Busca e injeta o conteúdo de privacidade no container
                    console.log(`\nIniciando injeção assíncrona de: ${destino}`);
                    await carregarPagina(destino);

                    // 🎯 O SEGREDO ESTÁ AQUI: Executa o preenchimento dos <span> IMEDIATAMENTE após a injeção!
                    console.log("Iniciando preenchimento dinâmico das variáveis da Política...");
                    const dadosMolde = {
                        "empresa-ad": "RG Transporte Executivo",
                        "admin-nome": "Ewerton Santos",
                        "admin-email": "santos.7.ton@gmail.com",
                        "admin-city": "Curitiba",
                        "admin-state": "Paraná"
                    };

                    // Busca os elementos recém-injetados no DOM principal
                    const elementos = document.querySelectorAll("[data-variavel]");
                    elementos.forEach(elemento => {
                        const chave = elemento.getAttribute("data-variavel");
                        if (dadosMolde[chave]) {
                            elemento.textContent = dadosMolde[chave];
                        }
                    });

                    console.log("1. Variáveis aplicadas com sucesso pós-injeção!");

                    // Executa o reset de coordenadas instantaneamente assim que o DOM estiver pronto
                    window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "instant" // Usa "instant" para evitar aquele deslize visual feio no reload
                    });
                    
                    // 3. Finaliza a animação da barra com sucesso
                    await animarBarraProgresso('end');

                    // 🔒 ATIVA A TRAVA VISUAL E LÓGICA: Adiciona a classe que desativa o link
                    let btnOcultoHOME = document.querySelector("#menu-oculto-home")
                    let btnHeaderHOME = document.querySelector(".navbar-link-home")
                    linkFooterPol.classList.add("disabled-link");
                    btnOcultoHOME.classList.remove("disabled-link")
                    btnHeaderHOME.classList.remove("disabled-link");
                    btnFooterHOME.classList.remove("disabled-link");

                    // 4. Gerenciamento inteligente de Roteamento / Histórico da URL
                    const env = sessionStorage.getItem("proEnvironment");
                    let finalUrl = env === "-1" ? `#${pathUrl}` : (env === "0" ? pathUrl : `?p=${pathUrl}`);
                    
                    window.history.pushState(
                        { pagina: pathUrl }, 
                        pathUrl.charAt(0).toUpperCase() + pathUrl.slice(1), 
                        finalUrl
                    );
                    
                    // 5. Joga o scroll para o topo de forma suave após injetar a nova tela
                    //window.scrollTo({ top: 0, behavior: 'smooth' });

                    // Desativa a restauração automática do scroll do navegador
                    if ('scrollRestoration' in history) {
                        history.scrollRestoration = 'manual';
                    }

                    console.log(`Navegação concluída com sucesso para: ${pathUrl}`);

                } catch (error) {
                    // Caso ocorra qualquer erro no fetch, fecha a barra para não travar a tela
                    await animarBarraProgresso('end'); 
                    console.error("Erro crítico na transição de página:", error);
                }
            });
        }  
    }

    //Iniciando DOM - Primeira coisa que deve ser carregado após INDEX.html
    document.addEventListener('DOMContentLoaded', async function() {

        // Desativa a restauração automática do scroll do navegador
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }

        // Executa o reset de coordenadas instantaneamente assim que o DOM estiver pronto
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant" // Usa "instant" para evitar aquele deslize visual feio no reload
        });

        // Full Path;
        console.log("\nFull Path", `${window.location.origin}${baseURL}`)

        // Apache: Expressão regular para identificar o ambiente local e gerenciar as rotas do cliente
        const patternApache = /^http:\/\/(rgtransporteexecutivo\.local|rg\.local)\/.*/;

        //Roteador - Aqui já é possível usar '#adm' ao final para acessar como ADM!
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

        // A PRIMEIRA COISA: Injetar conteúdo HTML na div INDEX
        await carregarPagina('assets/01-HTML/home.html');

        // Declarando Botões INDEX
        await declaraBtnsINDEX('start');

        // Declarando Botões HOME
        await declaraBtnsHOME();

        // Declarando Botões FOOTER
        await declaraBtnsFOOTER('start');

        // Retorna 'mobile' se for menor ou igual a 994, ou 'desktop' se for maior
        let layoutStart = window.innerWidth <= 994 ? 'mobile' : 'desktop';
        console.log("Layout Start: ", layoutStart)
        sessionStorage.setItem("layoutStart", layoutStart);

        //Declarando elementos index (Header - Div_Container - Footer)
        const headerLayout = document.querySelector('header');
        const div_container = document.querySelector('.main-content-injector');
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

    // ⏱️ ENGENHARIA DE CONTROLE: Timer para o efeito Debounce
    let resizeTimer;
    let resizeCredits = true

    // Resize da tela, update...
    window.addEventListener("resize", function() {
        console.log("Resize detectado... Aguardando estabilização.");

        // Limpa o timer anterior se o usuário ainda estiver girando/esticando a tela
        clearTimeout(resizeTimer);

        // Só executa a lógica real 250ms APÓS a tela parar de mudar de tamanho
        resizeTimer = setTimeout(async function() {
            console.log("🚀 Executando atualização de botões após redimensionamento estável!");

            let layoutAfter = window.innerWidth <= 994 ? 'mobile' : 'desktop';
            let layoutStart = sessionStorage.getItem("layoutStart");
            if (layoutAfter === layoutStart) {
                console.log("Layout Permanece igual, nada a fazer...");

                // Aplicando estilo Página Política
                if (window.location.hash === "#politica" || window.location.search.includes("politica") || window.location.pathname.includes("politica")) {
                    console.log("Resize, encontrado página Política, aplicar estilos...")

                    let btnOcultoHOME = document.querySelector("#menu-oculto-home");
                    if (btnOcultoHOME) {
                        btnOcultoHOME.classList.remove("disabled-link");
                    }

                    let btnHeaderHOME = document.querySelector(".navbar-link-home");
                    if (btnHeaderHOME) {
                        btnHeaderHOME.classList.remove("disabled-link");
                    }

                }

                // Aplicando estilo Página HOME
                if (window.location.hash === "#home" || window.location.search.includes("home") || window.location.pathname.includes("home")) {
                    console.log("Resize, encontrado página HOME, aplicar estilos...")

                    let btnOcultoHOME = document.querySelector("#menu-oculto-home");
                    if (btnOcultoHOME) {
                        btnOcultoHOME.classList.add("disabled-link");
                    }

                    let btnHeaderHOME = document.querySelector(".navbar-link-home");
                    if (btnHeaderHOME) {
                        btnHeaderHOME.classList.add("disabled-link");
                    }
                }
                return

            } else {
                console.log("Houve mudança no layout dentro da sessão, usar crédito único para declarar as variáveis")

                // Declarando Botões INDEX;
                if (resizeCredits === true) {
                    await declaraBtnsINDEX('start');
                    console.log("Deve rodar apenas uma vez...");
                    resizeCredits = false;
                } else {
                    console.log("Todos os layouts já estão ativados!!!")
                }

                // Aplicando estilo Página Política
                if (window.location.hash === "#politica" || window.location.search.includes("politica") || window.location.pathname.includes("politica")) {
                    console.log("Resize, encontrado página Política, aplicar estilos...")

                    let btnOcultoHOME = document.querySelector("#menu-oculto-home");
                    if (btnOcultoHOME) {
                        btnOcultoHOME.classList.remove("disabled-link");
                    }

                    let btnHeaderHOME = document.querySelector(".navbar-link-home");
                    if (btnHeaderHOME) {
                        btnHeaderHOME.classList.remove("disabled-link");
                    }

                }

                // Aplicando estilo Página HOME
                if (window.location.hash === "#home" || window.location.search.includes("home") || window.location.pathname.includes("home")) {
                    console.log("Resize, encontrado página HOME, aplicar estilos...")

                    let btnOcultoHOME = document.querySelector("#menu-oculto-home");
                    if (btnOcultoHOME) {
                        btnOcultoHOME.classList.add("disabled-link");
                    }

                    let btnHeaderHOME = document.querySelector(".navbar-link-home");
                    if (btnHeaderHOME) {
                        btnHeaderHOME.classList.add("disabled-link");
                    }
                }

            }
            
        }, 250); // 250 milissegundos é o tempo perfeito de resposta sem engasgar
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