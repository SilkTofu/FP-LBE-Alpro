function openCity(evt, cityName) {
  // Declare all variables
  let i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }

  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += "active";

}

function OpenMail(){
  window.open("mailto:rezamaranelo@gmail.com");
}
function CopyPhoneNumber(){
  navigator.clipboard.writeText("+6285780510899");
  alert("Successfully copied my phone number!");
}
