function encrypt(){
    var encrypted = CryptoJS.AES.encrypt(
        document.getElementById("mensajeDesencriptado").value,
        document.getElementById("clave").value
    );
    document.getElementById("mensajeEncriptado").value = encrypted;
}

function decrypt(){
    var decrypted = CryptoJS.AES.decrypt(
        document.getElementById("mensajeEncriptado").innerHTML,
        document.getElementById("clave").value
     ).toString(CryptoJS.enc.Utf8);
     document.getElementById("mensajeDesencriptado").value = decrypted;
}

