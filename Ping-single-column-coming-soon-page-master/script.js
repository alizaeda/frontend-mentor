const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit', e => {

  e.preventDefault();

  let emailValue = email.value.trim();
  let pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (emailValue === '' || !emailValue.match(pattern)) {

    error(email, 'Please Provide a vaild mail');

  } else {

    success(email);

  };

  function error(req, msg) {

    const formControl = req.parentElement;
    const errorMsg = formControl.querySelector('span');

    req.classList.add('error');
    errorMsg.classList.add('error-msg')
    errorMsg.innerText = msg;


  }

  function success(req) {

    req.parentElement.querySelector('span').innerText = '';
    req.classList.remove('error');
    req.classList.add('success');
    req.value = '';

  }

  setInterval(success, 3000);



});