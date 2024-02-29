let titulo = document.getElementById("titulo_saida-sem-texto");
let paragrafo = document.getElementById("paragrafo_saida-sem-texto");
let inputElement = document.getElementById("entrada");
let outputElement = document.getElementById("saida");
let divpai = document.getElementById("div-saida");
let img = document.getElementById("saida-imagem");

(() => criptografar() )();

function criptografar() {
    let textoOriginal = inputElement.value;

    if (textoOriginal === "") {
        divpai.appendChild(img);
        divpai.appendChild(titulo);
        divpai.appendChild(paragrafo);
        
        titulo.innerHTML = "Nenhuma mensagem encontrada";
        paragrafo.innerHTML = "Digite um texto que você deseja criptografar.";
        outputElement.innerHTML = "";
    } else {
        let textoCriptografado = criptografarTexto(textoOriginal);
        divpai.removeChild(titulo);
        divpai.removeChild(paragrafo);
        divpai.removeChild(img);
        outputElement.innerHTML = textoCriptografado;
    }
}

function descriptografar() {
    let textoCriptografado = inputElement.value;

    if (textoCriptografado === "") {
        titulo.innerHTML = "Nenhuma mensagem encontrada";
        paragrafo.innerHTML = "Digite um texto que você deseja descriptografar.";
        outputElement.innerHTML = "";
    } else {
        let textoOriginal = descriptografarTexto(textoCriptografado);
        
        titulo.innerHTML = "Texto Descriptografado";
        paragrafo.innerHTML = "Texto criptografado: " + textoCriptografado;
        outputElement.innerHTML = textoOriginal;
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