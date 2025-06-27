//Função para rotear links e alterar estados da url
export async function roteadorURL(keyValue, pathURL) {
    return new Promise((resolve) => {

        //Infos de origem, diretórios
        // const origemDir = window.location.origin; //Domínio
        // let pathAtual = window.location.pathname; //Pasta Atual
        // console.log(origemDir, "Domínio");
        // console.log(pathAtual, "Diretório Atual");

        //console.log(window.location.origin);
        //console.log(window.location.pathname);
        // Cria uma entrada inicial no histórico do documento pai
        //history.replaceState({ iframePage: 'home' }, 'Home', 'home');
        //console.log(window.history.state)

        //Redirecionando de acordo com a chave da operação
        if(keyValue == 0) {
                
            //Atualizando url navegador ao iniciar site ou atualizar página
            if(pathURL == "/criacao-de-sites/") {
                
                const homeUrl = "/criacao-de-sites/home";
                const newState = {page: 'home'};
                const newTitle = 'home';
                window.history.replaceState(newState, newTitle, homeUrl);
                console.log("Site foi atualizado com url padrão!!!");
            } else {
                const homeUrl = "/criacao-de-sites/home";
                const newState = {page: 'home'};
                const newTitle = 'home';
                window.history.pushState(newState, newTitle, homeUrl);
                console.log("Site foi atualizado com url diferente do inicial!");
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

        resolve(window.history.state, "Page");
    })
}