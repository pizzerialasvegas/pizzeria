function isFacebookApp() {
  var ua = navigator.userAgent || navigator.vendor || window.opera;
  return ua.indexOf("FBAN") > -1 || ua.indexOf("FBAV") > -1;
}
if (isFacebookApp()) {
  // your action here if user using Facebook in-app browser
  if (
    confirm(
      "Para tener una mejor experiencia utiliza el navegador de Google Chrome. ¿Quieres abrir la página con Google Chrome?"
    )
  ) {
    console.log("Click en True");
    window.open("https://pizzerialasvegas.com", "_blank");
  }
}
