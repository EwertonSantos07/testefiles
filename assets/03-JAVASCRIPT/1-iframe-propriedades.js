//Função para ajustar altura do iframe
export async function alteraAlturaIframe() {
    return new Promise((resolve) => {
        let iframe = document.querySelector(".main-iframe");
        iframe.style.height = "0px";
        if(iframe) {
            if(iframe.contentWindow) {
                if(iframe.contentDocument) {
                    if(iframe.contentWindow.document) {
                        if(iframe.contentWindow.document.body) {
                            if(iframe.contentWindow.document.body.clientHeight) {
                                let iframeDoc = iframe.contentDocument || iframe.contentWindow.document
                                iframe.style.height = iframe.contentWindow.document.body.clientHeight + "px";
                                console.log(iframe)
                                resolve(iframeDoc)
                            }
                        }
                    }
                }
            }
        }
        //let statusLoad = iframe.contentWindow.document.readystate;
        //console.log(statusLoad, "statusLoad");
    })
}

//Função para atualizar documentação do iframe
export async function atualizaIframe(path) {
    return new Promise((resolve) => {
        let iframe = document.querySelector(".main-iframe");
        iframe.src = path; 
        if (iframe) {
            iframe.onload = function(){
                console.log(iframe.src, "Novo Dom")
                let statusResult = "iFrame foi atualizado";
                resolve(statusResult);
            }
        }
    })
}