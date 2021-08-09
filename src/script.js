// When the user clicks on the button, open the popup
export default function openModal() {
  clearForm(); 
  alert("Thanks for sending me a message!\r\nI'll get back to you ASAP");
}


/* Helper functions */
function clearForm() {
  var username = document.getElementById("name");
  var useremail = document.getElementById("email");
  var message = document.getElementById("message");
  
  username.value = "";
  useremail.value = "";
  message.value = "";
}