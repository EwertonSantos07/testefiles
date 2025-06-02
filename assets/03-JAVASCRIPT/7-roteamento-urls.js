//Função para rotear links e alterar estados da url
export async function roteadorURL(keyValue, pathURL) {
    return new Promise((resolve) => {

        //Infos de origem, diretórios
        // const origemDir = window.location.origin; //Domínio
        // let pathAtual = window.location.pathname; //Pasta Atual
        // console.log(origemDir, "Domínio");
        // console.log(pathAtual, "Diretório Atual");

        //Redirecionando de acordo com a chave da operação
        if(keyValue == 0) {

            //Atualizando url navegador ao iniciar site ou atualizar página
            if(pathURL == "/RG-transporte-executivo/") {
                const homeUrl = `${window.location.pathname}home`;
                const newState = {page: 'home'};
                const newTitle = 'home';
                window.history.pushState(newState, newTitle, homeUrl);
                console.log("Site foi atualizado com url padrão!!!")
            } else {
                const homeUrl = "/RG-transporte-executivo/home";
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