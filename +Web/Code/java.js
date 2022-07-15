let contact = document.getElementById('contact'); 

function texts() {

   let name = document.getElementById('name').value; 
   let email = document.getElementById('a').value; 
   let tel = document.getElementById('phone').value; 
    if (name != "" && email != "" && tel != "") {
      console.log(name);
      console.log(email);
      console.log(tel);


      alert(name + " Hoşgeldiniz .En kısa sürede sizinle tekrar iletişime geçeceğiz."); 
    }
    else {
      alert("!!Başvurunun tamamlanması için her bir boşluk doldurulmalıdır!!");
    }

}