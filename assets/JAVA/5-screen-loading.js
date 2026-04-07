//Função para abrir tela de carregamento
export async function showLoadingScreen(operationID) {
    return new Promise((resolve) => {

        //Exibindo tela de Carregamento...
        const loadingScreen = document.querySelector('.loading-screen');
        loadingScreen.style.cursor = 'wait';
        loadingScreen.style.display = 'flex';

        const handleTransitionEnd = (event) => {
            if (event.propertyName === 'opacity' || event.propertyName === 'left') {
                loadingScreen.removeEventListener('transitioned', handleTransitionEnd);
                let statusLoad = "Loading Screen Iniciado e Visível";
                resolve(statusLoad);
            }
        }

        loadingScreen.addEventListener('transitionend', handleTransitionEnd);

        // Inicia a transição para tornar a tela visível
        setTimeout(() => {
            loadingScreen.style.opacity = '1';
            loadingScreen.style.left = '0';
        }, 1);
    });
};

//Função para fechar tela de carregamento
export async function offLoadingScreen(operationID) {
    return new Promise((resolve) => {

        const loadingScreen = document.querySelector('.loading-screen');
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            loadingScreen.style.left = '100vw';
            window.scrollTo(0, 0);
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                let statusOff = "Loading Screen Encerrada";
                resolve(statusOff);
            }, 800);
        }, 800);
    })
}