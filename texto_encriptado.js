function encriptar(){
    var texto=document.getElementById("inputTexto");
    //value.tolowerCase();
    
    //i para que afecte tanto mayusculas como minusculas
    //g es para toda la linea
    //m es para que afecte multiple lineas o parrafos

    var txtCifrado = texto.replace(/e/igm,"enter");
    var txtCifrado = txtCifrado.replace(/o/igm,"ober");
    var txtCifrado = txtCifrado.replace(/i/igm,"imes");
    var txtCifrado = txtCifrado.replace(/a/igm,"ai");
    var txtCifrado = txtCifrado.replace(/u/igm,"ufat");

    document.getElementById("imgder").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("btn-copiartexto").style.display = "show";
    document.getElementById("btn-copiartexto").style.display = "inherit";
  
}

function desencriptar(){
    var texto=document.getElementById("InputTexto").value.tolowerCase();
    //i para que afecte tanto mayusculas como minusculas
    //g es para toda la linea
    //m es para que afecte multiple lineas o parrafos

    var txtCifrado=texto.replace(/enter/igm,"e");
    var txtCifrado=txtCifrado.toString().replace(/ober/igm,"o");
    var txtCifrado=txtCifrado.toString().replace(/imes/igm,"i");
    var txtCifrado=txtCifrado.toString().replace(/ai/igm,"a");
    var txtCifrado=txtCifrado.toString().replace(/ufat/igm,"u");

    document.getElementById("imgder").style.display="none";
    document.getElementById("texto").style.display="none";
    document.getElementById("texto2").innerHTML=txtCifrado;
    document.getElementById("btn-deencriptar").style.display="show";
    document.getElementById("btn-deencriptar").style.display="inherit";
    
}

function copy(){

    var contenido=document.getElementById('texto2');
    var btn=document.getElementById('btn-copiartexto');
   
    btn.addEventListener('click', e =>{

        contenido.select();
        document.execCommand('copy');
        alert('Se copio');
    })
}