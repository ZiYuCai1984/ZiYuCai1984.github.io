function isEmptyOrSpaces(str){return str===null||str.match(/^ *$/)!==null;}
function decryptDocument(encrypt,aesKey){return CryptoJS.AES.decrypt(encrypt,CryptoJS.enc.Utf8.parse(aesKey),{mode:CryptoJS.mode.ECB,padding:CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8);}
function getQueryParam(name){const urlParams=new URLSearchParams(window.location.search);return urlParams.get(name);}
function initDecrypt(id,elementId){let key=getQueryParam('password');if(isEmptyOrSpaces(key)){key=localStorage.getItem(id);}
if(isEmptyOrSpaces(key)){key=prompt('password','');if(key!==null){localStorage.setItem(id,key);}}else{localStorage.setItem(id,key);}
const documentRaw=document.getElementById(elementId);try{const decrypted=decryptDocument(documentRaw.innerHTML,key);if(isEmptyOrSpaces(decrypted)){throw new Error('Decryption failed');}
documentRaw.innerHTML=decrypted;documentRaw.style.visibility='visible';}catch(e){documentRaw.innerHTML='<p style="color:red;">Invalid password.</p>';documentRaw.style.visibility='visible';}}