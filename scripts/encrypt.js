function encrypt(){
    var encrypted = CryptoJS.AES.encrypt(
        document.getElementById("mensajeDesencriptado").value,
        document.getElementById("clave").value
    );
    document.getElementById("mensajeEncriptado").value = encrypted;
    console.log("Patrañas")
}

function decrypt(){
    var decrypted = CryptoJS.AES.decrypt(
        document.getElementById("mensajeEncriptado").value,
        document.getElementById("clave").value
     ).toString(CryptoJS.enc.Utf8);
     document.getElementById("mensajeDesencriptado").value = decrypted;
}

var encryptButton = document.getElementById("encryptButton")
var decryptButton = document.getElementById("decryptButton")

encryptButton.addEventListener("click",encrypt)
decryptButton.addEventListener("click",decrypt)
