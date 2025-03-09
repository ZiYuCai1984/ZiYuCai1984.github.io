function isEmptyOrSpaces(str){
    return str === null || str.match(/^ *$/) !== null;
}

function decryptDocument(encrypt, aseKey) {
    return CryptoJS.AES.decrypt(encrypt,
        CryptoJS.enc.Utf8.parse(aseKey),
        {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        }).toString(CryptoJS.enc.Utf8);
}


function initDecrypt(id,elementId) {
    var key = localStorage.getItem(id);
    if (isEmptyOrSpaces(key)) {
        key = prompt('Password', '');
        if (key !== null) {
            localStorage.setItem(id, key);
        }
    }

    var documentRaw = document.getElementById(elementId);

    documentRaw.innerHTML = decryptDocument(documentRaw.innerHTML, key);
    documentRaw.style.visibility = 'visible';
}

