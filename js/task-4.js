const form = document.querySelector('.login-form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const email = e.currentTarget.elements.email.value.trim();
  const password = e.currentTarget.elements.password.value.trim();

  if (!email || !password) return alert('All form fields must be filled in');

  const formValues = {
    email,
    password,
  };

  console.log(formValues);

  e.currentTarget.reset();
});
