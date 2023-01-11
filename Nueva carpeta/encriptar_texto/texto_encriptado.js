const ingresoTexto = document.getElementById("InputTexto");
const insertarTexto = document.getElementById("texto2");
const btnCopiar = document.getElementById("btn-copiartexto");
const btnEncriptar = document.getElementById("btn-encriptar");
const btnDesencriptar = document.getElementById("btn-deencriptar");
const muneco = document.getElementById("imgder");


const llaveEncriptacion = text => {
    return text
    .replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
}

const llaveDesencriptacion = text => {
    return text
    .replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
}

btnEncriptar.addEventListener("click", ()=>{


    document.getElementById('imgder').style.display = 'none';
    document.getElementById('texto1').style.display = 'none';
    

    insertarTexto.value = llaveEncriptacion(ingresoTexto.value);

    ingresoTexto.innerHTML = insertarTexto;
    
    

    if(insertarTexto.value == ""){
        insertarTexto.value = "";
        insertarTexto.value = "";
    }
});

btnDesencriptar.addEventListener("click", ()=>{
  
    document.getElementById('imgder').style.display = 'none';
    document.getElementById('texto1').style.display = 'none';
  
  
  insertarTexto.value = llaveDesencriptacion(ingresoTexto.value);

    ingresoTexto.innerHTML = insertarTexto;
   
            
    if(insertarTexto.value == ""){
        insertarTexto.value = "";
        insertarTexto.value = "";
    }
});


var btn_copiar = document.querySelector('.btn-copiar');

btn_copiar.addEventListener('click', function(event) {
  var copiado = document.querySelector('#texto2');
  copiado.select();

  try {
    var retorno = document.execCommand('copy');
    var mensagem = retorno ? 'copiado!' : 'ops!';
    alert(mensagem);
  } catch (err) {
    alert('Opa, Navegador não tem suporte Crtl+C.');
  }
});
