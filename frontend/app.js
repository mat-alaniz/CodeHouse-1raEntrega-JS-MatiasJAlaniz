let entrada = prompt("where are you from?");

while(entrada != "ESC" ){
   switch (entrada) {
       case "Argentina":
            alert("Hola Argentino");
            break;
        case "France":
            alert("bonjour français");
            break;
            //idioma chino tradicional
        case "中國":
            alert("歡迎中國人");
            break;
            //idioma tailandes
        case "ประเทศไทย":
            alert("สวัสดี แบบไทย");
            break;
        case "Mexico":
            alert("Viva mexico cabrones!!");
            break;
       default:
           alert("where are you visiting us from?")
           break;
   }
   entrada = prompt("where are you from?");
}
