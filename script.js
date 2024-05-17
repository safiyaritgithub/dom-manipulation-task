function addInput() {
  const form = document.getElementById('contact-form');

  
  const inputName = document.createElement('input');
  inputName.type = 'text';
  inputName.name = 'name';
  inputName.placeholder = 'Enter Name';

  const inputEmail = document.createElement('input');
  inputEmail.type = 'email';
  inputEmail.name = 'email';
  inputEmail.placeholder = 'Enter Email';

  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.onclick = function() {
    form.removeChild(inputName);
    form.removeChild(inputEmail);
    form.removeChild(removeButton);
  };


  form.appendChild(inputName);
  form.appendChild(inputEmail);
  form.appendChild(removeButton);
}
