//e --> enter 
//o --> ober

//i --> imes 
//a --> ai 
//u --> ufat  

function encriptar() {
    
    var textoem = document.getElementById("input texto").value;
    var txtCifrado= textoem.replace(/e/img,"enter");
    var txtCifrado= txtCifrado.replace(/o/img,"ober");
    var txtCifrado= txtCifrado.replace(/i/img,"imes");
    var txtCifrado= txtCifrado.replace(/a/img,"ai");
    var txtCifrado= txtCifrado.replace(/u/img,"ufat");
    
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("imagen").style.display = "none";
    document.getElementById("texto").style.display= "none";







}

function deseencriptar() {
    var textode= document.getElementById("input texto").value;
    var txtCifrado= textode.replace(/enter/img,"e");
    var txtCifrado= txtCifrado.replace(/ober/img,"o");
    var txtCifrado= txtCifrado.replace(/imes/img,"i");
    var txtCifrado= txtCifrado.replace(/ai/img,"a");
    var txtCifrado= txtCifrado.replace(/ufat/img,"u");

document.getElementById("texto2").innerHTML= txtCifrado;
document.getElementById("imagen").style.display= "none";
document.getElementById("texto").style.display= "none";
document.getElementById("copiar").style.display= "show";
document.getElementById("copiar").style.display= "inberit";
}

function copiar() {
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand("cut");
    alert("¡se copio!");
}
