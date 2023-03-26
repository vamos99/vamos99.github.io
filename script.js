
/*
    MAİL GÖNDERME

https://formsubmit.co/

*/
var buton = document.getElementById("stnAl");
buton.onclick = function () {
    var adSy = document.getElementById("adSyd");
    var adsL = document.getElementById("adsL");

    var kard = document.getElementById("kard");
    var kardnL = document.getElementById("kardnL");

    var tarih = document.getElementById("tarih");
    var tarihL = document.getElementById("tarihL");

    var cvv = document.getElementById("cvv");
    var cvvL = document.getElementById("cvvL");
    var adad = document.getElementById("adad");


    if (adSy.value == "" && kard.value == "" && tarih.value == "" && cvv.value == "") {
        alert("Tüm alanları Doldurun")
    } else {

        if (adSy.value == "") {
            adSy.focus();
            adsL.innerText = "boş bırakılamaz";
            adsL.style.textShadow = "2px 2px 8px  red";


        } else if (kard.value == "" || kard.value.length != 16) {
            kard.focus();
            kardnL.innerText = "Boş veya hatalı ";
            kardnL.style.textShadow = "2px 2px 8px  red";
        }
        else if (tarih.value == "") {
            tarih.focus();
            tarihL.innerText = "boş bırakılamaz";
            tarihL.style.textShadow = "2px 2px 8px  red";
        } else if (cvv.value == "" || cvv.value.length != 3) {
            cvv.focus();
            cvvL.innerText = "boş veya hatalı"
            cvvL.style.textShadow = "2px 2px 8px  red";
        }

        else {
            alert("başarılı");
            if (adSy.value != "" && kard.value != "" && tarih.value != "" && cvv.value != "") {
                adSy.value = "";
                kard.value = "";
                tarih.value = "";
                cvv.value = "";

            }

        }

    }

}



function sendMail2() {
    var link = "mailto:me@example.com"
             + "?cc=myCCaddress@example.com"
             + "&subject=" + encodeURIComponent("This is my subject")
             + "&body=" + encodeURIComponent(document.getElementById('myText').value)
    ;
    
    window.location.href = link;
}
function sendEmail() {
    Email.send({
      Host : "smtp.mailtrap.io",
      Username : "<Mailtrap username>",
      Password : "<Mailtrap password>",
      To : 'recipient@example.com',
      From : "sender@example.com",
      Subject : "Test email",
      Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
    }).then(
      message => alert(message)
    );
  }





