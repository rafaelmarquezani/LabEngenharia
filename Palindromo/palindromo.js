let palavra = document.getElementById("button");
palavra.addEventListener("click", Palindromo, false);

function Palindromo() {
    let texto = document.getElementById('txtusuario').value;
    let textoSemEspaco = texto.replace(" ", "").toLowerCase();
    let textoInverto = invert(textoSemEspaco);
    if (textoSemEspaco == textoInverto)
        alert('Palíndromo!') 
    else
        alert('Não é um Palíndromo.')
    
}

function invert(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) { 
        newString += str[i];
    }
    return newString;
    
}