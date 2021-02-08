const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const button = document.getElementById('button');

function showInConsole (){
  console.log(name.value);
  console.log(email.value);
  console.log(phone.value);
}
button.addEventListener('click',showInConsole)
