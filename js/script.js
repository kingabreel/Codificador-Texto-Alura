let titulo = document.getElementById("titulo_saida-sem-texto");
let paragrafo = document.getElementById("paragrafo_saida-sem-texto");
let inputElement = document.getElementById("entrada");
let outputElement = document.getElementById("saida");
let divpai = document.getElementById("div-saida");
let img = document.getElementById("saida-imagem");

(() => criptografar() )();

function criptografar() {
    let textoOriginal = inputElement.value;
    let copyBtn = document.querySelector(".copy-btn");

    if (textoOriginal === "") {
        divpai.appendChild(img);
        divpai.appendChild(titulo);
        divpai.appendChild(paragrafo);
        
        titulo.innerHTML = "Nenhuma mensagem encontrada";
        paragrafo.innerHTML = "Digite um texto que você deseja criptografar.";
        outputElement.innerHTML = "";

        copyBtn.style.display = "none";

    } else { 
        if (divpai.contains(titulo)) {
            divpai.removeChild(titulo);
            divpai.removeChild(paragrafo);
            divpai.removeChild(img);
        }
        let textoCriptografado = criptografarTexto(textoOriginal);

        outputElement.innerHTML = textoCriptografado;

        copyBtn.style.display = "block";

    }
}

function descriptografar() {
    let textoCriptografado = inputElement.value;
    let copyBtn = document.querySelector(".copy-btn");

    if (textoCriptografado === "") {
        divpai.appendChild(img);
        divpai.appendChild(titulo);
        divpai.appendChild(paragrafo);

        titulo.innerHTML = "Nenhuma mensagem encontrada";
        paragrafo.innerHTML = "Digite um texto que você deseja descriptografar.";
        outputElement.innerHTML = "";
        copyBtn.style.display = "none";
    } else {
        let textoDecCriptografado = descriptografarTexto(textoCriptografado);
        
        outputElement.innerHTML = textoDecCriptografado;

        if (divpai.contains(titulo)) {
            divpai.removeChild(titulo);
            divpai.removeChild(paragrafo);
            divpai.removeChild(img);
        }
        copyBtn.style.display = "block";
    }
}

function criptografarTexto(textoOriginal) {
    let textoCriptografado = textoOriginal
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    return textoCriptografado;
}

function descriptografarTexto(textoCriptografado) {
    let textoOriginal = textoCriptografado
        .replace(/ufat/g, "u")
        .replace(/ober/g, "o")
        .replace(/ai/g, "a")
        .replace(/imes/g, "i")
        .replace(/enter/g, "e");

    return textoOriginal;
}

function copiarTexto() {
    var elemento = document.getElementById("saida");

    var areaDeSelecao = document.createElement("textarea");

    areaDeSelecao.value = elemento.textContent;

    document.body.appendChild(areaDeSelecao);

    areaDeSelecao.select();

    document.execCommand('copy');

    document.body.removeChild(areaDeSelecao);
}