function isFacebookApp() {
  var ua = navigator.userAgent || navigator.vendor || window.opera;
  return ua.indexOf("FBAN") > -1 || ua.indexOf("FBAV") > -1;
}
if (isFacebookApp()) {
  // your action here if user using Facebook in-app browser
  alert(
    "¿Está utilizando el navegador de Facebook? Para tener una mejor experiencia utiliza el navegador de Google Chrome. GRACIAS!"
  );
}
