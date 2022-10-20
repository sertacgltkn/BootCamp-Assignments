 //-----------------------------------------------------COOKIES------------------------------------------------------------------------//



/*
 document.cookie = "username=Sertac; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/";    // cookie oluşturuldu. 
                                                                                        // username ile bilgi oluşturuldu.
let x = document.cookie                                                                 // expires ile SKT eklendi.
                                                                                        // path'le hangi bölümünde kullanılacağı belirlendi.
console.log(x)                                                                          // yeni bir tanımlama yaparak yeni cookie yazılabilir.
                                                                                        // silmek için geçmiş bir tarih verilebilir.
                                                                                        // x değişkenine atama yaptık.    
*/                                                                                      // konsola yazdırdık.
                                                                                   


 //-----------------------------------------------------COOKIE CREATE-----------------------------------------------------------------//


                                                                                     
/*
  function setCookie(cname,cvalue,exdays) {                                           // setCookie ile cookie oluşturuldu.
  const d = new Date();                                                               // cname ile isim bilgisi    
  d.setTime(d.getTime() + (exdays*24*60*60*1000));                                    // cvalue ile değerini
  let expires = "expires=" + d.toUTCString();                                         // exdays ile son kullanım tarihi
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {                                                           // cookie'yi alabilmek için getCookie
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {                                                            // cookie'yi kontrol için checkCookie
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
     user = prompt("Please enter your name:","");
     if (user != "" && user != null) {
       setCookie("username", user, 30);
     }
  }
}                                                                           
checkCookie();

*/


 //-----------------------------------------------------SESSION STORAGE-----------------------------------------------------------------//


 //sessionStorage.setItem("key", "value");                          // tarayıcıda key ve value değerlerini saklamamıza izin verir.
 sessionStorage.setItem("lastname", "Smith");                       // tarayıcı kapatıldığında veriler silinir.
 sessionStorage.getItem("lastname");                                // setItem ile kayıt                             
                                                                    // getItem ile okuma  
                                                                    // removeItem ile ortadan kaldırma
                                                                    // clear ile tamamını silme
                                                                    
let x = window.sessionStorage.clickcount                            // x değişkenine clickcount fonksiyonu ile
                                                                    // send butonuna kaç kez tıklandığını görebiliyoruz.                       
console.log(x);

if (sessionStorage.clickcount) {
  sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
} else {
  sessionStorage.clickcount = 1;
}


 //----------------------------------------------------------------------------------------------------------------------------------//