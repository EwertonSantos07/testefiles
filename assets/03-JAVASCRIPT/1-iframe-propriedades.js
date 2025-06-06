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
                console.log(contentHeight)
                console.log(contentHeight2)
            }
        }, 750)
    })
}

//Função para atualizar documentação do iframe
export async function atualizaIframe(path) {
    return new Promise((resolve) => {
        let iframe = document.querySelector(".main-iframe");
        iframe.src = path; 
        if (iframe) {
            console.log(iframe.src, "Novo Dom")
            iframe.onload = function(){
                resolve(iframe);
            }
        }
    })
}