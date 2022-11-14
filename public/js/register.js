const registerFormHandler = async (event) => {
  event.preventDefault();
  console.log('testing');

  //   const username = document.querySelector('#name-register').value.trim();
  const username = document.querySelector('#name-register').value.trim();
  console.log(username);
  const email = document.querySelector('#email-register').value.trim();
  console.log(email);
  const password = document.querySelector('#password-register').value.trim();
  console.log(password);

  if (username && email && password) {
    const response = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/login');
    } else {
      alert(response.statusText);
    }
  }
};

// document
//   .querySelector('.signup-form')
//   .addEventListener('submit', registerFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', registerFormHandler);
