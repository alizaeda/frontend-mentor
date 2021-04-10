const form = document.getElementById('form');
const fName = document.getElementById('fName');
const lName = document.getElementById('lName');
const email = document.getElementById('email');
const passowrd = document.getElementById('passowrd');
const allInputs = document.querySelectorAll('input:not([type="submit"])');


form.addEventListener('submit', e => {

  e.preventDefault();

  let fNameValue = fName.value.trim();
  let lNameValue = lName.value.trim();
  let emailValue = email.value.trim();
  let passwordValue = password.value.trim();
  let pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (fNameValue === '') {
    error(fName, 'First Name cannot be empty');
  } else {
    success(fName);
  }
  if (lNameValue === '') {
    error(lName, 'Last Name cannot be empty');
  } else {
    success(lName);
  }
  if (emailValue === '') {
    error(email, 'Email cannot be empty');
  } else if (!emailValue.match(pattern)) {
    error(email, 'Look\'s like not an email')
  } else {
    success(email);
  }
  if (passwordValue === '') {
    error(password, 'Password cannot be empty');
  } else {
    success(password);
  }

  function error(req, msg) {

    const parent = req.parentElement;
    const errorMsg = parent.querySelector('span');

    req.classList.add('error');
    errorMsg.textContent = msg;
    errorMsg.classList.add('err-msg');

  }

  function success(req) {

    req.classList.add('success');

  }

})

// on input 
allInputs.forEach(input => {

  input.oninput = function () {

    if (input.value.length > 0) {

      input.classList.remove('error');
      input.classList.add('success');

    } else {

      input.classList.remove('success');
      input.classList.add('error');

    }

  }

})