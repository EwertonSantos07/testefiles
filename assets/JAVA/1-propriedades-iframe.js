//Função para ajustar altura do iframe
export async function alteraAlturaIframe() {
    return new Promise((resolve) => {
        let iframe = document.querySelector(".main-iframe");
        let iframeDoc = iframe.contentWindow.document
        resolve(iframeDoc);
        setTimeout(() => {
            const statusIframeLoad = iframe.contentWindow.document.readyState === 'complete';
            if(statusIframeLoad === true) {
                const contentHeight = iframeDoc.documentElement.scrollHeight;
                const contentHeight2 = iframe.contentWindow.document.body.clientHeight;
                iframe.style.height = contentHeight2 + "px";
                
                if(sessionStorage.getItem("statusConsole") === 'true') {
                    console.log(contentHeight)
                    console.log(contentHeight2)
                }
            }
        }, 750)
    })
}

//Função para atualizar documentação do iframe
export async function atualizaIframe(path, pagina) {
    return new Promise((resolve) => {
        let iframe = document.querySelector(".main-iframe");
        iframe.src = path; 

        // Adiciona uma nova entrada ao histórico do documento pai
        //history.pushState({ iframePage: pagina }, pagina, `#${pagina}`);

        if (iframe) {
            iframe.onload = function(){
                if(sessionStorage.getItem("statusConsole") === 'true') {
                    console.log(iframe.src, "Novo DOM");
                }
                let statusResult = "iFrame foi atualizado";
                resolve(statusResult);
            }
        }
    })
}