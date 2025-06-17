function contact() {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  let contact = `${name}, ${phone}, ${email} , ${message}`;

  // alert(contact);

  let url = `https://wa.me/971501453032?text=${contact}`;
  window.open(url);
}
