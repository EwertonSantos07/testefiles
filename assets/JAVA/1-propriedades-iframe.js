//Função para ajustar altura do iframe
export async function alteraAlturaIframe() {
    return new Promise((resolve) => {
        let iframe = document.querySelector(".main-iframe");
        
        setTimeout(() => {
            const iframeDoc = iframe.contentWindow.document;
            if (iframeDoc && iframeDoc.body) {
                //scrollHeight pega a altura total do conteúdo interno
                const contentHeight = iframeDoc.documentElement.scrollHeight || iframeDoc.body.scrollHeight;
                
                // Remova restrições de flex se houver, para o height manual funcionar
                iframe.style.flex = "none"; 
                iframe.style.height = contentHeight + "px";
                
                resolve("Altura Ajustada: " + contentHeight + "px");
            }
        }, 800); // Um pouquinho mais de tempo para garantir o carregamento do DOM interno
    });
}

//Função para atualizar documentação do iframe
//export async function atualizaIframe(path, pagina) {
    //return new Promise((resolve) => {
        //let iframe = document.querySelector(".main-iframe");
        //iframe.src = path; 

        // Adiciona uma nova entrada ao histórico do documento pai
        //history.pushState({ iframePage: pagina }, pagina, `#${pagina}`);

        //if (iframe) {
            //iframe.onload = function(){
                //if(sessionStorage.getItem("statusConsole") === 'true') {
                    //console.log(iframe.src, "Novo DOM");
                //}
                //let statusResult = "iFrame foi atualizado";
                //resolve(statusResult);
            //}
        //}
    //})
//}