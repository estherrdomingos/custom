function escrever() {
    let escrita = document.getElementById("entrada").value;
    document.getElementById("copiado").innerHTML = escrita;
}
function mudarFonte() {
    let selectElement = document.querySelector(".fonts");
    let selectedFont = selectElement.options[selectElement.selectedIndex].value;
    let outputElement = document.getElementById("copiado");
    outputElement.style.fontFamily = selectedFont;
    escrever();
}
function mudarPosicao() {
    let selectElement = document.querySelector(".positions");
    let selectedPositions = selectElement.options[selectElement.selectedIndex].value;
    let outputElement = document.getElementById("copiado");
    outputElement.style.top = selectedPositions;
    // if(selectedPositions === "cima"){
    //     outputElement.style.position = "absolute";
    //     outputElement.style.top='10px';
    // }
    if(selectedPositions === "cima"){
        outputElement.style.position = "block"
        outputElement.style.top = "110px"
        outputElement.style.left= '16rem'
    }
    else if(selectedPositions === "center"){
        outputElement.style.position = "block"
        outputElement.style.top = "170px"
    }
    else if(selectedPositions === "bottom"){
        outputElement.style.position = "block"
        outputElement.style.top= '230px';
        outputElement.style.left= '16rem';
    }
   
    
}
mudarPosicao();


function trocaCaramelo() {
    document.getElementById('img').src = 'imagem/necessaire-amarela.webp'
}
function trocaVermelho() {
    document.getElementById('img').src = 'imagem/necessaire-lateral.webp'
}
function trocaVermelhoCostas() {
    document.getElementById('img').src = 'imagem/necessaire-costas.webp'
}
function trocaFonteGochi() {
    document.getElementById('fontGochiHand')
}